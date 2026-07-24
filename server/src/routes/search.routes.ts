import { Router } from "express";

import { authenticate } from "../middleware/auth.middleware";

import {
  searchUsersController,
  searchPostsController,
} from "../controllers/search.controller";

const router = Router();

router.get("/users", authenticate, searchUsersController);
router.get("/posts", authenticate, searchPostsController);

export default router;