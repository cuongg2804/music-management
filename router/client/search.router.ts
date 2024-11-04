import {Router} from "express";
import * as controller from "../../controller/client/search.controller";
const router : Router = Router();

// GET /search/result

router.get("/:type",controller.type);

export const searchRouter : Router = router ;