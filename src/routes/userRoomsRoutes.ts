import { Router } from "express";
import { getUsersRooms } from "../middlewares/rooms/get-users-rooms";
import { createNewRoom } from "../middlewares/rooms/create-user-room";
import { joinRoom } from "../middlewares/rooms/join-room";

const userRoomRoutes = Router();

userRoomRoutes.post("/rooms/:userId", createNewRoom);
userRoomRoutes.post("/rooms/:userId/:roomNumber", joinRoom);
userRoomRoutes.get("/rooms/:userId", getUsersRooms);

export default userRoomRoutes;
