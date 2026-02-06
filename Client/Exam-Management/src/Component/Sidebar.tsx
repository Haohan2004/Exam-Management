import {Menu, type MenuProps} from "antd";
import {FileFilled, FolderFilled, QuestionCircleFilled,  SwitcherFilled} from "@ant-design/icons";

const Sidebar = () =>{
    type MenuItem = Required<MenuProps>['items'][number];

    const items: MenuItem[] = [
        {
            key: 'sub',
            label: 'Trang chủ',
            icon: <SwitcherFilled />,
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
            icon: <SwitcherFilled />,
            style:{fontWeight:"bold"},


        },
        {
            key: 'sub1',
            label: 'Câu hỏi',
            icon: <QuestionCircleFilled />,
            style:{fontWeight:"bold"},

        },
        {
            key: 'sub2',
            label: 'Môn học',
            icon: <FolderFilled />,
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
            <div className="fixed top-10">
                <Menu
                    onClick={onClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={items}
                />
            </div>
        </>
    )
}
export default Sidebar;