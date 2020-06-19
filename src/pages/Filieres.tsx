import React, { useState, useEffect } from 'react'
import HomeLayout from "../components/HomeLayout"
import { Row, Col, Table, Button } from 'antd'
import PlusButton from '../components/svgs/PlusButton'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAll, deleteOne } from '../redux/actions/models'
import CreateFiliereModal from '../components/CreateFiliereModal'
import {  BarsOutlined,UsergroupDeleteOutlined,EditOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';
import EditFiliereModal from '../components/EditFiliereModal'

function Filieres() {
    const [isCreateModalVisible, showCreateModalVisible] = useState(false)
    const [isEditModalVisible, showEditModalVisible] = useState(false)

    const [filiereToEdit, setFiliereToEdit] = useState(null)
    const dispatch = useDispatch()
    const filieres: any = useSelector((state: any) => state.models["filiers"])
    useEffect(() => {
        dispatch(fetchAll("filiers"))
    }, [])
    return (
        <HomeLayout>
            <div className="site-card-wrapper">
                <Table
                    columns={[{ title: "Titre", dataIndex: 'title', key: 'id', width:"60%"},
                     {title:"", render:(cell, row, index) => <>
                     <Link to={`/filieres/${filieres[index].id}/studentsList`}><Button type="primary"><BarsOutlined /></Button></Link>  
                     <Button type="dashed" onClick={() => {
                         setFiliereToEdit(filieres[index])
                         showEditModalVisible(true)
                         }}><EditOutlined /></Button>  
                     <Button danger onClick={() => dispatch(deleteOne("filiers", filieres[index].id))}><UsergroupDeleteOutlined /></Button></>},
                    ]}
                    dataSource={filieres || []}
                />
            </div>
            <div className="footer">
                <PlusButton showModal={() => showCreateModalVisible(!isCreateModalVisible)} />
            </div>
            <CreateFiliereModal visible = {isCreateModalVisible} showModal={showCreateModalVisible}/>
            <EditFiliereModal filiere={filiereToEdit} visible = {isEditModalVisible} showModal={showEditModalVisible}/>
        </HomeLayout>
    )
}

export default Filieres
