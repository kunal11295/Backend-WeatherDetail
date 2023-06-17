import mongoose from "mongoose";
import { Schema } from "mongoose";

const data = new Schema
({
    name:String,
    email:String,
    password:String
})

export default mongoose.model("datas",data)