import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const createUser = async (request: Request, response: Response) => {
  try {
    const { name, email, clerkId } = request.body;

    if (!email || !clerkId) {
      return response
        .status(400)
        .json({ message: "Email and Clerk ID are required" });
    }

    const newUser = await prisma.user.create({
      data: {
        name: name || email.split("@")[0],
        email,
        clerkId,
      },
    });

    if (newUser) {
      return response.status(201).json(newUser);
    }
  } catch (error) {
    console.error("Error creating user:", error);
    response.status(500).json({ message: "Internal Server Error" });
  }
};
