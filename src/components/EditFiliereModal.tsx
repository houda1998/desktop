import React, { useState, useEffect } from 'react'
import { Modal, Button, Form, Input, Select } from 'antd';
import { useDispatch} from "react-redux"
import {addOne, editOne} from "../redux/actions/models"

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};


function EditFiliereModal({showModal,visible, filiere} : any) {
  const [form] = Form.useForm();
  const [newFiliere, setnewFiliere] = useState(filiere)
  const { Option } = Select;
  const dispatch = useDispatch()
  const addfiliere = () => {
    dispatch(editOne("filiers",newFiliere.id,newFiliere))
    showModal(false)
  }

  useEffect(() => {
    setnewFiliere(filiere)
    form.setFieldsValue(filiere)
  }, [filiere])
console.log(newFiliere)
    return (
        <Modal
        title="Edit field"
        visible={visible}
        onCancel={() => showModal(false)}
        footer={[
          <Button form="myForm" key="creer"  onClick={addfiliere}>
            edit
            </Button>,
          <Button key="cancel" htmlType="button" onClick={() => showModal(false)}>
            cancel
            </Button>
        ]}
      >
        <Form {...layout} form={form} name="control-hooks" id="myForm"  >
          <Form.Item name="title" label="Nouveau Nom du filiere" rules={[{ required: true }]}>
            <Input style={{ marginLeft: "12px" }}  
            onChange={(e) => {
              e.persist()
              setnewFiliere((filiere:any) => ({...filiere,title:e.target.value}))
            }}/>
          </Form.Item>
        </Form>

      </Modal>
    )
}

export default EditFiliereModal
