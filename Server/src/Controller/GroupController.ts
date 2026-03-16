import {createGroup, delgroup, getgroup, getgroupwithid} from "../Service/GroupService.js";
import type {Group} from "@prisma/client"
import {prisma} from "../lib/prisma.js";
import {updategroup} from "../Model/Group.js";
import {client} from '../db.js'

export const getallgroups = async (req:any,res:any) => {
    try{
        const cache_key = 'group'
        const cache_data = await client.get(cache_key)
        if(cache_data)
        {
           return res.status(200).json(JSON.parse(cache_data));
        }
        else {
            const groups: Group[] = await getgroup();
            await client.set(cache_key, JSON.stringify(groups), {
                EX: 10
            });


            res.status(200).json(groups);
        }
    }
    catch(err){
        res.status(400).json(err);
    }
}
export const addagroup = async (req:any,res:any) => {
    try{

        await createGroup(req.body.groupname);
        res.json("Group created successfully");
    }
    catch(err){
        res.status(400).json(err);
    }
}
export const getgroupbyid = async (req:any,res:any) => {
    try{
        const id =parseInt(req.params.id);
        const group:Group |null = await getgroupwithid(id);
        res.json(group);
    }
    catch(err){
        res.status(400).json(err);
    }
}
export const deletegroupwithid = async (req:any,res:any) => {
    try{
        const id =parseInt(req.params.id);
        await delgroup(id);
        res.json("Group deleted successfully");
    }
    catch(err){
        res.status(400).json(err);
    }
}
export const updategroupid = async (req:any,res:any) => {
    try{
        const id =parseInt(req.params.id);
        const groupname:string = req.body.groupname;
        const group:Group = {groupid: 0,groupname:groupname,is_delete:false};
         await updategroup(id,group);
         res.json("Group updated successfully");
    }
    catch(err){
        res.status(400).json(err);
    }
}