import type {Chapter} from "@prisma/client";
import {
    createchapterService,
    deletechapterService,
    getallchapterService,
    getchapterService, updatechapterService
} from "../Service/ChapterService.js";

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
        const id:number = parseInt(req.params.chapid);
        const chapter = await getchapterService(id);
        res.status(200).json(chapter);
    }
    catch(err){
        res.status(400).json(err);
    }
}
export const createchapterController = async (req:any,res:any)=> {
    try{
            const chapnumber:number = parseInt(req.body.chapnumber);
            const chapname:string = req.body.chapname;
            const subjectid:number = parseInt(req.body.subjectid);
            const chapter:Chapter = {chapid:0,chapnumber:chapnumber,chapname:chapname,subjectid:subjectid,is_delete:false};
            await createchapterService(chapter);
            res.status(201).json(chapter);
    }
    catch(err){
        res.status(400).json(err);
    }
}
export const deletechapterController = async (req:any,res:any)=> {
    try{
        const chapid:number = parseInt(req.params.chapid);
        await deletechapterService(chapid);
        res.status(200);
    }
    catch(err){
        res.status(400).json(err);
    }
}
export const updatechapterController = async (req:any,res:any)=> {
    try{
        const chapid:number = parseInt(req.params.chapid);
        const chapnumber:number = parseInt(req.body.chapnumber);
        const chapname:string = req.body.chapname;
        const subjectid:number = parseInt(req.body.subjectid);
        const chapter:Chapter = {chapid:chapid,chapnumber:chapnumber,chapname:chapname,subjectid:subjectid,is_delete:false};
        await updatechapterService(chapid,chapter);
        res.status(200).json(chapter);
    }
    catch(err){
        res.status(400).json(err);
    }
}

