import { Router } from "express";

import { authenticate } from "../middleware/auth.middleware";
import { getUserProfileController } from "../controllers/user.controller";

const router = Router();

router.get("/:id", authenticate, getUserProfileController);

export default router;