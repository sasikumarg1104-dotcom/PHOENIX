import { Router } from "express";
import authRoutes from "./auth.routes";

console.log("✅ index.ts loaded");

const router = Router();

router.use("/auth", authRoutes);

export default router;