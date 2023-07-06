import React, { useEffect, useState } from 'react'
import { Button, Space, Table, message, Popconfirm } from 'antd';
import '../components.css'
import CustomersService from '../../services/CustomersService'
import { Link } from 'react-router-dom';
import { DeleteOutlined, UpCircleOutlined } from '@ant-design/icons';

export default function CustomerList() {

  const [customers, setCustomers] = useState([])

  const getAllCustomers = () => {
    CustomersService.getAllCustomers().then((response) => {
      setCustomers(response.data);
    }).catch(error => {
      console.log(error);
    })
  }
  
  useEffect(() => {
    getAllCustomers();
  }, [])

  // const UpdateCustomer = (e) => {
  //   console.log(e);
  // }

  const deleteCustomer = (e) => {
    console.log(e);
    message.success('Delete Success!');
    setTimeout(() => {
      CustomersService.deleteCustomer(e).then(response => {
        getAllCustomers();
      }).catch(error => {
        console.log(error);
      })
    }, 500);
  }

  const cancel = (e) => {
    console.log(e);
    message.error('Delete Failed!');
  };



  //表格的所有的列的定义
  const columns = [
    {
      //标题
      title: 'Customer Id',
      //数据的索引名称
      dataIndex: 'customerid',
      //数据的键值
      key: 'customerid',
      //内容的对其方式
      align: 'center',
    },
    {
      title: 'Customer Name',
      dataIndex: 'customername',
      key: 'customername',
      align: 'center',
    },
    {
      title: 'Customer Phone',
      dataIndex: 'customerphone',
      key: 'customerphone',
      align: 'center',
    },
    {
      title: 'Customer Address',
      key: 'customeraddress',
      dataIndex: 'customeraddress',
      align: 'center',
    },
    {
      //操作列
      title: 'Actions',
      key: 'actions',
      align: 'center',
      render: (_, record) => (
        //定义一个空格
        <Space size="middle">
          <Button type='primary'  icon={<UpCircleOutlined />}>
            <Link to={"updatecustomer/" + record.key} style={{ color: "white", paddingLeft: "9px" }}>Update</Link>
          </Button>
          //定义一个确认删除的弹出消息框，
          <Popconfirm
            title="Are you sure to delete?"
            //点击确定按钮， 调用函数// deleteCustomer
            onConfirm={() => deleteCustomer(record.key)}
            //点击取消按钮， 调用cancel函数

            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button type='danger' icon={<DeleteOutlined />}>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  const data = customers.map((customer) => {

    return {
      key: customer.id,
      customerid: customer.id,
      customername: customer.customerName,
      customerphone: customer.customerPhone,
      customeraddress: customer.customerAddress,
    }
  })

  return (
    <div className='emplst'>
      <div className="title">List Customers</div>
      <Table columns={columns} dataSource={data} bordered={true} />
    </div>
  )
}
