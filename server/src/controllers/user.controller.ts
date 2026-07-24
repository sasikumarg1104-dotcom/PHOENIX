import { Response } from "express";

import { AuthRequest } from "../middleware/auth.middleware";
import { asyncHandler } from "../middleware/asyncHandler";
import { sendResponse } from "../utils/response";

import { getUserProfileService } from "../services/user.service";

export const getUserProfileController = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const profile = await getUserProfileService(
      req.user!.id,
      req.params.id
    );

    return sendResponse(
      res,
      200,
      "Profile fetched successfully",
      profile
    );
  }
);