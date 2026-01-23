import { delsubject, getallsubjects, getsubjectwithid, upsubject } from "../Service/SubjectService.js";
export const getsubjects = async (req, res) => {
    try {
        let subject = await getallsubjects();
        res.json(subject);
    }
    catch (err) {
        res.status(400).json(err);
    }
};
export const getsubjectbyid = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const subject = await getsubjectwithid(id);
        res.json(subject);
    }
    catch (err) {
        res.status(400).json(err);
    }
};
export const deletesubject = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await delsubject(id);
        res.json("Subject deleted successfully.");
    }
    catch (err) {
        res.status(400).json(err);
    }
};
export const updatesubjectwithid = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const subject = { subjectid: id, subjectname: req.body.subjectname, grade: req.body.grade, groupid: req.body.groupid, is_delete: false };
        await upsubject(id, subject);
    }
    catch (err) {
        res.status(400).json(err);
    }
};
//# sourceMappingURL=SubjectController.js.map