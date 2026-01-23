import type { Group } from "@prisma/client";
export declare const getgroup: () => Promise<Group[]>;
export declare const createGroup: (groupname: string) => Promise<Group>;
export declare const getgroupwithid: (id: number) => Promise<{
    groupid: number;
    groupname: string;
    is_delete: boolean;
} | null>;
export declare const delgroup: (id: number) => Promise<{
    groupid: number;
    groupname: string;
    is_delete: boolean;
}>;
export declare const updategr: (id: number, group: Group) => Promise<{
    groupid: number;
    groupname: string;
    is_delete: boolean;
}>;
//# sourceMappingURL=GroupService.d.ts.map