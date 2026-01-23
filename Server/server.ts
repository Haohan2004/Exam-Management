import express from 'express';
import groupRouter from "./src/Route/Group.js"
import subjectRouter from "./src/Route/Subject.js"
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.json("hello world");
})
app.use("/group",groupRouter);
app.use("/subject",subjectRouter)
app.listen(8080,()=>{console.log('Server is running on port 8080000000000')});