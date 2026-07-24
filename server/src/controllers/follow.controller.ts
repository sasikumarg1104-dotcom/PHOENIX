import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { asyncHandler } from "../middleware/asyncHandler";
import { sendResponse } from "../utils/response";

import {
  followUserService,
  unfollowUserService,
  getFollowersService,
  getFollowingService,
} from "../services/follow.service";

// Follow User
export const followUserController = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const result = await followUserService(
      req.user!.id,
      req.params.id
    );

    return sendResponse(res, 200, result.message, {
      followerCount: result.followerCount,
      followingCount: result.followingCount,
    });
  }
);

// Unfollow User
export const unfollowUserController = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const result = await unfollowUserService(
      req.user!.id,
      req.params.id
    );

    return sendResponse(res, 200, result.message, {
      followerCount: result.followerCount,
      followingCount: result.followingCount,
    });
  }
);

// Get Followers
export const getFollowersController = asyncHandler(
  async (req, res) => {
    const followers = await getFollowersService(req.params.id);

    return sendResponse(
      res,
      200,
      "Followers fetched successfully",
      followers
    );
  }
);

// Get Following
export const getFollowingController = asyncHandler(
  async (req, res) => {
    const following = await getFollowingService(req.params.id);

    return sendResponse(
      res,
      200,
      "Following fetched successfully",
      following
    );
  }
);