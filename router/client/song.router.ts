import {Router} from "express";
import * as controller from "../../controller/client/song.controller";
const router : Router = Router();

router.get("/",controller.index);

export const songRouter :Router = router ;