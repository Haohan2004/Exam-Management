import type { Subject } from "@prisma/client";
export declare const getallsubjects: () => Promise<{
    groupid: number | null;
    is_delete: boolean;
    subjectid: number;
    subjectname: string;
    grade: number;
}[]>;
export declare const getsubjectwithid: (id: number) => Promise<{
    groupid: number | null;
    is_delete: boolean;
    subjectid: number;
    subjectname: string;
    grade: number;
} | null>;
export declare const createsubject: (subject: Subject) => Promise<{
    groupid: number | null;
    is_delete: boolean;
    subjectid: number;
    subjectname: string;
    grade: number;
}>;
export declare const delsubject: (id: number) => Promise<{
    groupid: number | null;
    is_delete: boolean;
    subjectid: number;
    subjectname: string;
    grade: number;
}>;
export declare const upsubject: (id: number, subject: Subject) => Promise<{
    groupid: number | null;
    is_delete: boolean;
    subjectid: number;
    subjectname: string;
    grade: number;
}>;
//# sourceMappingURL=SubjectService.d.ts.map