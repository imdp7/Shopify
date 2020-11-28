import React from 'react'
import {Row,Col,Form,InputNumber} from 'antd'


function onChange(value) {
    console.log('changed', value);
  }

  
function Quantity() {
    return (
        <div>
            <div>
                <Form.Item label="Quantity" labelCol={{span: "24"}} />
            </div>
            <Form>
                <Row>
                    <Col>
                     <Form.Item label="Available" labelCol={{span: "24"}} >
                     <InputNumber min={-1000} max={1000} defaultValue={0} onChange={onChange} size="large"/>
                        </Form.Item>
                    </Col>
                </Row>
                </Form>      
        </div>
    )
}

export default Quantity
