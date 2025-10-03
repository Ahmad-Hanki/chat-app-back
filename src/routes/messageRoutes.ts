import { Router } from "express";
import { deleteMessage } from "../middlewares/messages/delete-message";
import { postMessage } from "../middlewares/messages/post-message";
import { getRoomMessages } from "../middlewares/messages/get-room-messages";

const messageRoutes = Router();

messageRoutes.post("/messages", postMessage);
messageRoutes.get("/messages/:roomId", getRoomMessages);
messageRoutes.delete("/messages/:messageId", deleteMessage);

export default messageRoutes;
