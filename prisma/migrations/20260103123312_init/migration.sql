-- CreateTable
CREATE TABLE `Exam` (
    `examid` INTEGER NOT NULL AUTO_INCREMENT,
    `examname` VARCHAR(191) NOT NULL,
    `subjectid` INTEGER NOT NULL,
    `chapid` INTEGER NOT NULL,
    `userid` INTEGER NOT NULL,
    `start_time` DATETIME(3) NOT NULL,
    `end_time` DATETIME(3) NOT NULL,

    PRIMARY KEY (`examid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Exam_Question` (
    `exqid` INTEGER NOT NULL AUTO_INCREMENT,
    `score` INTEGER NOT NULL,
    `quesid` INTEGER NOT NULL,
    `examid` INTEGER NOT NULL,

    PRIMARY KEY (`exqid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Exam_Attempt` (
    `attemptid` INTEGER NOT NULL AUTO_INCREMENT,
    `start_time` DATETIME(3) NOT NULL,
    `end_time` DATETIME(3) NOT NULL,
    `total_score` INTEGER NOT NULL,
    `status` INTEGER NOT NULL,
    `userid` INTEGER NOT NULL,
    `examid` INTEGER NOT NULL,

    PRIMARY KEY (`attemptid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Attempt_Answer` (
    `attemptansid` INTEGER NOT NULL AUTO_INCREMENT,
    `attemptid` INTEGER NOT NULL,
    `quesid` INTEGER NOT NULL,
    `ansid` INTEGER NOT NULL,

    PRIMARY KEY (`attemptansid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Exam` ADD CONSTRAINT `Exam_subjectid_fkey` FOREIGN KEY (`subjectid`) REFERENCES `Subject`(`subjectid`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Exam` ADD CONSTRAINT `Exam_chapid_fkey` FOREIGN KEY (`chapid`) REFERENCES `Chapter`(`chapid`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Exam` ADD CONSTRAINT `Exam_userid_fkey` FOREIGN KEY (`userid`) REFERENCES `User`(`userid`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Exam_Question` ADD CONSTRAINT `Exam_Question_quesid_fkey` FOREIGN KEY (`quesid`) REFERENCES `Question`(`quesid`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Exam_Question` ADD CONSTRAINT `Exam_Question_examid_fkey` FOREIGN KEY (`examid`) REFERENCES `Exam`(`examid`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Exam_Attempt` ADD CONSTRAINT `Exam_Attempt_userid_fkey` FOREIGN KEY (`userid`) REFERENCES `User`(`userid`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Exam_Attempt` ADD CONSTRAINT `Exam_Attempt_examid_fkey` FOREIGN KEY (`examid`) REFERENCES `Exam`(`examid`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attempt_Answer` ADD CONSTRAINT `Attempt_Answer_attemptid_fkey` FOREIGN KEY (`attemptid`) REFERENCES `Exam_Attempt`(`attemptid`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attempt_Answer` ADD CONSTRAINT `Attempt_Answer_quesid_fkey` FOREIGN KEY (`quesid`) REFERENCES `Question`(`quesid`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attempt_Answer` ADD CONSTRAINT `Attempt_Answer_ansid_fkey` FOREIGN KEY (`ansid`) REFERENCES `Answer`(`ansid`) ON DELETE CASCADE ON UPDATE CASCADE;
