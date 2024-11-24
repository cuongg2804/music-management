"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var database_1 = require("./config/database");
var index_router_1 = __importDefault(require("./router/client/index.router"));
var index_router_2 = __importDefault(require("./router/admin/index.router"));
var body_parser_1 = __importDefault(require("body-parser"));
var system_1 = require("./config/system");
var method_override_1 = __importDefault(require("method-override"));
var path_1 = __importDefault(require("path"));
dotenv_1.default.config();
(0, database_1.connect)();
var app = (0, express_1.default)();
app.set('views', "".concat(__dirname, "/views"));
app.use((0, method_override_1.default)('_method'));
//#region pug
app.set('views', "".concat(__dirname, "/views"));
app.set("view engine", "pug");
//#endregion
app.locals.prefixAdmin = system_1.systemConfig.PREFIX_ADMIN;
app.use('/tinymce', express_1.default.static(path_1.default.join(__dirname, 'node_modules', 'tinymce')));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
(0, index_router_1.default)(app);
(0, index_router_2.default)(app);
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Đã kết nối tới cổng " + port);
});
