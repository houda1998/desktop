import React, { useState } from 'react'
import { Menu, Modal, Button, Form, Input, Select, Dropdown,Upload, message} from 'antd';
import {EditOutlined,InboxOutlined,SmallDashOutlined,DeleteOutlined} from '@ant-design/icons';
import './css/file.css';
import Dragger from 'antd/lib/upload/Dragger';
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
  
function DropDownFile() {
  const [visible, showModal] = useState(false)
  const [form] = Form.useForm();
    const FileAction = (
    <div>
      <Menu>
        <Menu.Item className="mydropdown">
          <a target="_blank" rel="noopener noreferrer" href="">
            <DeleteOutlined/>delete
          </a>
        </Menu.Item>
        <Menu.Item className="mydropdown" onClick={() => showModal(!visible)} >
           <EditOutlined/>edit
        </Menu.Item>
      </Menu>
      
    </div>
    );
    
      const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };
    
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    return (
        <div>
        <Dropdown overlay={FileAction}>
          <a className="ant-dropdown-link">   
            <SmallDashOutlined />        
          </a>
        </Dropdown>
      
        <Modal
        title="modifier fichier"
        visible={visible}
        onCancel={()=> showModal(false)}
            footer={[
              <Button form="myForm" key="creer" htmlType="submit">
                 modifier
              </Button>,
              <Button  key="cancel" htmlType="button" onClick={() => showModal(false)}>
                  cancel
              </Button>
              ]}
        >
        <Form {...layout} form={form} name="control-hooks" id="myForm">
        <Form.Item name="Filetitle" label="titre" style={{paddingRight: "51px"}} rules={[{ required: true }]}>
          <Input type="text" />
        </Form.Item>      
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
        </div>
    )
}

export default DropDownFile
