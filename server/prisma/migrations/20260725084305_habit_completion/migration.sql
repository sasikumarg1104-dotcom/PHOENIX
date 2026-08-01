/*
  Warnings:

  - A unique constraint covering the columns `[habitId,completionDate]` on the table `HabitCompletion` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `completionDate` to the `HabitCompletion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "HabitCompletion" ADD COLUMN     "completionDate" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "HabitCompletion_habitId_completionDate_key" ON "HabitCompletion"("habitId", "completionDate");
