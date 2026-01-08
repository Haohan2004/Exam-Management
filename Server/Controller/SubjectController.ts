import type {subject} from "../Type/Subject.ts";
import {getallsubject} from "../Model/Subject.ts";


export const getsubject = async (req:any, res:any):Promise<void> =>{
    let listsubjects: subject[] = await getallsubject();
    res.json(listsubjects);

}