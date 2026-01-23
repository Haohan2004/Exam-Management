import { addsubject, deletesubject, getallsubject, getsubject, updatesubject } from "../Model/Subject.js";
export const getallsubjects = async () => {
    return await getallsubject();
};
export const getsubjectwithid = async (id) => {
    return await getsubject(id);
};
export const createsubject = async (subject) => {
    return await addsubject(subject);
};
export const delsubject = async (id) => {
    return await deletesubject(id);
};
export const upsubject = async (id, subject) => {
    return await updatesubject(id, subject);
};
//# sourceMappingURL=SubjectService.js.map