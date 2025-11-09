# ChatApp – Real-Time MERN & Socket.io Based Chat Application

## Overview

ChatApp is a real-time messaging application built using the MERN stack (MongoDB, Express, React, Node.js) along with Socket.io for instant bi-directional communication. The project follows a clean, modular structure to ensure scalability, maintainability, and ease of development.

This project implements user authentication, real-time chat features, active user tracking, and modern UI built using React (Vite).

---

## Tech Stack

### **Frontend**

* React (Vite)
* React Hooks (useState, useEffect, useRef)
* Context API / Custom Hooks (optional)
* CSS / Tailwind / Custom UI (based on your implementation)

### **Backend**

* Node.js
* Express.js
* MongoDB + Mongoose
* Socket.io (real-time communication)

### **Communication**

* REST API for user and message management
* WebSockets for real-time messaging

---

## Features

### **Real-Time Messaging**

* Instant message transfer via Socket.io
* Room-based or user-to-user messaging
* "Typing" and "Online" indicators (optional)

### **User System**

* User registration & login
* JWT-based authentication
* User list and active status

### **Chat UI**

* Clean and modern layout
* Auto-scroll using useRef
* Chat bubbles with timestamps
* Image or file preview support (optional)

### **Backend Logic**

* RESTful API endpoints for user & message CRUD operations
* Protected routes with JWT
* Socket.io event handlers

### **Database**

* MongoDB collections:

  * Users
  * Messages
  * Conversations (optional based on architecture)
