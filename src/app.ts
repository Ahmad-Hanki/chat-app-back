import express from "express";

import { errorHandler } from "./middlewares/errorHandler";
import userRoutes from "./routes/userRoutes";
import messageRoutes from "./routes/messageRoutes";

const app = express();

app.use(express.json());

// Routes

app.use("/api", userRoutes);
app.use("/api", messageRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
