import { Request, Response } from "express";

import { asyncHandler } from "../middleware/asyncHandler";
import { sendResponse } from "../utils/response";

import {
  searchUsersService,
  searchPostsService,
} from "../services/search.service";

export const searchUsersController = asyncHandler(
  async (req: Request, res: Response) => {
    const query = String(req.query.q || "").trim();

    const users = await searchUsersService(query);

    return sendResponse(
      res,
      200,
      "Users fetched successfully",
      users
    );
  }
);

export const searchPostsController = asyncHandler(
  async (req: Request, res: Response) => {
    const query = String(req.query.q || "").trim();

    const posts = await searchPostsService(query);

    return sendResponse(
      res,
      200,
      "Posts fetched successfully",
      posts
    );
  }
);