import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import routes from "./routes";
import authRoutes from "./routes/auth.routes";
import postRoutes from "./routes/post.routes";

import { errorMiddleware } from "./middleware/error.middleware";

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get("/", (_req: Request, res: Response) => {
  res.json({
    success: true,
    message: "🔥 Phoenix Backend is Running",
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/v1", routes);

app.get("/test", (_req, res) => {
  res.send("Test route working");
});

// Global Error Handler
app.use(errorMiddleware);

export default app;