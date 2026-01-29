import {createquestion, deletequestion, getallquestion, getquestion, updatequestion} from "../Model/Question.js";
import type {Question} from "@prisma/client";

export const getallquestionService = async ()=>{
    return await getallquestion();
}
export const getquestionwithid = async (id:number) => {
    return await getquestion(id);
}
export const createQuestion = async (question:Question) => {
    return await createquestion(question);
}
export const deleteQuestionService = async (id:number)=>{
    return await deletequestion(id);
}
export const updateQuestionService = async (id:number, question:Question) => {
    return await updatequestion(id, question);
}
