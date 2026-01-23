import express from 'express';
import { addagroup, deletegroupwithid, getallgroups, getgroupbyid, updategroupid } from "../Controller/GroupController.js";
const Router = express.Router();
Router.get('/', getallgroups);
Router.post('/', addagroup);
Router.get('/:id', getgroupbyid);
Router.delete('/:id', deletegroupwithid);
Router.put('/:id', updategroupid);
export default Router;
//# sourceMappingURL=Group.js.map