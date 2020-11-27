import React from 'react'
import {Divider,Row ,Col,Button} from 'antd'
import { RollbackOutlined } from '@ant-design/icons';
import Form1 from './Form1'
import Image from './Image'
import Price from './Price'
import Inventory from './Inventory'
import Quantity from './Quantity'

function AddProduct() {
    return (
        <>
         <div  className="title">
             
           <h2 className="heading" style={{paddingLeft: '12em'}}> <Button href="/AllProducts"><RollbackOutlined /></Button> Add New Product</h2>
            </div>
           <Divider />
           <div className="card-container">
        <Row style={{ columnGap:'2.5em' }}>
            <Col span={12} offset={4} style={{textAlign: 'center',height:'auto',width:'0', backgroundColor:'white',padding:'1em',}}>
                <div className="row" style={{ borderColor: 'red'}}>
                    <Form1/>
                </div>
                </Col>
            <Col span={4} style={{textAlign: 'center',height:'auto',width:'auto', backgroundColor:'white',padding:'1em',}}>
            <div className="row" >
                    Hello World
                </div>
            </Col>
        </Row>
        <Row style={{ padding:'1.5em' }}>
        <Col span={12} offset={4} style={{height:'auto',width:'auto', backgroundColor:'white',padding:'1em',}}>
            <div className="row" >
                    <Image/>
                </div>
            </Col>
        </Row>
        <Row style={{ padding:'1.5em' }}>
        <Col span={12} offset={4} style={{height:'auto',width:'auto', backgroundColor:'white',padding:'1em',}}>
            <div className="row" >
                    <Price/>
                </div>
            </Col>
        </Row>
        <Row style={{ paddingTop:'1.5em' }}>
        <Col span={12} offset={4} style={{height:'auto',width:'auto', backgroundColor:'white',padding:'1em',}}>
            <div className="row" >
                    <Inventory/>
                </div>
            </Col>
        </Row>
        <Row style={{ padding:'0.2em' }}>
        <Col span={12} offset={4} style={{height:'auto',width:'auto', backgroundColor:'white',padding:'1em',}}>
            <div className="row" >
                    <Quantity/>
                </div>
            </Col>
        </Row>
        <Row style={{ padding:'0.2em' }}>
        <Col span={12} offset={4} style={{height:'auto',width:'auto',paddingTop:'1em',paddingBottom:'1em'}}>
            <div className="row">
                    <Button type="success" size="large" style={{float:'left'}}>Save</Button>
                    <Button href="/AllProducts" type="danger" size="large" style={{float:'right'}}>Delete</Button>
                    </div>
            </Col>
        </Row>
           </div>
        </>
    )
}

export default AddProduct
