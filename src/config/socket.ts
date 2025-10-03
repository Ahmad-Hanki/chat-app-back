import { Server as HttpServer } from "http";
import { Server as SocketIOServer } from "socket.io";

let io: SocketIOServer;

export function initSocket(server: HttpServer) {
  io = new SocketIOServer(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  return io;
}

// Export io instance so other modules can use it
export function getIO() {
  if (!io) throw new Error("Socket.io not initialized!");
  return io;
}
