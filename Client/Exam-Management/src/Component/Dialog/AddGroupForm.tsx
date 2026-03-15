import {Button, Input} from "antd";
import {useState} from "react";
import {toast} from "react-toastify";
interface AddGroupProps{
    setopenform: (value: boolean) => void;
    fetchgroup: () =>void
}
const AddGroupForm = ({setopenform,fetchgroup}:AddGroupProps) =>{
    const [groupname, setGroupname] = useState("");
    const addgroup = async (e:React.MouseEvent) => {
        e.preventDefault();
        if(groupname=="")
        {
            toast.error("Tên tổ hợp không được để trống")
        }
        else {

            const group = {groupname:groupname}
            try {
                const response = await fetch('http://localhost:8080/group', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(group),

                })
                if (!response.ok) {
                    toast.error("Thêm tổ hợp không thành công!")
                } else {

                    toast.success("Thêm tổ hợp thành công")
                    fetchgroup()
                    setopenform(false)

                }
            }
            catch (err) {
                console.log(err);
            }
        }
    }
    return (
        <>

            <div className="  border-1 w-[25vw] h-[25vh] flex-col  rounded-[10px] overflow-hidden bg-white">
                <div className="w-full h-[20%]  p-[10px] bg-blue-500 ">
                    <p className="text-[2vh]    text-white font-['Roboto']">Thêm môn học</p>
                </div>
                <div className="p-[3vh]">
                    <p>Tên tổ hợp</p>
                    <Input placeholder="Nhập tên môn học...." className=" !my-2 !w-[22vw]" value={groupname} onChange={(e) => setGroupname(e.target.value)}/>
                </div>
                <div className="flex items-center justify-center">
                    <Button color="primary" variant="solid" className="mx-4" onClick={(e:React.MouseEvent)=>{addgroup(e)}} >Thêm</Button>
                    <Button color="danger" variant="solid" onClick={()=>{setopenform(false)}}>Đóng</Button>

                </div>
            </div>
        </>
    )
}
export default AddGroupForm;