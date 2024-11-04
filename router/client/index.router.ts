import {Express} from "express";
import {topicRouter} from "./topic.router";
import {songRouter} from "./song.router";
import {searchRouter} from "./search.router";

const routerClient = (app : Express) : void => {
    app.use("/topics",topicRouter);

    app.use("/songs",songRouter);
    
    app.use("/search",searchRouter);
}

export default routerClient;