import React from 'react'
import { Form, Modal, Layout, Menu, Breadcrumb, Card, Col, Row, Input, Button } from 'antd';
const { Header, Content, Sider } = Layout;
import NGCLogo from "../components/svgs/NGCLogo"
import { Link } from 'react-router-dom';
import {  SettingFilled} from '@ant-design/icons'


function HomeLayout({children}:any) {
    return (
        <Layout>
        <Header className="nav">
          <NGCLogo />
          <Input placeholder="Search" className="searchbar" />
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }} className='Sider'>
          <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
           <Menu.Item key="1" style={{color:'rgba(0, 0, 0, 0.65)'}}>
            <Link to="/home">cours</Link>
            </Menu.Item>
          <Menu.Item key="2" style={{color:'rgba(0, 0, 0, 0.65)'}}>
            <Link to="/filieres">filiers</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<SettingFilled style={{color:"rgba(206, 47, 142, 0.61)"}}/>} style={{color:'rgba(0, 0, 0, 0.65)'}}><Link to="/settings">settings</Link></Menu.Item>

        </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Cours</Breadcrumb.Item>
            </Breadcrumb>
            <Content className='menu'>
            {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
}

export default HomeLayout
