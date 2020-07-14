import React, { useState } from 'react'
import { Modal, Button, Form, Input,Upload, message } from 'antd';
import {InboxOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux';
import { addOne } from '../redux/actions/models';
import { useParams } from 'react-router-dom';

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};


function CreateFileModal({showModal,visible} : any) {

  const [document, setDocument] = useState<any>()
  const  dispatch = useDispatch()

  const {courseId} = useParams()
  const createDoc = ()=>{
    console.log(document)
    const fd = new FormData()
    fd.append("title",document?.title)
    fd.append("doc",document?.doc)
    fd.append("cours",courseId)
    dispatch(addOne("documents",fd))
    showModal(false)
  }
    const statut = {
        name: 'doc',
        multiple: false,
        beforeUpload: (doc:any) => {
          setDocument((document:any) => ({...document,doc}))
          return false;
        },
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
      title="Add file"
      visible={visible}
      onCancel={()=> showModal(false)}
          footer={[
            <Button form="myForm" key="creer" htmlType="submit" onClick={createDoc}>
               add
            </Button>,
            <Button  key="cancel" htmlType="button" onClick={() => showModal(false)}>
                cancel
            </Button>
            ]}
    >
    <Form {...layout} form={form} name="control-hooks" id="myForm">
   
    <Form.Item name="titre" label="title" rules={[{ required: true }]}style={{paddingRight:"127px"}}>
        <Input type="text" onChange={(e) => {
              e.persist()
              setDocument((document:any) => ({...document,title:e.target.value}))
            }}/>
      </Form.Item>      
    <br></br>
    <Form.Item style={{paddingLeft:"98px"}}>  
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
