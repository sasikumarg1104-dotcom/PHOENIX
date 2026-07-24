import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import { getFeedController } from "../controllers/feed.controller";

const router = Router();

router.get(
  "/feed",
  authenticate,
  getFeedController
);

export default router;