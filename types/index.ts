import { z } from "zod";
import { createProductSchema, insertCartSchema, cartItemSchema } from "@/lib/validator";

export type Product = z.infer<typeof createProductSchema> & {
  id: string;
  rating: string;
  numReviews: number;
  createdAt: Date;
}

export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
