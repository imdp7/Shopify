import React from 'react'
import './Main.css'
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined,HomeOutlined ,BarChartOutlined,AppstoreAddOutlined,DollarOutlined,TagsOutlined,SettingOutlined,PlusCircleFilled,
    AmazonCircleFilled,GoogleCircleFilled,FacebookFilled,InstagramFilled
} from '@ant-design/icons';
import {Link} from 'react-router-dom'
import MainContent from '../Content/MainContent'


const { SubMenu } = Menu;
const { Header, Sider } = Layout;
const size = {
    fontSize:'15px'
}

function Main() {
    return (
        <div>
           <Layout>
        <Header className="header" style={{ position: 'fixed', zIndex: 10, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Layout style={{padding: '85px 24px 24px 24px'}}>
      <Sider width={230} className="site-layout-background" 
      style={{overflow: 'auto',height:'90vh',position:'fixed',left:'0',padding: '0',overflowX:'hidden'}}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['Home']}
          style={{ minHeight: '100%',borderRight:0, position:'relative',backgroundColor:'#F6F6F7'}}
        >
          <Menu.Item key="Home" icon={<HomeOutlined style={size}/>}><Link to='/'> Home </Link></Menu.Item>  
          <SubMenu key="Orders" icon={<LaptopOutlined style={size}/>} title="Orders">
            <Menu.Item key="Open"><Link to='/Orders'> Open </Link></Menu.Item>
            <Menu.Item key="Draft">Draft</Menu.Item>
            <Menu.Item key="AbandonCheckout">Abandon Checkout</Menu.Item>
          </SubMenu>
          <SubMenu key="Products" icon={<TagsOutlined style={size}/>} title="Products">
          
            <Menu.Item key="All Products">
            <Link to='/AllProducts'>All Products</Link></Menu.Item>
            <Menu.Item key="Inventory">Inventory</Menu.Item>
            <Menu.Item key="Transfers">Transfers</Menu.Item>
            <Menu.Item key="Collections">Collections</Menu.Item>
            <Menu.Item key="GiftCards">Gift Cards</Menu.Item>
          
          </SubMenu>
          <Menu.Item key="Customers" icon={<UserOutlined style={size}/>}>Customers</Menu.Item>
          <Menu.Item key="Analysis" icon={<BarChartOutlined style={size}/>}>Analysis</Menu.Item>
          <Menu.Item key="Marketing" icon={<NotificationOutlined style={size}/>}>Marketing</Menu.Item>
          <Menu.Item key="Discounts" icon={<DollarOutlined style={size}/>} disabled>Discounts</Menu.Item>
          <Menu.Item key="Apps" icon={<AppstoreAddOutlined style={size}/>}>Apps</Menu.Item>
          <p style={{fontSize:'17px',paddingLeft:'1rem'}}>Sales Channel <PlusCircleFilled  style={{paddingLeft:'50px',fontSize:'25px'}} /></p>
          <Menu.Item key="App1" icon={<AppstoreAddOutlined style={size} />}>Online Store</Menu.Item>
          <Menu.Item key="App2" icon={<AppstoreAddOutlined style={size}/>}>Ebay</Menu.Item>
          <Menu.Item key="App3" icon={<AmazonCircleFilled style={size}/>}>Amazon</Menu.Item>
          <Menu.Item key="App4" icon={<GoogleCircleFilled style={size}/>}>Google Shopping</Menu.Item>
          <Menu.Item key="App5" icon={<FacebookFilled style={size}/>}>Facebook</Menu.Item>
          <Menu.Item key="App6" icon={<InstagramFilled style={size}/>}>Instagram</Menu.Item>
          <Menu.Item key="Settings" icon={<SettingOutlined />} style={{position:'relative',bottom:'0px'}}>Settings</Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ padding: '0px 24px 24px 230px',borderRadius:'50px'}}>
        <MainContent/>
      </Layout>
    </Layout>
  </Layout> 
        </div>
    )
}

export default Main
