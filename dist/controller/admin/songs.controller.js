"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editPatch = exports.edit = exports.createPost = exports.create = exports.index = void 0;
var song_model_1 = __importDefault(require("../../models/song.model"));
var singer_model_1 = __importDefault(require("../../models/singer.model"));
var topic_model_1 = __importDefault(require("../../models/topic.model"));
var system_1 = require("../../config/system");
var index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var listSong;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, song_model_1.default.find({
                    deleted: false,
                    status: "active"
                })];
            case 1:
                listSong = _a.sent();
                res.render("admin/page/songs/index.pug", {
                    pageTitle: "Quản lý bài hát",
                    songs: listSong
                });
                return [2 /*return*/];
        }
    });
}); };
exports.index = index;
// GET /admin/songs/create
var create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var listSinger, listTopic;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, singer_model_1.default.find({
                    deleted: false,
                    status: "active"
                })];
            case 1:
                listSinger = _a.sent();
                return [4 /*yield*/, topic_model_1.default.find({
                        deleted: false,
                        status: "active"
                    })];
            case 2:
                listTopic = _a.sent();
                res.render("admin/page/songs/create", {
                    pageTitle: "Tạo mới bài hát",
                    topics: listTopic,
                    singers: listSinger
                });
                return [2 /*return*/];
        }
    });
}); };
exports.create = create;
// POST /admin/songs/create
var createPost = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var avatar, audio, songs, newSong;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                avatar = "";
                if (req.body.avatar) {
                    avatar = req.body.avatar[0];
                }
                audio = "";
                if (req.body.audio) {
                    audio = req.body.audio[0];
                }
                songs = {
                    title: req.body.title,
                    avatar: avatar,
                    description: req.body.description,
                    singerId: req.body.singerId,
                    topicId: req.body.topicId,
                    status: req.body.status,
                    audio: audio
                };
                newSong = new song_model_1.default(songs);
                return [4 /*yield*/, newSong.save()];
            case 1:
                _a.sent();
                res.redirect("/" + system_1.systemConfig.PREFIX_ADMIN + "/songs");
                return [2 /*return*/];
        }
    });
}); };
exports.createPost = createPost;
// GET /admin/songs/edit/:id
var edit = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var listSong, listSinger, listTopic;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, song_model_1.default.findOne({
                    _id: req.params.id,
                    deleted: false,
                    status: "active"
                })];
            case 1:
                listSong = _a.sent();
                return [4 /*yield*/, singer_model_1.default.find({
                        deleted: false,
                        status: "active"
                    })];
            case 2:
                listSinger = _a.sent();
                return [4 /*yield*/, topic_model_1.default.find({
                        deleted: false,
                        status: "active"
                    })];
            case 3:
                listTopic = _a.sent();
                res.render("admin/page/songs/edit.pug", {
                    pageTitle: "Sửa bài hát",
                    song: listSong,
                    topics: listTopic,
                    singers: listSinger
                });
                return [2 /*return*/];
        }
    });
}); };
exports.edit = edit;
// [POST] /admin/songs/edit/:id
var editPatch = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                if (req.body.avatar) {
                    req.body.avatar = req.body.avatar[0];
                }
                if (req.body.audio) {
                    req.body.audio = req.body.audio[0];
                }
                return [4 /*yield*/, song_model_1.default.updateOne({
                        _id: id,
                        status: "active",
                        deleted: false
                    }, req.body)];
            case 1:
                _a.sent();
                res.redirect("back");
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.redirect("back");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.editPatch = editPatch;
