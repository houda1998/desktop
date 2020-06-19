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
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
};


function CreateLinkModal({showModal,visible} : any) {
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    const [link, setLink] = useState({})
    const{courseId} = useParams()
    const addLink = () => {
      dispatch(addOne("links",{...link,cours:courseId}))
      showModal(false)
    }
    return (
        <Modal
        title="partager lien"
        visible={visible}
        onCancel={()=> showModal(false)}
            footer={[
              <Button form="myForm" key="creer" htmlType="submit" onClick={addLink}>
                 crée
              </Button>,
              <Button  key="cancel" htmlType="button" onClick={() => showModal(false)}>
                  cancel
              </Button>
              ]}
        >
        <Form {...layout} form={form} name="control-hooks" id="myForm">
        <Form.Item name="linkTitle" label="titre" rules={[{ required: true }]}>
          <Input type="text"  onChange={(e) => {
            e.persist()
            setLink(link => ({...link,title:e.target.value}))
          }} />
        </Form.Item>      
        <br></br>
        <Form.Item name="lien" label="lien" rules={[{required:true}]}>  
        <Input type="url"  onChange={(e) => {
          e.persist()
          setLink(link => ({...link,url:e.target.value}))
        }}/>
        </Form.Item>  
        <Form.Item {...tailLayout}>
        </Form.Item>
        </Form>
        
        </Modal>
    );
   

    
}

export default CreateLinkModal
