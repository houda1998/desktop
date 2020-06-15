import React, { useState } from 'react'
import { Form, Modal, Layout, Menu, Breadcrumb, Card, Col, Row, Input, Button, Collapse } from 'antd';
import NGCLogo from "./svgs/NGCLogo"
const { Header, Content, Sider } = Layout;
import ModelSvg from "./svgs/Model"
import StudentSvg from "./svgs/StudentSvg"
import { Link, useParams, useLocation } from 'react-router-dom';
import './css/Layout.css';
import CourseBreadCrumb from './CourseBreadCrumb';
 
function MyLayout({children}:any) {
  const [Collapsed,setCollapsed]=useState(false);
  const {courseId} = useParams()

  const location = useLocation()
  const onCollapse=()=>{
    setCollapsed(!Collapsed)
  }
    return (
        <Layout>
        <Header className="nav">
        <NGCLogo/>
        </Header>
        <Layout>
          <Sider  width={200} style={{ background: '#fff' }} collapsedWidth="0" className='Sider' collapsible collapsed={Collapsed} onCollapse={onCollapse} >
          <Menu
          mode="inline"
          selectedKeys={location.pathname.split("/")}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          
        >
          
          <Menu.Item key="module" icon={<ModelSvg />}style={{color:'rgba(0, 0, 0, 0.65)'}} >
            <Link to={"/module/"+courseId}>modules</Link>
          </Menu.Item>
            <Menu.Item key="students" icon={<StudentSvg />}style={{color:'rgba(0, 0, 0, 0.65)'}}>
              <Link to={"/students/"+courseId}>Students</Link>
            </Menu.Item>
          
        </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
             <CourseBreadCrumb/>
            <Content className='menu'>
            {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
}

export default MyLayout
