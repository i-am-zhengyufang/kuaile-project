import React, { useState } from 'react'
import { Button, Form, Input } from 'antd';
import '../components.css'
import { CloseCircleOutlined, CaretUpOutlined, HomeOutlined } from '@ant-design/icons';
import CustomersService from '../../services/CustomersService';
import EmployeesService from '../../services/EmployeesService';
import { Link, useNavigate } from 'react-router-dom';


export default function AddCustomer() {
  //定义页面数据变量与函数， 与界面上的控件交换数据用， [customerName, setCustomerName]  customerName是变量名， setCustomerName的是写入变量内容的方法
  //useState("")代表需要在页面保存

  //const 代表常量的意思
  const [customerName, setCustomerName] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")
  const [customerAddress, setCustomerAddress] = useState("")
  const [employeeId,setEmployeeId] = useState("")



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
  const createCustomer = (e) => {
    console.log(e);
    //定义一个客户对象，对象有三个属性
    const customer = { customerName, customerPhone, customerAddress }


    //判定三个属性是否为空

    // && 是逻辑与操作  ！= 是不等于操作
    if (customerName != "" && customerPhone != "" && customerAddress != "") {
      //如果全部不为空的话， 调用客户服务类的createCustomer函数， 向服务器提交
      CustomersService.createCustomer(customer).then((response) => {
        navigate('/customerlist')
      }).catch((error) => {
        //如果发生异常，在控制台打出日志
        console.log(error);
      })
    }
    else {
      console.log("上述字段不能为空");
    }
  }
  return (
    //返回界面控件的相关代码
    <div className='addemployee'>
      <div className="title" style={{ paddingBottom: '30px' }}>Add Customers</div>


      {/* Form是一个表单（就是一个数据包（包含若干数据字段的逻辑单元），会将数据包一次性提交给服务器 */}

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
        // 一旦成功结束， 调用前面定义的 onFinish函数
        onFinish={onFinish}
        // 一旦发生错误， 调用前面定义的 onFinishFailed
        onFinishFailed={onFinishFailed}
        //关闭自动填充功能
        autoComplete="off"
      >
        {/* //定义一个表单控件， 处理员工id字段 */}
         <Form.Item
         //标签显示
          label="Employee Id"
          //控件名称
          name="employeeid"
          //有效性验证规则
          rules={[
            {
              //该字段为必填字段
              required: true,
              //如果没有填这个字段，点击了提交按钮。 需要显示下面的错误消息
              message: 'Please input Employee Id!',
            },
          ]}
        >
           {/* 这是输入框，供用户输入， 一旦内容发送变化，则调用匿名函数， 将控件的内容填入浏览器内存的变量中 */}
           {/* value= 是将变量employeeId和控件的填入的值进行双向绑定， onchange属性代表一旦控件内容发生改变， 就调用后面的匿名函数{(e) => setEmployeeId(e.target.value)}*/}
          <Input value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
        </Form.Item>

        {/* //定义一个表单控件， 处理客户名称字段 */}
        <Form.Item
          label="Customer Name"
          name="customername"
          //tooltip是将鼠标放在控件上用户能看到的消息
          tooltip="What do you want others to call you?"
          //通商
          rules={[
            {
              required: true,
              message: 'Please input Customer Name!',
            },
          ]}
        >
          <Input value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Please input Customer Name!" />
        </Form.Item>


        <Form.Item
          label="Customer Phone"
          name="customerphone"
          rules={[
            {
              required: true,
              message: 'Please input your Customer Phone!',
            },
          ]}
        >
          <Input value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} placeholder="Please input Customer Phone!" />
        </Form.Item>

        <Form.Item
          name="customeraddress"
          label="Customer Address"
          rules={[
            {
              required: true,
              message: 'Please input your Customer Address!',
            },
          ]}
        >
          <Input value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)} placeholder="Please input Customer Address!" suffix={<HomeOutlined />} />
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

          {/* 定义一个按钮，用户一点击该按钮， 就调用上面定义的函数createCustomer将表单的数据包一次发给服务器 type是一种样式， htmlType,是控件的html类型， submit代表是html的submit按钮 icon是按钮的图标*/}
          <Button onClick={(e) => createCustomer(e)} type="primary" htmlType="submit" icon={<CaretUpOutlined />}>
            Submit
          </Button>
          {/* 定义一个按钮，关闭添加客户窗口 style定义按钮的样式， type代表按钮的类型， 具体参考button的定义 */}
          <Button type="danger" style={{ marginLeft: "25px" }} icon={<CloseCircleOutlined />}>
            <Link to={"/customerlist"} style={{ color: "white" }}>Close</Link>
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
