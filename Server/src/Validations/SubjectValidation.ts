import Joi from 'joi';
export const createNewSubject = async (req:any,res:any,next:any)=>{
    try{
        const correctCondition = Joi.object({
            subjectname:Joi.string().required().min(3).max(50).trim().strict(),
            grade:Joi.number().integer().required().min(1).max(12),
            groupid:Joi.number().integer().required().min(1),

        })
        await correctCondition.validateAsync(req.body, {abortEarly: false });
        next();
    }
    catch(err){
        res.status(400).json(err);
    }
}