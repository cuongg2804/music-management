import {Router} from "express";
import * as Controller from "../../controller/admin/upload.controller";
const router :Router = Router();

import multer from "multer";
import * as uploadCloud from "../../middleware/uploadToCloud.middleware";


const upload = multer();


router.post("/" , 
    upload.single("file"),
    uploadCloud.uploadSingle,
    Controller.upload
);

export const uploadRouter : Router = router ;