import {Button, Input, Select} from "antd";
import {useEffect, useState} from "react";
import {  toast } from 'react-toastify';
interface subjectdataType{
    subjectid: number;
    subjectname: string;
    grade: number;
    groupid: number;
}
interface EditSubjectFormProps {
    subject:subjectdataType,
    seteditform: (value: boolean) => void;
    fetchsubject: () => void;
}

const EditSubjectForm = ({subject,seteditform,fetchsubject}:EditSubjectFormProps) =>{

    const [datagroup, setDatagroup] = useState<any[]>([]);
    const [subjectname, setSubjectname] = useState("");
    const [grade, setGrade] = useState("");
    const [groupid, setGroupid] = useState("");
    const editsubject = async (e:React.MouseEvent) => {
        e.preventDefault();
        if (!subjectname) {
            toast.error("Tên môn học không được để trống")
        } else if (!grade) {
            toast.error("lớp học không được để trống")
        } else if (isNaN(parseInt(grade))) {
            toast.error("Lớp học phải là số")
        } else if (!groupid) {
            toast.error("Tổ hợp môn không được để trống")
        } else {

            const subjectTemp = {subjectname: subjectname, grade: parseInt(grade), groupid: parseInt(groupid)}
            try {
                const response = await fetch(`http://localhost:8080/subject/${subject.subjectid}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(subjectTemp),

                })
                if (!response.ok) {
                    toast.error("Sửa môn học không thành công!")
                } else {
                    toast.success("Sửa môn học thành công")
                    fetchsubject()
                    seteditform(false)
                }
            }
            catch (err) {
                console.log(err);
            }
        }
    }

    useEffect(() => {
            const fetchdatagroup = async () => {
                const reponse = await fetch('http://localhost:8080/group')
                const data = await reponse.json()
                setDatagroup(data)

            }
            fetchdatagroup()
        }
        , []);
    useEffect(() => {
        const loaddata = () =>{
            setSubjectname(subject.subjectname);
            setGrade(subject.grade.toString());
            setGroupid(subject.groupid.toString());
        }
        loaddata()
    }, []);

    return(
        <>

            <div className="  border-3 w-[25vw] h-[40vh] flex-col  rounded-[10px] overflow-hidden bg-white">
                <div className="w-full h-[12%]  p-[10px] bg-blue-500 ">
                    <p className="text-[2vh]    text-white font-['Roboto']">Sửa môn học</p>
                </div>
                <div className="p-[3vh]">
                    <p>Tên môn học</p>
                    <Input placeholder="Nhập tên môn học...." className=" !my-2 !w-[22vw]" value={subjectname} onChange={(e) => setSubjectname(e.target.value)}/>
                    <p>Lớp</p>
                    <Input placeholder="Nhập Lớp...." className=" !my-2 !w-[22vw]" value={grade} onChange={(e) => setGrade(e.target.value)}/>

                    <p>Tổ hợp môn</p>
                    <Select
                        showSearch={{ optionFilterProp: "groupname", }}
                        placeholder="Chọn mã tổ hợp...."
                        options={datagroup}
                        value={groupid}
                        fieldNames={{
                            label: 'groupname',
                            value: 'groupid'
                        }
                        }
                        onChange={(value) => setGroupid(value) }
                        className="!my-2 !w-[22vw]"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <Button color="primary" variant="solid" className="mx-4" onClick={(e:React.MouseEvent)=>{editsubject(e)}} >Thêm</Button>
                    <Button color="danger" variant="solid" onClick={()=>{seteditform(false)}} >Đóng</Button>

                </div>
            </div>
        </>
    )
}
export default EditSubjectForm