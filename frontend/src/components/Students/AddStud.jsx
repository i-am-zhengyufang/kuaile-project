import React, { useState } from 'react'
import { Button, Form, Input } from 'antd';
import '../components.css'
import { CloseCircleOutlined, CaretUpOutlined, HomeOutlined } from '@ant-design/icons';
import StudentService from '../../services/StudentService';
import { Link, useNavigate } from 'react-router-dom';


export default function AddStudent() {    //一个函数、类、对象等任意值的导出


    //const 代表常量的意思, 换成学生的
    const [name, setName] = useState("何佳文")
    const [phoneNum, setPhoneNum] = useState("15514481558")
    const [sex,setSex] = useState("女")
    const [studentId, setStudentId] = useState("20220212238")
    const [studentClass, setStudentClass] = useState("YM-01")
    const [school, setSchool] = useState("HN TC-INSTT   ")
    const [email,setEmail] = useState("HJW@QQ.COM")
    const [cardId,setCardId] = useState("1111")
    const [department,setDepartment] = useState("YM Dept")
    const [major,setMajor] = useState("YIM")




    //代表需要用到浏览器导航功能
    const navigate = useNavigate();

    //onFinish是一个页面的函数， 后面跟一个匿名函数， 用的是lamda表达式 （你需要去看看）
    const onFinish = (values) => {
        //在浏览器的控制台打出成功日志
        console.log('Success:', values);
    };

    //如果以失败结束， 那么在浏览器的控制台打出失败的消息
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };



    //创建客户的主要消息
    const createStudent = (e) => {
        console.log(e);
        //定义一个学生对象，对象有三个属性
        const student = { name, phoneNum, sex,studentId ,studentClass,school ,email,cardId,department,major}


        //判定三个属性是否为空

        // && 是逻辑与操作  ！= 是不等于操作
        if (name != "" && phoneNum != "" && sex!= "" && studentClass != "" && school != ""&& studentId !=""&& major) {
            //如果全部不为空的话， 调用客户服务类的createCustomer函数， 向服务器提交
            StudentService.createStudent(student).then((response) => {
                navigate('/studentlist')
            }).catch((error) => {
                //如果发生异常，在控制台打出日志
                console.log(error);
            })
        }
        else {
            //在控制台打出日志
            console.log("上述字段不能为空");
        }
    }

    return (
        <div className='addStudent'>
            <div className="title" style={{ paddingBottom: '30px' }}>Add A Student</div>

            <Form
                name="Add student"

                //三个样式， 标签列宽5个单位， 换行长度15个单位， 左边边距 2%
                labelCol={{
                    span: 5,
                }}
                wrapperCol={{
                    span: 15,
                }}
                style={{
                    marginLeft: '2%',
                }}
                // 一旦成功结束， 调用前面定义的 onFinish函数
                onFinish={onFinish}
                // 一旦发生错误， 调用前面定义的 onFinishFailed
                onFinishFailed={onFinishFailed}
                //关闭自动填充功能
                autoComplete="off"
            >

                {/* //加一个属性开始 */}

                <Form.Item
                    //标签显示
                    label="Student Id"
                    
                    //控件名称
                    name="studentId"
                    //有效性验证规则
                    rules={[
                        {
                            //该字段为必填字段
                            required: true,
                            //如果没有填这个字段，点击了提交按钮。 需要显示下面的错误消息
                            message: 'Please input Student Id!',
                        },
                    ]}
                >
                    {/* 这是输入框，供用户输入， 一旦内容发送变化，则调用匿名函数， 将控件的内容填入浏览器内存的变量中 */}
                    {/* value= 是将变量employeeId和控件的填入的值进行双向绑定， onchange属性代表一旦控件内容发生改变， 就调用后面的匿名函数{(e) => setEmployeeId(e.target.value)}*/}
                    <Input value={studentId} onChange={(e) => setStudentId(e.target.value)} />
                    {/* 属性名称 */}                   {/* 修改属性的方法 */}
                </Form.Item>
                {/* //加一个属性结束 */}

                <Form.Item
                    label=" Name"
                    name="name"
                    // tooltip是将鼠标放在控件上用户能看到的消息
                    tooltip="请输入学生姓名"
                    //有效性验证规则集合， 可以由很多条
                    rules={[
                        //其总一条， 代表该字段是必填字段，一旦没有填写任何内容， 会在控件下面输入message内容
                        {
                            required: true,
                            message: '学生姓名不能为空!',
                        },
                    ]}
                >
                    {/* onChange函数只要界面上的Input输入框里的内容发送改变，该函数就会被调用，然后触发setName,将Input最新的内容
                    刷新Name字段的内容，实现输入框与内存内容同步变化 */}
                    <Input value={name} onChange={(e) => setName(e.target.value)} defaultValue="Name" placeholder="Please input Student Name!" />
                </Form.Item>

                <Form.Item
                    label=" PhoneNum"
                    name="phoneNum"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Student Phone!',
                        },
                    ]}
                >
                    <Input value={phoneNum} defaultValue="phoneNum" onChange={(e) => setPhoneNum(e.target.value)} placeholder="Please input Student phoneNum!" />
                </Form.Item>


                <Form.Item
                    name="sex"
                    label="Sex"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Student Sex!',
                        },
                    ]}
                >
                    <Input value={sex} defaultValue="sex"  onChange={(e) => setSex(e.target.value)} placeholder="Please input Student Sex!" suffix={<HomeOutlined />} />
                </Form.Item>

                <Form.Item
                    name="studentclass"
                    label="Student Class"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Student Class!',
                        },
                    ]}
                >
                    <Input value={studentClass} defaultValue="studentClass" onChange={(e) => setStudentClass(e.target.value)} placeholder="Please input Student Class!" suffix={<HomeOutlined />} />
                </Form.Item>



                <Form.Item
                    name="school"
                    label=" School"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your School!',
                        },
                    ]}
                >
                    <Input value={school} defaultValue="school"onChange={(e) => setSchool(e.target.value)} placeholder="Please input  School!" suffix={<HomeOutlined />} />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                >
                    <Input value={email} defaultValue="email"onChange={(e) => setEmail(e.target.value)} placeholder="Please input your Email!" suffix={<HomeOutlined />} />
                </Form.Item>

                <Form.Item
                    name="cardId"
                    label="CardId"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your CardId!',
                        },
                    ]}
                >
                    <Input value={cardId} defaultValue="cardId"onChange={(e) => setCardId(e.target.value)} placeholder="Please input your CardId!" suffix={<HomeOutlined />} />
                </Form.Item>

                <Form.Item
                    name="department"
                    label="Department"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Department',
                        },
                    ]}
                >
                    <Input value={department}defaultValue="department"o onChange={(e) => setDepartment(e.target.value)} placeholder="Please input your Department!" suffix={<HomeOutlined />} />
                </Form.Item>

                <Form.Item
                    name="major"
                    label="Major"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Major',
                        },
                    ]}
                >
                    <Input value={major} defaultValue="major"onChange={(e) => setMajor(e.target.value)} placeholder="Please input your Major!" suffix={<HomeOutlined />} />
                </Form.Item>










                {/* //定义按钮的操作工具条 */}
                <Form.Item
                    wrapperCol={{
                        offset: 5,
                        span: 16,
                    }}
                    style={{
                        marginTop: '50px'
                    }}
                >

                    {/* 定义一个按钮，用户一点击该按钮， 就调用上面定义的函数createCustomer将表单的数据包一次发给服务器 type是一种样式， htmlType,是控件的html类型， submit代表是html的submit按钮 icon是按钮的图标*/}
                    <Button onClick={(e) => createStudent(e)} type="primary" htmlType="submit" icon={<CaretUpOutlined />}>
                        Submit
                    </Button>
                    {/* 定义一个按钮，关闭添加客户窗口 style定义按钮的样式， type代表按钮的类型， 具体参考button的定义 */}
                    <Button type="danger" style={{ marginLeft: "25px" }} icon={<CloseCircleOutlined />}>
                        <Link to={"/studentlist"} style={{ color: "white" }}>Close</Link>
                    </Button>
                </Form.Item>

            </Form>
        </div>
    )
}

