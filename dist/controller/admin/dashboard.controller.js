"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
var index = function (req, res) {
    res.render("admin/page/index.pug", {
        pageTitle: "Trang quản lý"
    });
};
exports.index = index;
