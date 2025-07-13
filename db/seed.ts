import { PrismaClient } from "@/lib/generated/prisma";
import sampleData from "./sample-data";

const prisma = new PrismaClient();

async function main() {
    try {
        await prisma.product.deleteMany();
        console.log("Deleted existing products");

        await prisma.product.createMany({
            data: sampleData.products,
        });
        console.log("Database seeded successfully!");
    } catch (error) {
        console.error("Error seeding database:", error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();