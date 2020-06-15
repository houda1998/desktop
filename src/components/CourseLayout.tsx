import React, { useState } from 'react'
import { Form, Modal, Layout, Menu, Breadcrumb, Card, Col, Row, Input, Button, Collapse } from 'antd';
import NGCLogo from "./svgs/NGCLogo"
const { Header, Content, Sider } = Layout;
import ModelSvg from "./svgs/Model"
import StudentSvg from "./svgs/StudentSvg"
import {  SettingFilled} from '@ant-design/icons'
import { Link } from 'react-router-dom';
import './css/Layout.css';
 
function MyLayout({children}:any) {
  const [Collapsed,setCollapsed]=useState(false);
  const onCollapse=()=>{
    setCollapsed(!Collapsed)
  }
    return (
        <Layout>
        <Header className="nav">
        <NGCLogo/>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }} collapsedWidth="0" className='Sider' collapsible collapsed={Collapsed} onCollapse={onCollapse} >
          <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          
          <Menu.Item key="1" icon={<ModelSvg />}style={{color:'rgba(0, 0, 0, 0.65)'}}>
            <Link to="/module">modules</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<StudentSvg />}style={{color:'rgba(0, 0, 0, 0.65)'}}><Link to="/Student">Students</Link></Menu.Item>
            <Menu.Item key="4" icon={<SettingFilled style={{color:"rgba(206, 47, 142, 0.61)"}}/>} style={{color:'rgba(0, 0, 0, 0.65)'}}><Link to="/settings">settings</Link></Menu.Item>
          
        </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item><Link to="/home">Home</Link></Breadcrumb.Item>
              <Breadcrumb.Item>Modules</Breadcrumb.Item>
            </Breadcrumb>
            <Content className='menu'>
            {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
}

export default MyLayout
