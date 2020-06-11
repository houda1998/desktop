import React, { useState } from 'react'
import { Modal, Button, Form, Input } from 'antd';
import { useDispatch} from "react-redux"
import {addOne} from "../redux/actions/models"

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};


function CreateCoursModal({showModal,visible} : any) {
  const [form] = Form.useForm();
  const [cours, setCours] = useState({})
  const dispatch = useDispatch()
  const addCours = () => {
    dispatch(addOne("cours",cours))
    showModal(false)
  }
    return (
        <Modal
        title="créer un cours "
        visible={visible}
        onCancel={() => showModal(false)}
        footer={[
          <Button form="myForm" key="creer"  onClick={addCours}>
            creer
            </Button>,
          <Button key="cancel" htmlType="button" onClick={() => showModal(false)}>
            cancel
            </Button>
        ]}
      >
        <Form {...layout} form={form} name="control-hooks" id="myForm">
          <Form.Item name="cours" label="Nom du cours" rules={[{ required: true }]}>
            <Input style={{ marginLeft: "12px" }}  onChange={(e) => {
              e.persist()
              setCours(cours => ({...cours,title:e.target.value}))
            }}/>
          </Form.Item>
          <Form.Item name="annee" label="Année Scolaire" rules={[{ required: true }]}>
            <Input    style={{ marginLeft: "12px" }} onChange={(e) => {
              e.persist()
              setCours(cours => ({...cours,anneeScolaire:e.target.value}))
            }} />
          </Form.Item>
          <Form.Item name="filliere" label="Fillière(s)" rules={[{ required: true }]}>
            <Input style={{ marginLeft: "12px" }} onChange={(e) => {
              e.persist()
              setCours(cours => ({...cours,filiere:e.target.value}))
            }}/>
          </Form.Item>
          <Form.Item {...tailLayout}>
          </Form.Item>
        </Form>

      </Modal>
    )
}

export default CreateCoursModal
