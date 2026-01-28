import express from 'express'
import {login_get, login_post, signup_get, signup_post} from "../Controller/authController.js";
const Router = express.Router();

Router.get('/signup',signup_get);
Router.get('/login',login_get)
Router.post('/signup',signup_post)
Router.post('/login',login_post)

export default Router