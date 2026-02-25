import {Button, Input, Select, Table} from "antd";
import {useEffect, useRef, useState} from "react";
import type { ColumnsType } from 'antd/es/table';
import AddSubjectForm from "./Dialog/AddSubjectForm.tsx";
import {ToastContainer} from "react-toastify";
import {InfoCircleFilled} from "@ant-design/icons";

const SubjectPage = () => {
    interface subjectDataType{
        subjectId: number;
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
            render: (text, record) => (
                <div >
                    <div className="flex justify-center">
                <button className="w-[2vw] h-[4vh] flex justify-center mx-2 !bg-gray-100 !rounded-[0px] hover:!border-black"><InfoCircleFilled /></button>
                        <button className="w-[2vw] flex justify-center mx-2 !bg-gray-100 !rounded-[0px] hover:!border-black"><InfoCircleFilled /></button>
                        <button className="w-[2vw] flex justify-center mx-2 !bg-gray-100  !rounded-[0px] hover:!border-black"><InfoCircleFilled /></button>
                    </div>

                </div>
            ),
            align: 'center',


        },
    ];
    const [dataquestion, setDataquestion] = useState([]);
    const [isopenform, setOpenform] = useState(false);
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
    }
    const fetchdata = async () =>{
        const response = await fetch("http://localhost:8080/subject");
        const data = await response.json();
        setDataquestion(data);
    }
    useEffect(() => {
        const fetchdata = async () =>{
            const response = await fetch("http://localhost:8080/subject");
            const data = await response.json();
            setDataquestion(data);
        }
        fetchdata()
    }, []);
    useEffect(() => {
        if(isopenform==false)
            form.current.style.filter="none"
    }, [isopenform]);



    return (
        <>
            <div className="bg-[#F0F2F5] h-screen w-screen" >
                <div className="mx-[20vw] my-[10vh] absolute  w-[75vw]  rounded-[2px] bg-white" ref={form}>
                    <div className="h-[6vh] flex justify-between bg bg-gray-200 p-4 ">
                        <label className="font-bold">Tất cả môn học</label>
                        <Button type="primary" className="!p-4" onClick={() =>{openform()}}>+ THÊM MÔN HỌC MỚI</Button>
                    </div>
                    <Input placeholder="Nhập tên môn học...." className="!m-5 !w-[15vw]"/>
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
                <div className=" absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent z-50">
                {isopenform && <AddSubjectForm setopenform={setOpenform} fetchsubject={fetchdata}/>}
                </div>
                <ToastContainer position="bottom-left" />

            </div>

        </>
    )
}
export default SubjectPage