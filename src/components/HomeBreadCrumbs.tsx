import React from 'react'
import { Breadcrumb } from 'antd'
import { useLocation, useParams, Link } from 'react-router-dom'

function HomeBreadCrumbs() {
    const location = useLocation()
    const paths = location.pathname.split("/")
    const {filierId} = useParams()
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            {paths.includes("home") && <Breadcrumb.Item>Courses</Breadcrumb.Item>}
            {paths.includes("filieres") && <Breadcrumb.Item><Link to={"/filieres"}>Fields</Link></Breadcrumb.Item>}
            {paths.includes("filieres") && <Breadcrumb.Item>{filierId}</Breadcrumb.Item>}
            {paths.includes("settings") && <Breadcrumb.Item>Settings</Breadcrumb.Item>}
            {paths.includes("studentsList") && <Breadcrumb.Item>StudentsList</Breadcrumb.Item>}
        </Breadcrumb>
    )
}

export default HomeBreadCrumbs
