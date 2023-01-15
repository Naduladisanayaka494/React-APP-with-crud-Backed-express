import express from  "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "../backend/routes/productRoutes.js";
dotenv.config()

const app= express();
app.use(cors());
app.use(express.json());
app.use(productRoutes);


app.listen(process.env.APP_PORT,()=>{
    console.log('server up and  running....')
});


