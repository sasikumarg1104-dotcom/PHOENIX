import { Response } from "express";

import { AuthRequest } from "../middleware/auth.middleware";
import { asyncHandler } from "../middleware/asyncHandler";
import { sendResponse } from "../utils/response";

import {
  likePostService,
  unlikePostService,
} from "../services/like.service";

// ==========================
// Like Post
// ==========================
export const likePostController = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const result = await likePostService(
      req.user!.id,
      req.params.id
    );

    return sendResponse(
      res,
      200,
      result.message,
      {
        likeCount: result.likeCount,
      }
    );
  }
);

// ==========================
// Unlike Post
// ==========================
export const unlikePostController = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const result = await unlikePostService(
      req.user!.id,
      req.params.id
    );

    return sendResponse(
      res,
      200,
      result.message,
      {
        likeCount: result.likeCount,
      }
    );
  }
);