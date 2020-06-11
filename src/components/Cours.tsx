import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import NGCLogo from "./svgs/NGCLogo"
import { Form, Modal, Layout, Menu, Breadcrumb, Card, Col, Row, Input, Button } from 'antd';
import './css/cours.css';
import '@ant-design/compatible/assets/index.css';
import PlusButton from './svgs/PlusButton';
import CoursCard from './CoursCard';

import api from "../api"
import CreateCoursModal from 'src/CreateCoursModal';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


function MYLayout() {
  const [visible, showModal] = useState(false)
  const [cours, setCours] = useState([])

  useEffect(() => {
    api.get("/cours").then(
      (cours:any) => setCours(cours)
    )
  }, [])

  return (
    <div>
      <Layout>
        <Header className="nav">
          <NGCLogo />
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }} className='Sider'>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Cours</Breadcrumb.Item>
            </Breadcrumb>
            <Content className='menu'>
              <div className="site-card-wrapper">
                <Row gutter={[48, 24]}>
                  {cours.map(cours => (
                      <Col className="gutter-row" md={{ span: 3, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                      <CoursCard />
                    </Col>
                  ))}
                </Row>
              </div>
              <div className="footer">
                <PlusButton showModal={() => showModal(!visible)} />
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
      <CreateCoursModal visible={visible} showModal = {showModal}/>
    </div>)
};

export default MYLayout
