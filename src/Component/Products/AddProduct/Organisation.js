import React from 'react'
import { Cascader,Form,Row,Col } from 'antd';
import {PlusOutlined} from '@ant-design/icons'

const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
    },
  ];
  
  function onChange(value, selectedOptions) {
    console.log(value, selectedOptions);
  }
  
  function filter(inputValue, path) {
    return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
  }

function Organisation() {
    return (
        <div>
            <div >
                <Form.Item label="Organisation" colon='false'/>
            
            <Row>
            <Form.Item label="Product Type" >
           <Cascader options={options}
            onChange={onChange}
            placeholder="Please select"
            showSearch={{ filter }}
            notFoundContent="Add Category"
            size='large'/> 
            </Form.Item>
            </Row>
            <Row>

            <Form.Item label="Vendor" >
           <Cascader options={options}
            onChange={onChange}
            placeholder="Please select"
            showSearch={{ filter }}
            notFoundContent="Add Category"
            size='large'/> 
            </Form.Item>
            </Row>
            </div>
        </div>
    )
}

export default Organisation
