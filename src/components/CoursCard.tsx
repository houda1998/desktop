import React, { useState } from 'react'
import { Form,Modal,Layout, Menu, Breadcrumb,Card, Col, Row,Input,Button } from 'antd';
import { Link } from "react-router-dom";
import DropDownCourse from './DropDownCourse';
function CoursCard({title,id}:any) {
    return (
        <Card bordered={true}  hoverable
        style={{ width: 160,height:200 } }
        cover={<Link to={"/module/"+id}><img style={{ width: 130,height:140 }} alt="example" src="https://image.freepik.com/icones-gratuites/graduation_318-1944.jpg" /></Link>}
      > 
      <div style={{display:"inline-block",textAlign:"center"}}>
      {title}</div>
      <div style={{display:"inline-block", float:"right"}}> 
           <DropDownCourse id={id}  />
      </div>

      
          
        </Card>
    )
}

export default CoursCard
