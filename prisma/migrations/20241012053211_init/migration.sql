/*
  Warnings:

  - Added the required column `user_Id` to the `Replay` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Replay" ADD COLUMN     "user_Id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Replay" ADD CONSTRAINT "Replay_user_Id_fkey" FOREIGN KEY ("user_Id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
