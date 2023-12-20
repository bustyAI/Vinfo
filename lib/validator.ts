import * as z from "zod";
export const vanFormSchema = z.object({
  name: z.string().min(3, "Name must be at at least 3 characters"),
  vanType: z.string().min(5, "Van Type must be more than 5 characters"),
  fuelType: z.string().min(1, "Fuel Type must be more than 1 characters"),
});
