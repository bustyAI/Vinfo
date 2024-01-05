import * as z from "zod";
export const vanFormSchema = z.object({
  name: z.string().min(2, "Name must be at at least 2 characters"),
  vanType: z.string().min(2, "Van Type must be more than 2 characters"),
  fuelType: z.string().min(1, "Fuel Type must be more than 1 characters"),
  fuelLevel: z.number(),
  chargePercent: z.number().min(0, "Must add charge percent"),
  isCharging: z.boolean(),
  maintenance: z
    .string()
    .min(3, "Maintenance Description must be more than 3 characters"),
  isCharged: z.boolean(),
});
