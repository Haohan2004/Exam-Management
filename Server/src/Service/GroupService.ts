import {addgroup, deletegroup, getallgroup, getgroupid, updategroup} from "../Model/Group.js";
import type {Group} from "@prisma/client";

export const getgroup = async ():Promise<Group[]>  => {
    return await getallgroup();
}
export const createGroup =  (groupname:string):Promise<Group> => {
    return addgroup(groupname);
}
export const getgroupwithid = async(id:number) =>{
    return await getgroupid(id);
}
export const delgroup = async (id:number) =>{
    return await deletegroup(id);
}
export const updategr = async (id:number, group:Group)=> {
    return await updategroup(id, group);

}