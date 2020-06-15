import React, { useState, useEffect } from 'react'
import HomeLayout from "../components/HomeLayout"
import { Row, Col, Table, Button } from 'antd'
import PlusButton from '../components/svgs/PlusButton'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAll, deleteOne } from '../redux/actions/models'
import CreateFiliereModal from '../components/CreateFiliereModal'
function Filieres() {
    const [visible, showModal] = useState(false)
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
                     <Button type="primary">Afficher</Button>  
                     <Button type="dashed">Modifier</Button>  
                     <Button danger onClick={() => dispatch(deleteOne("filiers", filieres[index].id))}>Supprimer</Button></>},
                    ]}
                    dataSource={filieres || []}
                />
            </div>
            <div className="footer">
                <PlusButton showModal={() => showModal(!visible)} />
            </div>
            <CreateFiliereModal showModal = {showModal} visible={visible}/>
        </HomeLayout>
    )
}

export default Filieres
