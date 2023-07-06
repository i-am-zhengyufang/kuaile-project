import { Layout } from 'antd';
import React from 'react';
import FootBar from './layout/FootBar';
import HeaderBar from './layout/HeaderBar';
import SideBar from './layout/SideBar';
import './App.css'
import { Outlet } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

export default function App() {

  return (
    <div className='all-container'>
      <Layout className='my-context'>

        <Sider>
          <SideBar />
        </Sider>

        <Layout>

          <Header>
            <HeaderBar />
          </Header>

          <Content>
            <Outlet />
          </Content>

          <Footer>
            <FootBar />
          </Footer>

        </Layout>

      </Layout>
    </div>
  )
}

