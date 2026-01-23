import {Chapter} from "@prisma/client";
import {getallchapterService} from "../Service/ChapterService.js";

export  const getallchapterController = async (req:any,res:any):Promise<Chapter[]> => {
    try{
        const chapter:Chapter[] = await getallchapterService();
        res.status(200).json(chapter);
    }
    catch(err){
        res.status(400).json(err);
    }
}
