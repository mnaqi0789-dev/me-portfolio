import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Enter a valid email"),
  subject: z.string().trim().min(2, "Subject is too short").max(150),
  message: z.string().trim().min(10, "Message is too short").max(2000),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
