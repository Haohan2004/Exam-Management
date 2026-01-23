-- AlterTable
ALTER TABLE `answer` ADD COLUMN `is_delete` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `attempt_answer` ADD COLUMN `is_delete` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `chapter` ADD COLUMN `is_delete` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `exam` ADD COLUMN `is_delete` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `exam_attempt` ADD COLUMN `is_delete` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `exam_question` ADD COLUMN `is_delete` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `question` ADD COLUMN `is_delete` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `subject` ADD COLUMN `is_delete` BOOLEAN NOT NULL DEFAULT false;
