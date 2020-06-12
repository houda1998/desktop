import React, { useState } from 'react'
import { Form, Modal, Menu, Breadcrumb, Card, Col, Row, Input, Button } from 'antd';

import { Link } from "react-router-dom";
import ShareScreenSVG from "../components/svgs/shareScreen"
import Layout from "../components/Layout"
import SupportDeCoursSVG from '../components/svgs/SupportDeCours';
import TasksSVG from '../components/svgs/Tasks';


function Modules() {

  return (
    <Layout>
      <div className="site-card-wrapper">
        <Row gutter={[48, 24]}>
          <Col className="gutter-row" md={{ span: 3, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Card bordered={false} hoverable
              style={{ width: 160, height: 170 }}
              cover={<ShareScreenSVG />
              }
            >
            </Card>
          </Col>
          <Col className="gutter-row" md={{ span: 3, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Card bordered={false} hoverable
              style={{ width: 162, height: 170 }}
              cover={<Link to="/fileSharing">
                <SupportDeCoursSVG />
              </Link>}
            >

            </Card>

          </Col>
          <Col className="gutter-row" md={{ span: 3, offset: 1 }} lg={{ span: 6, offset: 2 }}  >
            <Card bordered={false} hoverable
              style={{ width: 160, height: 170 }}
              cover={<Link to="/tasks"><TasksSVG /></Link>
              }
            >
            </Card>
          </Col>
        </Row>

      </div>
    </Layout>
  )
};

export default Modules
