import * as z from "zod";

const currentYear = new Date().getFullYear();
export const SearchSchema = z.object({
  releaseFrom: z
    .number()
    .int()
    .positive() // Ensures the number is positive (avoid negatives)
    .min(1000, { message: "Number must have 4 digits" }) // Minimum value: 1000 (four digits)
    .max(currentYear), // Maximum value: current year,
  releaseTo: z
    .number()
    .int()
    .positive() // Ensures the number is positive (avoid negatives)
    .min(1000, { message: "Number must have 4 digits" }) // Minimum value: 1000 (four digits)
    .max(currentYear), // Maximum value: current year,
  genre: z.number().optional(),
  goodRated: z.boolean(),
});
export const AdvanceSearchSchema = z.object({
  mood: z.number().min(0),
  platform: z.number().min(0),
  release: z.number().min(0),
  rating: z.number().min(0),
  game_mode: z.number().min(0),
  sequels: z.number().min(0),
  action: z.string().optional(),
});
