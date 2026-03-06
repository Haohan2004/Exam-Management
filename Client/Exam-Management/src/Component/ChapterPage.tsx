import type {ColumnsType} from "antd/es/table";
import Table from "antd/es/table";
import {Button} from "antd";
import {useEffect, useRef, useState } from "react";
import {  toast } from 'react-toastify';
interface ChapterPageProps {
    chapid:number,
    chapname:string
    chapnumber:number,
    subjectid:number
}
interface ChapterProps {
    setchapterform: (value:boolean) => void;
    subject:number
}
const ChapterPage = ({setchapterform,subject}:ChapterProps) =>{
    const columns:ColumnsType<ChapterPageProps> = [
        {
            title: '#',
            dataIndex: 'chapid',
            key: 'chapid',
            align: 'center',
        },
        {
            title: 'Tên Chương',
            dataIndex: 'chapname',
            key: 'chapname',
            align: 'center',
        },
        {
            title: 'Số Chương',
            dataIndex: 'chapnumber',
            key: 'chapnumber',
            align: 'center',
        },
        {
            title: 'Thao tác',
            align: 'center',
            render: (text,record) =>(
                <div>

                </div>
            ),
        }
]
    const form = useRef(null)
    const [isopenform, setOpenform] = useState(false)
    const [datachapter, setDatachapter] = useState([])
    const [chaptername,setChaptername] = useState("")
    const [chapternumber, setChapternumber] = useState("")
    const fetchdata = async () =>{
        const response = await fetch(`http://localhost:8080/subject/${subject}/chapter`)
        const data = await response.json()
        setDatachapter(data)
    }

    const createChapter = async () =>{
        if(chaptername=="")
        {
            toast.error("Tên chương không được để trống")
        }
        else if(chapternumber=="")
        {
            toast.error("Thứ tự chương không được để trống")
        }
        else if(isNaN(parseInt(chapternumber))) {
            toast.error("Thứ tự chương phải là số")
        }
        else {
            const chapter= {chapname:chaptername,chapnumber:chapternumber,subjectid:subject}
            const response = await fetch("http://localhost:8080/chapter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(chapter)
            })
            if(!response.ok)
            {
                toast.error("Tạo chương không thành công")
            }
            else{
                toast.success("Tạo chương thành công")
                fetchdata()
            }
        }
    }

    useEffect(() => {
        if(isopenform==false){
            form.current.style.display="none"
        }
        else{
            form.current.style.display="block"
        }
    }, [isopenform]);

    useEffect(() => {
    fetchdata()
    }, []);


        return (
        <>
            <div className="w-[50vw] min-h-[55vh] max-h-[75vh] bg-white rounded-[10px] p-5">
                <div className="flex justify-between border-b-3 mb-10 border-[#F2F2F2] p-2">
                <p className="text-[2.5vh]  font-bold  text-black font-['Roboto']">Danh sách chương</p>
                </div>
                <div className="my-5">
                    <Table columns={columns} className="" dataSource={datachapter} pagination={{pageSize:5}}/>
                </div>
                <div className="w-full border-2 border-[#F2F2F2] p-5 my-5    ">
                    <p className="text-blue-600 font-bold cursor-pointer hover:text-blue-800 my-2" onClick={()=>{setOpenform((prev)=>!prev)}}>+Thêm chương</p>
                    <div className="flex" ref={form}>
                        <input className="border-2 mr-5 w-[35%] !border-gray-200 p-2" placeholder="Nhập tên chương" value={chaptername} onChange={(e) =>{setChaptername(e.target.value)}} />
                        <input className="border-2 mr-5 w-[35%] !border-gray-200 p-2" placeholder="Nhập thứ tự chương" value={chapternumber} onChange={(e) =>{setChapternumber(e.target.value)}} />

                        <button className="mx-5" onClick={()=>{createChapter()}}>Tạo chương</button>

                    </div>
                </div>
                <div className="mt-auto flex  justify-center">
                    <Button color="danger" variant="solid" onClick={()=>{setchapterform(false)}}>Đóng</Button>

                </div>
            </div>
        </>
    )
}
export default ChapterPage;