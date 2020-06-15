import React, { useState } from 'react'
import { Menu, Modal, Button,Popconfirm, Form, Input, Select, Dropdown,Upload, message} from 'antd';
import {LoadingOutlined, PlusOutlined,SettingOutlined,EditOutlined,DeleteOutlined} from '@ant-design/icons';
import './css/file.css';
import {useDispatch} from "react-redux"
import { deleteOne } from '../redux/actions/models';
function handleChange(value:any) {
    console.log(`selected ${value}`);
  }
  function getBase64(img:any, callback:any) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  function beforeUpload(file:any) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }
  function confirm(e:any) {
    console.log(e);
    message.success('Click on Yes');
  }
  
  function cancel(e:any) {
    console.log(e);
    message.error('Click on No');
  }
  
function DropDownCourse({id}:any) {
  const [visible, showEditModal] = useState(false)
    const { Option } = Select;
    const [loading,setLoading] = useState(false)
    const[image,setImage]=useState()
    const dispatch = useDispatch()

    const handleChange = (info:any) => {
        if (info.file.status === 'uploading') {
          setLoading(true);
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, (imageUrl:any) =>{
              setLoading(false)
           setImage(imageUrl)
          }
          );
        }
      };
      const uploadButton = (
        <div>
          {  loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div className="ant-upload-text">Upload</div>
        </div>
      );
        const imageUrl=image
    const menu = (
        <Menu>
          <Menu.Item key="0" className="mydropdown" onClick={()=>showEditModal(!visible)}>
          <EditOutlined />edit
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="1" className="mydropdown" onClick={() => dispatch(deleteOne("cours",id)) } >
            <DeleteOutlined /> delete
          </Menu.Item>
        </Menu>
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
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link">   
            <SettingOutlined />        
          </a>
        </Dropdown>
      
                <Modal
        title="modifier cours"
        visible={visible}
        onCancel={()=> showEditModal(false)}
            footer={[
              <Button form="myForm" key="creer" htmlType="submit">
                 modifier
              </Button>,
              <Button  key="cancel" htmlType="button" onClick={() => showEditModal(false)}>
                  cancel
              </Button>
              ]}
        >
        <Form {...layout} form={form} name="control-hooks" id="myForm">
        <Form.Item >
        <div className="myupload">
        <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}

        >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
      </div>
        </Form.Item>
        <Form.Item name="name" label="titre" rules={[{ required: true }]}>
          <Input type="text" style={{ marginLeft: "12px" }}/>
        </Form.Item>      
        <Form.Item name="annee" label="année universitaire" rules={[{required:true}]}>  
        <Input type="text" style={{ marginLeft: "42px" }} />
        </Form.Item>  
        <Form.Item name="filliere" label="Fillière(s)" rules={[{required:true}]}>
          <Select
    mode="multiple"
    style={{ width: '100%',marginLeft: "12px" }}
    placeholder="selectionnez fillière"
    onChange={handleChange}
    optionLabelProp="label"
    
  >
    <Option value="bdcc" label="bdcc">
      <div className="demo-option-label-item">
        bdcc
      </div>
    </Option>
    <Option value="glsid" label="glsid">
      <div className="demo-option-label-item">
      glsid
      </div>
    </Option>
  </Select>
    </Form.Item>
        <Form.Item {...tailLayout}>
        </Form.Item>
        </Form>
        </Modal>    
        </div>
    )
}

export default DropDownCourse
