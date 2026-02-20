const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"));

app.use("/api/experts", require("./routes/expertRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));

const server = app.listen(5000, ()=>{
  console.log("Server running on port 5000");
});

const io = require("socket.io")(server,{
  cors:{origin:"*"}
});

global.io = io;

io.on("connection",(socket)=>{
  console.log("User connected:",socket.id);
});