import {PrismaClient} from '@prisma/client'
import bcrypt from 'bcrypt'
const prisma = new PrismaClient();


export const signup_postModel = async (username:string,password:string,email:string) => {
    const salt = await bcrypt.genSalt();
    const passwordhash = await bcrypt.hash(password, salt);
    return await prisma.user.create({
        data: {
            username: username,
            password: passwordhash,
            email: email,
            roleid:1,
            status:1,
        },
    });
}

