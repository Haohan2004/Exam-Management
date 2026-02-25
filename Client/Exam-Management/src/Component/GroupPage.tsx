import {Button, Input, Table} from "antd";
import {useEffect, useState} from "react";

const GroupPage = () => {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'groupid',
            key: 'groupid',
        },
        {
            title: 'Tên tổ hợp ',
            dataIndex: 'groupname',
            key: 'groupname',
        },


        {
            title: 'Thao tác',


        },
    ];
    const [dataquestion, setDataquestion] = useState([]);
    useEffect(() => {
        const fetchdata = async () =>{
            const response = await fetch("http://localhost:8080/group");
            const data = await response.json();
            setDataquestion(data);
        }
        fetchdata();
    }, []);

    return (
        <>
            <div className="bg-[#F0F2F5] h-screen w-screen">
                <div className="mx-[20vw] absolute top-10 w-[75vw]  rounded-[2px] bg-white">
                    <div className="h-[6vh] flex justify-between bg bg-gray-200 p-4 ">
                        <label className="font-bold">Tất cả tổ hợp môn</label>
                        <Button type="primary" className="!p-4">+ THÊM TỔ HỌP MỚI</Button>
                    </div>
                    <Input placeholder="Nhập tên tổ hợp...." className="!m-5 !w-[15vw]"/>
                    <Table columns={columns} dataSource={dataquestion} pagination={{pageSize:5}}/>
                </div>
            </div>
        </>
    )
}
export default GroupPage