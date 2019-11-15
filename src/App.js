import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'

import SwitchRoute from './router/webRouter'
import './style/App.css'

const { Header, Content, Footer } = Layout

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        user: []
    }
}


  render()
  {
    return (
      <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1"><Link to={'/'}>Home</Link></Menu.Item>
          <Menu.Item key="2"><Link to={'/users'}>Users</Link></Menu.Item>
          <Menu.Item key="3"><Link to={'/news'}>News</Link></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}><SwitchRoute /></div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2018 Created by Macanthony</Footer>
    </Layout>
  )
}
}

export default App
