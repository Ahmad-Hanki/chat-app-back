import { Router } from "express";
import { createUser } from "../middlewares/users/create-user";
import { getUser } from "../middlewares/users/get-user";

const userRoutes = Router();

userRoutes.post("/user", createUser);
userRoutes.get("/user", getUser);

export default userRoutes;
