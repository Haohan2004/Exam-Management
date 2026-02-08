import express from 'express';
import {
    addagroup,
    deletegroupwithid,
    getallgroups,
    getgroupbyid,
    updategroupid
} from "../Controller/GroupController.js";
import {createNew} from "../Validations/GroupValidation.js";
const Router = express.Router();
Router.get('/',getallgroups);
Router.post('/',createNew,addagroup);
Router.get('/:id',getgroupbyid);
Router.delete('/:id',deletegroupwithid);
Router.put('/:id',createNew,updategroupid);
export default Router