import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";

import {
  createPostController,
  getAllPostsController,
  getPostByIdController,
  updatePostController,
  deletePostController,
} from "../controllers/post.controller";

const router = Router();

// Public Routes
router.get("/", getAllPostsController);
router.get("/:id", getPostByIdController);

// Protected Routes
router.post("/", authenticate, createPostController);
router.put("/:id", authenticate, updatePostController);
router.delete("/:id", authenticate, deletePostController);

export default router;