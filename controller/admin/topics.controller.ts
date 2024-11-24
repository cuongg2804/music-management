import {Request, Response} from "express";
import Topic from "../../models/topic.model";


export const index= async(req : Request, res : Response) =>{
    const listTopic = await Topic.find({
        deleted : false,
        status : "active"
    })
    //res.json(listTopic);
    res.render("admin/page/topic/index.pug",{
        pageTitle: "Quản lý Topics",
        topics : listTopic
    })
}
