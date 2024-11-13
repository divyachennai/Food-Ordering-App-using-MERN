import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://divya:Divya@cluster0.6kggv.mongodb.net/project').then(()=>{
       console.log('DB connected') ;
    })
}