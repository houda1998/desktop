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
      title="Modifier devoir"
      visible={visible}
      onCancel={()=> showModal(false)}
          footer={[
            <Button form="myForm" key="creer" htmlType="submit">
               creer
            </Button>,
            <Button  key="cancel" htmlType="button" onClick={() => showModal(false)}>
                cancel
            </Button>
            ]}
    >
    <Form {...layout} form={form} name="control-hooks" id="myForm">
   
    <Form.Item name="titre" label="titre" rules={[{ required: true }]}>
        <Input type="text" />
      </Form.Item> 
      <Form.Item name="Instruction" label="Instruction" rules={[{ required: true }]}>
      <Input.TextArea />
      </Form.Item> 
      <Form.Item name="Deadline" label="Deadline" >
      <DatePicker />
      <TimePicker value={value} onChange={onChange} />
      </Form.Item>     
      <Form.Item name="Note" label="Note" rules={[{ required: true }]}>
      <Select
    defaultValue="no"
    style={{ width: '100%' }}
    placeholder="le devoir est-il noté ?"
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
    <Form.Item>  
      <Dragger {...statut} >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
        band files
      </p>
    </Dragger>,
    </Form.Item>  
    <Form.Item {...tailLayout}>
     </Form.Item>
    </Form>
    
    </Modal>

    )
}

export default EditTaskModal
