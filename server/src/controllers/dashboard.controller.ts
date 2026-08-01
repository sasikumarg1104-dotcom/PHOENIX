import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { getDashboardStatsService } from "../services/dashboard.service";

export const getDashboardStatsController = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const dashboard =
      await getDashboardStatsService(userId);

    return res.status(200).json({
      success: true,
      message: "Dashboard fetched successfully",
      data: dashboard,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Internal Server Error",
    });
  }
};