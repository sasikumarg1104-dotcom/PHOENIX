import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
  res.json({
    success: true,
    message: "🔥 Phoenix Backend is Running",
  });
});

// API Routes
app.use("/api/v1", routes);
app.get("/test", (_req, res) => {
  res.send("Test route working");
});

export default app;