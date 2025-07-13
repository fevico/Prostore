import {z} from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z.string().refine((val) =>/^\d+(\.\d(2))?/.test(formatNumberWithDecimal(Number(val))), "Price must have exactly 2 decimal places")

export const createProductSchema = z.object({
    name: z.string().min(3, {message: "Name must be at last 3 characters"}).max(50, {message: "Name is too long"}),
    slug: z.string().min(3, {message: "Slug must be at last 3 characters"}),
    category: z.string().min(3, {message: "Category must be at last 3 characters"}),
    brand: z.string().min(3, {message: "Brand must be at last 3 characters"}),
    stock: z.coerce.number(),
    images: z.array(z.string()).min(1, {message: "At least one image is required"}),
    isFeatured: z.boolean(),
    banner: z.string().nullable(), // .optional(),
    description: z.string().min(3, {message: "Description must be at last 3 characters"}).max(500, {message: "Description is too long"}),
    price : currency
})