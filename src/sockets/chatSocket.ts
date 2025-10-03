import { getIO } from "../config/socket";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function initChatSockets() {
  const io = getIO();

  io.on("connection", (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    // Join a room
    socket.on("join-room", (roomId: string) => {
      socket.join(roomId);
      console.log(`${socket.id} joined room ${roomId}`);
    });

    // Listen for new messages
    socket.on(
      "send-message",
      async (data: { roomId: string; userId: string; message: string }) => {
        try {
          // Save message to database
          const savedMessage = await prisma.message.create({
            data: {
              message: data.message,
              roomId: data.roomId,
              userId: data.userId,
            },
          });

          // Emit to everyone in the room
          io.to(data.roomId).emit("new-message", savedMessage);
        } catch (error) {
          console.error("Error saving message:", error);
        }
      }
    );

    socket.on("disconnect", () => {
      console.log(`Socket disconnected: ${socket.id}`);
    });
  });
}
