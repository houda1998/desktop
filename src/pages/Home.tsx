import React, { useState, useEffect } from 'react'
import { Form, Modal, Layout, Menu, Breadcrumb, Card, Col, Row, Input, Button } from 'antd';
import '../components/css/cours.css';
import '@ant-design/compatible/assets/index.css';
import PlusButton from '../components/svgs/PlusButton';
import CoursCard from '../components/CoursCard';
import CreateCoursModal from '../components/CreateCoursModal';
import {fetchAll} from "../redux/actions/models"
import {useDispatch, useSelector} from "react-redux"
import HomeLayout from "../components/HomeLayout"

function Home() {
  const [visible, showModal] = useState(false)

  const dispatch = useDispatch()
   const cours :any = useSelector((state:any) => state.models["cours"])
  useEffect(() => {
    dispatch(fetchAll("cours"))
  }, [])

  return (
      <HomeLayout>
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
      <CreateCoursModal visible={visible} showModal = {showModal}/>
      </HomeLayout>
)
};

export default Home
