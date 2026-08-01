import {
  HabitDifficulty,
  HabitFrequency,
  HabitPriority,
} from "@prisma/client";

import {
  createHabitRepository,
  deleteHabitRepository,
  getAllHabitsRepository,
  getHabitByIdRepository,
  updateHabitRepository,
  findTodayCompletionRepository,
  createCompletionRepository,
  getPreviousCompletionRepository,
  updateHabitStreakRepository,
} from "../repositories/habit.repository";

interface CreateHabitData {
  title: string;
  description?: string;
  category?: string;
  frequency: HabitFrequency;
  priority: HabitPriority;
  difficulty: HabitDifficulty;
  targetDays: number;
  userId: string;
}

interface UpdateHabitData {
  title?: string;
  description?: string;
  category?: string;
  frequency?: HabitFrequency;
  priority?: HabitPriority;
  difficulty?: HabitDifficulty;
  targetDays?: number;
}

export const createHabitService = async (
  data: CreateHabitData
) => {
  return createHabitRepository(data);
};

export const getAllHabitsService = async (
  userId: string
) => {
  return getAllHabitsRepository(userId);
};

export const getHabitByIdService = async (
  id: string,
  userId: string
) => {
  const habit = await getHabitByIdRepository(id, userId);

  if (!habit) {
    throw new Error("Habit not found");
  }

  return habit;
};

export const updateHabitService = async (
  id: string,
  userId: string,
  data: UpdateHabitData
) => {
  const updatedHabit = await updateHabitRepository(
    id,
    userId,
    data
  );

  if (!updatedHabit) {
    throw new Error("Habit not found");
  }

  return updatedHabit;
};

export const deleteHabitService = async (
  id: string,
  userId: string
) => {
  const deletedHabit = await deleteHabitRepository(
    id,
    userId
  );

  if (!deletedHabit) {
    throw new Error("Habit not found");
  }

  return deletedHabit;
};

/* ======================================================
   COMPLETE HABIT + STREAK ENGINE
====================================================== */

export const completeHabitService = async (
  habitId: string,
  userId: string,
  notes?: string
) => {
  // Check habit ownership
  const habit = await getHabitByIdRepository(
    habitId,
    userId
  );

  if (!habit) {
    throw new Error("Habit not found");
  }

  // Today's date (00:00:00)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Prevent duplicate completion
  const alreadyCompleted =
    await findTodayCompletionRepository(
      habitId,
      today
    );

  if (alreadyCompleted) {
    throw new Error("Habit already completed today");
  }

  // IMPORTANT:
  // Fetch previous completion BEFORE inserting today's completion
  const previousCompletion =
  await getPreviousCompletionRepository(
    habitId,
    today
  );

  let streak = 1;

  if (previousCompletion) {
    const previousDate = new Date(previousCompletion.completedAt);
    previousDate.setHours(0, 0, 0, 0);

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (previousDate.getTime() === yesterday.getTime()) {
      streak = habit.streak + 1;
    }
  }

  const bestStreak = Math.max(
    streak,
    habit.bestStreak
  );

  // Save completion
  await createCompletionRepository(
    habitId,
    today,
    notes
  );

  // Update habit streak
  const updatedHabit =
    await updateHabitStreakRepository(
      habitId,
      streak,
      bestStreak
    );

  return {
    message: "Habit completed successfully",
    streak,
    bestStreak,
    habit: updatedHabit,
  };
};