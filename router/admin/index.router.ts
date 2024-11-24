import {Express} from "express" ;
import {dashboardRouter} from "./dashboard.router";
import { topicsRouter } from "./topics.router";
import { systemConfig } from "../../config/system";
import { songRouters } from "./songs.router";
import { uploadRouter } from "./upload.router";

const routerAdmin = (app :Express ) : void =>{

    app.use(`/${systemConfig.PREFIX_ADMIN}/dashboard`,dashboardRouter);

    app.use(`/${systemConfig.PREFIX_ADMIN}/topics`,topicsRouter);

    app.use(`/${systemConfig.PREFIX_ADMIN}/songs`,songRouters);

    app.use(`/${systemConfig.PREFIX_ADMIN}/upload`,uploadRouter);
}

export default routerAdmin;