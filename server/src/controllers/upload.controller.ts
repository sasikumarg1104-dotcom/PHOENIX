import { Response } from "express";

import { AuthRequest } from "../middleware/auth.middleware";
import { asyncHandler } from "../middleware/asyncHandler";
import { AppError } from "../utils/AppError";
import { sendResponse } from "../utils/response";

import { uploadImageService } from "../services/upload.service";

export const uploadImageController = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    if (!req.file) {
      throw new AppError("Image is required", 400);
    }

    const imageUrl = await uploadImageService(req.file);

    return sendResponse(
      res,
      200,
      "Image uploaded successfully",
      {
        imageUrl,
      }
    );
  }
);