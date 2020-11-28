import React from 'react'
import {Form,Row,Col,Input} from 'antd'

const { TextArea } = Input;

function Title() {
    return (
        <div>
            <Form>
                <Row>
                    <Col span="24">
                        <Form.Item label="Title" labelCol={{span: "24"}} >
                            <Input placeholder='Enter Title' size="large" />
                        </Form.Item>
                    </Col>
                    <Col span="24">
                        <Form.Item label="Description" labelCol={{span: "24"}} wrapperCol={{span: "24"}}>
                        <TextArea rows={6} showCount='true'/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default Title
