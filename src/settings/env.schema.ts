import { z } from "zod";









export const envSchema = z.object({
    BOT_TOKEN: z.string({ description: "Discord Bot Token is required" }).min(1),
    DATABASE_URL: z.string({ description: "Database is required" }).min(1),
    DEVELOPMENT_GUILD: z.string().optional(),
    SERVER_PORT: z.string().refine(v => !Number.isNaN(Number(v)), "Invalid server port").optional(),
    WEBHOOK_LOGS_URL: z.string().url().optional(),
    // Env vars...
});