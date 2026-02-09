import express from "express";
import {
    createsubjectController,
    deletesubjectController,
    getsubjectbyid,
    getsubjects, updatesubjectwithid
} from "../Controller/SubjectController.js";
import {createNewSubject} from "../Validations/SubjectValidation.js";
const Router = express.Router();
Router.get("/", getsubjects).post("/", createNewSubject,createsubjectController);

Router.get("/:id",getsubjectbyid).delete("/:id",deletesubjectController).put("/:id",createNewSubject,updatesubjectwithid);


export default Router;