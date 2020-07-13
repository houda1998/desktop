import React,{useState,Component, useEffect} from 'react'
import { Upload, message,Modal,Table,Dropdown, Input,Tag, Button, Menu, Breadcrumb,Form } from 'antd';
import { SmallDashOutlined,  SearchOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css';
import '../components/css/StudentList.css';
import '@ant-design/compatible/assets/index.css';
import { ColumnProps } from 'antd/es/table';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../redux/actions/models';
import Layout from "../components/CourseLayout"
    let color='';
    let stat='';
    
 
      
      
  
function StudentList() {
              
  //************************************  CONSTANTES  ********************************************//
  const dispatch = useDispatch()
  const users :any = useSelector((state:any) => state.models["users"])
 useEffect(() => {
 /* const query = RequestQueryBuilder.create()
  query.setFilter({ field: "task.id", operator: CondOperator.EQUALS, value: taskId })*/
   dispatch(fetchAll("users"))
 }, []) 

 const myusers:any=[]
 const getusers=(users || []).map((user:any)=>{
   myusers.push(user) 
 })
 console.log(users || [])
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const [form] = Form.useForm();
  interface User {
    key: number,
    AccountStatut:boolean,
    Fullname: string,
    email:string,
    filiere:string
  }


  console.log(users[0])

    const columns: ColumnProps<User>[] = [{
      
          title: 'AccountStatut',
          dataIndex: 'isActive',
          key: 'AccountStatut',
           render:(cell, row, index) => 
           { 

               if(myusers[index].isActive ==true){
               color='#5DF888';
               stat='active';
              
             }
             else
             {
               color="#FF4949";
               stat="down";
               
             }
            
           
             
            return (
              
              <Tag color={color} key={stat} className="stat">
              {stat}
            </Tag>
            ) }
        },
      {
        title: 'FullName',
        dataIndex: 'name',
        key: 'Fullname',
       
        
      },
      {
        title: 'filiere',
        dataIndex: 'filiere',
        render:(value,record,index)=>{
          return <div>{value.title}</div>
        },
        key: 'filiere',
      },
    ]
    //*******************************************return ************************//
    return (
    <Layout>
    <div style={{paddingBottom:"55px",position:"sticky"}}>
    <Input placeholder="Search" className="searchbar" prefix={<SearchOutlined />}/>
    </div>
   
    <Table columns={columns} dataSource={users || []} />
    
    </Layout>)
};

export default StudentList
