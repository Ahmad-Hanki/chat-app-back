import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
export const deleteRoom = async (req: Request, res: Response) => {
  try {
    const { roomId } = req.params;

    if (!roomId) {
      return res.status(400).json({ error: "roomId is required" });
    }

    // Get all rooms for the user with the last message of each room
    await prisma.room.delete({
      where: {
        id: roomId,
      },
    });

    res.status(200).json({ message: "Room deleted" });
  } catch (error) {
    console.error("Error deleting rooms:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
