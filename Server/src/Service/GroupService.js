import { addgroup, deletegroup, getallgroup, getgroupid, updategroup } from "../Model/Group.js";
export const getgroup = async () => {
    return await getallgroup();
};
export const createGroup = (groupname) => {
    return addgroup(groupname);
};
export const getgroupwithid = async (id) => {
    return await getgroupid(id);
};
export const delgroup = async (id) => {
    return await deletegroup(id);
};
export const updategr = async (id, group) => {
    return await updategroup(id, group);
};
//# sourceMappingURL=GroupService.js.map