import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import NGCLogo from "./svgs/NGCLogo"
import { Link, useParams, useLocation } from 'react-router-dom';
import ModelSvg from "./svgs/Model"
import StudentSvg from "./svgs/StudentSvg"
const { Header, Footer, Sider, Content } = Layout;
import './css/Layout.css';
import CourseBreadCrumb from './CourseBreadCrumb'; 
import {LeftSquareOutlined} from '@ant-design/icons'
function ScreenShareLayout({children}:any) {
    const [Collapsed,setCollapsed]=useState(false);
    const [Collapse,setCollapse]=useState(false);

  const {courseId} = useParams()

  const location = useLocation()
  const onCollapse=()=>{
    setCollapsed(!Collapsed)
  }
  const onCollapse2=()=>{
    setCollapse(!Collapse)
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
            <Layout>
        <Content>{children}</Content>

        <Sider width={200} style={{ background: '#fff' }} collapsedWidth="0" className='Sider' collapsible collapsed={Collapse} onCollapse={onCollapse2} trigger={<LeftSquareOutlined />} reverseArrow>
        Sider
    </Sider>
      </Layout>
            </Content>
          </Layout>
        </Layout>
      </Layout>
      
    )
}

export default ScreenShareLayout
