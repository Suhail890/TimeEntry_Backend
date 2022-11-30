const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const entrysModle=require("./models/entrys");
const { json } = require("body-parser");

const app = express();

app.use(cors());
app.use(json())

mongoose
  .connect("mongodb://localhost:27017/timeentry")
  .then(() => console.log("DB is connected......"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("<h1>My Home wrapper is ready</h1>");
});
app.post("/entries",async(req,res)=>{
    const result= new entrysModle(req.body)
    result.save()
    res.send("Successfully added.........")
})
app.get("/allentry",async(req,res)=>{
    const result= await entrysModle.find({})
    res.send(result)
})

const server = app.listen(3030, () => {
  console.log("Server is ready to use on port 3030");
});
