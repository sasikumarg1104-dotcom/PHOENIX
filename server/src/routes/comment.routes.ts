import { Router } from "express";

import { authenticate } from "../middleware/auth.middleware";

import {
  createCommentController,
  getCommentsController,
  updateCommentController,
  deleteCommentController,
} from "../controllers/comment.controller";

const router = Router();

// Create Comment
router.post(
  "/posts/:postId/comments",
  authenticate,
  createCommentController
);

// Get Comments
router.get(
  "/posts/:postId/comments",
  getCommentsController
);

// Update Comment
router.put(
  "/comments/:commentId",
  authenticate,
  updateCommentController
);

// Delete Comment
router.delete(
  "/comments/:commentId",
  authenticate,
  deleteCommentController
);

export default router;