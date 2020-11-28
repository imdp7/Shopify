import React from 'react'
import {Row,Col,Form,Input,Checkbox} from 'antd'
import {QuestionCircleOutlined} from '@ant-design/icons'

function Inventory() {
    return (
        <div>
            <div>
                <Form.Item label="Inventory" labelCol={{span: "24"}} />
            </div>
            <Form>
                <Row style={{columnGap:'10.5em'}}>
                    <Col span="24" >
                     <Form.Item label="Inventory managed by" labelCol={{span: "24"}} >
                      <Input placeholder='Shopify' size="large">
                      </Input>
                        </Form.Item>
                    </Col>
                    <Row style={{columnGap:'3.5em'}}>
                    <Col span="11">
                    <Form.Item label="SKU (Stock Keeping Unit)" labelCol={{span: "24"}} >
                            <Input placeholder='SKU' size="large"/>
                        </Form.Item>
                    </Col>
                    <Col span="11">
                    <Form.Item label="Barcode" labelCol={{span: "24"}} >
                            <Input placeholder='Barcode' suffix={<QuestionCircleOutlined />} size="large"/>
                        </Form.Item>
                    </Col>
                    </Row>
                    <Row>
                    <Col span="24" style={{paddingBottom:'1em'}}>
                        <Checkbox checked>Track Quantity</Checkbox>
                    </Col>
                    <Col span="24" style={{paddingBottom:'1em'}}>
                        <Checkbox>Continue selling when out of stock</Checkbox>
                    </Col>
                    </Row>
                </Row>
            </Form>
        </div>
    )
}

export default Inventory
