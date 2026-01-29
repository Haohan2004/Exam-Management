import express from 'express';
import groupRouter from "./src/Route/Group.js"
import subjectRouter from "./src/Route/Subject.js"
import authRouter from "./src/Route/Auth.js"
import questionRouter from "./src/Route/Question.js"
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.json("chello world");
})
app.use("/group",groupRouter);
app.use("/subject",subjectRouter);
app.use("/auth",authRouter);
app.use("/question",questionRouter);
app.listen(8080,()=>{console.log('Server is running on port 8080000000000')});