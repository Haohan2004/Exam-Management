import {PrismaClient, type Subject} from "@prisma/client"
const prisma = new PrismaClient()
export const getallsubject = async () =>{
    return await prisma.subject.findMany({
        where: {
            is_delete: false,
        },
    });
}
export const getsubject = async (id:number) =>{
    return await prisma.subject.findUnique({
        where:{
            subjectid:id,
            is_delete:false,
        },
    });
}
export const addsubject = async (subject:Subject)=>{
    return await prisma.subject.create({
        data:subject,
    });
}

export const updatesubject = async (id:number, subject:Subject)=>{
    return await prisma.subject.update({
        where:{
            subjectid:id,
        },
        data:{
            subjectname:subject.subjectname,
            grade:subject.grade,
            groupid:subject.groupid,
        },
    });
}
export const deletesubject = async (id:number) =>{
    return await prisma.subject.update({
        where:{
            subjectid:id,
        },
        data:{
            is_delete:true,
        },
    });
}
