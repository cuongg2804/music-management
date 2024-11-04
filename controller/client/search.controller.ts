import {Request, Response} from "express";
import Song from "../../models/song.model";
import Singer from "../../models/singer.model";
import unidecode from "unidecode";

export const type = async (req : Request , res : Response)=> {
    const type : string = `${req.params.type}`;
    let keyword : string =( `${req.query.keyword}`).trim();
    const keywordRegx  = new RegExp(keyword, "i");

    const unidecodeText : string = unidecode(keyword);
    const keywordSlug : string = unidecodeText.replace(/\s+/g, "-");
    const keywordSlugRegx  = new RegExp(keywordSlug, "i");

    const songsDetail = [];
    if(keyword){
        const listSong = await Song.find({
            $or :[
                {
                    title : keywordRegx
                },{
                    slug : keywordSlugRegx
                }
            ],
            status:"active",
            deleted:false
        }).select("avatar title singerId like slug");
        
        for(const song of listSong) {
            const singer = await Singer.findOne({
                _id : song.singerId,
                deleted:false,
                status:"active"
            }).select("fullName");
            song["singer"] = singer;
            songsDetail.push({
                id : song.id,
                avatar: song.avatar,
                title: song.title,
                like: song.like,
                slug: song.slug,
                singer: {
                  fullName: singer.fullName
                },
              });
        }

        
    }
    
    if(type == "result"){
        res.render("client/pages/search/result.pug",{
            pageTitle : `Kết quả: ${req.query.keyword}`,
            songs : songsDetail
        })
    }
    else{
        res.json({
            code : 200,
            message : "Thành công !",
            songs : songsDetail
        })
    }

}