import React,{useEffect, useState } from 'react'
import {
    Button,
    Form,
    Input,
    TreeSelect,
} from 'antd';
import '../components.css'
import { Link, useLocation } from 'react-router-dom'
import CustomersService from '../../services/CustomersService';
import { CloseCircleOutlined, CaretUpOutlined, MailOutlined } from '@ant-design/icons';

export default function UpdateCustomer() {
    const [customerName,setCustomerName] = useState("")
    const [customerPhone,setCustomerPhone] = useState("")
    const [customerAddress,setCustomerAddress] = useState("")

    const location = useLocation()
    let path = location.pathname;
    let id = path.split('/')[3];

    const updateCustomer = (e) =>{
        e.preventDefault();
        const customer = {customerName,customerPhone,customerAddress};
        console.log(customer);
        CustomersService.updateCustomer(id,customer).then(response=>{

        }).catch(error =>{
            console.log(error);
        })
    }
    useEffect(() =>{
        CustomersService.getCustomerById(id).then(response =>{
            setCustomerName(response.data.customerName);
            setCustomerPhone(response.data.customerPhone);
            setCustomerAddress(response.data.customerAddress);
        }).catch(error =>{
            console.log(error);
        })
    },[])
  return (
    <div className='updateemp'>
            <div className="title" style={{ paddingBottom: '30px' }}>Update Customer</div>
            <Form
                labelCol={{
                    span: 5,
                }}
                wrapperCol={{
                    span: 14,
                }}
                style={{
                    marginLeft: '2%',
                }}
                layout="horizontal"
            >
                    <Form.Item label="Customer Name" tooltip="What do you want others to call you?">
                        <Input value={customerName} onChange={e => setCustomerName(e.target.value)} />
                    </Form.Item>

                    <Form.Item label="Customer Phone" >
                        <Input value={customerPhone} onChange={e => setCustomerPhone(e.target.value)} />
                    </Form.Item>

                    <Form.Item label="Customer Address" >
                        <Input value={customerAddress} onChange={e => setCustomerAddress(e.target.value)} suffix={<MailOutlined />} />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 5,
                            span: 16,
                        }}
                        style={{
                            marginTop: '50px'
                        }}
                    >
                        <Button type="primary" onClick={(e) => updateCustomer(e)} htmlType="submit" icon={<CaretUpOutlined style={{ marginRight: "2px" }} />}>
                            <Link to='/customerlist' style={{ color: "white" }}>Update</Link>
                        </Button>
                        <Button type='danger' style={{ marginLeft: "25px" }} icon={<CloseCircleOutlined style={{ marginRight: "2px" }} />}>
                            <Link to='/customerlist' style={{ color: "white" }}>Close</Link>
                        </Button>
                    </Form.Item>

            </Form>
        </div>
  )
}
