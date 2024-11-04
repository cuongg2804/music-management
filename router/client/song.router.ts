import {Router} from "express";
import * as controller from "../../controller/client/song.controller";
const router : Router = Router();

// GET /songs/nhac-tre

router.get("/:slugTopic",controller.index);

// GET /songs/detail/:slugSong

router.get("/detail/:slugSong",controller.detail);

// PATCH /songs/:idSong/:status
router.patch("/:idSong/:status",controller.like);


export const songRouter :Router = router ;