import { type Group } from "@prisma/client";
export declare const getallgroup: () => Promise<Group[]>;
export declare const addgroup: (groupname: string) => import("@prisma/client").Prisma.Prisma__GroupClient<{
    groupid: number;
    groupname: string;
    is_delete: boolean;
}, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
export declare const getgroupid: (id: number) => Promise<Group | null>;
export declare const deletegroup: (id: number) => import("@prisma/client").Prisma.Prisma__GroupClient<{
    groupid: number;
    groupname: string;
    is_delete: boolean;
}, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
export declare const updategroup: (id: number, group: Group) => Promise<{
    groupid: number;
    groupname: string;
    is_delete: boolean;
}>;
//# sourceMappingURL=Group.d.ts.map