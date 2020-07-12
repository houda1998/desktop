import React, { useState, Component, useEffect } from "react";
import {
  Upload,
  message,
  Modal,
  Table,
  Dropdown,
  Input,
  Tag,
  Button,
  Menu,
  Breadcrumb,
  Form,
} from "antd";
import {
  SmallDashOutlined,
  SearchOutlined,
  UserDeleteOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "../components/css/StudentList.css";
import "@ant-design/compatible/assets/index.css";
import { ColumnProps } from "antd/es/table";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll, deleteOne, addOne } from "../redux/actions/models";
import HomeLayout from "../components/HomeLayout";
import { useParams } from "react-router-dom";
import { RequestQueryBuilder } from "@nestjsx/crud-request";
import PlusButton from "../components/svgs/PlusButton";

let color = "";
let stat = "";
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
function FiliereListStudent() {
  const [isCreateModalVisible, showCreateModalVisible] = useState(false);

  const dispatch = useDispatch();
  const users: any = useSelector((state: any) => state.models["users"]);

  const { filierId } = useParams();
  useEffect(() => {
    const qb = RequestQueryBuilder.create();
    qb.setFilter({ field: "filiere.id", operator: "$eq", value: filierId });
    dispatch(fetchAll("users", qb.query()));
  }, []);

  const myusers: any = [];
  const getusers = (users || []).map((user: any) => {
    myusers.push(user);
  });
  console.log(users || []);
  const [visible, showModal] = useState(false);

  const [form] = Form.useForm();
  interface User {
    key: number;
    AccountStatut: boolean;
    Fullname: string;
    email: string;
    filiere: string;
    action: any;
  }

  const More = ({ id }: any) => (
    <Menu>
      <Menu.Item className="mydropdown" onClick={() => showModal(!visible)}>
        <UserSwitchOutlined />
        modifier
      </Menu.Item>
      <Menu.Item
        className="mydropdown"
        onClick={() => dispatch(deleteOne("users", id))}
      >
        <UserDeleteOutlined /> supprimer
      </Menu.Item>
    </Menu>
  );

  const columns: ColumnProps<User>[] = [
    {
      title: "AccountStatut",
      dataIndex: "isActive",
      key: "AccountStatut",
      render: (cell, row, index) => {
        if (myusers[index].isActive == true) {
          color = "#5DF888";
          stat = "active";
        } else {
          color = "#FF4949";
          stat = "down";
        }

        return (
          <Tag color={color} key={stat} className="stat">
            {stat}
          </Tag>
        );
      },
    },
    {
      title: "FullName",
      dataIndex: "name",
      key: "Fullname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (record, value: any) => {
        return (
          <Dropdown overlay={() => <More id={value.id} />}>
            <a className="ant-dropdown-link">
              <SmallDashOutlined />
            </a>
          </Dropdown>
        );
      },
    },
  ];
  return (
    <HomeLayout>
      <div style={{ paddingBottom: "55px", position: "sticky" }}>
        <Input
          placeholder="Search"
          className="searchbar"
          prefix={<SearchOutlined />}
        />
      </div>

      <Table columns={columns} dataSource={users || []} />
      <Modal
        title="modifier étudiant"
        visible={visible}
        onCancel={() => showModal(false)}
        footer={[
          <Button form="myForm" key="creer" htmlType="submit">
            creer
          </Button>,
          <Button
            key="cancel"
            htmlType="button"
            onClick={() => showModal(false)}
          >
            cancel
          </Button>,
        ]}
      >
        <Form {...layout} form={form} name="control-hooks" id="myForm">
          <Form.Item
            name="FullName"
            label="fullName"
            rules={[{ required: true }]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item name="Email" label="Email" rules={[{ required: true }]}>
            <Input type="email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input type="password" />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Confirm"
            rules={[{ required: true }]}
          >
            <Input type="password" />
          </Form.Item>
        </Form>
      </Modal>
      <CreateStudentModal
        showModal={showCreateModalVisible}
        visible={isCreateModalVisible}
      />
      <PlusButton
        showModal={() => showCreateModalVisible(!isCreateModalVisible)}
      />
    </HomeLayout>
  );
}

function CreateStudentModal({ showModal, visible }: any) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();


  const addStudent = async () => {
    try {
      await form.validateFields();
      const student = {
        ...form.getFieldsValue(),
      };
      console.log(student)
      //dispatch(addOne("users",student))
      showModal(false)
    } catch (err) {
      console.error(err)
    }
  };

  return (
    <Modal
      title="cree étudiant"
      visible={visible}
      onCancel={() => showModal(false)}
      footer={[
        <Button form="myForm" key="creer" htmlType="submit" onClick={addStudent}>
          creer
        </Button>,
        <Button key="cancel" htmlType="button" onClick={() => showModal(false)}>
          cancel
        </Button>,
      ]}
    >
      <Form {...layout} form={form} name="control-hooks" id="myForm">
        <Form.Item
          name="fullName"
          label="fullName"
          rules={[{ required: true }]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item name="username" label="username" rules={[{ required: true }]}>
          <Input type="string" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true }]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item name="password_confirmation" label="Confirm" rules={[{ required: true }]}>
          <Input type="password" />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default FiliereListStudent;
