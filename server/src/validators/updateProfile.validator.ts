import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z.string().min(3).optional(),
  bio: z.string().max(250).optional(),
  profileImage: z.string().url().optional(),
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;