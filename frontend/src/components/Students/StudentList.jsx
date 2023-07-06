
import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Space, Table } from 'antd';
import '../components.css'
import StudentService from '../../services/StudentService'
import { Link } from 'react-router-dom';
import { DeleteOutlined, UpCircleOutlined } from '@ant-design/icons';


export default function StudentList() {

  const [students, setStudents] = useState([])

  const columns = [
    {
      title: 'Student Id',
      dataIndex: 'id',
      key: "id"
    },

    {
      title: 'Student name',
      dataIndex: 'name',
      key: "name"
    },


    {
      title: 'Student phoneNum',
      dataIndex: 'phoneNum',
      key: "phoneNum"
    },

    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="large">
          <Button type='primary' icon={<UpCircleOutlined />} >编辑</Button>
          <Button type='danger' icon={<DeleteOutlined />}>删除</Button>
        </Space>

      )
    }
  ]


  const getAllStudents = () => {
    StudentService.getAllStudents().then((response) => {
      setStudents(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  useEffect(() => {
    getAllStudents();
  }, [])


  const data = students.map((student) => {

    return {
      key: student.studentId,
      id: student.studentId,
      name: student.name,
      phoneNum: student.phoneNum,

      // customerphone: customer.customerPhone,
      // customeraddress: customer.customerAddress,
    }
  })

  // const data =[
  //    {
  //     key: '1',
  //     studentId:'12345678',
  //     studentName:'王超',
  //     studentPhone:'15588114532',
  //     studentClass:'高数',
  //    },
  //    {
  //     key:'2',
  //     studentId:'23456789',
  //     studentName:'何佳文',
  //     studentPhone:'15581490823',
  //     studentClass:'大学英语',
  //    },
  //    {
  //     key:'3',
  //     studentId:'34567899',
  //     studentName:'张小梅',
  //     studentPhone:'15589201971',
  //     studentClass:'计算机与科学',
  //    },
  //    {
  //     key:'4',
  //     studentId:'23459087',
  //     studentName:'李晓峰',
  //     studentPhone:'15974689234',
  //     studentClass:'药剂学',
  //    },
  //    {
  //     key:'5',
  //     studentId:'56438976',
  //     studentName:'洋溢',
  //     studentPhone:'13156328967',
  //     studentClass:'解剖学',
  //    },
  //    {
  //     key:'6',
  //     studentId:'78653491',
  //     studentName:'王重阳',
  //     studentPhone:'15689076512',
  //     studentClass:'针灸推拿学',
  //    },

  // ]


  return (
    <div style={{ margin: '50px' }}>
      <div className="title" style={{ paddingBottom: '30px' }}>Student List </div>
      <Table columns={columns} dataSource={data} bordered={true} />
    </div>)
}
