import { Router } from "express";
import { getUsersRooms } from "../middlewares/rooms/get-users-rooms";
import { createNewRoom } from "../middlewares/rooms/create-user-room";

const userRoomRoutes = Router();

userRoomRoutes.post("/rooms/:userId", createNewRoom);
userRoomRoutes.get("/rooms/:userId", getUsersRooms);

export default userRoomRoutes;
