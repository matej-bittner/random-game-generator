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
  genre: z.string({
    required_error: "Please select a language.",
  }),
  goodRated: z.boolean(),
});
