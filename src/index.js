//require('dotenv').config({path: './env'});

import dotenv from 'dotenv';
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from './db/index.js';
 //%%%%% Second Approuch 

dotenv.config({
    path:'./.env'
})


connectDB();


















// %%%%%First Approch using IIFE of JS for function

// import express from "express";
// const app = express();

// (async () => {
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//        app.on("error" , () => {
//         console.log("ERROR" , error);
//         throw error;
//        })

//        app.listen(process.env.PORT, () =>{
//         console.log(`App is listen on ${process.env.PORT}`);
//        })

//     }  catch(eror)  {
//         console.log("Error: ",eror)
//         throw error;
//     }
// })();
