import { Response } from "express";

import { AuthRequest } from "../middleware/auth.middleware";
import { asyncHandler } from "../middleware/asyncHandler";
import { sendResponse } from "../utils/response";

import { getFeedService } from "../services/feed.service";

export const getFeedController = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const feed = await getFeedService(
      req.user!.id,
      page,
      limit
    );

    return sendResponse(
      res,
      200,
      "Feed fetched successfully",
      feed
    );
  }
);