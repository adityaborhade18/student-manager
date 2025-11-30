import express from 'express'
const app=express();
import cors from 'cors'
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import studentRouter from './routes/studentRoutes.js';
dotenv.config();

const PORT=process.env.PORT || 5000;

const allowedOrigins = ['http://localhost:5173'];

app.use(express.json());
app.use(cors({origin: allowedOrigins, credentials: true}));

connectDB();

app.use("/api/students", studentRouter);

app.get("/", (req, res) => {
  res.send("API is running...");
});


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
