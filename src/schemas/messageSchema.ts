import { z } from "zod";

export const messageValidationSchema = z.object({
    contnet: z.string().min(10, "Message must be at least ten character!").max(500, "Message must be at most five hundered characters!"),

})