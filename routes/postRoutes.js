import express from 'express';
import * as dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary'

import post from '../mongodb/models/post.js'

dotenv.config()

const router = express.Router()

cloudinary.config({
    cloud_name : process.env.CL_CLOUD_NAME,
    api_key : process.env.CL_CLOUD_API,
    api_secret : process.env.CL_CLOUD_API_SECRET,
})


//get all


//create post

router.route('/').post(async(req,res)=>{
    try {
        const {name , photo , prompt} = req.body
        const photoUrl =await cloudinary.uploader.upload(photo)
        const newPost = await post.create({
            name,
            prompt,
            photo : photoUrl.url,
        })
        res.status(201).json({ success : true , data : newPost})
        
    } catch (error) {

        res.status(500).json({success : false , message : error})
        
    }
})

export default router;