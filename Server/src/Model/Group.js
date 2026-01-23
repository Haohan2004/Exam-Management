import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const getallgroup = async () => {
    return prisma.group.findMany({
        where: {
            is_delete: false
        }
    });
};
export const addgroup = (groupname) => {
    return prisma.group.create({
        data: {
            groupname: groupname,
        }
    });
};
export const getgroupid = async (id) => {
    const Group = await prisma.group.findUnique({
        where: {
            groupid: id,
            is_delete: false,
        }
    });
    return Group;
};
export const deletegroup = (id) => {
    return prisma.group.update({
        where: {
            groupid: id,
        },
        data: {
            is_delete: true,
        },
    });
};
export const updategroup = async (id, group) => {
    return prisma.group.update({
        where: {
            groupid: id,
        },
        data: {
            groupname: group.groupname,
        },
    });
};
//# sourceMappingURL=Group.js.map