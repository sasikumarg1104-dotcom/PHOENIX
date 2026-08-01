import { z } from "zod";
import {
  HabitDifficulty,
  HabitFrequency,
  HabitPriority,
} from "@prisma/client";

/* ======================================================
   CREATE HABIT
====================================================== */

export const createHabitSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title cannot exceed 100 characters"),

  description: z
    .string()
    .trim()
    .max(500, "Description cannot exceed 500 characters")
    .optional()
    .transform((value) => (value === "" ? undefined : value)),

  category: z
    .string()
    .trim()
    .max(50, "Category cannot exceed 50 characters")
    .optional()
    .transform((value) => (value === "" ? undefined : value)),

  frequency: z.nativeEnum(HabitFrequency, {
    message: "Invalid habit frequency",
  }),

  priority: z.nativeEnum(HabitPriority, {
    message: "Invalid habit priority",
  }),

  difficulty: z.nativeEnum(HabitDifficulty, {
    message: "Invalid habit difficulty",
  }),

  targetDays: z
    .number({
      error: "Target days must be a number",
    })
    .int("Target days must be an integer")
    .min(1, "Target days must be at least 1")
    .max(31, "Target days cannot exceed 31"),
});

/* ======================================================
   UPDATE HABIT
====================================================== */

export const updateHabitSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title cannot exceed 100 characters")
    .optional(),

  description: z
    .string()
    .trim()
    .max(500, "Description cannot exceed 500 characters")
    .optional()
    .transform((value) => (value === "" ? undefined : value)),

  category: z
    .string()
    .trim()
    .max(50, "Category cannot exceed 50 characters")
    .optional()
    .transform((value) => (value === "" ? undefined : value)),

  frequency: z
    .nativeEnum(HabitFrequency, {
      message: "Invalid habit frequency",
    })
    .optional(),

  priority: z
    .nativeEnum(HabitPriority, {
      message: "Invalid habit priority",
    })
    .optional(),

  difficulty: z
    .nativeEnum(HabitDifficulty, {
      message: "Invalid habit difficulty",
    })
    .optional(),

  targetDays: z
    .number({
      error: "Target days must be a number",
    })
    .int("Target days must be an integer")
    .min(1, "Target days must be at least 1")
    .max(31, "Target days cannot exceed 31")
    .optional(),
});

/* ======================================================
   COMPLETE HABIT
====================================================== */

export const completeHabitSchema = z.object({
  notes: z
    .string()
    .trim()
    .max(500, "Notes cannot exceed 500 characters")
    .optional()
    .transform((value) => (value === "" ? undefined : value)),
});

/* ======================================================
   TYPES
====================================================== */

export type CreateHabitInput = z.infer<typeof createHabitSchema>;
export type UpdateHabitInput = z.infer<typeof updateHabitSchema>;
export type CompleteHabitInput = z.infer<typeof completeHabitSchema>;