import {Menu, type MenuProps} from "antd";
import {FileFilled, FolderFilled, QuestionCircleFilled,  SwitcherFilled} from "@ant-design/icons";
import {Link} from "react-router-dom";

const Sidebar = () =>{
    type MenuItem = Required<MenuProps>['items'][number];

    const items: MenuItem[] = [
        {
            key: 'sub',
            label: 'Trang chủ',
            icon: <Link to="/dashboard"><SwitcherFilled /></Link>,
            style:{fontWeight:"bold"},


        },        {
            key: 'quanly',
            label: 'QUẢN LÝ',
            type: 'group',
            style:{fontWeight:"bold"},
        },
        {
            key: 'sub0',
            label: 'Tổ hợp môn',
            icon: <Link to="/group"><SwitcherFilled /></Link>,
            style:{fontWeight:"bold"},


        },
        {
            key: 'sub1',
            label: 'Câu hỏi',
            icon: <Link to="/question"><QuestionCircleFilled /></Link>,
            style:{fontWeight:"bold"},

        },
        {
            key: 'sub2',
            label: 'Môn học',
            icon: <Link to="/subject"><FolderFilled /></Link>,
            style:{fontWeight:"bold"},

        },

        {
            key: 'sub4',
            label: 'Đề kiểm tra',
            icon: <FileFilled />,
            style:{fontWeight:"bold"},

        },
        {
            key: 'grp',
            label: 'QUẢN TRỊ',
            type: 'group',
            style:{fontWeight:"bold"},

        },
        {
            key: 'sub5',
            label: 'Phân quyền',
            icon: <SwitcherFilled />,
            style:{fontWeight:"bold"},


        },

    ];
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };
    return(
        <>
            <div className="fixed top-10 ">
                <Menu
                    onClick={onClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={items} className="h-screen"
                />
            </div>
        </>
    )
}
export default Sidebar;