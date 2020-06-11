import React,{useState} from 'react'
import { Form,Modal, Menu, Breadcrumb,Card, Col, Row,Input,Button } from 'antd';

import { Link } from "react-router-dom";
import ShareScreenSVG from "./svgs/shareScreen"
const { SubMenu } = Menu;
import Layout from "./Layout"
import SupportDeCoursSVG from './svgs/SupportDeCours';
import TasksSVG from './svgs/Tasks';
function ModelLayout() {
 
    return (
      <Layout>
            <div className="site-card-wrapper">
            <Row gutter={[48, 24]}>
            <Col className="gutter-row" md={{ span: 3,offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <Card bordered={false}  hoverable
                style={{ width: 160,height:170 } }
                cover={<ShareScreenSVG/>
                }
              > 
                </Card>
              </Col>
              <Col className="gutter-row" md={{ span: 3, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <Card bordered={false}  hoverable
              style={{ width: 162,height:170 }}
                    cover={<Link to="/fileSharing">
                   <SupportDeCoursSVG/>
 </Link> }
 >
              
  </Card>
                
  </Col>
              <Col className="gutter-row" md={{ span: 3, offset: 1 }} lg={{ span: 6, offset: 2 }}  >
              <Card bordered={false}  hoverable
              style={{ width: 160,height:170 }}
            cover={<TasksSVG/>
            }
            >
                </Card>
              </Col>
            </Row>
            
             </div>
             </Layout>
      )
};

export default ModelLayout
