import Joi from 'joi'

export const createNewUser = async(req:any, res:any,next:any)=>{
    const correctCondition = Joi.object({
        username:Joi.string().required().min(6).max(20),
        email:Joi.string().required().email().max(255),
        password:Joi.string().required().min(6).max(20),
    })

    try{
       await correctCondition.validateAsync(req.body,{abortEarly: false})
        next()
    }
    catch(err){
        res.status(400).json(err);
    }
}