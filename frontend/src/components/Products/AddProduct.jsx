import React, { useId, useState } from 'react'
import { Button, Form, Input } from 'antd';
import '../components.css'
import { CloseCircleOutlined, CaretUpOutlined, HomeOutlined } from '@ant-design/icons';
import ProductService from '../../services/ProductsService.jsx'
import { Link, useNavigate } from 'react-router-dom';




export default function AddProduct() {
  const [name, setName] = useState("")
  const [productId, setProductId] = useState("")
  const [company, setCompany] = useState("")
  const [time, setTime] = useState("")
  const [quality, setQuality] = useState("")


  const navigate = useNavigate();
  const onFinish = (values) => {

    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const createProduct = (e) => {
    console.log(e);

    const product = { name, productId, company, quality, time }
    if (name != "" && productId != "" && company != "" && quality != "" && time) {

      ProductService.createProduct(product).then((response) => {
        navigate('/productlist')
      }).catch((error) => {

        console.log(error);
      })
    }
    else {
      console.log("上述字段不能为空");
    }
  }
  return (
    <div className='addProduct'>
      <div className="title" style={{ paddingBottom: '30px' }}>Add Product</div>

      <Form
        name="Add product"
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        style={{
          marginLeft: '2%',
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label=" Id"
          name=" id"
          tooltip="请输入产品Id"
          rules={[
            {

              required: true,

              message: 'Please input Product Id!',
            },
          ]}
        >
          <Input value={productId} onChange={(e) => setProductId(e.target.value)} />

        </Form.Item>
        <Form.Item
          label=" Name"
          name="name"

          tooltip="请输入产品姓名"

          rules={[
            {
              required: true,
              message: '产品姓名不能为空!',
            },
          ]}
        >
          <Input value={name} onChange={(e) => setName(e.target.value)} defaultValue="Name" placeholder="Please input Product Name!" />
        </Form.Item>
        <Form.Item
          label=" Time"
          name="time"
          rules={[
            {
              required: true,
              message: 'Please input your Product Time!',
            },
          ]}
        >
          <Input value={time} defaultValue="Time" onChange={(e) => setTime(e.target.value)} placeholder="Please input Product Time!" />
        </Form.Item>
        <Form.Item
          name="Company"
          label="company"
          rules={[
            {
              required: true,
              message: 'Please input your Product Company!',
            },
          ]}
        >
          <Input value={company} defaultValue="Company" onChange={(e) => setCompany(e.target.value)} placeholder="Please input Product Company!" suffix={<HomeOutlined />} />

        </Form.Item>
        <Form.Item
          name="Quality"
          label="quality"
          rules={[
            {
              required: true,
              message: 'Please input your Product Quality!',
            },
          ]}
        >
          <Input value={quality} defaultValue="Quality" onChange={(e) => setQuality(e.target.value)} placeholder="Please input Product Quality!" suffix={<HomeOutlined />} />

        </Form.Item>



      </Form>
    </div>
  )
}







