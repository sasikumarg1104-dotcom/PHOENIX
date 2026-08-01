import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import { getDashboardStatsController } from "../controllers/dashboard.controller";

const router = Router();

router.use(authenticate);

router.get("/", getDashboardStatsController);

export default router;