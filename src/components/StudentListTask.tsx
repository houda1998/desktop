
import React, { useEffect } from 'react'
import { Divider, List, Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAll } from '../redux/actions/models'

function StudentListTask() {
    const dispatch = useDispatch()
    const users :any = useSelector((state:any) => state.models["users"])
   useEffect(() => {
     dispatch(fetchAll("users"))
   }, []) 
 console.log(users || [])
 const mydata:any=[]
 const getnames=(users || []).map((user:any) => {
   mydata.push(user.name)
 })

    return (
        <div>

        <List
          header={<div style={{fontWeight:"bold"}}>Students List</div>}
          style={{textAlign:"center"}}
          dataSource={mydata}
          renderItem={item => (
            <List.Item>
              <Typography.Text mark></Typography.Text> {item}
            </List.Item>
          )}
        />
        
        </div>
    )
}

export default StudentListTask
