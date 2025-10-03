import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const postMessage = async (request: Request, Response: Response) => {
  try {
    const { roomId, userId, message } = request.body;
    // Logic to post a new message to the room with id `roomId`
    const newMessage = await prisma.message.create({
      data: {
        roomId,
        userId,
        message,
      },
    });

    if (newMessage) {
      Response.status(201).json({ data: newMessage });
    }
  } catch (error) {
    console.error("Error posting message:", error);
    Response.status(500).json({ error: "Internal Server Error" });
  }
};
