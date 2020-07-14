import React from 'react'
import Layout from "../components/HomeLayout"
import { Form, Input, Button } from 'antd';
import SettingsSVG from "../components/svgs/settings"
function Settings() {
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
      };
    
  
     
    return (
        <Layout>
        <Form
        {...layout}
        name="basic"
        style={{padding:"10px",margin:"auto",zIndex: 1,position: "relative",  top: "18%",  right: "27%" }}
      >
        <Form.Item
          label="Url"
          name="Url"
          rules={[{ required: true }]}
        >
          <Input type="url"/>
        </Form.Item>
  
        <Form.Item
          label="Port"
          name="Port"
          rules={[{ required: true}]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item >
        <Button  htmlType="submit" style={{borderRadius:"100px",background:"linear-gradient(179.69deg, #FD749B -13.56%, #281AC8 158.3%)",marginLeft: "88px",color:"white"}} >
          Start
        </Button>
      </Form.Item>
    </Form>
    <div className="footer">
    <SettingsSVG/>  </div>
    </Layout>

    );
}

export default Settings
