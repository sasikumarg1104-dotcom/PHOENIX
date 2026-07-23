import { Request, Response } from "express";

import { registerSchema } from "../validators/auth.validator";
import { loginSchema } from "../validators/login.validator";

import { AuthRequest } from "../middleware/auth.middleware";
import { asyncHandler } from "../middleware/asyncHandler";

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

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  }
);

// ==========================
// Login
// ==========================
export const login = asyncHandler(
  async (req: Request, res: Response) => {
    const data = loginSchema.parse(req.body);

    const result = await loginUser(data);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: result,
    });
  }
);

// ==========================
// Get Profile
// ==========================
export const profile = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const user = await getProfile(req.user!.id);

    return res.status(200).json({
      success: true,
      data: user,
    });
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

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: updatedUser,
    });
  }
);