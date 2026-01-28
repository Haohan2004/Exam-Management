import {signup_postModel} from "../Model/User.js";

export const signup_postService  = async (username:string,password:string,email:string) => {
    return await signup_postModel(username, password, email);
}