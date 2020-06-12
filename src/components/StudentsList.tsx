import React,{useState,Component} from 'react'
import { Upload, message,Modal,Table,Dropdown, Input,Tag, Button,Layout, Menu, Breadcrumb,Form } from 'antd';
import { SmallDashOutlined,  SearchOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css';
import './css/StudentList.css';
import '@ant-design/compatible/assets/index.css';
import { ColumnProps } from 'antd/es/table';

    let color='';
    let stat='';
    
 
      
      
  
function StudentList() {
              
  //************************************  CONSTANTES  ********************************************//
 
  const [visible, showModal] = useState(false)
  const [visi, showModal2] = useState(false)
  const layout = {
    labelCol: { span: 8 },
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
    filliere:string
    action:any;
  }
  const data: User[] = [
    {
  key: 0,
  AccountStatut:true,
  Fullname: 'Jack jacky',
  email:"jack@gmail.com",
  filliere:"bdcc",
  action:"",
    },
    {
      key: 1,
      AccountStatut:false,
      Fullname: 'Lola lili',
      email:"Lola@gmail.com",
      filliere:"bdcc",
      action:"",
      },
];


  const more = (
    
      <Menu>
        <Menu.Item className="mydropdown" onClick={() => showModal2(!visi)}>
        
            modifier
         
        </Menu.Item>
      </Menu>
      
    
    );

    const columns: ColumnProps<User>[] = [{
      
          title: 'AccountStatut',
          dataIndex: 'AccountStatut',
          key: 'AccountStatut',
           render:(cell, row, index) => 
           { 
             if(data[index].AccountStatut==true){
               color='#5DF888';
               stat='active';
             }
             else
             {
               color="#FF4949";
               stat="down"
             }
            
            return (
              
              <Tag color={color} key={stat} className="stat">
              {stat}
            </Tag>
            ) }
        },
      {
        title: 'FullName',
        dataIndex: 'Fullname',
        key: 'Fullname',
        render:(cell,row,index)=>{
          let name=data[index].Fullname;
          return (
            <div>
             {name}
            </div>

          )
        }

        
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'filliere',
        dataIndex: 'filliere',
        key: 'filliere',
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
    //*******************************************return ************************//
    return (
    <div>
    <div style={{paddingBottom:"55px",position:"sticky"}}>
    <Input placeholder="Search" className="searchbar" prefix={<SearchOutlined />}/>
    </div>
   
    <Table<User> columns={columns} dataSource={data} />
    <Modal
    title="modifier étudiant"
    visible={visi}
    onCancel={()=> showModal2(false)}
        footer={[
          <Button form="myForm" key="creer" htmlType="submit">
             creer
          </Button>,
          <Button  key="cancel" htmlType="button" onClick={() => showModal2(false)}>
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
    </div>)
};

export default StudentList
