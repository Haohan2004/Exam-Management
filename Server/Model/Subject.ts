import {PrismaClient} from "@prisma/client/extension";
const Prisma = new PrismaClient();
export const getallsubject = async () =>{
    return await Prisma.subject.findAll();
}
