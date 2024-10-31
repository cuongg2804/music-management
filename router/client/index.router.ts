import {Express} from "express";
import {topicRouter} from "./topic.router";
import {songRouter} from "./song.router";

const routerClient = (app : Express) : void => {
    app.use("/topics",topicRouter);

    app.use("/songs",songRouter);
}

export default routerClient;