import express from "express";
import {
    createsubjectController,
    deletesubjectController,
    getsubjectbyid,
    getsubjects, updatesubjectwithid
} from "../Controller/SubjectController.js";
const Router = express.Router();
Router.get("/", getsubjects).post("/", createsubjectController);

Router.get("/:id",getsubjectbyid).delete("/:id",deletesubjectController).put("/:id",updatesubjectwithid);


export default Router;