import React, { useEffect } from 'react'
import { Layout,Statistic, Table } from 'antd'
const { Header, Footer, Sider, Content } = Layout;
import MyLayout from "../components/CourseLayout"
import '../components/css/StudentTask.css';
import StudentListTask from '../components/StudentListTask';
import Time from '../components/svgs/Time';
import ListFileTask from '../components/ListFileTask';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../redux/actions/models';
import { RequestQueryBuilder, CondOperator } from '@nestjsx/crud-request';
import { useParams } from 'react-router-dom';
const { Countdown } = Statistic;
function StudentTask() {
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
  const dispatch = useDispatch()
  const {taskId} = useParams()

  const solutions = useSelector((state:any) => state.solutions)
  useEffect(() => {
    const query = RequestQueryBuilder.create()
        query.setFilter({ field: "task.id", operator: CondOperator.EQUALS, value: taskId })
    dispatch(fetchAll("solutions",query.query()))
  }, [])
  
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
      <Content style={{background:"white"}}>
        <Table 
        columns={[{dataIndex:"user.name", title:"name"}, 
        {dataIndex:"createdAt", title:"submitted at"}, 
        {dataIndex:"document.url",title:"document"},
        {dataIndex:"note",title:"grade"}
      ]}
        dataSource={solutions}
        />
      </Content>
    </Layout>
  </Layout>
  </MyLayout>
    )
}

export default StudentTask
