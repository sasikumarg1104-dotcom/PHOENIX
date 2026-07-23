import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3, "Name should contain minimum 3 characters"),

  email: z.email("Invalid Email"),

  password: z
    .string()
    .min(8, "Password should contain minimum 8 characters"),
});

export type RegisterInput = z.infer<typeof registerSchema>;