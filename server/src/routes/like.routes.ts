import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";

import {
  likePostController,
  unlikePostController,
} from "../controllers/like.controller";

const router = Router();

// Like a post
router.post("/:id/like", authenticate, likePostController);

// Unlike a post
router.delete("/:id/like", authenticate, unlikePostController);

export default router;