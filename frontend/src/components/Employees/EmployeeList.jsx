import React from 'react'
import { Button, Form, Input, Space, Table } from 'antd';
import '../components.css'

import { Link } from 'react-router-dom';
import { DeleteOutlined, UpCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';

export default function EmployeeList() {
  const columns =[
    {
      title: 'Employee Id',
      dataIndex:'employeeId',
    },
    {
      title:'Employee Name',
      dataIndex:'employeeName',
    },
    {
      title:'Employee Phone',
      dataIndex:'employeePhone',
    },
    {
      title:'Employee Position',
      dataIndex:'employeePosition',
    },
    {
      title:'Action',
      key:'action',
      render: (_,record)=> (
        <Space size="large">
           <Button type='primary'  icon={<UpCircleOutlined />} >编辑</Button>
          <Button type='danger' icon={<DeleteOutlined />}>删除</Button>
        </Space>
       
      )    }
  ]

    const data =[
      {
        key:'1',
        employeeId:'09876541',
        employeeName:'王一龙',
        employeePhone:'13168458907',
        employeePosition:'前台服务员',
      },
      {
        key:'2',
        employeeId:'09876123',
        employeeName:'王二龙',
        employeePhone:'13145678909',
        employeePosition:'商品讲解员',
      },
      {
        key:'3',
        employeeId:'09765430',
        employeeName:'王三龙',
        employeePhone:'13768245609',
        employeePosition:'经理',
      },
      {
        key:'4',
        employeeId:'98123456',
        employeeName:'王四龙',
        employeePhone:'13124346780',
        employeePosition:'销售人员',
      },
      {
        key:'5',
        employeeId:'98712340',
        employeeName:'王五龙',
        employeePhone:'13124567809',
        employeePosition:'技术人员',
      },
      {
        key:'6',
        employeeId:'67854321',
        employeeName:'王六龙',
        employeePhone:'13509865412',
        employeePosition:'总经理',
      },
    ]
    

  return (
    <div style={{margin:'50px'}}>
    <div className="title" style={{ paddingBottom: '30px'}}>Employee List </div>
    <Table columns={columns} dataSource={data} bordered={true} />
  </div>)
}
    
    