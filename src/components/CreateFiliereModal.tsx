import React, { useState } from 'react'
import { Modal, Button, Form, Input, Select } from 'antd';
import { useDispatch} from "react-redux"
import {addOne} from "../redux/actions/models"

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};


function CreateFiliereModal({showModal,visible} : any) {
  const [form] = Form.useForm();
  const [filiere, setfiliere] = useState<any>({})
  const { Option } = Select;
  const dispatch = useDispatch()
  const addfiliere = () => {
    dispatch(addOne("filiers",filiere))
    form.setFieldsValue({title:""})
    showModal(false)
  }
    return (
        <Modal
        title="créer un filiere "
        visible={visible}
        onCancel={() => showModal(false)}
        footer={[
          <Button form="myForm" key="creer"  onClick={addfiliere}>
            creer
            </Button>,
          <Button key="cancel" htmlType="button" onClick={() => showModal(false)}>
            cancel
            </Button>
        ]}
      >
        <Form {...layout} form={form} name="control-hooks" id="myForm">
          <Form.Item name="title" label="Nom du filiere" rules={[{ required: true }]} >
            <Input style={{ marginLeft: "12px" }}  onChange={(e) => {
              e.persist()
              setfiliere((filiere:any) => ({...filiere,title:e.target.value}))
            }}/>
          </Form.Item>
        </Form>

      </Modal>
    )
}

export default CreateFiliereModal
