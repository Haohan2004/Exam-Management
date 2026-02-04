import express from "express";
import {
    createchapterController, deletechapterController,
    getallchapterController,
    getchapterController,
    updatechapterController
} from "../Controller/ChapterController.js";
const Router = express.Router();
Router.get("/",getallchapterController).post("/", createchapterController);
Router.get("/:chapid",getchapterController).put("/:chapid", updatechapterController).delete("/:chapid",deletechapterController);
export default Router;