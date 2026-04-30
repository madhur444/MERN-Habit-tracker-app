import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import route from "./routes/userRoutes.js"
const app = express()
dotenv.config()
app.use(express.json())
app.use("/api/user",route)
app.get("/", (req, res) => {
    res.send("hello this is my habbit app")
})
connectDB()
app.listen(process.env.PORT,()=>{console.log(`Your server ${process.env.PORT} has been started`)})