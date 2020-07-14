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
function StudentTask() {
  const dispatch = useDispatch()
  const {taskId} = useParams()

  const solutions = useSelector((state:any) => state.models.solutions)
  const task = useSelector((state:any) => state.models.tasks.filter((t:any)=>t.id==taskId)[0])
  useEffect(() => {
    const query = RequestQueryBuilder.create()
        query.setFilter({ field: "task.id", operator: CondOperator.EQUALS, value: taskId })
        console.log(query.query())
    dispatch(fetchAll("solutions",query.query()))
  }, [])
  console.log(solutions)
    return (
   <MyLayout>
    <Layout>
    <Header style={{background:"white",border:"solid 1px #F0F0F0"}}>
    <p className="title" style={{float:"left",display:"inline-block"}}>{task?.title}</p>
   
    </Header>
    <Layout>
      <Content style={{background:"white"}}>
        <Table 
        columns={[
        {dataIndex:"user", title:"name", render:(v,d,i)=>(<div>{v.name}</div>)}, 
        {dataIndex:"createdAt", title:"submitted at"}, 
        {dataIndex:"document",title:"document",render:(v,d,i)=>(<a href={`http://localhost:3009/documents/files/${v?.url}`} target="_blank" download>soution</a>)},
        {dataIndex:"note",title:"grade",render:(v,d,i)=>(<div>{v || "not assigned"}</div>)}
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
