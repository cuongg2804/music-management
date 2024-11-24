"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var topic_router_1 = require("./topic.router");
var song_router_1 = require("./song.router");
var search_router_1 = require("./search.router");
var routerClient = function (app) {
    app.use("/topics", topic_router_1.topicRouter);
    app.use("/songs", song_router_1.songRouter);
    app.use("/search", search_router_1.searchRouter);
};
exports.default = routerClient;
