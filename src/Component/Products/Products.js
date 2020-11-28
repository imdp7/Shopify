import React from "react";
import "./Products.css";
import { Tabs, Divider, Button,Space } from "antd";
import { RollbackOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import TableData from "./Table/TableData";

const { TabPane } = Tabs;

// function handleClick(e) {
//     e.preventDefault();
//     window.location.href="/addprod"
// }

function Products() {
  return (
    <>
    <div className="container-heading" style={{padding:'1em'}}>
        <Button href="/" type="dashed" size='large'><RollbackOutlined style={{fontSize:'1.2em'}}/></Button><span style={{fontSize:'2em',paddingLeft:'2em'}}>
          All Products
         <Link to="/products/new"> <Button type="primary" size='large' style={{float: 'right'}}> Add Product</Button></Link>
         </span>
      </div>
      <Divider />
      <div className="card-container">
        <Tabs
          defaultActiveKey="1"
          type="card"
          size="large"
          style={{ marginBottom: 32 }}
        >
          <TabPane tab="All" key="1">
            <TableData />
          </TabPane>
          <TabPane tab="Active" key="2">
            <p>Content of Active</p>
          </TabPane>
          <TabPane tab="Draft" key="3">
            <p>Content of Draft</p>
          </TabPane>
          <TabPane tab="Archived" key="4">
            <p>Content of Archived</p>
          </TabPane>
        </Tabs>
      </div>
    </>
  );
}

export default Products;
