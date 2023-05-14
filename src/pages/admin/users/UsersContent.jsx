import { useSelector } from "react-redux";
import { Space, Table, Modal, Button } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import useAdmin from "@/hook/useAdmin";
import SearchForm from "../SearchForm";
const UsersContent = () => {
  const { handleDeleteAccount } = useAdmin();
  const selector = useSelector((state) => state.account);
  const listAccount = selector.listAccount;
  const handleReloadTable = (id) => {
    handleDeleteAccount.mutate(id);
    // handleGetListAccount();
  };
  const { confirm } = Modal;
  // handle confirm Modal
  const showConfirm = (id) => {
    confirm({
      title: "Do you Want to delete these account?",
      icon: <ExclamationCircleFilled />,
      content: "You sure?",
      onOk() {
        handleReloadTable(id);
      },
      onCancel() {},
    });
  };
  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatarPath",
      key: "avatarPath",
      render: (avatar) => (
        <img src={avatar} className=" w-[40px] h-[40px] rounded-full"></img>
      ),
    },
    {
      title: "Name",
      dataIndex: "fullName",
      key: "fullName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Last Login",
      dataIndex: "lastLogin",
      key: "lastLogin",
    },
    {
      title: "Role",
      dataIndex: "roleDto",
      key: "roleDto",
      render: (roleDto) => {
        let color = "#FFFFFF";

        switch (roleDto.name) {
          case "ROLE ADMIN":
            color = "#FF0000";
            break;
          case "ROLE END USER":
            color = "#00FF00";
            break;
          case "ROLE EXPERT":
            color = "#448aff";
            break;
        }

        return (
          <span style={{ backgroundColor: color }} className=" p-2 rounded-5">
            {roleDto?.name}
          </span>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            className=" bg-cyan-900"
            onClick={() => {
              showConfirm(record.id);
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  const optionSelect = [
    {
      value: "1",
      label: "ROLE SUPER ADMIN",
    },
    {
      value: "2",
      label: "ROLE ADMIN",
    },
    {
      value: "3",
      label: "ROLE EXPERT",
    },
    {
      value: "4",
      label: "ROLE END USER",
    },
  ];
  const fieldSearch = [
    {
      type: "Input",
      key: "email",
      placeholder: "Email",
    },
    {
      type: "Select",
      key: "roleId",
      placeholder: "Role",
      options: optionSelect,
    },
  ];

  return (
    <div>
      <SearchForm fieldSearch={fieldSearch} />
      <Table columns={columns} dataSource={listAccount.content} />
    </div>
  );
};
export default UsersContent;
