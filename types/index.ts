import { z } from "zod";
import { createProductSchema } from "@/lib/validator";

export type Product = z.infer<typeof createProductSchema> & {
  id: string;
  rating: string;
  numReviews: number;
  createdAt: Date;
};
