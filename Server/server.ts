import express from 'express';
import groupRouter from "./src/Route/Group.js"
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.json("hello world");
})
app.use("/group",groupRouter)
app.listen(8080,()=>{console.log('Server is running on port 8080000000000')});