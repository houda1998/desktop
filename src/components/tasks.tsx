import React from 'react'
import { Card, Collapse, Input, Button } from 'antd';
const { Panel } = Collapse;
import { DeleteOutlined,PlusOutlined,EditOutlined,FolderOpenOutlined,SearchOutlined} from '@ant-design/icons'
import './css/tasks.css';
import { Link } from "react-router-dom";
function MyTasks() {
    return (
        <div>
    <Collapse accordion>
    <Panel  header="task 1" key="1">
    <Card  bordered={false}
    actions={[
        <DeleteOutlined  key="delete" />,
        <EditOutlined key="edit" />,
        <FolderOpenOutlined key="open"/>
      ]}
    >réaliser ce travail en groupe bla bla bla </Card>
    </Panel>
    <Panel header="task2 " key="2">
    <Card  bordered={false}
    actions={[
        <DeleteOutlined  key="delete"/>,
        <EditOutlined key="edit" />,
        <Link to=""><FolderOpenOutlined key="open"/></Link>
      ]}
    >réaliser ce travail en groupe bla bla bla</Card>
    </Panel>
    <Panel header="task3" key="3">
    <Card  bordered={false}
    actions={[
        <DeleteOutlined  key="delete" />,
        <EditOutlined key="edit" />,
        <FolderOpenOutlined key="open"/>
      ]}>réaliser ce travail en groupe bla bla bla</Card>
    </Panel>
  </Collapse>
  </div>
        
    )
}

export default MyTasks
