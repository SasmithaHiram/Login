import { z } from "zod";

export const loginSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(20, "First name must be less than 20 characters"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(20, "Last name must be less than 20 characters"),
  userName: z
    .string()
    .min(1, "Username is required")
    .max(20, "Username must be less than 20 characters"),
  password: z
    .string()
    .min(1, "Password is required")
    .max(20, "Password must be less than 20 characters"),
});
