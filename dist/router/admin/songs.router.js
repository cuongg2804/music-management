"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.songRouters = void 0;
var express_1 = require("express");
var controller = __importStar(require("../../controller/admin/songs.controller"));
var multer_1 = __importDefault(require("multer"));
var uploadCloud = __importStar(require("../../middleware/uploadToCloud.middleware"));
var createMiddlewares = __importStar(require("../../middleware/create.middlewares"));
var router = (0, express_1.Router)();
var upload = (0, multer_1.default)();
router.get("/", controller.index);
// [GET] /admin/songs/create
router.get("/create", controller.create);
// [POST] /admin/songs/create
router.post("/create", upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'audio', maxCount: 1 }
]), uploadCloud.uploadFields, createMiddlewares.uploadSong, controller.createPost);
// [GET] /admin/songs/edit/:id
router.get("/edit/:id", controller.edit);
// [POST] /admin/songs/edit/:id
router.patch("/edit/:id", upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'audio', maxCount: 1 }
]), uploadCloud.uploadFields, createMiddlewares.uploadSong, controller.editPatch);
exports.songRouters = router;
