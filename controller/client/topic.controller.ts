import {Request, Response} from "express";
import Topic from "../../models/topic.model";

export const topic = async (req : Request , res : Response) => {
    const topics = await Topic.find({
        deleted: false
      });
    res.render("client/pages/topics/index.pug",{
      pageTitle : "Chủ đề bài hát"
    });
}