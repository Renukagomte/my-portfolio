require("dotenv").config({ path: ".env" })
const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const { connectDB } = require("./config/db")
const path = require("path")

connectDB()
const app = express()
app.use(express.json())
app.use(express.static("public"))
app.use(cors({
    // origin:"http://localhost:5173",
    origin: "https://portfolio-kxjs.onrender.com/",
    credentials: true
}))
app.use("/contact", require("./routes"))



mongoose.connection.once("open", () => {
    console.log("DB CONNECTED");
})
mongoose.connection.on("error", err => {
    console.log("DB CONNECTION ERROR", err)
})

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
})
app.listen(process.env.PORT || 5000, err => {
    if (err) {
        return console.log("UNABLE TO START SERVER", err);
    }
    console.log(`SERVER RUNNING ON http://localhost:${process.env.PORT || 5000}`);
})
