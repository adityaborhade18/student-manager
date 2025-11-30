import express from 'express'
const app=express();
import cors from 'cors'
import connectDB from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();

connectDB();
app.use(express.json());
app.use(cors());


const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
