# 🚀 React & Go FullStack Todo App
<div align="center">
  <img src="https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Go-1.24.4-00ADD8?style=for-the-badge&logo=go&logoColor=white" alt="Go" />
  <img src="https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Chakra_UI-3.22-319795?style=for-the-badge&logo=chakraui&logoColor=white" alt="Chakra UI" />
  <img src="https://img.shields.io/badge/MongoDB_Atlas-7.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB Atlas" />
  <img src="https://img.shields.io/badge/Fiber-2.52-00ACD7?style=for-the-badge&logo=go&logoColor=white" alt="Fiber" />
  <img src="https://img.shields.io/badge/TanStack_Query-5.82-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" alt="TanStack Query" />
  <img src="https://img.shields.io/badge/Vite-7.0.3-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</div>
<div align="center">
  <h3>✨ A modern, responsive todo application with real-time updates and beautiful UI ✨</h3>
  <p>Built with React + Go, featuring dark/light themes, CRUD operations, and seamless user experience</p>
</div>


## 🎯 Overview

A feature-rich Todo application that combines the power of React's dynamic UI with Go's robust backend performance. Experience seamless task management with real-time updates and a beautiful, responsive design.
### ✨ Key Features

- 🌙 Dark & Light Theme - Seamless theme switching with persistent preferences<br/>
- ✅ Full CRUD Operations - Create, read, update, and delete tasks effortlessly<br/>
- 🏷️ Status Badges - Visual indicators for task progress (IN PROGRESS, DONE)<br/>
- 📱 Responsive Design - Perfect experience across all devices<br/>
- ⚡ Real-time Updates - Instant data fetching, caching, and synchronization<br/>
- 🛡️ Error Handling - Robust error management and user feedback<br/>
- 🎨 Modern UI - Clean, intuitive interface built with Chakra UI v3<br/>
### 🎥 Demo

<div align="center">
  <video src="https://github.com/user-attachments/assets/3bb77011-b77f-4edc-8786-633b19beeefb" controls width="80%">
    Your browser does not support the video tag.
  </video>
</div>


## 🛠️ Tech Stack
<div align="center">
  
### Frontend
  
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Chakra_UI-319795?style=for-the-badge&logo=chakraui&logoColor=white" alt="Chakra UI" />
<img src="https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" alt="TanStack Query" />
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />

### Backend

<img src="https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white" alt="Go" />
<img src="https://img.shields.io/badge/Fiber-00ACD7?style=for-the-badge&logo=go&logoColor=white" alt="Fiber" />
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />

### Deployment

<img src="https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white" alt="Railway" />
</div>

### 🔧 Technical Implementation

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Frontend Framework** | React 19.1 with TypeScript | Component-based UI with type safety |
| **UI Library** | Chakra UI v3 | Modern, accessible component library |
| **State Management** | TanStack Query | Server state management and caching |
| **Build Tool** | Vite | Fast development and optimized builds |
| **Backend Framework** | Go Fiber | High-performance HTTP framework |
| **Database** | MongoDB Atlas | Cloud-native NoSQL database |
| **CORS & Middleware** | Fiber Middleware | Cross-origin requests and security |

## 🚀 Deployment

### 🌐 Live Demo
[🔗 View Live Application](https://react-go-todo-app-production.up.railway.app/)

### 📋 Environment Configuration
Create a .env file in the root directory:
```
MONGODB_URI=<your_mongodb_atlas_connection_string>
PORT=5000
ENV=development
```

⚠️ **Important**: When deploying to cloud platforms (Railway, Vercel, etc.), omit the PORT variable as it's automatically provided.

## 🛠️ Local Setup

### 📦 Prerequisites

- Go: Version 1.21 or higher
- Node.js: Version 18 or higher
- MongoDB: Atlas account or local instance

### 🔧 Backend Setup

Install Dependencies
```bash
$ go mod tidy
```
Run Development Server
```bash
# Standard run
$ go run main.go
# With live reloading (recommended)
$ go install github.com/cosmtrek/air@latest
$ air
```
### 🎨 Frontend Setup

Navigate to Client Directory
```bash
$ cd client/
```
Install Dependencies
```bash
$ npm install
```
Start Development Server
```bash
$ npm run dev
```

### 🌐 Access the Application

Frontend: http://localhost:5173
Backend API: http://localhost:5000/api

## 📚 Resources & Inspiration

- 🎥 [freeCodeCamp Tutorial](https://www.youtube.com/watch?v=lNd7XlXwlho&t=5400s&ab_channel=freeCodeCamp.org) - Initial project inspiration (This repo is an enhanced version with the latest Chakra version (v3), better error handling, enhanced UI, better CORS management).
- 📖 [Chakra UI Documentation](https://chakra-ui.com/) - UI component library
- 📖 [TanStack Query Documentation](https://tanstack.com/query/latest) - Data fetching library
- 📖 [Go Fiber Documentation](https://gofiber.io/) - Go web framework
  
<hr />

<div align="center">
  <p>Made with ❤️ by ILyass</p>
</div>
