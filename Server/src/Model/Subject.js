import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const getallsubject = async () => {
    return await prisma.subject.findMany({
        where: {
            is_delete: false,
        },
    });
};
export const getsubject = async (id) => {
    return await prisma.subject.findUnique({
        where: {
            subjectid: id,
            is_delete: false,
        },
    });
};
export const addsubject = async (subject) => {
    return await prisma.subject.create({
        data: subject,
    });
};
export const updatesubject = async (id, subject) => {
    return await prisma.subject.update({
        where: {
            subjectid: id,
        },
        data: {
            subjectname: subject.subjectname,
            grade: subject.grade,
            groupid: subject.groupid,
        },
    });
};
export const deletesubject = async (id) => {
    return await prisma.subject.update({
        where: {
            subjectid: id,
        },
        data: {
            is_delete: true,
        },
    });
};
//# sourceMappingURL=Subject.js.map