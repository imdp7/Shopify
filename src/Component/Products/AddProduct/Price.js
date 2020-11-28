import React from 'react'
import {Form,Row,Col,Input} from 'antd'

function Price() {
    return (
        <div>
            <div>
                <Form.Item label="Pricing" labelCol={{span: "24"}} />
            </div>
            <Form>
                <Row style={{columnGap:'10.5em'}}>
                    <Col span="8" >
                     <Form.Item label="Price" labelCol={{span: "24"}} >
                      <Input placeholder='Price' prefix='$' size="large">
                      </Input>
                        </Form.Item>
                    </Col>
                    <Col span="8">
                    <Form.Item label="Compare Price" labelCol={{span: "24"}} >
                            <Input placeholder='Compare Price' prefix='$' size="large"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row style={{columnGap:'5.5em'}}>
                <Col span="8">
                    <Form.Item label="Cost per item" labelCol={{span: "24"}} >
                            <Input placeholder='Cost per item' prefix='$' size="large"/>
                        </Form.Item>
                    </Col>
                <Col span="4">
                <Form.Item label="Margin" labelCol={{span: "24"}} />            
                </Col>
                <Col span="4">
                <Form.Item label="Profit" labelCol={{span: "24"}} />            
                </Col>
                </Row>
            </Form>
        </div>
    )
}

export default Price
