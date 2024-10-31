import mongoose from "mongoose";
import { topic } from "../controller/client/topic.controller";

const songSchema = new mongoose.Schema(
    {
      title : String,
      avatar : String,
      description : String,
      singerId : String,
      topicId : String,
      like : Number,
      lyrics :  String,
      audio : String,
      slug : String
    }
)