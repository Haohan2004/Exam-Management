import express from "express";
import {getsubjectbyid, getsubjects} from "../Controller/SubjectController.js";
const Router = express.Router();
Router.get("/", getsubjects)
Router.get("/:id",getsubjectbyid)
Router.post("/",c)