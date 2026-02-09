import {Input, Table} from "antd";

const QuestionPage = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    return (
        <>
            <div className="bg-[#F0F2F5] h-screen w-screen">
                <div className="mx-[20vw] absolute top-10 w-[75vw]  rounded-[2px] bg-white">
                    <Input placeholder="Nhập câu hỏi...." className="!m-5 !w-[15vw]"/>
                    <Input placeholder="Chọn môn học...." className="!m-5 !w-[15vw]"/>
                    <Input placeholder="Chọn chương...." className="!m-5 !w-[15vw]"/>
                    <Input placeholder="Chọn độ khó...." className="!m-5 !w-[15vw]"/>

                    <Table columns={columns} />
                </div>
            </div>
        </>
    )
}
export default QuestionPage