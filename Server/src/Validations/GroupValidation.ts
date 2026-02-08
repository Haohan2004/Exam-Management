import Joi from 'joi'


export const createNew = async (req:any,res:any,next:any) => {
    const correctCondition = Joi.object({
        groupname: Joi.string().required().min(3).max(50).trim().strict(),
    })
    try {
        await correctCondition.validateAsync(req.body, {abortEarly: false });
        next();
    } catch (err) {
        res.status(400).json(err);
    }
}


