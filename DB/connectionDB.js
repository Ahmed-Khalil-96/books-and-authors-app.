import mongoose  from "mongoose";

const connection = async()=>{
    return await mongoose.connect("mongodb://localhost:27017/assignment8").then(()=>{
        console.log("Database connected");
    }).catch((err)=>{
        console.log("Database connection failed",err);
    })
}

export default connection