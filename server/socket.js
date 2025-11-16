import { Server } from "socket.io";
import http from "http"; // Although 'http' is not directly used here, we keep it for context if needed later.

// Initialize socket.io server
export let io;
export let userSocketMap = {}; 

export const initializeSocket = (server) => {
    // Ye function server.js se call hoga, jab Express server ready ho jayega.
    io = new Server(server, {
        cors: { origin: "*" }
    });


    // socket.io connection handler
    io.on("connection", (socket) => {
        const userId = socket.handshake.query.userId;
        console.log("user connected", userId);

        if (userId) userSocketMap[userId] = socket.id;

        // Emit online users to all connected client;
        io.emit("getOnlineUsers", Object.keys(userSocketMap));

        socket.on("disconnect", () => {
            console.log("User Disconnected", userId);
            delete userSocketMap[userId];
            io.emit("getOnlineUsers", Object.keys(userSocketMap));
        });
    });

    console.log("Socket.IO initialized.");
};