require("dotenv").config({ path: ".env" })
const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const { connectDB } = require("./config/db")


connectDB()
const app = express()
app.use(express.json())
app.use(express.static("public"))
app.use(cors({
    // origin:"http://localhost:5173",
    origin: "https://my-portfolio-production-d0a6.up.railway.app/",
    credentials: true
}))
app.use("/contact", require("./routes"))

app.use("*",(req,res) =>{
    res.sendFile("public/index.html")
})

mongoose.connection.once("open", () => {
    console.log("DB CONNECTED");
})
mongoose.connection.on("error", err => {
    console.log("DB CONNECTION ERROR", err)
})


app.listen(process.env.PORT || 5000, err => {
    if (err) {
        return console.log("UNABLE TO START SERVER", err);
    }
    console.log(`SERVER RUNNING ON http://localhost:${process.env.PORT || 5000}`);
})