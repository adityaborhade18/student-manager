import mongoose from 'mongoose';

const connectDB=async(req,res)=>{
  try{
     await mongoose.connect(process.env.MONGO_URI);
     console.log("MongoDB connected successfully");
  }catch(err){
    console.error("MongoDB Connection Error:", err.message);
  }
}

export default connectDB;