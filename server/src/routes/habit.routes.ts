import { Router } from "express";

import { authenticate } from "../middleware/auth.middleware";

import {
  createHabitController,
  getAllHabitsController,
  getHabitByIdController,
  updateHabitController,
  deleteHabitController,
  completeHabitController,
} from "../controllers/habit.controller";

const router = Router();

// All habit routes require authentication
router.use(authenticate);

router.post("/", createHabitController);

router.get("/", getAllHabitsController);

router.get("/:id", getHabitByIdController);

router.patch("/:id", updateHabitController);

router.post("/:id/complete", completeHabitController);

router.delete("/:id", deleteHabitController);

export default router;