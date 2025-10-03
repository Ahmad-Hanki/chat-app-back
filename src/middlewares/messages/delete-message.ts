import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const deleteMessage = async (request: Request, response: Response) => {
  try {
    const { messageId } = request.params;
    // Logic to delete the message with id `messageId`
    // Assuming you have a function `deleteMessageById` to handle the deletion
    const deletedMessage = await prisma.message.delete({
      where: { id: messageId },
    });
    if (deletedMessage) {
      response.status(200).json({ message: "Message deleted successfully" });
    }
  } catch (error) {
    console.error("Error deleting message:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
};
