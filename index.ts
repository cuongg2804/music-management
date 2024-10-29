import express,{Express, Request, Response} from "express";
import env from "dotenv";
import {connect} from "./config/database";
import routerClient from "./router/client/index.router";

env.config();
connect();
const app : Express = express();
app.use(express.static("public"));

//#region pug
app.set("views", "./views");
app.set("view engine", "pug");
//#endregion

routerClient(app);


const port: (number | string) = process.env.PORT || 3000 ;
app.listen(port, () =>{
    console.log("Đã kết nối tới cổng " + port);
})
