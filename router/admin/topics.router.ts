import {Router} from "express";
import * as Controller from "../../controller/admin/topics.controller";
const router :Router = Router();

router.get("/" , Controller.index);

export const topicsRouter : Router = router ;