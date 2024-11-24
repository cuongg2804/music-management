import { Request, Response, NextFunction } from "express";


export const uploadSong = async (req : Request, res : Response, next : NextFunction) =>{
    const title : string = (req.body.title).trim(' ');
 
    if(title == ""){
        res.redirect("back");
        return; 
    }
    next();
}