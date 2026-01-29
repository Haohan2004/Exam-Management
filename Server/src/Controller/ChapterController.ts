import type {Chapter} from "@prisma/client";
import {getallchapterService, getchapterService} from "../Service/ChapterService.js";

export  const getallchapterController = async (req:any,res:any)=> {
    try{
        const chapter:Chapter[] = await getallchapterService();
        res.status(200).json(chapter);
    }
    catch(err){
        res.status(400).json(err);
    }
}
export const getchapterController = async (req:any,res:any)=> {
    try{
        const id:number = parseInt(req.params.id);
        const chapter:Chapter = await getchapterService(id);
        res.status(200).json(chapter);
    }
    catch(err){
        res.status(400).json(err);
    }
}
export const createchapterController = async (req:any,res:any)=> {
    try{
        const chapter:Chapter = 
    }
}
