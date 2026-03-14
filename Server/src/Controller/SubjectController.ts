import type {Chapter, Subject} from "@prisma/client";
import {createsubject, delsubject, getallsubjects, getsubjectwithid, upsubject} from "../Service/SubjectService.js";
import {getchapterwithsubjectidService} from "../Service/ChapterService.js";

export const getsubjects = async (req:any,res:any)=>{
    try{
        let subject:Subject[]= await getallsubjects();
        res.json(subject);
    }
    catch(err){
        res.status(400).json(err);
    }
}
export const getsubjectbyid = async (req:any,res:any)=>{
    try{
        const id=parseInt(req.params.id);
        const subject = await getsubjectwithid(id);
        res.json(subject);

    }
    catch(err){
        res.status(400).json(err);
    }
}
export const deletesubjectController = async (req:any,res:any)=>{
    try{
        const id=parseInt(req.params.id);
        await delsubject(id);
        res.json("Subject deleted successfully.");
    }
    catch(err){
        res.status(400).json(err);
    }
}
export const updatesubjectwithid = async (req:any,res:any)=>{
    try{
        const id:number=parseInt(req.params.id);
        const grade:number = parseInt(req.body.grade);
        const groupid:number = parseInt(req.body.groupid);
        const subject:Subject = {subjectid:id,subjectname:req.body.subjectname,grade:grade,groupid:groupid,is_delete:false};
        await upsubject(id,subject)
        res.status(200).json(subject);
    }
    catch (err){
        res.status(400).json(err);
    }
}
export const createsubjectController = async (req:any,res:any)=>{
    try{
        const grade:number = parseInt(req.body.grade);
        const groupid:number = parseInt(req.body.groupid);
        const subject:Subject={subjectid:0,subjectname:req.body.subjectname,grade:grade,groupid:groupid,is_delete:false};
        await createsubject(subject);
        res.json(200)
    }

    catch(err){
        res.status(400).json(err);
    }
}
export const getchapterwithsubjectidController = async (req:any,res:any)=>{
    try{
        const id=parseInt(req.params.id);
        const chapter:Chapter[] = await getchapterwithsubjectidService(id);
        res.json(chapter);
    }
    catch(err){
        res.status(400).json(err);
    }
}
