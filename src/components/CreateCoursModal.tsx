import React, { useState, useEffect } from 'react'
import { Modal, Button, Form, Input, Select } from 'antd';
import { useDispatch, useSelector} from "react-redux"
import {addOne, fetchAll} from "../redux/actions/models"
import MultipleInputSelect from "./MultipleInputSelect"
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
  const filiers = useSelector((state:any) => state.models["filiers"])

  const { Option } = Select;
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAll("filiers"))
  }, [])

  function handleAddFiliere(filiers:[]) {
    console.log(filiers)
    setCours((cours) => ({...cours,filiers:filiers?.map((f:any) =>({id:f.value}))}))
  }
  const addCours = () => {
    console.log(cours)
    dispatch(addOne("cours",cours))
    showModal(false)
  }
    return (
        <Modal
        title="Add course "
        visible={visible}
        onCancel={() => showModal(false)}
        footer={[
          <Button form="myForm" key="creer"  onClick={addCours}>
            Add
            </Button>,
          <Button key="cancel" htmlType="button" onClick={() => showModal(false)}>
            cancel
            </Button>
        ]}
      >
        <Form {...layout} form={form} name="control-hooks" id="myForm">
          <Form.Item name="cours" label="Course Name" rules={[{ required: true }]}>
            <Input style={{ marginLeft: "12px" }}  onChange={(e) => {
              e.persist()
              setCours(cours => ({...cours,title:e.target.value}))
            }}/>
          </Form.Item>
          <Form.Item name="annee" label="Academic Year" rules={[{ required: true }]}>
            <Input    style={{ marginLeft: "12px" }} onChange={(e) => {
              e.persist()
              setCours(cours => ({...cours,anneeScolaire:e.target.value}))
            }} />
          </Form.Item>
          <Form.Item name="filiers" label="Field(s)" >
              <MultipleInputSelect 
              values={filiers}
              placeHolder="select field"
              key="id"
              title="title"
              handleChange={handleAddFiliere}
              />
          </Form.Item>
          <Form.Item {...tailLayout}>
          </Form.Item>
        </Form>

      </Modal>
    )
}

export default CreateCoursModal
