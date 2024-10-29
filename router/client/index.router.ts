import {Express} from "express";
import {topicRouter} from "./topic.router";


const routerClient = (app : Express) : void => {
    app.use("/topics",topicRouter);
}

export default routerClient;