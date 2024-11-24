"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dashboard_router_1 = require("./dashboard.router");
var topics_router_1 = require("./topics.router");
var system_1 = require("../../config/system");
var songs_router_1 = require("./songs.router");
var upload_router_1 = require("./upload.router");
var routerAdmin = function (app) {
    app.use("/".concat(system_1.systemConfig.PREFIX_ADMIN, "/dashboard"), dashboard_router_1.dashboardRouter);
    app.use("/".concat(system_1.systemConfig.PREFIX_ADMIN, "/topics"), topics_router_1.topicsRouter);
    app.use("/".concat(system_1.systemConfig.PREFIX_ADMIN, "/songs"), songs_router_1.songRouters);
    app.use("/".concat(system_1.systemConfig.PREFIX_ADMIN, "/upload"), upload_router_1.uploadRouter);
};
exports.default = routerAdmin;
