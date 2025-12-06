# Real-Time Chat Application

A full-stack real-time chat application built with React, Node.js, Express, Socket.IO, and MongoDB.

## Features

- 🔐 User authentication with JWT
- 💬 Real-time messaging with Socket.IO
- 👥 User presence indicators
- 🔒 Secure password hashing with bcryptjs
- 🖼️ Image upload support with Cloudinary
- 🎨 Modern UI with Tailwind CSS
- 🔔 Toast notifications
- 📱 Responsive design

## Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Socket.IO Client** - Real-time communication
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework
- **React Hot Toast** - Toast notifications

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **Socket.IO** - WebSocket library
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Cloudinary** - Image storage and delivery
- **CORS** - Cross-origin resource sharing

## Prerequisites

Before running this application, make sure you have:

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Cloudinary account (for image uploads)

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install server dependencies

```bash
cd server
npm install
```

### 3. Install client dependencies

```bash
cd ../client
npm install
```

### 4. Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB
MONGODB_URI=your_mongodb_connection_string

# JWT
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Client URL (for CORS)
CLIENT_URL=http://localhost:5173
```

## Running the Application

### Development Mode

#### Start the backend server:

```bash
cd server
npm run server
```

The server will run on `http://localhost:5000` (or your specified PORT)

#### Start the frontend development server:

```bash
cd client
npm run dev
```

The client will run on `http://localhost:5173`

### Production Mode

#### Build the client:

```bash
cd client
npm run build
```

#### Start the production server:

```bash
cd server
npm start
```

## Project Structure

```
project-root/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context
│   │   ├── utils/         # Utility functions
│   │   └── App.jsx        # Main App component
│   ├── public/            # Static files
│   └── package.json
│
└── server/                # Backend Node.js application
    ├── models/            # Mongoose models
    ├── routes/            # Express routes
    ├── controllers/       # Route controllers
    ├── middleware/        # Custom middleware
    ├── config/            # Configuration files
    ├── utils/             # Utility functions
    ├── server.js          # Entry point
    └── package.json
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID

### Messages
- `GET /api/messages/:userId` - Get messages with specific user
- `POST /api/messages/:userId` - Send message to user

### Upload
- `POST /api/upload` - Upload image to Cloudinary

## Socket.IO Events

### Client → Server
- `join` - Join a chat room
- `sendMessage` - Send a message
- `typing` - User typing indicator
- `stopTyping` - User stopped typing

### Server → Client
- `receiveMessage` - Receive new message
- `userOnline` - User came online
- `userOffline` - User went offline
- `typing` - Another user is typing
- `stopTyping` - Another user stopped typing

## Scripts

### Client Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code with ESLint

### Server Scripts
- `npm run server` - Start development server with nodemon
- `npm start` - Start production server

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Support

For support, email your-email@example.com or open an issue in the repository.

## Acknowledgments

- Socket.IO for real-time communication
- Cloudinary for image management
- MongoDB for database
- Tailwind CSS for styling