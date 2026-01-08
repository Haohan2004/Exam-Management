import express from "express";
import {PrismaClient} from "@prisma/client/extension";
import {getsubject} from "../Controller/SubjectController.js";
const Prisma = PrismaClient();

const Router = express.Router();
Router.get('/',getsubject);

export default Router;