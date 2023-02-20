import mongoose from "mongoose";

const post = new mongoose.Schema({
    name : {type : string , required : true},
    prompt :{type : string , required : true},
    photo :{type : string , required : true}
})

const postSchema = mongoose.model('Post' , post)
export default postSchema;