/*
  Warnings:

  - You are about to drop the column `numViews` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "numViews",
ADD COLUMN     "numReviews" INTEGER NOT NULL DEFAULT 0;
