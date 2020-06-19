import React,{useState,Component, useEffect} from 'react'
import { Upload, message,Modal,Table,Dropdown, Input,Tag, Button, Menu, Breadcrumb,Form } from 'antd';
import { SmallDashOutlined,  SearchOutlined,UserDeleteOutlined,UserSwitchOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css';
import '../components/css/StudentList.css';
import '@ant-design/compatible/assets/index.css';
import { ColumnProps } from 'antd/es/table';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../redux/actions/models';
import HomeLayout from '../components/HomeLayout';
import { useParams } from 'react-router-dom';
import { RequestQueryBuilder } from "@nestjsx/crud-request";

    let color='';
    let stat='';

function FiliereListStudent() {
    const dispatch = useDispatch()
    const users :any = useSelector((state:any) => state.models["users"])

    const {filierId} = useParams()
   useEffect(() => {
    const qb = RequestQueryBuilder.create();
    qb.setFilter({field:"filiere.id",operator:"$eq",value:filierId})
     dispatch(fetchAll("users",qb.query()))
   }, []) 
  
   const myusers:any=[]
   const getusers=(users || []).map((user:any)=>{
     myusers.push(user) 
   })
   console.log(users || [])
    const [visible, showModal] = useState(false)
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
      action:any;
    }
  
  
    const more = (
      
        <Menu>
          <Menu.Item className="mydropdown" onClick={() => showModal(!visible)}>
          <UserSwitchOutlined />modifier
          </Menu.Item>
          <Menu.Item className="mydropdown">
          <UserDeleteOutlined /> supprimer
          </Menu.Item>
        </Menu>
        
      
      );
  
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
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'filiere',
          dataIndex: 'filiere',
          key: 'filiere',
        },
        {
          title: 'Action',
          dataIndex: 'action',
          key: 'action',
          render:()=>(
            <Dropdown overlay={more}>
            <a className="ant-dropdown-link">           
            <SmallDashOutlined />
            </a>
          </Dropdown>
          ),
        },
      ];
    return (
          <HomeLayout>
          <div style={{paddingBottom:"55px",position:"sticky"}}>
          <Input placeholder="Search" className="searchbar" prefix={<SearchOutlined />}/>
          </div>
         
          <Table columns={columns} dataSource={users || []} />
          <Modal
          title="modifier étudiant"
          visible={visible}
          onCancel={()=> showModal(false)}
              footer={[
                <Button form="myForm" key="creer" htmlType="submit">
                   creer
                </Button>,
                <Button  key="cancel" htmlType="button" onClick={() => showModal(false)}>
                    cancel
                </Button>
                ]}
        >
        <Form {...layout} form={form} name="control-hooks" id="myForm">
        
        <Form.Item name="FullName" label="fullName" rules={[{ required: true }]}>
            <Input type="text" />
          </Form.Item>      
          <Form.Item name="Email" label="Email" rules={[{ required: true }]}>
          <Input type="email" />
        </Form.Item>      
        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
        <Input type="password" />
        </Form.Item>
        <Form.Item name="confirm" label="Confirm" rules={[{ required: true }]}>
        <Input type="password" />
        </Form.Item>      
          <Form.Item {...tailLayout}>
          </Form.Item>
        </Form>
        
        </Modal>
          </HomeLayout>
      
    );
}

export default FiliereListStudent
