import {Button, Input, Select, Table} from "antd";
import {useEffect, useState} from "react";

const QuestionPage = () => {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'quesid',
            key: 'quesid',
        },
        {
            title: 'Nội dung câu hỏi',
            dataIndex: 'content',
            key: 'content',
        },
        {
            title: 'Mã môn học',
            dataIndex: 'subjectid',
            key: 'subjectid',
        },
        {
            title: 'Mã chương',
            dataIndex: 'chapid',
            key: 'chapid',
        },
        {
            title: 'Độ khó',
            dataIndex: 'level',
            key: 'level',
        },

        {
            title: 'Thao tác',

       
        },
    ];
    const [dataquestion, setDataquestion] = useState([]);
    useEffect(() => {
        const fetchdata = async () =>{
            const response = await fetch("http://localhost:8080/question");
            const data = await response.json();
            setDataquestion(data);
        }
        fetchdata();
    }, []);
    const onChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value: string) => {
        console.log('search:', value);
    };
    return (
        <>

            <div className="bg-[#F0F2F5] h-screen w-screen">
                <div className="mx-[20vw] my-[5vh] w-[75vw] absolute  rounded-[2px] bg-white">
                    <div className="h-[6vh] flex justify-between bg bg-gray-200 p-4 ">
                        <label className="font-bold">Tất cả câu hỏi</label>
                        <Button type="primary" className="!p-4 ">+ THÊM CÂU HỎI MỚI</Button>
                    </div>
                    <Input placeholder="Nhập câu hỏi...." className="!m-5 !w-[15vw]"/>
                    <Select
                        showSearch={{ optionFilterProp: 'label', onSearch }}
                        placeholder="Select a person"
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

                    <Input placeholder="Chọn chương...." className="!m-5 !w-[15vw]"/>
                    <Input placeholder="Chọn độ khó...." className="!m-5 !w-[15vw]"/>

                    <Table columns={columns} dataSource={dataquestion} pagination={{pageSize:5}}/>
                </div>
            </div>
        </>
    )
}
export default QuestionPage