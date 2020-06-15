import React, { useState } from 'react'
import Layout from '../components/CourseLayout'
import MyTasks from '../components/tasks';
import { Button, Input } from 'antd';
import '../components/css/tasks.css';
import { DeleteOutlined,PlusOutlined,EditOutlined,FolderOpenOutlined,SearchOutlined} from '@ant-design/icons'
import CreateTaskModal from '../components/createTaskModal';

function TasksTest() {
const [visible,showModal]=useState(false)
    return (
   <Layout>
   <div>
   <div  style={{paddingBottom:"20px",position:"sticky",float:"right"}}>
   <Button className="mybtn" icon={<PlusOutlined/>} onClick={() => showModal(!visible)} >devoir</Button>
   </div>    
   <div style={{paddingBottom:"20px",position:"sticky",float:"right"}}>
   <Input placeholder="Search" className="searchbar" prefix={<SearchOutlined />}/>
   </div>
   </div>
   <MyTasks></MyTasks>
   <CreateTaskModal visible={visible} showModal = {showModal}/>
   </Layout>
    )
}

export default TasksTest
