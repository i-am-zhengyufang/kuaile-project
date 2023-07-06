import React, { useState } from 'react'
import { Button, Form, Input } from 'antd';
import '../components.css'
import { CloseCircleOutlined, CaretUpOutlined, HomeOutlined } from '@ant-design/icons';
 import StudentsService from '../../services/StudentService';

import { Link, useNavigate } from 'react-router-dom';

export default function AddStudent() {

  const [studentName, setStudentName] = useState("")
   const [studentPhone, setStudentPhone] = useState("")
   const [studentAddress, setStudentAddress] = useState("")
  const [studentId, setStudentId] = useState("")
   const navigate = useNavigate();
   const onFinish = (values) => {

    console.log('Success:', values);
   };
   const onFinishFailed = (errorInfo) => {
     console.log('Failed:', errorInfo);
   };
   const createStudent = (e) => {
     console.log(e);
     const student = { studentName, studentPhone, studentAddress, studentId }

    if (studentName != "" && studentPhone != "" && studentAddress != "" && studentId) {
       StudentsService.createStudent(student).then((response) => {
         navigate('/studentlist')
       }).catch((error) => {

         console.log(error);
       })
   }
    else {
       console.log("上述字段不能为空");
     }
   }
  return (

    <div className='addemployee'>
      <div className="title" style={{ paddingBottom: '30px' }}>Add Students</div>

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

        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >


        label="Student Id"
        name="student id"
        rules={[
          {
            required: true,
            message: 'Please input Student Id',
          },
        ]}


        <Input value={studentId} onChange={(e) => setStudentId(e.target.value)} />

        <Form.Item
          label="Student Name"
          name="studentname"
          
          tooltip="What do you want others to call you?"
          
          rules={[
            {
              required: true,
              message: 'Please input Student Name!',
            },
          ]}
        >
          <Input value={studentName} onChange={(e) => setStudentName(e.target.value)}></Input>

        </Form.Item>



        <Form.Item
          label="Student Phone"
          name="studentphone"
          rules={[
            {
              required: true,
              message: 'Please input your Student Phone!',
            },
          ]}
        >
          <Input value={studentPhone} onChange={(e) => setStudentPhone(e.target.value)} placeholder="Please input Student Phone!" />

        </Form.Item>

        <Form.Item
          name="studentaddress"
          label="Student Address"
          rules={[
            {
              required: true,
              message: 'Please input your Student Address!',
            },
          ]}
        >
          <Input value={studentAddress} onChange={(e) => setStudentAddress(e.target.value)} placeholder="Please input Student Address!" suffix={<HomeOutlined />} />
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

          <Button onClick={(e) => createStudent(e)} type="primary" htmlType="submit" icon={<CaretUpOutlined />}>
            Submit
          </Button>

          <Button type="danger" style={{ marginLeft: "25px" }} icon={<CloseCircleOutlined />}>
            <Link to={"/studentlist"} style={{ color: "white" }}>Close</Link>
          </Button>
        </Form.Item>
      </Form> 
    </div>
  )
}





