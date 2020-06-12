import React, { useState } from 'react'
import { Menu, Modal, Button, Form, Input, Select, Dropdown,Upload, message} from 'antd';
import {EditOutlined,SmallDashOutlined,DeleteOutlined} from '@ant-design/icons';
import './css/file.css';

  
function DropDownLink() {
  const [visible, showEditLinkModal] = useState(false)
  const LinkAction = (
    <div>
      <Menu>
        <Menu.Item className="mydropdown">
          <a target="_blank" rel="noopener noreferrer" href="">
          <DeleteOutlined/> delete
          </a>
        </Menu.Item>
        <Menu.Item className="mydropdown" onClick={() => showEditLinkModal(!visible)} >
        <EditOutlined/>edit
        </Menu.Item>
      </Menu>
      
    </div>
    );
    
      const [form] = Form.useForm();
      const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };
    
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    return (
        <div>
        <Dropdown overlay={LinkAction}>
          <a className="ant-dropdown-link">   
            <SmallDashOutlined />        
          </a>
        </Dropdown>
      
        <Modal
        title="modifier lien"
        visible={visible}
        onCancel={()=> showEditLinkModal(false)}
            footer={[
              <Button form="myForm" key="creer" htmlType="submit">
                 modifier
              </Button>,
              <Button  key="cancel" htmlType="button" onClick={() => showEditLinkModal(false)}>
                  cancel
              </Button>
              ]}
        >
        <Form {...layout} form={form} name="control-hooks" id="myForm">
        
        <Form.Item name="linkTitle" label="titre" rules={[{ required: true }]}>
          <Input type="text" />
        </Form.Item>      
        <br></br>
        <Form.Item name="lien" label="lien" rules={[{required:true}]}>  
        <Input type="url" />
        </Form.Item>  
        <Form.Item {...tailLayout}>
        </Form.Item>
        </Form>
        
        </Modal>
        </div>
    )
}

export default DropDownLink
