import {type Group, PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

export const getallgroup = async ():Promise<Group[]> => {
    return prisma.group.findMany({
        where: {
            is_delete: false
        }
    });


}
export const addgroup = (groupname:string) =>{
    return prisma.group.create({
        data:{
            groupname:groupname,
        }
    })
}
export const getgroupid = async (id:number):Promise<Group|null> => {
   const Group:Group |null = await prisma.group.findUnique({
        where: {
            groupid: id,
            is_delete:false,
        }

    });
   return Group;
}
export const deletegroup = (id:number) =>{
    return prisma.group.update( {
        where:{
            groupid:id,
        },
        data:{
            is_delete: true,
        },
    });
}
export const updategroup = async(id:number,group:Group) =>{
    return prisma.group.update({
        where:{
            groupid:id,
        },
        data:{
            groupname:group.groupname,
        },
    })

}