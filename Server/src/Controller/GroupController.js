import { createGroup, delgroup, getgroup, getgroupwithid } from "../Service/GroupService.js";
import { prisma } from "../lib/prisma.js";
import { updategroup } from "../Model/Group.js";
export const getallgroups = async (req, res) => {
    try {
        const groups = await getgroup();
        res.json(groups);
    }
    catch (err) {
        res.status(400).json(err);
    }
};
export const addagroup = async (req, res) => {
    try {
        await createGroup(req.body.groupname);
        res.json("Group created successfully");
    }
    catch (err) {
        res.status(400).json(err);
    }
};
export const getgroupbyid = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const group = await getgroupwithid(id);
        res.json(group);
    }
    catch (err) {
        res.status(400).json(err);
    }
};
export const deletegroupwithid = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await delgroup(id);
        res.json("Group deleted successfully");
    }
    catch (err) {
        res.status(400).json(err);
    }
};
export const updategroupid = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const groupname = req.body.groupname;
        const group = { groupid: 0, groupname: groupname, is_delete: false };
        await updategroup(id, group);
        res.json("Group updated successfully");
    }
    catch (err) {
        res.status(400).json(err);
    }
};
//# sourceMappingURL=GroupController.js.map