import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const createNewRoom = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { roomName, roomNumber } = req.body;

    if (!roomName || !userId) {
      return res
        .status(400)
        .json({ error: "roomName and userId are required" });
    }

    // Get all rooms for the user with the last message of each room
    await prisma.room.create({
      data: {
        name: roomName,
        roomNumber,
        userRooms: {
          create: {
            userId,
          },
        },
      },
    });

    res.status(200).json({ message: "Room created" });
  } catch (error) {
    console.error("Error getting user rooms:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
