
import express from "express";
import dotenv from 'dotenv'
import { PrismaClient } from "@prisma/client";
import authRouter from './router/authRouter.ts'
import postRouter from './router//postRouter.ts'


dotenv.config()

const app = express()

export const prisma =new PrismaClient()

const port = process.env.PORT || 3000;
app.use(express.json())

app.use('/post',postRouter)
app.use('/user',authRouter)



app.listen(port, ()=>{
    console.log(`server runing on port ${port}`)
})
