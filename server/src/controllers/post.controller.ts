import { Request, Response } from "express";

import { AuthRequest } from "../middleware/auth.middleware";
import { asyncHandler } from "../middleware/asyncHandler";
import { sendResponse } from "../utils/response";

import { createPostSchema, updatePostSchema } from "../validators/post.validator";

import {
  createPostService,
  getAllPostsService,
  getPostByIdService,
  updatePostService,
  deletePostService,
} from "../services/post.service";

// ==========================
// Create Post
// ==========================
export const createPostController = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const data = createPostSchema.parse(req.body);

    const post = await createPostService(req.user!.id, data);

    return sendResponse(
      res,
      201,
      "Post created successfully",
      post
    );
  }
);

// ==========================
// Get All Posts
// ==========================
export const getAllPostsController = asyncHandler(
  async (_req: Request, res: Response) => {
    const posts = await getAllPostsService();

    return sendResponse(
      res,
      200,
      "Posts fetched successfully",
      posts
    );
  }
);

// ==========================
// Get Single Post
// ==========================
export const getPostByIdController = asyncHandler(
  async (req: Request, res: Response) => {
    const post = await getPostByIdService(req.params.id);

    return sendResponse(
      res,
      200,
      "Post fetched successfully",
      post
    );
  }
);

// ==========================
// Update Post
// ==========================
export const updatePostController = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const data = updatePostSchema.parse(req.body);

    const post = await updatePostService(
      req.params.id,
      req.user!.id,
      data
    );

    return sendResponse(
      res,
      200,
      "Post updated successfully",
      post
    );
  }
);

// ==========================
// Delete Post
// ==========================
export const deletePostController = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const result = await deletePostService(
      req.params.id,
      req.user!.id
    );

    return sendResponse(
      res,
      200,
      result.message
    );
  }
);