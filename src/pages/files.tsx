import React, { useState, useEffect } from "react";
import FileList from "../components/File"
import { Table,Dropdown, Menu ,Collapse, message, Form, Upload, Modal, Button, Input} from 'antd';
import { FileOutlined,SearchOutlined ,FilePdfOutlined,FileWordOutlined
  ,FileImageOutlined,FileExcelOutlined,FilePptOutlined,FileTextOutlined,InboxOutlined } from '@ant-design/icons'
import '../components/css/file.css';
import '@ant-design/compatible/assets/index.css';
import { ColumnProps } from 'antd/es/table';
import { Link, useParams } from "react-router-dom";
import Layout from "../components/CourseLayout";
import MaterialList from "../components/File";
import PlusButton from "../components/svgs/PlusButton";
import CreateFileModal from "../components/CreateFileModal";
import DropDownLink from "../components/DropdownLink";
import DropDownFile from "../components/DropdownFile";
import {useDispatch, useSelector} from "react-redux"
import { fetchAll } from "../redux/actions/models";
import CreateLinkModal from '../components/CreateLinkModal';
import { RequestQueryBuilder, CondOperator } from "@nestjsx/crud-request";
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function FilesList() {
  const [visible, showCreateFileModal] = useState(false)
  const [visible2, showCreateLinkModal] = useState(false)
  const dispatch = useDispatch()
  const {courseId} = useParams()
const links :any = useSelector((state:any) => state.models["links"])
const documents :any = useSelector((state:any) => state.models["documents"])
console.log(documents)
useEffect(() => {
  const query = RequestQueryBuilder.create()
  query
  .setFilter({field:"cours.id",operator:CondOperator.EQUALS,value:courseId})

  dispatch(fetchAll("documents",query.query()))
  dispatch(fetchAll("links",query.query()))

}, [])
  
var icone=<></>
const { Panel } = Collapse;
function callback(key:any) {
  console.log(key);
}

interface File {
  key: number,
  title:string,
  type: string,
  url:string,
  date:string,
  action:any;
}

    const columnsFile: ColumnProps<File>[] = [{
      
          title: 'title',
          dataIndex: 'title',
          key: 'title',
        },
 
      {
        title: 'url',
        dataIndex: 'url',
        key: 'url',
          render:(cell, row, index) => 
          { var type:string[];
            var fullname:String=documents[index].url;
            console.log(fullname)
            type=fullname.split(".")
            switch (type[1].toLowerCase()) {
              case "pdf": icone=<FilePdfOutlined style={{fontSize:30}}/>
              break;
              case "doc":icone=<FileWordOutlined style={{fontSize:30}}/>
              break;
              case "docx":icone=<FileWordOutlined style={{fontSize:30}}/>
              break;
              case "jpg":icone=<FileImageOutlined style={{fontSize:30}}/>
              break;
              case "png":icone=<FileImageOutlined style={{fontSize:30}}/>
              break;
              case "svg":icone=<FileImageOutlined style={{fontSize:30}}/>
              break;
              case "xsl":icone=<FileExcelOutlined style={{fontSize:30}}/>
              break;
              case "csv":icone=<FileExcelOutlined style={{fontSize:30}}/>
              break;
              case"ppt":icone=<FilePptOutlined style={{fontSize:30}}/>
                break;
            
              default:icone=<FileOutlined style={{fontSize:30}}/>
                break;
            }
           
           return (
             
             <div>
            {icone} {" "}
            <a href={`http://localhost:3009/documents/files/${documents[index].url}`} target="_blank">{documents[index].url}</a>
             </div>
           ) } 
        },

      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render:(cell, row, index)=>(
          <DropDownFile file={documents[index]} ></DropDownFile>
        ),
      },
    ];

  
    interface lien {
      key: number,
      title:string,
      url:any,
      date:Date,
      action:any;
    }
      
     
    
      
    
        const columnsLink: ColumnProps<lien>[] = [{
          
              title: 'title',
              dataIndex: 'title',
              key: 'title',
              
        },
        
          {
            title: 'url',
            dataIndex: 'url',
            key: 'url',
          
          },
          /*{
            title: 'date  ',
            dataIndex: 'createdAt',
            key: 'date',
           
            
          },*/
          {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render:(cell, row, index)=>(
             <DropDownLink link={links[index]}/>
            ),
          },
        ];
  

  return (
    <Layout>   
    <Collapse defaultActiveKey={['1']} onChange={callback} accordion>
    <Panel header="documentation" key="1">
    <div style={{paddingBottom:"55px",position:"sticky"}}>
      <Input placeholder="Search" className="searchbar" prefix={<SearchOutlined />}/>
      </div>
      <Table<File> columns={columnsFile} dataSource={documents} /> 
      <PlusButton showModal={() => showCreateFileModal(!visible)} />
    <CreateFileModal visible={visible} showModal = {showCreateFileModal}/>
    </Panel>
    <Panel header="links" key="2">
    <div style={{paddingBottom:"55px",position:"sticky"}}>
      <Input placeholder="Search" className="searchbar" prefix={<SearchOutlined />}/>
      </div>
    <Table columns={columnsLink} dataSource={links || []} /> 
    <PlusButton showModal={() => showCreateLinkModal(!visible2)} />
    <CreateLinkModal visible={visible2} showModal = {showCreateLinkModal}/>
    </Panel>
  </Collapse>
  </Layout>
)

}

export default FilesList;