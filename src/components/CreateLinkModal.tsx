import React, { useState } from 'react'
import { Modal, Button, Form, Input,Upload, message } from 'antd';
import {InboxOutlined } from '@ant-design/icons'

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};


function CreateLinkModal({showModal,visible} : any) {
    const [form] = Form.useForm();

    return (
        <Modal
        title="partager lien"
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
    );
   

    
}

export default CreateLinkModal
