/*
  Warnings:

  - You are about to drop the column `imageURL` on the `Board` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Board" DROP COLUMN "imageURL",
ADD COLUMN     "author" TEXT;
