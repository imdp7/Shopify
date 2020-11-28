import React from 'react'
import {Divider,Row ,Col,Button} from 'antd'
import { RollbackOutlined } from '@ant-design/icons';
import Title from './Title'
import Image from './Image'
import Price from './Price'
import Inventory from './Inventory'
import Quantity from './Quantity'
import Organisation from './Organisation'

const style = {
    height:'auto',
    width:'auto',
    backgroundColor:'white',
    padding:'2em',
    borderRadius:'17px'
};

const style1 ={
    columnGap:'2.5em',
    padding:'0.5em' 
};
function AddProduct() {
    return (
        <>
         <div className="container-heading" style={{padding:'1em'}}>
        <Button href="/AllProducts" type="dashed" size='large'><RollbackOutlined style={{fontSize:'1.2em'}}/></Button>
        <span style={{fontSize:'2em',paddingLeft:'2em'}}>
          Add Product
          {/* <Link to="/"><Button type="primary" size='large' style={{float: 'right'}}>Duplicate</Button></Link> */}
          
         </span>
      </div>
           <Divider />
           <div className="card-container">
        <Row style={style1}>
            <Col span={12} offset={4} style={style}>
                <div className="row" style={{ borderColor: 'red'}}>
                    <Title/>
                </div>
                </Col>
            <Col span={4} style={style}>
            <div className="row" >
                    Hello World
                </div>
            </Col>
        </Row>
        <Row style={style1}>
            <Col span={12} offset={4} style={style}>
            <div className="row" >
                    <Image/>
                </div>
            </Col>
            <Col span={4} style={style}>
            <div className="row" >
                    <Organisation/>
                </div>
            </Col>
        </Row>
        <Row style={{ padding:'0.5em' }}>
        <Col span={12} offset={4} style={style}>
            <div className="row" >
                    <Price/>
                </div>
            </Col>
        </Row>
        <Row style={{ paddingTop:'0.5em' }}>
        <Col span={12} offset={4} style={style}>
            <div className="row" >
                    <Inventory/>
                </div>
            </Col>
        </Row>
        <Row style={{ padding:'0.2em' }}>
        <Col span={12} offset={4} style={style}>
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
