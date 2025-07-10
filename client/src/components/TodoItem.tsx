import { Badge, Box, Flex, Text, Spinner } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type Todo } from "./TodoList";
import { BASE_URL } from "@/App"; 
const TodoItem = ({ todo }: { todo: Todo }) => {
	console.log(todo);
	const queryClient = useQueryClient();
	const { mutate: updateTodo, isPending: isUpdating} = useMutation({
		mutationFn: async () => {
			if (todo.completed) return alert("Todo is already completed");
			const res = await fetch(`${BASE_URL}/api/todos/${todo._id}`, {
				method: "PATCH", 
			});
			const data = await res.json();
			if (!res.ok) {
				throw new Error(data.error || "Update failed");
			}
			return data;
			 
		},
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ["todos"] });
		},
		onError: (error) => {
			alert(`Update failed: ${error.message}`);
		},
	      });
	const badge = todo.completed ? (
					<Badge  size='lg' colorPalette='green'>
						DONE
					</Badge>
				) : (
					<Badge  size='lg' colorPalette='yellow'>
						IN PROGRESS
					</Badge>
				);
	const { mutate: deleteTodo, isPending: isDeleting } = useMutation({
		mutationFn: async () => {
			const res = await fetch(`${BASE_URL}/api/todos/${todo._id}`, {
				method: "DELETE",
			});
			const data = await res.json();
			if (!res.ok) {
				throw new Error(data.error || "Delete failed");
			}
			return data;
			
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["todos"] });
		},
		onError: (error) => {
			alert(`Delete failed: ${error.message}`);
		},
	});
	return (
		<Flex gap={2} alignItems={"center"}>
			<Flex
			  flex={1}
			  alignItems="center"
			  border="1px solid"
			  borderColor="border"
			  p={3}
			  borderRadius="lg"
			  justifyContent="space-between"
			>
				<Text
					color={todo.completed ? "green.300": "yellow.200"}
					textDecoration={todo.completed ? "line-through" : "none"}
					textStyle="lg"
					fontWeight="medium"
				>
					{todo.body}
				</Text>
				{badge}
				
			</Flex>
			<Flex gap={2} alignItems={"center"}>
			  <Box color={"green.500"} cursor={"pointer"} onClick={() => updateTodo()}>
			    {isUpdating ? <Spinner size={"sm"} /> : <FaCheckCircle size={30} />}
			  </Box>

			  <Box color={"red.500"} cursor={"pointer"} onClick={() => deleteTodo()}>
			    {isDeleting ? <Spinner size={"md"} /> : <MdDelete size={30} />}
			  </Box>
			</Flex>
		</Flex>
				
	);
};

export default TodoItem;
