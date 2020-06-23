import React, { useState } from "react";
import {
  TimePicker,
  Modal,
  Button,
  Form,
  Input,
  Upload,
  message,
  DatePicker,
  Menu,
  Dropdown,
  Select,
} from "antd";
import { InboxOutlined, DownOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addOne } from "../redux/actions/models";
import DynamicFileInput from "./DynamicFileInput";
import { useParams } from "react-router-dom";

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

function CreateTaskModal({ showModal, visible }: any) {
 
  const{courseId}=useParams()
  const dispatch = useDispatch();
  const addTask = async () => {
    try {
      await form.validateFields();
      const task = {
        ...form.getFieldsValue(),
        deadline: form.getFieldValue("deadline").valueOf(),
        cours:courseId
      };
      dispatch(addOne("tasks",task))
      showModal(false)
    } catch (err) {
      console.error(err)
    }
  };
  const [form] = Form.useForm();
  const { Dragger } = Upload;
  const { Option } = Select;

  return (
    <Modal
      title="Ajouter devoir"
      visible={visible}
      onCancel={() => showModal(false)}
      footer={[
        <Button form="myForm" key="creer" htmlType="submit" onClick={addTask}>
          creer
        </Button>,
        <Button key="cancel" htmlType="button" onClick={() => showModal(false)}>
          cancel
        </Button>,
      ]}
    >
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        id="myForm"
        onValuesChange={(vda) => {
          console.log(vda);
          console.log(form.getFieldsValue());
        }}
      >
        <Form.Item name="title" label="titre" rules={[{ required: true }]}>
          <Input type="text" />
        </Form.Item>
        <Form.Item
          name="instructions"
          label="Instruction"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="deadline"
          label="Deadline"
          rules={[{ required: true }]}
        >
          <TimePicker />
        </Form.Item>
        <Form.Item name="noted" label="Note" rules={[{ required: true }]}>
          <Select
            defaultValue="no"
            style={{ width: "100%" }}
            placeholder="le devoir est-il noté ?"
          >
            <Option value="yes" label="yes">
              yes
            </Option>
            <Option value="no" label="no">
              no
            </Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default CreateTaskModal;
