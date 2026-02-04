import {addchapter, deletechapter, getallchapter, getchapter, updatechapter} from "../Model/Chapter.js";
import type {Chapter} from "@prisma/client";

export const getallchapterService = async () => {
    return await getallchapter();
}
export const getchapterService = async (id:number) => {
    return await getchapter(id)
}
export const createchapterService = async (chapter: Chapter) => {
    return await addchapter(chapter);
}
export const updatechapterService = async (id:number,chapter: Chapter) => {
    return await updatechapter(id,chapter);

}
export const deletechapterService = async (id:number) => {
    return await deletechapter(id);
}
