/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `article` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleid` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userid` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `article` DROP FOREIGN KEY `Article_authorId_fkey`;

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `name`,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `roleid` INTEGER NOT NULL,
    ADD COLUMN `status` INTEGER NOT NULL,
    ADD COLUMN `userid` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `username` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`userid`);

-- DropTable
DROP TABLE `article`;

-- CreateTable
CREATE TABLE `Role` (
    `roleid` INTEGER NOT NULL AUTO_INCREMENT,
    `rolename` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL,

    PRIMARY KEY (`roleid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Permission` (
    `perid` INTEGER NOT NULL AUTO_INCREMENT,
    `pername` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL,

    PRIMARY KEY (`perid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role_Permission` (
    `rpid` INTEGER NOT NULL AUTO_INCREMENT,
    `roleid` INTEGER NOT NULL,

    PRIMARY KEY (`rpid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Group` (
    `groupid` INTEGER NOT NULL AUTO_INCREMENT,
    `groupname` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`groupid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subject` (
    `subjectid` INTEGER NOT NULL AUTO_INCREMENT,
    `subjectname` VARCHAR(191) NOT NULL,
    `grade` INTEGER NOT NULL,
    `groupid` INTEGER NOT NULL,

    PRIMARY KEY (`subjectid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Chapter` (
    `chapid` INTEGER NOT NULL AUTO_INCREMENT,
    `chapnumber` INTEGER NOT NULL,
    `chapname` VARCHAR(191) NOT NULL,
    `subjectid` INTEGER NOT NULL,

    PRIMARY KEY (`chapid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Question` (
    `quesid` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(191) NOT NULL,
    `level` ENUM('Easy', 'Medium', 'Hard') NOT NULL DEFAULT 'Easy',
    `userid` INTEGER NOT NULL,
    `subjectid` INTEGER NOT NULL,
    `chapid` INTEGER NOT NULL,

    PRIMARY KEY (`quesid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Answer` (
    `ansid` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(191) NOT NULL,
    `is_correct` BOOLEAN NOT NULL,
    `quesid` INTEGER NOT NULL,

    PRIMARY KEY (`ansid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_username_key` ON `User`(`username`);

-- AddForeignKey
ALTER TABLE `Role_Permission` ADD CONSTRAINT `Role_Permission_roleid_fkey` FOREIGN KEY (`roleid`) REFERENCES `Role`(`roleid`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subject` ADD CONSTRAINT `Subject_groupid_fkey` FOREIGN KEY (`groupid`) REFERENCES `Group`(`groupid`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Chapter` ADD CONSTRAINT `Chapter_subjectid_fkey` FOREIGN KEY (`subjectid`) REFERENCES `Subject`(`subjectid`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Question` ADD CONSTRAINT `Question_userid_fkey` FOREIGN KEY (`userid`) REFERENCES `User`(`userid`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Question` ADD CONSTRAINT `Question_subjectid_fkey` FOREIGN KEY (`subjectid`) REFERENCES `Subject`(`subjectid`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Question` ADD CONSTRAINT `Question_chapid_fkey` FOREIGN KEY (`chapid`) REFERENCES `Chapter`(`chapid`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Answer` ADD CONSTRAINT `Answer_quesid_fkey` FOREIGN KEY (`quesid`) REFERENCES `Question`(`quesid`) ON DELETE CASCADE ON UPDATE CASCADE;
