import {signup_postService} from "../Service/AuthService.js";

export const signup_get = (req:any, res:any)=>{
    res.send('signup');
}
export const signup_post = async (req:any, res:any)=>{
    const username:string = req.body.username;
    const password:string = req.body.password;
    const email:string = req.body.email;
    try{
        const user =await signup_postService(username, password, email);
        res.status(201).json(user);
    }
    catch(err){
        res.status(400).send({error:err});
    }
}
export const login_get = (req:any, res:any)=>{
    res.send('signup');
}
export const login_post = (req:any, res:any)=>{

}