import React from 'react'
import { Modal, Button, Form, Input } from 'antd';

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};


function CreateCoursModal({showModal,visible} : any) {
  const [form] = Form.useForm();

    return (
        <Modal
        title="créer un cours "
        visible={visible}
        onCancel={() => showModal(false)}
        footer={[
          <Button form="myForm" key="creer" htmlType="submit">
            creer
            </Button>,
          <Button key="cancel" htmlType="button" onClick={() => showModal(false)}>
            cancel
            </Button>
        ]}
      >
        <Form {...layout} form={form} name="control-hooks" id="myForm">
          <Form.Item name="cours" label="Nom du cours" rules={[{ required: true }]}>
            <Input style={{ marginLeft: "12px" }} />
          </Form.Item>
          <Form.Item name="annee" label="Année Scolaire" rules={[{ required: true }]}>
            <Input type="number" maxLength={4} minLength={2} style={{ marginLeft: "12px" }} />
          </Form.Item>
          <Form.Item name="filliere" label="Fillière(s)" rules={[{ required: true }]}>
            <Input style={{ marginLeft: "12px" }} />
          </Form.Item>
          <Form.Item {...tailLayout}>
          </Form.Item>
        </Form>

      </Modal>
    )
}

export default CreateCoursModal
