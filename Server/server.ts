import express from 'express';
// @ts-ignore
import subjectRouter from "./Route/Subject.ts";
const app = express();

app.use(express.json());


app.get("/",(req,res)=>{
    res.json("hello world");
})
app.use("/subject",subjectRouter)
app.listen(8080,()=>{console.log('Server is running on port 8080000000000')});