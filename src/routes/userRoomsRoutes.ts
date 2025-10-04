import { Router } from "express";
import { getUsersRooms } from "../middlewares/rooms/get-users-rooms";

const userRoomRoutes = Router();

userRoomRoutes.get("/rooms/:userId", getUsersRooms);

export default userRoomRoutes;
