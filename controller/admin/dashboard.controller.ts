import { Request, Response } from "express";

export const index = (req : Request , res : Response) => {
    res.render("admin/page/index.pug",{
        pageTitle : "Trang quản lý"
    });
}