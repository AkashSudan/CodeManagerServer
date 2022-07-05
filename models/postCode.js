import mongoose from 'mongoose';
const postSchema=mongoose.Schema({
    title: String,
    code: String,
    author: {
        type:String,
        default:""
    },
    createdAt:{
        type: Date,
        default: new Date()
    },
    language:{
        type: String,
        default: "cpp"
    }
});
const PostCode=mongoose.model('PostCode',postSchema);
export default PostCode;