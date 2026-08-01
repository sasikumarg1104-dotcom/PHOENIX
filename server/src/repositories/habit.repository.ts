import prisma from "../config/prisma";
import {
  HabitDifficulty,
  HabitFrequency,
  HabitPriority,
  Prisma,
} from "@prisma/client";

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

export const createHabitRepository = async (
  data: CreateHabitData
) => {
  return prisma.habit.create({
    data,
  });
};

export const getAllHabitsRepository = async (
  userId: string
) => {
  return prisma.habit.findMany({
    where: {
      userId,
      isActive: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      completions: true,
    },
  });
};

export const getHabitByIdRepository = async (
  id: string,
  userId: string
) => {
  return prisma.habit.findFirst({
    where: {
      id,
      userId,
      isActive: true,
    },
    include: {
      completions: true,
    },
  });
};

export const updateHabitRepository = async (
  id: string,
  userId: string,
  data: Prisma.HabitUpdateInput
) => {
  const habit = await prisma.habit.findFirst({
    where: {
      id,
      userId,
      isActive: true,
    },
  });

  if (!habit) return null;

  return prisma.habit.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteHabitRepository = async (
  id: string,
  userId: string
) => {
  const habit = await prisma.habit.findFirst({
    where: {
      id,
      userId,
      isActive: true,
    },
  });

  if (!habit) return null;

  return prisma.habit.update({
    where: {
      id,
    },
    data: {
      isActive: false,
    },
  });
};

/* ===========================================================
   HABIT COMPLETION
=========================================================== */

export const findTodayCompletionRepository = async (
  habitId: string,
  completionDate: Date
) => {
  return prisma.habitCompletion.findFirst({
    where: {
      habitId,
      completionDate,
    },
  });
};

export const createCompletionRepository = async (
  habitId: string,
  completionDate: Date,
  notes?: string
) => {
  return prisma.habitCompletion.create({
    data: {
      habitId,
      completionDate,
      notes,
    },
  });
};

export const getPreviousCompletionRepository = async (
  habitId: string,
  today: Date
) => {
  return prisma.habitCompletion.findFirst({
    where: {
      habitId,
      completedAt: {
        lt: today,
      },
    },
    orderBy: {
      completedAt: "desc",
    },
  });
};

export const updateHabitStreakRepository = async (
  habitId: string,
  streak: number,
  bestStreak: number
) => {
  return prisma.habit.update({
    where: {
      id: habitId,
    },
    data: {
      streak,
      bestStreak,
    },
  });
};