import React, { useState } from 'react'
import { Form, Modal, Menu, Breadcrumb, Card, Col, Row, Input, Button } from 'antd';

import { Link, useParams, useHistory, useLocation } from "react-router-dom";
import ShareScreenSVG from "../components/svgs/shareScreen"
import Layout from "../components/CourseLayout"
import SupportDeCoursSVG from '../components/svgs/SupportDeCours';
import TasksSVG from '../components/svgs/Tasks';


function Modules() {
  const { courseId } = useParams()
  console.log(courseId)
  const location = useLocation()
  const history = useHistory()

  return (
    <Layout>
      <div className="site-card-wrapper">
        <Row gutter={[48, 24]}>
          <Col className="gutter-row" md={{ span: 3, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Card bordered={false} hoverable
              style={{ width: 160, height: 170 }}
              onClick={() => history.replace(`/module/${courseId}/screenShare`)}
              cover={<ShareScreenSVG />}
            />
          </Col>
          <Col className="gutter-row" md={{ span: 3, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Card bordered={false} hoverable
              style={{ width: 162, height: 170 }}
              onClick={() => history.replace(`/module/${courseId}/fileSharing`)}
              cover={<SupportDeCoursSVG />}
            />
          </Col>
          <Col className="gutter-row" md={{ span: 3, offset: 1 }} lg={{ span: 6, offset: 2 }}  >
            <Card bordered={false} hoverable
              style={{ width: 160, height: 170 }}
              onClick={() => history.replace(`/module/${courseId}/tasks`)}
              cover={<TasksSVG />}
            />
          </Col>
        </Row>
      </div>
    </Layout>
  )
};

export default Modules
