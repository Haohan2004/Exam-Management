import * as runtime from "@prisma/client/runtime/library";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model Role
 *
 */
export type Role = Prisma.RoleModel;
/**
 * Model Permission
 *
 */
export type Permission = Prisma.PermissionModel;
/**
 * Model Role_Permission
 *
 */
export type Role_Permission = Prisma.Role_PermissionModel;
/**
 * Model Group
 *
 */
export type Group = Prisma.GroupModel;
/**
 * Model Subject
 *
 */
export type Subject = Prisma.SubjectModel;
/**
 * Model Chapter
 *
 */
export type Chapter = Prisma.ChapterModel;
/**
 * Model Question
 *
 */
export type Question = Prisma.QuestionModel;
/**
 * Model Answer
 *
 */
export type Answer = Prisma.AnswerModel;
/**
 * Model Exam
 *
 */
export type Exam = Prisma.ExamModel;
/**
 * Model Exam_Question
 *
 */
export type Exam_Question = Prisma.Exam_QuestionModel;
/**
 * Model Exam_Attempt
 *
 */
export type Exam_Attempt = Prisma.Exam_AttemptModel;
/**
 * Model Attempt_Answer
 *
 */
export type Attempt_Answer = Prisma.Attempt_AnswerModel;
//# sourceMappingURL=client.d.ts.map