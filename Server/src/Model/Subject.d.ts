import { type Subject } from "@prisma/client";
export declare const getallsubject: () => Promise<{
    groupid: number | null;
    is_delete: boolean;
    subjectid: number;
    subjectname: string;
    grade: number;
}[]>;
export declare const getsubject: (id: number) => Promise<{
    groupid: number | null;
    is_delete: boolean;
    subjectid: number;
    subjectname: string;
    grade: number;
} | null>;
export declare const addsubject: (subject: Subject) => Promise<{
    groupid: number | null;
    is_delete: boolean;
    subjectid: number;
    subjectname: string;
    grade: number;
}>;
export declare const updatesubject: (id: number, subject: Subject) => Promise<{
    groupid: number | null;
    is_delete: boolean;
    subjectid: number;
    subjectname: string;
    grade: number;
}>;
export declare const deletesubject: (id: number) => Promise<{
    groupid: number | null;
    is_delete: boolean;
    subjectid: number;
    subjectname: string;
    grade: number;
}>;
//# sourceMappingURL=Subject.d.ts.map