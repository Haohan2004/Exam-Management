import express from "express";
import { getsubjectbyid, getsubjects } from "../Controller/SubjectController.js";
import { createsubject } from "../Service/SubjectService.js";
const Router = express.Router();
Router.get("/", getsubjects);
Router.get("/:id", getsubjectbyid);
//# sourceMappingURL=Subject.js.map