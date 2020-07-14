import React, { useState } from 'react'
import { TimePicker, Modal, Button, Form, Input,Upload, message, DatePicker, Menu, Dropdown, Select } from 'antd';
import {InboxOutlined ,DownOutlined} from '@ant-design/icons'

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
};

function handleChange(value:any) {
    console.log(`selected ${value}`);
  }
function EditTaskModal({showModal,visible} : any) {
    const [value, setValue] = useState(null);
    

    const onChange = (time:any) => {
        setValue(time);
      };
    const statut = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info:any) {
          const { status } = info.file;
          if (status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
          } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
      
  const [form] = Form.useForm();
  const { Dragger } = Upload;
  const { Option } = Select;

    return (
        <Modal
      title="edit task"
      visible={visible}
      onCancel={()=> showModal(false)}
          footer={[
            <Button form="myForm" key="creer" htmlType="submit">
               edit
            </Button>,
            <Button  key="cancel" htmlType="button" onClick={() => showModal(false)}>
                cancel
            </Button>
            ]}
    >
    <Form {...layout} form={form} name="control-hooks" id="myForm">
   
    <Form.Item name="titre" label="title" rules={[{ required: true }]}>
        <Input type="text" />
      </Form.Item> 
      <Form.Item name="Instruction" label="Instructions" rules={[{ required: true }]}>
      <Input.TextArea />
      </Form.Item> 
      <Form.Item name="Deadline" label="Deadline" >
      <TimePicker value={value} onChange={onChange} />
      </Form.Item>     
      <Form.Item name="Note" label="Graded" rules={[{ required: true }]}>
      <Select
    defaultValue="no"
    style={{ width: '100%' }}
    placeholder="the task is graded ?"
    onChange={handleChange}
  >
    <Option value="yes" label="yes">
      yes
    </Option>
    <Option value="no" label="no">
     no
    </Option>
  </Select>
      </Form.Item>    
    <br></br>
    
    <Form.Item {...tailLayout}>
     </Form.Item>
    </Form>
    
    </Modal>

    )
}

export default EditTaskModal
