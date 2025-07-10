package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/v2/bson"
	"go.mongodb.org/mongo-driver/v2/mongo"
	"go.mongodb.org/mongo-driver/v2/mongo/options"
)

type Todo struct {
	ID        bson.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Completed bool          `json:"completed"`
	Body      string        `json:"body"`
}

var collection *mongo.Collection

func main() {
	if os.Getenv("ENV") != "production" {
		// Load the .env file if not in production
		err := godotenv.Load()
		if err != nil {
			log.Fatal("Error loading .env file:")
		}
	}
	// Connecto to Mongo DB Atlas
	MONGODB_URI := os.Getenv("MONGODB_URI")
	clientOptions := options.Client().ApplyURI(MONGODB_URI)
	client, err := mongo.Connect(clientOptions)

	if err != nil {
		log.Fatal(err)
	}

	defer client.Disconnect(context.Background())

	err = client.Ping(context.Background(), nil)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Connected to MONGODB ATLAS")

	collection = client.Database("golang_db").Collection("todos")

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins:     "http://localhost:5173",
		AllowMethods:     "GET,POST,DELETE,PATCH,OPTIONS",
		AllowHeaders:     "Origin, Content-Type, Accept",
		AllowCredentials: true,
	}))

	app.Get("/api/todos", getTodos)
	app.Post("/api/todos", createTodo)
	app.Patch("/api/todos/:id", updateTodo)
	app.Delete("/api/todos/:id", deleteTodo)

	port := os.Getenv("PORT")
	if port == "" {
		port = ":5000"
	}

	if os.Getenv("ENV") == "production" {
		app.Static("/", "./client/dist")
	}

	log.Fatal(app.Listen("0.0.0.0" + port))
}

func getTodos(c *fiber.Ctx) error {
	var todos []Todo

	cursor, err := collection.Find(context.Background(), bson.M{})

	if err != nil {
		return err
	}

	defer cursor.Close(context.Background())

	for cursor.Next(context.Background()) {
		var todo Todo
		if err := cursor.Decode(&todo); err != nil {
			return err
		}
		todos = append(todos, todo)
	}

	return c.JSON(todos)
}

func createTodo(c *fiber.Ctx) error {
	todo := new(Todo)

	if err := c.BodyParser(todo); err != nil {
		return err
	}

	if todo.Body == "" {
		return c.Status(400).JSON(fiber.Map{"error": "Todo body cannot be empty"})
	}

	insertResult, err := collection.InsertOne(context.Background(), todo)
	if err != nil {
		return err
	}

	todo.ID = insertResult.InsertedID.(bson.ObjectID)

	return c.Status(201).JSON(todo)
}

func updateTodo(c *fiber.Ctx) error {
	id := c.Params("id")

	objectID, err := bson.ObjectIDFromHex(id)
	if err != nil {
		log.Printf("[updateTodo] Invalid ID format: %s", id)
		return c.Status(400).JSON(fiber.Map{"error": "Invalid todo ID"})
	}

	filter := bson.M{"_id": objectID}
	update := bson.M{"$set": bson.M{"completed": true}}

	result, err := collection.UpdateOne(context.Background(), filter, update)
	if err != nil {
		log.Printf("[updateTodo] Database error : %v", err)
		return c.Status(500).JSON(fiber.Map{"error": "Database update failed"})
	}

	// Check if any document was actually updated
	if result.MatchedCount == 0 {
		log.Printf("[updateTodo] No document found with ID: %s", id)
		return c.Status(404).JSON(fiber.Map{"error": "Todo not found"})
	}

	return c.Status(200).JSON(fiber.Map{"success": true})
}

func deleteTodo(c *fiber.Ctx) error {
	id := c.Params("id")

	// Convert to bson.ObjectID instead of primitive.ObjectID
	objectID, err := bson.ObjectIDFromHex(id)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid todo ID"})
	}

	filter := bson.M{"_id": objectID}

	result, err := collection.DeleteOne(context.Background(), filter)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Delete operation failed"})
	}

	// Check if any document was actually deleted
	if result.DeletedCount == 0 {
		return c.Status(404).JSON(fiber.Map{"error": "Todo not found"})
	}

	return c.Status(200).JSON(fiber.Map{"success": true})
}
