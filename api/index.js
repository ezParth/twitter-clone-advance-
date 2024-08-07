const express = require('express');
const mongoose = require('mongoose')
const app = express()
const router = require("./router/router");
const cors = require("cors")

app.use(cors({credentials: true, origin: "http://localhost:5173"}))
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/microBlog')
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("Error in connecting to mongoDB"))

app.use("/", router);

app.listen(3000, () => {
    console.log(`App is listening on PORT 3000`);
})