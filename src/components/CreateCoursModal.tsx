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
function handleChange(value:any) {
  console.log(`selected ${value}`);
}

function CreateCoursModal({showModal,visible} : any) {
  const [form] = Form.useForm();
  const [cours, setCours] = useState({})
  const { Option } = Select;
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
          <Form.Item name="fillieres" label="Fillière(s)" >
          <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="selectionnez fillière"
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Option value="bdcc" label="bdcc">
      <div className="demo-option-label-item">
        bdcc
      </div>
    </Option>
    <Option value="glsid" label="glsid">
      <div className="demo-option-label-item">
      glsid
      </div>
    </Option>
  </Select>
          </Form.Item>
          <Form.Item {...tailLayout}>
          </Form.Item>
        </Form>

      </Modal>
    )
}

export default CreateCoursModal
