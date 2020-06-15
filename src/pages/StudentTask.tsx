import React from 'react'
import { Layout,Statistic } from 'antd'
const { Header, Footer, Sider, Content } = Layout;
import MyLayout from "../components/Layout"
import '../components/css/StudentTask.css';
import StudentListTask from '../components/StudentListTask';
import Time from '../components/svgs/Time';
import ListFileTask from '../components/ListFileTask';
const { Countdown } = Statistic;
function StudentTask() {
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
    return (
   <MyLayout>
    <Layout>
    <Header style={{background:"white",border:"solid 1px #F0F0F0"}}>
    <p className="title" style={{float:"left",display:"inline-block"}}>TestTitle</p>
    <p style={{display:"inline-block",float:"right"}}><Countdown  value={deadline}  style={{marginTop: "11px",
      marginLeft: "15px",
      border: "1px #f0f0f0 solid"}}/></p>  
    <p style={{display:"inline-block",float:"right"}}><Time/>Temps restant: </p>  
   
    </Header>
    <Layout>
      <Sider style={{background:"white",border:"solid 1px #F0F0F0"}}><StudentListTask/></Sider>
      <Content style={{background:"white"}}>
      <div style={{border:"solid 1px #F0F0F0",height:"25%"}}>info etudianrt</div>
      <div><ListFileTask/></div>
      </Content>
    </Layout>
  </Layout>
  </MyLayout>
    )
}

export default StudentTask
