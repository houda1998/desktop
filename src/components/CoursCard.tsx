import React from 'react'
import { Form,Modal,Layout, Menu, Breadcrumb,Card, Col, Row,Input,Button } from 'antd';
import { Link } from "react-router-dom";
function CoursCard({}) {
    return (
        <Card bordered={true}  hoverable
        style={{ width: 160,height:200 } }
        cover={<Link to="/module"><img style={{ width: 140,height:140 }} alt="example" src="https://secure.meetupstatic.com/photos/event/4/a/b/5/600_466219125.jpeg" /></Link>}
      > 
          Card content
        </Card>
    )
}

export default CoursCard
