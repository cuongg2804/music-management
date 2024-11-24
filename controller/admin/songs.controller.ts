import { Request, Response } from "express";
import Song from"../../models/song.model";
import Singer from "../../models/singer.model";
import Topic  from "../../models/topic.model";
import {systemConfig} from "../../config/system";


export const index = async (req : Request , res : Response) => {
    const listSong = await Song.find({
        deleted : false,
         status : "active"
    })
   res.render("admin/page/songs/index.pug",{
        pageTitle :"Quản lý bài hát",
        songs : listSong
   })
}

// GET /admin/songs/create
export const create = async (req : Request , res : Response) => {
    const listSinger = await Singer.find({
        deleted : false,
        status : "active"
    })

    const listTopic = await Topic.find({
        deleted : false,
        status : "active"
    })
    res.render("admin/page/songs/create",{
        pageTitle:"Tạo mới bài hát",
        topics : listTopic,
        singers : listSinger
    })
}

// POST /admin/songs/create
export const createPost = async (req : Request , res : Response) => {
    let avatar : String = "" ;
    if( req.body.avatar){
        avatar =  req.body.avatar[0];
    }
    let audio : String = "";

    if(req.body.audio){
        audio =  req.body.audio[0];
    }

    const songs=  {
        title : req.body.title,
      avatar : avatar,
      description : req.body.description,
      singerId : req.body.singerId,
      topicId :req.body.topicId,
      status : req.body.status,
      audio : audio
    }
    const newSong = new Song(songs);
    await newSong.save();

    res.redirect("/" + systemConfig.PREFIX_ADMIN+ "/songs");
}

// GET /admin/songs/edit/:id

export const edit  = async (req : Request , res : Response) => {
    
    const listSong = await Song.findOne({
        _id : req.params.id,
        deleted : false,
        status : "active"
    })
    const listSinger = await Singer.find({
        deleted : false,
        status : "active"
    })

    const listTopic = await Topic.find({
        deleted : false,
        status : "active"
    })
    res.render("admin/page/songs/edit.pug",{
        pageTitle : "Sửa bài hát",
        song : listSong,
        topics : listTopic ,
        singers : listSinger
    })
}

// [POST] /admin/songs/edit/:id

export const editPatch = async (req : Request , res : Response) => {
   try {
    const id = req.params.id;
    if( req.body.avatar){
        req.body.avatar =  req.body.avatar[0];
    }
    if(req.body.audio){
        req.body.audio =  req.body.audio[0];
    }

    await Song.updateOne({
        _id : id,
        status : "active",
        deleted : false
    }, req.body)

    res.redirect(`back`);
   } catch (error) {
    res.redirect(`back`);
   }
}
