import { Router } from "express";
import { getUsersRooms } from "../middlewares/rooms/get-users-rooms";
import { createNewRoom } from "../middlewares/rooms/create-user-room";
import { joinRoom } from "../middlewares/rooms/join-room";
import { deleteRoom } from "../middlewares/rooms/delete-room";

const userRoomRoutes = Router();

userRoomRoutes.delete("/rooms/:roomId", deleteRoom);
userRoomRoutes.post("/rooms/:userId", createNewRoom);
userRoomRoutes.post("/rooms/:userId/:roomNumber", joinRoom);
userRoomRoutes.get("/rooms/:userId", getUsersRooms);

export default userRoomRoutes;
