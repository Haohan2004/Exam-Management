import express  from "express";
import {
    createquestionController, deletequestionController,
    getallQuestionController,
    getquestionController, updateQuestionController
} from "../Controller/QuestionController.js";
const Router = express.Router();
Router.get('/', getallQuestionController);
Router.post('/', createquestionController);
Router.get('/:quesid', getquestionController);
Router.put('/:quesid', updateQuestionController);
Router.delete('/:quesid', deletequestionController);
export default Router;