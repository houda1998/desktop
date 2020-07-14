import React from 'react'
import {  List, Table } from 'antd'
import { DownloadOutlined,FilePdfOutlined,FileWordOutlined
    ,FileImageOutlined,FileExcelOutlined,FilePptOutlined,FileTextOutlined,InboxOutlined } from '@ant-design/icons'
function ListFileTask() {
    var icone=<></>
    interface file {
        key: number,
        title:string,
        date: string,
        download:any;
        type:string
      }
    const fichiers:file[] =[
        {
        key:1,
        title:"devoir1.pdf",
        date:"05/05/2020",
        download:"",
        type:"pdf"
        },
        { key:2,
        title:"devoir1.png",
       date:"05/05/2020",
            download:"",
            type:"png"
        }
    ]
    return (
        <div>
           <Table columns={[{title:"title",key:"title",dataIndex:"title", render:(cell, row, index) => 
           { 
             switch (fichiers[index].type) {
               case "pdf": icone=<FilePdfOutlined style={{fontSize:10}}/>
               break;
               case "doc":icone=<FileWordOutlined />
               break;
               case "jpg":icone=<FileImageOutlined />
               break;
               case "png":icone=<FileImageOutlined />
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
             {icone}{" "} {fichiers[index].title} 
              </div>
            ) } },{title:"Submition date",key:"date",dataIndex:"date"},{title:"dowload",key:"download",render:()=>(<DownloadOutlined/>)}]} dataSource={fichiers}></Table>
        </div>
    )
}

export default ListFileTask
