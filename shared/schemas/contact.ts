import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().optional(),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactSchema = z.infer<typeof contactSchema>;
