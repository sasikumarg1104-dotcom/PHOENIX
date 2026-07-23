import { Request, Response } from "express";

import { registerSchema } from "../validators/auth.validator";
import { loginSchema } from "../validators/login.validator";

import { AuthRequest } from "../middleware/auth.middleware";
import { asyncHandler } from "../middleware/asyncHandler";
import { sendResponse } from "../utils/response";


import {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
} from "../services/auth.service";

// ==========================
// Register
// ==========================
export const register = asyncHandler(
  async (req: Request, res: Response) => {
    const data = registerSchema.parse(req.body);

    const user = await registerUser(data);

    return sendResponse(
  res,
  201,
  "User registered successfully",
  user
);
  }
);

// ==========================
// Login
// ==========================
export const login = asyncHandler(
  async (req: Request, res: Response) => {
    const data = loginSchema.parse(req.body);

    const result = await loginUser(data);

   return sendResponse(
  res,
  200,
  "Login successful",
  result
);
  }
);

// ==========================
// Get Profile
// ==========================
export const profile = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const user = await getProfile(req.user!.id);

    return sendResponse(
  res,
  200,
  "Profile fetched successfully",
  user
);
  }
);

// ==========================
// Update Profile
// ==========================
export const updateProfileController = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const updatedUser = await updateProfile(
      req.user!.id,
      req.body
    );

    return sendResponse(
  res,
  200,
  "Profile updated successfully",
  updatedUser
);
  }
);

