import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getRoomMessages = async (Request: Request, response: Response) => {
  try {
    const { roomId } = Request.params;
    // Logic to get messages for the room with id `roomId`
    const roomMessages = await prisma.message.findMany({
      where: { roomId },
      include: { user: true },
    });

    response.status(200).json({ data: roomMessages });
  } catch (error) {
    console.error("Error getting room messages:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
};
