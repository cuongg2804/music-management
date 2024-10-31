import express, {Request, Response} from "express";

export const index = async (req : Request , res :Response) =>  {
    res.render("client/pages/songs/index.pug",{
        pageTitle : "Danh sách bài hát"
    });
}