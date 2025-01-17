import { z } from "zod";

export const userValidationSchema = z.object({
    userName: z.string().min(3, "Name must be at least three characters!").max(20, "Name must be at most twenty characters!").regex(/^[a-zA-Z0-9_]*$/, "Name must contain only letters, numbers, and underscores!"),
    email: z.string().email("Invalid email address!").regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email address!"),
    password: z.string().min(8, "Password must be at least eight characters!").max(20, "Password must be at most twenty characters!").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Password must contain at least one uppercase letter, one lowercase letter, and one number!"),
});