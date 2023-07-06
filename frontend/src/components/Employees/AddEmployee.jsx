
import React, { useState } from 'react'
import { Button, Form, Input } from 'antd';
import '../components.css'
import { CloseCircleOutlined, CaretUpOutlined, HomeOutlined } from '@ant-design/icons';
import CustomersService from '../../services/CustomersService';
import EmployeesService from '../../services/EmployeesService';
import { Link, useNavigate } from 'react-router-dom';


export default function AddEmployee() {
  const [employeeName, setEmployeeName] = useState("")
  const [employeePhone, setEmployeePhone] = useState("")
  const [employeeAddress, setEmloyeePosition] = useState("")
  const [employeeId, setEmployeeId] = useState("")


  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  // const createEmployee = (e) => {
  //   console.log(e);
  //   const employee = { employeeId, employeeName, employeePhone, employeePosition }
  //   if (employeeName != "" && employeePhone != "" && employeePosition != "" &&
  //     employeeId != "") {
  //     EmployeesService.createEmployee(employee).then((response) => {
  //       navigate('/employeeList')
  //     }).catch((error) => {
  //       console.log(error);
  //     })
  //   }
  //   else {
  //     console.log("上述字段不能为空");
  //   }
  // }
  return (
    <div className='addemployee'>
      <div className="title" style={{ paddingBottom: '30px' }}>Add Employee</div>
      <Form
        name="basic"
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
          label="Employee Id"
          name="employeeId"
          rules={[
            {
              required: true,
              message: 'Please input Employee Id!',

            },
          ]}
        >
          <Input value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} placeholder='请输入员工ID' />
        </Form.Item>
        <Form.Item
          label="Employee Name"
          name="employeeName"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: 'Please input Employee Name!',
            },
          ]}
        >
          <Input value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} placeholder="Please input Employee Name!" />


        </Form.Item>


        <Form.Item
          label="Employee Phone"
          name="customerPhone"
          rules={[
            {
              required: true,
              message: 'Please input your Employee Phone!',
            },
          ]}

        >
          <Input value={employeePhone} onChange={(e) => setEmployeePhone(e.target.value)} placeholder="Please input Employee Phone!" />
        </Form.Item>

        <Form.Item
          label="Employee Position"
          name="employeePosition"
          rules={[
            {
              required: true,
              message: 'Please input your Employee Position!',
            }
          ]}
        >
          <Input onChange={(e) => setEmloyeePosition(e.target.value)} placeholder="Please input Employee position!" suffix={<HomeOutlined />} />


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

          <Button type="primary" htmlType="submit" icon={<CaretUpOutlined />}>
            Submit
          </Button>
          <Button type="danger" style={{ marginLeft: "25px" }} icon={<CloseCircleOutlined />}>
            <Link to={"/customerlist"} style={{ color: "white" }}>Close</Link>
          </Button>
        </Form.Item>
      </Form>
    </div>

  )
}








