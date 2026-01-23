import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const ModelName: {
    readonly User: "User";
    readonly Role: "Role";
    readonly Permission: "Permission";
    readonly Role_Permission: "Role_Permission";
    readonly Group: "Group";
    readonly Subject: "Subject";
    readonly Chapter: "Chapter";
    readonly Question: "Question";
    readonly Answer: "Answer";
    readonly Exam: "Exam";
    readonly Exam_Question: "Exam_Question";
    readonly Exam_Attempt: "Exam_Attempt";
    readonly Attempt_Answer: "Attempt_Answer";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly userid: "userid";
    readonly username: "username";
    readonly password: "password";
    readonly email: "email";
    readonly roleid: "roleid";
    readonly status: "status";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const RoleScalarFieldEnum: {
    readonly roleid: "roleid";
    readonly rolename: "rolename";
    readonly status: "status";
};
export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];
export declare const PermissionScalarFieldEnum: {
    readonly perid: "perid";
    readonly pername: "pername";
    readonly status: "status";
};
export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum];
export declare const Role_PermissionScalarFieldEnum: {
    readonly rpid: "rpid";
    readonly roleid: "roleid";
};
export type Role_PermissionScalarFieldEnum = (typeof Role_PermissionScalarFieldEnum)[keyof typeof Role_PermissionScalarFieldEnum];
export declare const GroupScalarFieldEnum: {
    readonly groupid: "groupid";
    readonly groupname: "groupname";
};
export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum];
export declare const SubjectScalarFieldEnum: {
    readonly subjectid: "subjectid";
    readonly subjectname: "subjectname";
    readonly grade: "grade";
    readonly groupid: "groupid";
    readonly is_delete: "is_delete";
};
export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum];
export declare const ChapterScalarFieldEnum: {
    readonly chapid: "chapid";
    readonly chapnumber: "chapnumber";
    readonly chapname: "chapname";
    readonly subjectid: "subjectid";
    readonly is_delete: "is_delete";
};
export type ChapterScalarFieldEnum = (typeof ChapterScalarFieldEnum)[keyof typeof ChapterScalarFieldEnum];
export declare const QuestionScalarFieldEnum: {
    readonly quesid: "quesid";
    readonly content: "content";
    readonly level: "level";
    readonly userid: "userid";
    readonly subjectid: "subjectid";
    readonly chapid: "chapid";
    readonly is_delete: "is_delete";
};
export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum];
export declare const AnswerScalarFieldEnum: {
    readonly ansid: "ansid";
    readonly content: "content";
    readonly is_correct: "is_correct";
    readonly quesid: "quesid";
    readonly is_delete: "is_delete";
};
export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum];
export declare const ExamScalarFieldEnum: {
    readonly examid: "examid";
    readonly examname: "examname";
    readonly subjectid: "subjectid";
    readonly chapid: "chapid";
    readonly userid: "userid";
    readonly start_time: "start_time";
    readonly end_time: "end_time";
    readonly is_delete: "is_delete";
};
export type ExamScalarFieldEnum = (typeof ExamScalarFieldEnum)[keyof typeof ExamScalarFieldEnum];
export declare const Exam_QuestionScalarFieldEnum: {
    readonly exqid: "exqid";
    readonly score: "score";
    readonly quesid: "quesid";
    readonly examid: "examid";
    readonly is_delete: "is_delete";
};
export type Exam_QuestionScalarFieldEnum = (typeof Exam_QuestionScalarFieldEnum)[keyof typeof Exam_QuestionScalarFieldEnum];
export declare const Exam_AttemptScalarFieldEnum: {
    readonly attemptid: "attemptid";
    readonly start_time: "start_time";
    readonly end_time: "end_time";
    readonly total_score: "total_score";
    readonly status: "status";
    readonly userid: "userid";
    readonly examid: "examid";
    readonly is_delete: "is_delete";
};
export type Exam_AttemptScalarFieldEnum = (typeof Exam_AttemptScalarFieldEnum)[keyof typeof Exam_AttemptScalarFieldEnum];
export declare const Attempt_AnswerScalarFieldEnum: {
    readonly attemptansid: "attemptansid";
    readonly attemptid: "attemptid";
    readonly quesid: "quesid";
    readonly ansid: "ansid";
    readonly is_delete: "is_delete";
};
export type Attempt_AnswerScalarFieldEnum = (typeof Attempt_AnswerScalarFieldEnum)[keyof typeof Attempt_AnswerScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const UserOrderByRelevanceFieldEnum: {
    readonly username: "username";
    readonly password: "password";
    readonly email: "email";
};
export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum];
export declare const RoleOrderByRelevanceFieldEnum: {
    readonly rolename: "rolename";
};
export type RoleOrderByRelevanceFieldEnum = (typeof RoleOrderByRelevanceFieldEnum)[keyof typeof RoleOrderByRelevanceFieldEnum];
export declare const PermissionOrderByRelevanceFieldEnum: {
    readonly pername: "pername";
};
export type PermissionOrderByRelevanceFieldEnum = (typeof PermissionOrderByRelevanceFieldEnum)[keyof typeof PermissionOrderByRelevanceFieldEnum];
export declare const GroupOrderByRelevanceFieldEnum: {
    readonly groupname: "groupname";
};
export type GroupOrderByRelevanceFieldEnum = (typeof GroupOrderByRelevanceFieldEnum)[keyof typeof GroupOrderByRelevanceFieldEnum];
export declare const SubjectOrderByRelevanceFieldEnum: {
    readonly subjectname: "subjectname";
};
export type SubjectOrderByRelevanceFieldEnum = (typeof SubjectOrderByRelevanceFieldEnum)[keyof typeof SubjectOrderByRelevanceFieldEnum];
export declare const ChapterOrderByRelevanceFieldEnum: {
    readonly chapname: "chapname";
};
export type ChapterOrderByRelevanceFieldEnum = (typeof ChapterOrderByRelevanceFieldEnum)[keyof typeof ChapterOrderByRelevanceFieldEnum];
export declare const QuestionOrderByRelevanceFieldEnum: {
    readonly content: "content";
};
export type QuestionOrderByRelevanceFieldEnum = (typeof QuestionOrderByRelevanceFieldEnum)[keyof typeof QuestionOrderByRelevanceFieldEnum];
export declare const AnswerOrderByRelevanceFieldEnum: {
    readonly content: "content";
};
export type AnswerOrderByRelevanceFieldEnum = (typeof AnswerOrderByRelevanceFieldEnum)[keyof typeof AnswerOrderByRelevanceFieldEnum];
export declare const ExamOrderByRelevanceFieldEnum: {
    readonly examname: "examname";
};
export type ExamOrderByRelevanceFieldEnum = (typeof ExamOrderByRelevanceFieldEnum)[keyof typeof ExamOrderByRelevanceFieldEnum];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map