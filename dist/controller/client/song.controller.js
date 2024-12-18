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
exports.listenPatch = exports.like = exports.detail = exports.index = void 0;
var topic_model_1 = __importDefault(require("../../models/topic.model"));
var song_model_1 = __importDefault(require("../../models/song.model"));
var singer_model_1 = __importDefault(require("../../models/singer.model"));
var index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var slugTopic, idTopic, listSong, _i, listSong_1, song, singer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                slugTopic = req.params.slugTopic;
                return [4 /*yield*/, topic_model_1.default.findOne({
                        slug: slugTopic,
                        status: "active",
                        deleted: false
                    }).select("id title")];
            case 1:
                idTopic = _a.sent();
                return [4 /*yield*/, song_model_1.default.find({
                        topicId: idTopic.id,
                        status: "active",
                        deleted: false
                    }).select("avatar title singerId like slug").sort({ like: "desc" })];
            case 2:
                listSong = _a.sent();
                _i = 0, listSong_1 = listSong;
                _a.label = 3;
            case 3:
                if (!(_i < listSong_1.length)) return [3 /*break*/, 6];
                song = listSong_1[_i];
                return [4 /*yield*/, singer_model_1.default.findOne({
                        _id: song.singerId,
                        deleted: false,
                        status: "active"
                    }).select("fullName")];
            case 4:
                singer = _a.sent();
                song["singer"] = singer;
                _a.label = 5;
            case 5:
                _i++;
                return [3 /*break*/, 3];
            case 6:
                res.render("client/pages/songs/index.pug", {
                    pageTitle: "Danh sách bài hát",
                    listSong: listSong
                });
                return [2 /*return*/];
        }
    });
}); };
exports.index = index;
// GET /songs/detail/:slugSong
var detail = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var slugSong, detailSong, topic, singer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                slugSong = req.params.slugSong;
                return [4 /*yield*/, song_model_1.default.findOne({
                        slug: slugSong,
                        status: "active",
                        deleted: false
                    })];
            case 1:
                detailSong = _a.sent();
                return [4 /*yield*/, topic_model_1.default.findOne({
                        _id: detailSong.topicId,
                        status: "active",
                        deleted: false
                    }).select("title")];
            case 2:
                topic = _a.sent();
                detailSong["topic"] = topic;
                return [4 /*yield*/, singer_model_1.default.findOne({
                        _id: detailSong.singerId,
                        deleted: false,
                        status: "active"
                    }).select("fullName")];
            case 3:
                singer = _a.sent();
                detailSong["singer"] = singer;
                res.render("client/pages/songs/detail.pug", {
                    pageTitle: detailSong.title,
                    detailSong: detailSong
                });
                return [2 /*return*/];
        }
    });
}); };
exports.detail = detail;
// PATCH /songs/:idSong/:status
var like = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var Status, id, song, updateLike;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                Status = req.params.status;
                id = req.params.idSong;
                return [4 /*yield*/, song_model_1.default.findOne({
                        _id: id,
                        deleted: false,
                        status: "active"
                    })];
            case 1:
                song = _a.sent();
                updateLike = Status == "liked" ? song.like + 1 : song.like - 1;
                return [4 /*yield*/, song_model_1.default.updateOne({
                        _id: id,
                        deleted: false,
                        status: "active"
                    }, {
                        like: updateLike
                    })];
            case 2:
                _a.sent();
                res.json({
                    code: 200,
                    message: "Đã thích",
                    like: updateLike
                });
                return [2 /*return*/];
        }
    });
}); };
exports.like = like;
// PATCH /songs/listen/${idSong}
var listenPatch = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, song, Newlisten;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, song_model_1.default.findOne({
                        _id: id,
                        deleted: false,
                        status: "active"
                    })];
            case 1:
                song = _a.sent();
                Newlisten = song.listen + 1;
                return [4 /*yield*/, song_model_1.default.updateOne({
                        _id: id,
                        deleted: false,
                        status: "active"
                    }, {
                        listen: Newlisten
                    })];
            case 2:
                _a.sent();
                res.json({
                    code: 200,
                    message: "Thành công",
                    listen: Newlisten
                });
                return [2 /*return*/];
        }
    });
}); };
exports.listenPatch = listenPatch;
