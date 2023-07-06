import { useId, useState } from "react";
import { Button, Form, Input } from 'antd';
import '../components.css'
import { CloseCircleOutlined, CaretUpOutlined, HomeOutlined } from '@ant-design/icons';
import CourseService from '../../services/CourseService';
import { Link, useNavigate } from 'react-router-dom';



export default function AddCourse() {

    const [name, setName] = useState("计算机与科学")
    const [id, setId] = useState("0965423")
    const [dataTime, setDataTime] = useState("时间")
    const [credit, setCredit] = useState("100")
    const [teacher,setTeacher] = useState("课程老师")

    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const createcourse = (e) => {
        console.log(e);

        const course = { name, id, dataTime, credit,teacher }
        if (name != "" && id != "" && dataTime != "" && credit !=""&& teacher) {

            CourseService.createCourse(course).then((response) => {
                navigate('/courselist')
            }).catch((error) => {

                console.log(error);
            })
        }
        else {
            console.log("上述字段不能为空");
        }
    }
    return (
        <div className='addCourse'>
            <div className="title" style={{ paddingBottom: '30px' }}>Add Course</div>

            <Form
                name="Add course"
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
                    tooltip="请输入课程Id"
                    rules={[
                        {

                            required: true,

                            message: 'Please input Course Id!',
                        },
                    ]}
                >
                    <Input value={id} onChange={(e) => setId(e.target.value)} />

                </Form.Item>
                <Form.Item
                    label=" Name"
                    name="name"
                   
                    tooltip="请输入课程姓名"
                
                    rules={[
                        {
                            required: true,
                            message: '课程姓名不能为空!',
                        },
                    ]}
                >
                    <Input value={name} onChange={(e) => setName(e.target.value)} defaultValue="Name" placeholder="Please input Course Name!" />
                </Form.Item>

                <Form.Item
                    label=" DataTime"
                    name="dataTime"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Course DataTime!',
                        },
                    ]}
                >
                    <Input value={dataTime} defaultValue="DataTime" onChange={(e) => setDataTime(e.target.value)} placeholder="Please input Course DataTime!" />
                </Form.Item>


                <Form.Item
                    name="Credit"
                    label="credit"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Course Credit!',
                        },
                    ]}
                >
                    <Input value={credit} defaultValue="Credit" onChange={(e) => setCredit(e.target.value)} placeholder="Please input Course Credit!" suffix={<HomeOutlined />} />

                </Form.Item>


                <Form.Item
                    name="Teacher"
                    label="teacher"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Course Teacher!',
                        },
                    ]}
                >
                    <Input value={teacher} defaultValue="Teacher" onChange={(e) => setTeacher(e.target.value)} placeholder="Please input Course Teacher!" suffix={<HomeOutlined />} />

                </Form.Item>


            </Form>
        </div>
    )

}





