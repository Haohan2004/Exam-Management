import type {Question} from "@prisma/client";
import {
    createQuestion,
    deleteQuestionService,
    getallquestionService,
    getquestionwithid, updateQuestionService
} from "../Service/QuestionService.js";

export const getallQuestionController = async (req:any,res:any) => {
    try{
        const question:Question[] = await getallquestionService();
        res.status(201).json(question);
    }
    catch(err){
        res.status(400).send({error:err});
    }
}
export const getquestionController = async (req:any,res:any) => {
    try{
        const id:number = parseInt(req.params.quesid);
        const question = await getquestionwithid(id);
        res.status(200).json(question);
    }
    catch(err){
        res.status(400).send({error:err});
    }
}
export const createquestionController = async (req:any,res:any) => {
    try{
        const question:Question = {
            quesid:0,
            content:req.body.content,
            level:req.body.level,
            userid:parseInt(req.body.userid),
            subjectid:parseInt(req.body.subjectid),
            chapid:parseInt(req.body.chapid),
            is_delete:false,
        }
        await createQuestion(question);
        res.status(200).json(question);

    }
    catch(err){
        res.status(400).send({error:err});
    }
}
export const deletequestionController = async (req:any,res:any) => {
    try{
        const id:number = parseInt(req.params.quesid);
        await deleteQuestionService(id);
        res.status(200);
    }
    catch(err){
        res.status(400).send({error:err});
    }
}
export const updateQuestionController = async (req:any,res:any) => {
    try {
        const id:number = parseInt(req.params.quesid);
        const question: Question = {
            quesid: 0,
            content: req.body.content,
            level: req.body.level,
            userid: req.body.userid,
            subjectid: req.body.subjectid,
            chapid: req.body.chapid,
            is_delete: false,
        }
        await updateQuestionService(id, question);
        res.status(200).json(question);

    }
    catch(err){
        res.status(400).send({error:err});
    }
}
