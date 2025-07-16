import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB=async () => {
    try{
        const connetionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n mongoDB connected DB Host : ${connetionInstance.connection.host}`)

    } catch(error){
        console.log("MogoDb connetion fail ",error);
        process.exit(1);
    }
}

export default connectDB;