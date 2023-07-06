import React, { useEffect, useState } from 'react'
import { ShoppingCartOutlined, UserOutlined, TeamOutlined, TrademarkOutlined, LayoutOutlined, DribbbleSquareFilled } from '@ant-design/icons';
import { Menu } from 'antd';
import '../App.css'
import { useLocation, useNavigate } from 'react-router-dom';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('绩效管理', 'sub1', <UserOutlined />, [
    getItem('绩效等级设置', 'ratinglist'),
    getItem('绩效工资设置', 'wageslist'),
  ]),
  getItem('产品管理', 'sub2', <ShoppingCartOutlined />, [
    getItem('产品列表', 'productlist'),
    getItem('添加产品', 'addproduct'),
  ]),
  getItem('客户管理', 'sub3', <TeamOutlined />, [
    getItem('客户列表', 'customerlist'),
    getItem('添加客户', 'addcustomer'),
  ]),
  getItem('部门管理', 'sub4', <LayoutOutlined />, [
    getItem('部门列表', 'departmentlist'),
    getItem('添加部门', 'adddepartment'),
  ]),
  getItem('角色管理', 'sub5', <TrademarkOutlined />, [
    getItem('角色列表', 'rolelist'),
    getItem('添加角色', 'addrole'),
  ]),
  getItem('学生管理', 'sub6', <DribbbleSquareFilled />, [
    getItem('学生列表', 'studentlist'),
    getItem('添加学生', 'addstud'),
  ]),
  getItem('课程管理', 'sub7', <DribbbleSquareFilled />, [
    getItem('课程列表', 'courselist'),
    getItem('添加课程', 'addcourse'),
  ]),
];

export default function SideBar() {
  const [current, setCurrent] = useState('1');
  const [fatherKey, setFatherKey] = useState();

  const navigate = useNavigate();

  const location = useLocation();
  let path = location.pathname.split("/")[1];
  useEffect(() => {
    if (path === "ratinglist" || path === "addemployee") {
      setFatherKey(['sub1'])
    }
    if (path === "productlist" || path === "addproduct") {
      setFatherKey(['sub2'])
    }
    if (path === "customerlist" || path === "addcustomer") {
      setFatherKey(['sub3'])
    }
    if (path === "departmentlist" || path === "adddepartment") {
      setFatherKey(['sub4'])
    }
    if (path === "rolelist" || path === "addrole") {
      setFatherKey(['sub5'])
    }
    if (path === "studentlist" || path === "addstudent") {
      setFatherKey(['sub6'])
    }
    if (path === "courselist" || path === "addcourse") {
      setFatherKey(['sub7'])
    }

    setCurrent(path);
  }, [path])


  const onClick = (e) => {
    console.log(e.key);
    // setCurrent(e.key);
    navigate('/' + e.key);
  };
  return (
    <div>
      <div className='introduce'>客户关系管理系统</div>
      <Menu
        theme='dark'
        onClick={onClick}
        selectedKeys={[current]}
        openKeys={fatherKey}
        onOpenChange={(openKeys) => {
          setFatherKey(openKeys);
        }}
        mode="inline"
        items={items}
      />
    </div>
  )
}
