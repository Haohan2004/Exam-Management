import {addsubject, deletesubject, getallsubject, getsubject, updatesubject} from "../Model/Subject.js";
import type {Subject} from "@prisma/client";

export const getallsubjects = async () =>{
    return await getallsubject();
}
export const getsubjectwithid = async (id:number)=> {
    return await getsubject(id);
}
export const createsubject = async (subject:Subject)=> {
    return await addsubject(subject);
}
export const delsubject = async (id:number) =>{
    return await deletesubject(id);
}
export const upsubject = async (id:number,subject:Subject)=>{
    return await updatesubject(id,subject);
}