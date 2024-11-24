import { Router } from "express";
import * as controller from "../../controller/admin/songs.controller";
import multer from "multer";
import * as uploadCloud from "../../middleware/uploadToCloud.middleware";
import * as createMiddlewares from "../../middleware/create.middlewares";
const router: Router = Router();

const upload = multer();

router.get("/", controller.index);

// [GET] /admin/songs/create
router.get("/create", controller.create);

// [POST] /admin/songs/create
router.post("/create",

    upload.fields([
        { name: 'avatar', maxCount: 1 },
        { name: 'audio', maxCount: 1 }
    ]),
    uploadCloud.uploadFields,
    createMiddlewares.uploadSong,
    controller.createPost
);

// [GET] /admin/songs/edit/:id
router.get("/edit/:id", controller.edit);

// [POST] /admin/songs/edit/:id

router.patch("/edit/:id",
    upload.fields([
        { name: 'avatar', maxCount: 1 },
        { name: 'audio', maxCount: 1 }
    ]),
    uploadCloud.uploadFields,
    createMiddlewares.uploadSong,
    controller.editPatch
);

export const songRouters: Router = router;