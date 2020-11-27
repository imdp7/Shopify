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
    <div className="space-align-container">
        <Space  align="center">
         <h2 className="heading"><Button href="/"><RollbackOutlined /></Button> Products</h2>
         <Link to="/products/new"> <Button type="primary"> Add Product</Button></Link>
        </Space>
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
            <p>Content of tab 2</p>
          </TabPane>
          <TabPane tab="Draft" key="3">
            <p>Content of tab 3</p>
          </TabPane>
          <TabPane tab="Archived" key="4">
            <p>Content of tab 4</p>
          </TabPane>
        </Tabs>
      </div>
    </>
  );
}

export default Products;
