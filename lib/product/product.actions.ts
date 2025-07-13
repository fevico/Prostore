"use server"

import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCT_LIMIT } from "../constants";
import {prisma} from "@/db/prisma"

// Get latest product 
export async function getLatestProduct(){
    const data = await prisma.product.findMany({
        take: LATEST_PRODUCT_LIMIT,
        orderBy: {
            createdAt: 'desc'
        }
    })
    return convertToPlainObject(data)
}

// get single product by slug

export async function getProductBySlug(slug: string){
    const data = await prisma.product.findFirst({
        where: {
            slug
        }
    })
    return data
}
