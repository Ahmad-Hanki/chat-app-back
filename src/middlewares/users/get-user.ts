import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getUser = async (request: Request, response: Response) => {
  try {
    const { clerkId } = request.params;
    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (user) {
      return response.status(200).json({ data: user });
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    response.status(500).json({ message: "Internal Server Error" });
  }
};
