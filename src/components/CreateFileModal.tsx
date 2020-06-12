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


function CreateFileModal({showModal,visible} : any) {
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
 
    return (
        <Modal
      title="Ajouter fichier"
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

export default CreateFileModal
