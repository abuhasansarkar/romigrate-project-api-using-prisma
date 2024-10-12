/*
  Warnings:

  - Added the required column `question_Id` to the `Replay` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Replay" ADD COLUMN     "question_Id" INTEGER NOT NULL;

-- RenameForeignKey
ALTER TABLE "Comment" RENAME CONSTRAINT "Comment_post_Id_fkey" TO "Comment_question_Id_fkey";

-- AddForeignKey
ALTER TABLE "Replay" ADD CONSTRAINT "Replay_question_Id_fkey" FOREIGN KEY ("question_Id") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;
