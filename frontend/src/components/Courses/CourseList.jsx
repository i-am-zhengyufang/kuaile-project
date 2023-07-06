
import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Space, Table } from 'antd';
import '../components.css'
import CourseService from '../../services/CourseService'
import { Link } from 'react-router-dom';
import { DeleteOutlined, UpCircleOutlined } from '@ant-design/icons';


export default function CoursetList() {

  const [courses, setCourses] = useState([])

  const columns = [
    {
      title: 'Course Id',
      dataIndex: 'id',
      key: "id"
    },

    {
      title: 'Course name',
      dataIndex: 'courseName',
      key: "courseName"
    },


    {
      title: 'Course dataTime',
      dataIndex: 'courseDataTime',
      key: "courseDataTime"
    },

    {
      title: 'Course credit',
      dataIndex: 'courseCredit',
      key: "courseCredit"
    },
    {
      title: 'Course teacher',
      dataIndex: 'courseTeacher',
      key: "courseTeacher"
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


  const getAllCourses = () => {
    CourseService.getAllCourse().then((response) => {
      console.log(response);
      setCourses(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  useEffect(() => {
    getAllCourses();
  }, [])

  const data = courses.map((course) => {

    return {
      key: course.id,
      id: course.id,
      courseName: course.courseName,
      courseCredit: course.courseCredit,
      courseDataTime: course.courseDataTime,
      courseTeacher:course.courseTeacher
    }
  })

  return (
    <div style={{ margin: '50px' }}>
      <div className="title" style={{ paddingBottom: '30px' }}>Course List </div>
      <Table columns={columns} dataSource={data} bordered={true} />
    </div>)
}
