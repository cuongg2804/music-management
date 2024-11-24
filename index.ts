import express,{Express, Request, Response} from "express";
import env from "dotenv";
import {connect} from "./config/database";

import routerClient from "./router/client/index.router";
import routerAdmin from "./router/admin/index.router";
import bodyParser from "body-parser";
import {systemConfig} from"./config/system";
import methodOverride from "method-override";
import path from "path";
env.config();
connect();
const app : Express = express();
app.set('views', `${__dirname}/views`);

app.use(methodOverride('_method'));
//#region pug
app.set('views', `${__dirname}/views`);
app.set("view engine", "pug");
//#endregion
app.locals.prefixAdmin = systemConfig.PREFIX_ADMIN;
app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

routerClient(app);
routerAdmin(app);

const port: (number | string) = process.env.PORT || 3000 ;
app.listen(port, () =>{
    console.log("Đã kết nối tới cổng " + port);
})
