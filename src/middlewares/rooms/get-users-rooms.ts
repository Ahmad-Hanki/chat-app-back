import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getUsersRooms = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    // Get all rooms for the user with the last message of each room
    const userRooms = await prisma.userRooms.findMany({
      where: { userId },
      include: {
        room: {
          include: {
            message: {
              orderBy: { createdAt: "desc" },
              take: 1,
            },
          },
        },
      },
    });

    res.status(200).json({ data: userRooms });
  } catch (error) {
    console.error("Error getting user rooms:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
