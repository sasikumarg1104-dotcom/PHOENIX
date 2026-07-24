import { Response } from "express";

import { AuthRequest } from "../middleware/auth.middleware";
import { asyncHandler } from "../middleware/asyncHandler";
import { sendResponse } from "../utils/response";

import {
  createCommentService,
  getCommentsService,
  updateCommentService,
  deleteCommentService,
} from "../services/comment.service";

import {
  createCommentSchema,
  updateCommentSchema,
} from "../validators/comment.validator";

// Create Comment
export const createCommentController = asyncHandler(async (req: AuthRequest, res: Response) => {
  const { content } = createCommentSchema.parse(req.body);

  const result = await createCommentService(
    content,
    req.user!.id,
    req.params.postId
  );

  return sendResponse(res, 201, result.message, {
    commentCount: result.commentCount,
  });
});

// Get Comments
export const getCommentsController = asyncHandler(async (req, res) => {
  const comments = await getCommentsService(req.params.postId);

  return sendResponse(
    res,
    200,
    "Comments fetched successfully",
    comments
  );
});

// Update Comment
export const updateCommentController = asyncHandler(async (req: AuthRequest, res: Response) => {
  const { content } = updateCommentSchema.parse(req.body);

  const comment = await updateCommentService(
    req.params.commentId,
    content,
    req.user!.id
  );

  return sendResponse(
    res,
    200,
    "Comment updated successfully",
    comment
  );
});

// Delete Comment
export const deleteCommentController = asyncHandler(async (req: AuthRequest, res: Response) => {
  const result = await deleteCommentService(
    req.params.commentId,
    req.user!.id
  );

  return sendResponse(
    res,
    200,
    result.message,
    {
      commentCount: result.commentCount,
    }
  );
});