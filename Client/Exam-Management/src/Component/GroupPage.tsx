import {Button, Input, Table} from "antd";
import {useEffect, useRef, useState} from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {ToastContainer} from "react-toastify";
import AddGroupForm from "./Dialog/AddGroupForm.tsx";
import EditGroupForm from "./Dialog/EditGroupForm.tsx";
import Swal from "sweetalert2";
interface GroupDataType {
    groupid:number,
    groupname:string,
}
const GroupPage = () => {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'groupid',
            key: 'groupid',
            align: 'center',

        },
        {
            title: 'Tên tổ hợp ',
            dataIndex: 'groupname',
            key: 'groupname',
            align: 'center',

        },



        {
            title: 'Thao tác',
            render: ( record:GroupDataType) => (
                <div >
                    <div className="flex justify-center ">
                        <button className="w-[2vw] flex justify-center mx-2 !bg-gray-100 !rounded-[0px] hover:!border-black" onClick={()=>{openeditform(record)}}><EditIcon/></button>
                        {/*<button className="w-[2vw] flex justify-center mx-2 !bg-gray-100  !rounded-[0px] hover:!border-black" onClick={()=>{deletesubject(record.subjectid)}}><DeleteIcon/></button>*/}
                        <button className="w-[2vw] flex justify-center mx-2 !bg-gray-100  !rounded-[0px] hover:!border-black" onClick={()=>{deletegroup(record.groupid)}}><DeleteIcon/></button>
                    </div>
                    .
                </div>
            ),
            align: 'center',


        },
    ];
    const [dataquestion, setDataquestion] = useState<GroupDataType[]>([]);
    const [datatable,setDatatable] = useState<GroupDataType[]>([]);
    const [group, setGroup] = useState<GroupDataType>({});
    const [search, setSearch] = useState('');
    const [isopenform, setOpenform] = useState(false);
    const [isopeneditform, setOpeneditform] = useState(false);
    const form = useRef<HTMLDivElement>(null);

    const searchSubject = () =>{
        if(search=="")
        {
            setDatatable(dataquestion)
        }
        else {
            const searchsubject = dataquestion.filter((item: GroupDataType) => item.groupname.toLowerCase().includes(search.toLowerCase()))
            setDatatable(searchsubject)
        }
    }
    const deletegroup = async (groupid:number)=>{
        Swal.fire({
            title: "Bạn muốn xóa tổ hợp này không?",
            text: "Tổ hợp sau khi xóa không thể hoàn tác!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText:"Đóng",
            confirmButtonText: "Xóa"
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Xóa tổ hợp thành công",
                    text: "tổ hợp đã được xóa",
                    icon: "success"
                });
                const response = await fetch(`http://localhost:8080/group/${groupid}`,{
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },

                })
                fetchdata()
            }

        });

    }
    const fetchdata = async () =>{
        const response = await fetch("http://localhost:8080/group");
        const data = await response.json();
        setDataquestion(data);
        setDatatable(data);
    }
    const openform = () =>{
        setOpenform(true);
        form.current!.style.filter="blur(5px)"
        form.current!.style.pointerEvents='none'
    }
    const openeditform = (group:GroupDataType) =>{
        setOpeneditform(true);
        setGroup(group);
        form.current!.style.filter = "blur(5px)"
        form.current!.style.pointerEvents = 'none'
    }
    useEffect(() => {
        if(isopeneditform==false) {
            form.current!.style.filter = "none"
            form.current!.style.pointerEvents = 'auto'
        }
    }, [isopeneditform]);
    useEffect(() => {
        const fetchdata = async () =>{
            const response = await fetch("http://localhost:8080/group");
            const data = await response.json();
            setDataquestion(data);
            setDatatable(data);
        }
        fetchdata();
    }, []);
    useEffect(() => {
        if(isopenform==false) {
            form.current!.style.filter = "none"
            form.current!.style.pointerEvents = 'auto'
        }
    }, [isopenform]);
    useEffect(() => {
        searchSubject()

    }, [search]);

    return (
        <>
            <div className="bg-[#F0F2F5] h-screen w-screen" ref={form}>
                <div className="mx-[20vw] my-[10vh] absolute  w-[75vw]  rounded-[2px] bg-white">
                    <div className="h-[6vh] flex justify-between bg bg-gray-200 p-4 ">
                        <label className="font-bold">Tất cả tổ hợp môn</label>
                        <Button type="primary" className="!p-4" onClick={() =>{openform()}}>+ THÊM TỔ HỌP MỚI</Button>
                    </div>
                    <Input placeholder="Nhập tên tổ hợp...." className="!m-5 !w-[15vw]" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                    <Table columns={columns} dataSource={datatable} pagination={{pageSize:5}}  />

                </div>
            </div>
            <div className={`
    fixed left-1/2 -translate-x-1/2 z-50 
    transition-all duration-500 ease-out
    ${(isopenform || isopeneditform)
                ? 'top-20 opacity-100 scale-100'
                : 'top-0 opacity-0 scale-95 pointer-events-none'}
`}>

                {isopenform && <AddGroupForm setopenform={setOpenform} fetchgroup={fetchdata}/>}
                {isopeneditform && <EditGroupForm  seteditform = {setOpeneditform} fetchgroup={fetchdata} group={group}/>}
            </div>
            <ToastContainer position="bottom-left" />
        </>
    )
}
export default GroupPage