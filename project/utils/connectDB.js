import mongoose from "mongoose";

async function connectDB(){
    // try{
        if(mongoose.connections[0].readyState) return;

        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connect to DB");

    // }catch(err){
        //  console.log("Connection failed")
    // }
}

export default connectDB;