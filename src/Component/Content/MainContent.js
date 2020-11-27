import React from 'react'
import {Layout} from 'antd'
import {Route} from 'react-router-dom'
import UserBlocked from '../Content/UserBlocked'
import Products from '../Products/Products'
import Orders from '../Orders/Orders'
import AddProduct from '../Products/AddProduct/AddProduct'
const {Content} = Layout;

function MainContent() {
    return (
        <div>
           <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            width:'auto',
            backgroundColor:'#F6F6F7'
          }}
        >
          <Route exact path="/" component={UserBlocked} />
          <Route path="/AllProducts" component={Products} />
          <Route path='/Orders' component={Orders} />
          <Route path="/products/new" component={AddProduct} />
        </Content> 
        </div>
    )
}

export default MainContent
