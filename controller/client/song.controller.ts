import express, {Request, Response} from "express";
import Topic from "../../models/topic.model";
import Song from "../../models/song.model";
import Singer from "../../models/singer.model";
import { strict } from "assert";

export const index = async (req : Request , res :Response) =>  {
    const slugTopic = req.params.slugTopic;

    const idTopic = await Topic.findOne({
        slug : slugTopic,
        status : "active",
        deleted:false
    }).select("id title");

    const listSong = await Song.find({
        topicId : idTopic.id,
        status:"active",
        deleted:false
    }).select("avatar title singerId like slug").sort({like: "desc"});
   
    for(const song of listSong) {
        const singer = await Singer.findOne({
            _id : song.singerId,
            deleted:false,
            status:"active"
        }).select("fullName");
        song["singer"] = singer;
    }


    res.render("client/pages/songs/index.pug",{
        pageTitle : "Danh sách bài hát",
        listSong : listSong
    });
}


// GET /songs/detail/:slugSong
export const detail = async (req : Request , res :Response) =>  {
    const slugSong = req.params.slugSong;
    const detailSong = await Song.findOne({
        slug : slugSong,
        status:"active",
        deleted:false
    })
    
    const topic = await Topic.findOne({
        _id : detailSong.topicId,
        status:"active",
        deleted:false
    }).select("title");
    detailSong["topic"] = topic;

    const singer = await Singer.findOne({
        _id : detailSong.singerId,
        deleted:false,
        status:"active"
    }).select("fullName");
    detailSong["singer"] = singer;
    
    res.render("client/pages/songs/detail.pug",{
        pageTitle : detailSong.title,
        detailSong : detailSong
    });
}

// PATCH /songs/:idSong/:status
export const like = async (req : Request , res :Response) =>  {
    const Status = req.params.status;
    const id = req.params.idSong;

    const song = await Song.findOne({
        _id: id,
        deleted: false,
        status: "active"
      });
    
    const updateLike = Status == "liked" ? song.like + 1  : song.like -1 ;
            await Song.updateOne({
                _id : id,
                deleted:false,
                status : "active"
            },{
                like : updateLike
            })

    res.json({
        code : 200,
        message :"Đã thích",
        like : updateLike
    })
}


// PATCH /songs/listen/${idSong}
export const listenPatch = async (req : Request , res :Response) => {
    const id : String = req.params.id;
    const song = await Song.findOne({
        _id : id,
        deleted : false,
        status : "active"
    });


    const Newlisten: number = song.listen + 1;

    await Song.updateOne({
        _id : id,
        deleted : false,
        status : "active"
    },{
        listen : Newlisten
    });
    res.json({
        code : 200,
        message : "Thành công",
        listen : Newlisten
    })
}