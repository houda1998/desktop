import React,{useState,useCallback} from 'react'
import { Table,Dropdown, Menu ,Collapse, message, Form, Upload, Modal, Button, Input} from 'antd';
import { SearchOutlined ,FilePdfOutlined,FileWordOutlined
  ,FileImageOutlined,FileExcelOutlined,FilePptOutlined,FileTextOutlined,InboxOutlined } from '@ant-design/icons'
import './css/file.css';
import '@ant-design/compatible/assets/index.css';
import { ColumnProps } from 'antd/es/table';
import PlusButton from './svgs/PlusButton';
import CreateFileModal from './CreateFileModal';
import CreateLinkModal from './CreateLinkModal';
import DropDownFile from './DropdownFile';
import DropDownLink from './DropdownLink';
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
  
function MaterialList() {
  const [visible, showCreateFileModal] = useState(false)
  const [visible2, showCreateLinkModal] = useState(false)
  const statut = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info:any) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  
const [form] = Form.useForm();
const { Dragger } = Upload;
var icone=<></>
const { Panel } = Collapse;
function callback(key:any) {
  console.log(key);
}

interface File {
  key: number,
  name:string,
  type: string,
  link:string,
  date:string,
  action:any;
}
  
  const data: File[] = [
    {
  key: 0,
  name:"controle",
  link:"test.pdf",
  type:"pdf",
  date:"05/05/2020 16:00",
  action:"",
    },
    {
      key: 1,
      name:"controle2",
      link:"test.pdf",
      type:"doc",
      date:"04/05/2020 23:00",
      action:"",
      },
];


  

    const columnsFile: ColumnProps<File>[] = [{
      
          title: 'name',
          dataIndex: 'name',
          key: 'name',
          render:(cell, row, index) => 
          { var type:string[];
            type=data[index].name.split(".")
            console.log(type)
            switch (type[1]) {
              case "pdf": icone=<FilePdfOutlined />
              break;
              case "doc":icone=<FileWordOutlined />
              break;
              case "jpg":icone=<FileImageOutlined />
              break;
              case "xsl":icone=<FileExcelOutlined />
              break;
              case"ppt":icone=<FilePptOutlined />
                break;
            
              default:icone=<FileTextOutlined />
                break;
            }
           
           return (
             
             <div>
            {icone}{" "} {data[index].name} 
             </div>
           ) } 
        },
      {
        title: 'type',
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: 'link',
        dataIndex: 'link',
        key: 'link',
      
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render:()=>(
          <DropDownFile></DropDownFile>
        ),
      },
    ];

  
    interface lien {
      key: number,
      title:string,
      link:string,
      date:string,
      action:any;
    }
      
      const mydata: lien[] = [
        {
      key: 0,
      title:"controle",
      link:"www.test.ma",
      date:"05/05/2020 16:00",
      action:"",
        },
        {
          key: 1,
          title:"controle",
          link:"www.test.ma",
          date:"04/05/2020 23:00",
          action:"",
          },
    ];
    
    
      
    
        const columnsLink: ColumnProps<lien>[] = [{
          
              title: 'title',
              dataIndex: 'title',
              key: 'title',
              
        },
        
          {
            title: 'link',
            dataIndex: 'link',
            key: 'link',
          
          },
       
          {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render:()=>(
             <DropDownLink/>
            ),
          },
        ];
  

 
    return (
    <div>
     
         
  <Collapse defaultActiveKey={['1']} onChange={callback} accordion>
  <Panel header="documentation" key="1">
  <div style={{paddingBottom:"55px",position:"sticky"}}>
    <Input placeholder="Search" className="searchbar" prefix={<SearchOutlined />}/>
    </div>
    <Table<File> columns={columnsFile} dataSource={data} /> 
    <PlusButton showModal={() => showCreateFileModal(!visible)} />
  <CreateFileModal visible={visible} showModal = {showCreateFileModal}/>
  </Panel>
  <Panel header="liens" key="2">
  <div style={{paddingBottom:"55px",position:"sticky"}}>
    <Input placeholder="Search" className="searchbar" prefix={<SearchOutlined />}/>
    </div>
  <Table<lien> columns={columnsLink} dataSource={mydata} /> 
  <PlusButton showModal={() => showCreateLinkModal(!visible2)} />
  <CreateLinkModal visible={visible2} showModal = {showCreateLinkModal}/>
  </Panel>
</Collapse>
    </div>)
};

export default MaterialList
