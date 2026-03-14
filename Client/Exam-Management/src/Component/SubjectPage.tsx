import {Button, Input, Select, Table} from "antd";
import {useEffect, useRef, useState} from "react";
import type { ColumnsType } from 'antd/es/table';
import AddSubjectForm from "./Dialog/AddSubjectForm.tsx";
import {ToastContainer} from "react-toastify";
import {InfoCircleFilled} from "@ant-design/icons";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditSubjectForm from "./Dialog/EditSubjectForm.tsx";
import Swal from 'sweetalert2'
import ChapterPage from "./ChapterPage.tsx";
const SubjectPage = () => {
    interface subjectDataType{
        subjectid: number;
        subjectname: string;
        grade: number
        groupid: number
    }


    const columns:ColumnsType<subjectDataType> = [
        {
            title: 'ID',
            dataIndex: 'subjectid',
            key: 'quesid',
            align: 'center',
        },
        {
            title: 'Tên môn học',
            dataIndex: 'subjectname',
            key: 'subjectname',
            align: 'center',

        },
        {
            title: 'Lớp',
            dataIndex: 'grade',
            key: 'grade',
            align: 'center',

        },
        {
            title: 'Mã Tổ hợp',
            dataIndex: 'groupid',
            key: 'groupid',
            align: 'center',

        },


        {
            title: 'Thao tác',
            render: ( record) => (
                <div >
                    <div className="flex justify-center">
                <button className="w-[2vw] h-[4vh] flex justify-center mx-2 !bg-gray-100 !rounded-[0px] hover:!border-black" onClick={()=>{openchapterform(record.subjectid)}}><InfoCircleFilled /></button>
                        <button className="w-[2vw] flex justify-center mx-2 !bg-gray-100 !rounded-[0px] hover:!border-black" onClick={()=>{openeditform(record)}}><EditIcon/></button>
                        <button className="w-[2vw] flex justify-center mx-2 !bg-gray-100  !rounded-[0px] hover:!border-black" onClick={()=>{deletesubject(record.subjectid)}}><DeleteIcon/></button>
                    </div>
.
                </div>
            ),
            align: 'center',


        },
    ];
    const [dataquestion, setDataquestion] = useState([]);
    const [isopenform, setOpenform] = useState(false);
    const [isopeneditform, setOpeneditform] = useState(false);
    const [isopenchapter, setOpenchapter] = useState(false);
    const [subject, setSubject] = useState({});
    const [subjectid, setSubjectid] = useState(0);
    const [search, setSearch] = useState("");
    const form = useRef(null);
    const onChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value: string) => {
        console.log('search:', value);
    };

    const openform = () =>{
        setOpenform(true);
        form.current.style.filter="blur(5px)"
        form.current.style.pointerEvents='none'
    }
    const openeditform = (subject:subjectDataType) =>{
        setOpeneditform(true);
        setSubject(subject);
        form.current.style.filter="blur(5px)"
        form.current.style.pointerEvents='none'
    }
    const openchapterform = (subjectid:number) =>{
        setSubjectid(subjectid);
        setOpenchapter(true);
        form.current.style.filter="blur(5px)"
        form.current.style.pointerEvents='none'
    }
    const fetchdata = async () =>{
        const response = await fetch("http://localhost:8080/subject");
        const data = await response.json();
        setDataquestion(data);
    }
    const deletesubject = async (subjectid:number)=>{
        Swal.fire({
            title: "Bạn muốn xóa môn học này không?",
            text: "Môn học sau khi xóa không thể hoàn tác!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText:"Đóng",
            confirmButtonText: "Xóa"
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Xóa môn học thành công",
                    text: "Môn học đã được xóa",
                    icon: "success"
                });
                const response = await fetch(`http://localhost:8080/subject/${subjectid}`,{
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },

                })
                fetchdata()
            }

        });

    }
    // const searchSubject = () =>{
    //     if(search=="")
    //     {
    //         setDatatable(dataquestion)
    //     }
    //     else {
    //         const searchsubject = dataquestion.filter((item: subjectDataType) => item.subjectname.toLowerCase().trim().includes(search.toLowerCase().trim()))
    //         setDatat(searchsubject)
    //     }
    // }
    useEffect(() => {
        const fetchdata = async () =>{
            const response = await fetch("http://localhost:8080/subject");
            const data = await response.json();
            setDataquestion(data);
        }
        fetchdata()
    }, []);
    useEffect(() => {
        if(isopenform==false) {
            form.current.style.filter = "none"
            form.current.style.pointerEvents = 'auto'
        }
    }, [isopenform]);
    useEffect(() => {
        if(isopeneditform==false) {
            form.current.style.filter = "none"
            form.current.style.pointerEvents = 'auto'
        }
    }, [isopeneditform]);
    useEffect(() => {
        if(isopenchapter==false) {
            form.current.style.filter = "none"
            form.current.style.pointerEvents = 'auto'
        }
    }, [isopenchapter]);
    // useEffect(() => {
    //         searchSubject()
    //
    // }, [search]);


    return (
        <>
            <div className="bg-[#F0F2F5] h-screen w-screen" ref={form} >
                <div className="mx-[20vw] my-[10vh] absolute  w-[75vw]  rounded-[2px] bg-white" >
                    <div className="h-[6vh] flex justify-between bg bg-gray-200 p-4 ">
                        <label className="font-bold">Tất cả môn học</label>
                        <Button type="primary" className="!p-4" onClick={() =>{openform()}}>+ THÊM MÔN HỌC MỚI</Button>
                    </div>
                    <Input placeholder="Nhập tên môn học...." className="!m-5 !w-[15vw]" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                    <Select
                        showSearch={{ optionFilterProp: 'label', onSearch }}
                        placeholder="Chọn lớp...."
                        onChange={onChange}
                        options={[
                            {
                                value: 'jack',
                                label: 'Jack',
                            },
                            {
                                value: 'lucy',
                                label: 'Lucy',
                            },
                            {
                                value: 'tom',
                                label: 'Tom',
                            },
                        ]} className="!m-5 !w-[15vw]"
                    />

                    <Select
                        showSearch={{ optionFilterProp: 'label', onSearch }}
                        placeholder="Chọn mã tổ hợp...."
                        onChange={onChange}
                        options={[
                            {
                                value: 'jack',
                                label: 'Jack',
                            },
                            {
                                value: 'lucy',
                                label: 'Lucy',
                            },
                            {
                                value: 'tom',
                                label: 'Tom',
                            },
                        ]} className="!m-5 !w-[15vw]"
                    />
                    <Table columns={columns} dataSource={dataquestion} pagination={{pageSize:5}}  />
                </div>


            </div>
            <div className={`
    fixed left-1/2 -translate-x-1/2 z-50 
    transition-all duration-500 ease-out
    ${(isopenform || isopeneditform||isopenchapter)
                ? 'top-20 opacity-100 scale-100'
                : 'top-0 opacity-0 scale-95 pointer-events-none'}
`}>
                {isopenchapter && <ChapterPage setchapterform={setOpenchapter} subject={subjectid}/>}
                {isopenform && <AddSubjectForm setopenform={setOpenform} fetchsubject={fetchdata}/>}
                {isopeneditform && <EditSubjectForm subject={subject} seteditform = {setOpeneditform} fetchsubject={fetchdata}/>}
            </div>
            <ToastContainer position="bottom-left" />
        </>
    )
}
export default SubjectPage