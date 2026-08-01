import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import helmet from "helmet";
import morgan from "morgan";

import routes from "./routes";
import authRoutes from "./routes/auth.routes";
import postRoutes from "./routes/post.routes";
import likeRoutes from "./routes/like.routes";
import commentRoutes from "./routes/comment.routes";
import followRoutes from "./routes/follow.routes";
import feedRoutes from "./routes/feed.routes";
import userRoutes from "./routes/user.routes";
import searchRoutes from "./routes/search.routes";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger";
import dashboardRoutes from "./routes/dashboard.routes";
import habitRoutes from "./routes/habit.routes";
import uploadRoutes from "./routes/upload.routes";

import { errorMiddleware } from "./middleware/error.middleware";

const app = express();

// Middlewares
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
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

//swagger
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/posts", likeRoutes);
app.use("/api", commentRoutes);
app.use("/api", followRoutes);
app.use("/api/v1", routes);
app.use("/api/upload", uploadRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/habits", habitRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/users", userRoutes);
app.use("/api", feedRoutes);
app.use(express.static(path.join(__dirname, "../public")));
app.get("/test", (_req, res) => {
  res.send("Test route working");
});

// Global Error Handler
app.use(errorMiddleware);

export default app;