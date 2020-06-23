import React from 'react'
import { Form, Input, Button, Upload } from 'antd';
import { MinusCircleOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';


const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };
  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 20, offset: 4 },
    },
  };
function DynamicFileInput(props:any) {
    return (
        <Upload {...props}>
        <Button>
          <UploadOutlined /> Select File
        </Button>
      </Upload>
    )
}

export default DynamicFileInput
