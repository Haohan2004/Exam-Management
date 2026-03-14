import { Outlet } from "react-router-dom";
import Header from "./Header.tsx";
import Sidebar from "./Sidebar.tsx";

const AdminLayout = () =>{
    return(
        <>
            <div className="fixed">
                <Header/>
            </div>
            <Sidebar/>
            <Outlet /> {}
        </>
    )
}
export default AdminLayout;