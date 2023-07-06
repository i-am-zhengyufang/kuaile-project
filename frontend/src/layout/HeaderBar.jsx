import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { HomeOutlined } from '@ant-design/icons';

import '../App.css'

export default function HeaderBar() {
  const [headName, setHeadName] = useState("")

  const location = useLocation()
  let path = location.pathname.split("/")[1]
  let path1 = location.pathname.split("/")[2]
  console.log(location.pathname.split("/")[1]);

  useEffect(() => {
    console.log(path1, 'path1')
    if (path1 === "updateproduct") {
      setHeadName("/ 产品管理 / 更新产品")
    }
    else if (path1 === "updaterole") {
      setHeadName("/ 角色管理 / 更新角色")
    }
    else if (path1 === "roledetails") {
      setHeadName("/ 角色管理 / 角色详情")
    }
    else if (path1 === "updatedepartment") {
      setHeadName("/ 部门管理 / 更新部门")
    }
    else if (path1 === "updateRatingList") {
      setHeadName("/ 绩效管理 / 修改绩效工资")
    }
    else if (path1 === "updatecustomer") {
      setHeadName("/ 客户管理 / 更新客户")
    } else {
      if (path === "ratinglist") {
        setHeadName("/ 绩效管理 / 绩效等级管理")
      }

      if (path === "productlist") {
        setHeadName("/ 产品管理 / 产品列表")
      }
      if (path === "addproduct") {
        setHeadName("/ 产品管理 / 添加产品")
      }
      if (path === "customerlist") {
        setHeadName("/ 客户管理 / 客户列表")
      }
      if (path === "addcustomer") {
        setHeadName("/ 客户管理 / 添加客户")
      }
      if (path === "departmentlist") {
        setHeadName("/ 部门管理 / 部门列表")
      }
      if (path === "adddepartment") {
        setHeadName("/ 部门管理 / 添加部门")
      }
      if (path === "rolelist") {
        setHeadName("/ 角色管理 / 角色列表")
      }
      if (path === "addrole") {
        setHeadName("/ 角色管理 / 添加角色")
      }
      if (path === "courselist") {
        setHeadName("/ 课程管理 / 课程列表")
      }
      if (path === "addcourse") {
        setHeadName("/ 课程管理 /添加课程")
      }
    }
  }, [path, path1])
  return (
    <div className='headname'>
      <HomeOutlined style={{ marginRight: '7px' }} />
      {headName}
    </div>
  )
}
