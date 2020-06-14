import React, { useState, useEffect } from 'react'
import NGCLogo from "../components/svgs/NGCLogo"
import { Form, Modal, Layout, Menu, Breadcrumb, Card, Col, Row, Input, Button } from 'antd';
import '../components/css/cours.css';
import '@ant-design/compatible/assets/index.css';
import PlusButton from '../components/svgs/PlusButton';
import CoursCard from '../components/CoursCard';
import CreateCoursModal from '../components/CreateCoursModal';
import {fetchAll} from "../redux/actions/models"
import {useDispatch, useSelector} from "react-redux"
const { Header, Content, Sider } = Layout;


function Home() {
  const [visible, showModal] = useState(false)
  const [Collapsed,setCollapsed]=useState(false);
  const onCollapse=()=>{
    setCollapsed(!Collapsed)
  }
  const dispatch = useDispatch()
   const cours :any = useSelector((state:any) => state.models["cours"])
  useEffect(() => {
    dispatch(fetchAll("cours"))
  }, [])

  return (
    <div>
      <Layout>
        <Header className="nav">
          <NGCLogo />
          <Input placeholder="Search" className="searchbar" />
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }} className='Sider'collapsedWidth="0" collapsible collapsed={Collapsed} onCollapse={onCollapse}>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Cours</Breadcrumb.Item>
            </Breadcrumb>
            <Content className='menu'>
              <div className="site-card-wrapper">
                <Row gutter={[48, 24]}>
                  {cours && cours.map((cours:any) => (
                      <Col key={cours.id} className="gutter-row" md={{ span: 3, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                      <CoursCard {...cours}/>
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

export default Home
