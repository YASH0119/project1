import 'dotenv/config'
import cookieParser from 'cookie-parser'
import cors from "cors"
import connectDB from "./db/dbconnect.js"
import express from "express"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("server is running on ",PORT);
    connectDB()

})