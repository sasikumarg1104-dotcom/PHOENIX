import { Response, NextFunction } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { completeHabitService } from "../services/habit.service";
import { completeHabitSchema } from "../validators/habit.validator";


import {
  createHabitService,
  deleteHabitService,
  getAllHabitsService,
  getHabitByIdService,
  updateHabitService,
} from "../services/habit.service";

import {
  createHabitSchema,
  updateHabitSchema,
} from "../validators/habit.validator";

export const createHabitController = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const validatedData = createHabitSchema.parse(req.body);

    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const habit = await createHabitService({
      ...validatedData,
      userId,
    });

    res.status(201).json({
      success: true,
      message: "Habit created successfully",
      data: habit,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllHabitsController = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const habits = await getAllHabitsService(userId);

    res.status(200).json({
      success: true,
      data: habits,
    });
  } catch (error) {
    next(error);
  }
};

export const getHabitByIdController = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const habit = await getHabitByIdService(req.params.id, userId);

    res.status(200).json({
      success: true,
      data: habit,
    });
  } catch (error) {
    next(error);
  }
};

export const updateHabitController = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const validatedData = updateHabitSchema.parse(req.body);

    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const habit = await updateHabitService(req.params.id, userId, validatedData);

    res.status(200).json({
      success: true,
      message: "Habit updated successfully",
      data: habit,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteHabitController = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    await deleteHabitService(req.params.id, userId);

    res.status(200).json({
      success: true,
      message: "Habit deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const completeHabitController = async (
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

    const { id } = req.params;

    const validatedData = completeHabitSchema.parse(req.body);

    const result = await completeHabitService(
      id,
      userId,
      validatedData.notes
    );

    return res.status(200).json({
      success: true,
      message: result.message,
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    });
  }
};