import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const joinRoom = async (req: Request, res: Response) => {
  try {
    const { userId, roomNumber } = req.params;

    if (!userId || !roomNumber) {
      return res
        .status(400)
        .json({ error: "roomNumber and userId are required" });
    }

    // 1️⃣ Check if room exists
    const room = await prisma.room.findUnique({
      where: { roomNumber: Number(roomNumber) },
    });

    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }

    // 2️⃣ Check if user is already in the room
    const existingRelation = await prisma.userRooms.findFirst({
      where: { userId, roomId: room.id },
    });

    if (existingRelation) {
      return res
        .status(200)
        .json({ message: "User already joined this room", room });
    }

    // 3️⃣ Create user-room relationship
    const userRoom = await prisma.userRooms.create({
      data: {
        userId,
        roomId: room.id,
      },
      include: {
        room: true,
      },
    });

    // 4️⃣ Return response
    return res.status(201).json({
      message: "User joined the room successfully",
      data: userRoom,
    });
  } catch (error) {
    console.error("Error joining room:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
