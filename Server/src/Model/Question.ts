import {PrismaClient, type Question} from "@prisma/client"
const prisma = new PrismaClient()
export const getallquestion = async () => {
    return prisma.question.findMany({
        where: {
            is_delete: false,
        },
    });
}
export const getquestion = async (id:number) => {
    return prisma.question.findUnique({
        where: {
            quesid:id,
            is_delete:false,
        },

    })
}
export const createquestion = async (question:Question) => {
    return prisma.question.create({
        data:{
            content:question.content,
            level:question.level,
            userid:question.userid,
            subjectid:question.subjectid,
            chapid:question.chapid,

        }
    })
}
export const deletequestion = async (id:number) => {
    return prisma.question.update({
        where:{
            quesid:id,
        },
        data:{
            is_delete:true,
        }
    })
}
export const updatequestion = async (id:number, question:Question) => {
    return prisma.question.update({
        where:{
            quesid:id,
        },
        data:{
            content:question.content,
            level:question.level,
            subjectid:question.subjectid,
            chapid:question.chapid,

        }
    })
}