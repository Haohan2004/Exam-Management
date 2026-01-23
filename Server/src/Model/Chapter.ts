import {type Chapter,PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();
export const getallchapter = async ():Promise<Chapter[]> =>{
    return await prisma.chapter.findMany({
        where: {
            is_delete:false,
        },
    });
}
export const getchapter = async (id:number):Promise<Chapter> =>{
    return await prisma.chapter.findMany({
        where: {
            chapid:id,
            is_delete:true,

        },
    });
}
export const addchapter = async (chapter:Chapter) =>{
    return await prisma.chapter.create({
        data: {
            chapname:chapter.chapname,
            chapnumber:chapter.chapnumber,
            subjectid:chapter.subjectid,
        },
    });
}

export const deletechapter = async (id:number):Promise<void> =>{
    return await prisma.chapter.update({
        where: {
            chapid:id,
        },
        data:{
            is_delete:true,
        },
    });
}
export const updatechapter = async (id:number, chapter:Chapter):Promise<void> =>{
    return await prisma.chapter.update({
        where: {
            chapterid:id,
        },
        data:{
          chapname:chapter.chapname,
            chapnumber:chapter.chapnumber,
            subjectid:chapter.subjectid

        }
    })
}

