import mongoose from "mongoose";
import PostCode from "../models/postCode.js";
export const getPosts=async(req,res)=>{
    try{
        const postCodes=await PostCode.find();
        res.status(200).json(postCodes);
    }
    catch(error){res.status(404).json({message:error.message})};
};
export const createCode=async(req,res)=>{
    const code=req.body;
    const newCode=PostCode(code);
    try{newCode.save();
    res.status(201).json(newCode);
    }
    catch(error){res.status(409).json({message:error.message})};
}
export const deleteCode= async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post With this id");
    await PostCode.findByIdAndRemove(id);
    res.json({message:"Code deleted Succesfully"});
}