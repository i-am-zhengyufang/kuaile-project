import React from 'react'
import { Button, Space, Table, Modal } from 'antd';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';


import { DeleteOutlined, UpCircleOutlined } from '@ant-design/icons';
export default function RatingList() {
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [record, setRecord] = useState(null)
    const [data, setData] = useState([
        {
            key: '1',
            ratingId: '1',
            ratingName: 'A+',
            ratingRange: '考核分数 >=97分',
            ratingNum: '1.2',
            ratingPlan: '总部考核计划',
            ratingStatus: '启用'
        },
        {
            key: '2',
            ratingId: '2',
            ratingName: 'A',
            ratingRange: '考核分数 <96分 且 >=90分',
            ratingNum: '1.0',
            ratingPlan: '总部考核计划',
            ratingStatus: '启用'
        },
        {
            key: '3',
            ratingId: '3',
            ratingName: 'B',
            ratingRange: '考核分数 <89分 且 >=75分',
            ratingNum: '0.8',
            ratingPlan: '总部考核计划',
            ratingStatus: '启用'
        },
        {
            key: '4',
            ratingId: '4',
            ratingName: 'C',
            ratingRange: '考核分数 <74分 且 >=60分',
            ratingNum: '0.6',
            ratingPlan: '总部考核计划',
            ratingStatus: '启用'
        },
        {
            key: '5',
            ratingId: '5',
            ratingName: 'D',
            ratingRange: '考核分数 <60分',
            ratingNum: '0',
            ratingPlan: '总部考核计划',
            ratingStatus: '启用'
        },

    ])
    function handleDel(record) {
        setIsModalOpen(true)
        setRecord(record)
    }

    function handleOk() {
        setIsModalOpen(false)
        setData(data => {
            return data.filter(item => item.key !== record.key)
        })
    }
    const columns = [
        {
            title: '绩效等级id',
            dataIndex: 'ratingId',
        },
        {
            title: '绩效等级',
            dataIndex: 'ratingName',
        },
        {
            title: '取分范围',
            dataIndex: 'ratingRange',
        },
        {
            title: '绩效系数',
            dataIndex: 'ratingNum',
        },
        {
            title: '绩效考核计划',
            dataIndex: 'ratingPlan',
        },
        {
            title: '等级状态',
            dataIndex: 'ratingStatus',
        },
        {
            title: '操作',
            key: 'action',
            render: (_, record) => (
                <Space size="large">
                    <Button type='primary' icon={<UpCircleOutlined />} onClick={() => navigate(`/ratinglist/updateRatingList?id=${record.ratingId}`)}>编辑</Button>
                    <Button type='danger' icon={<DeleteOutlined />} onClick={() => handleDel(record)}>删除</Button>
                </Space>

            )
        }
    ]



    return (
        <div style={{ margin: '50px' }}>
            <div className="title" style={{ paddingBottom: '30px' }}>绩效等级设置 </div>
            <Button onClick={() => navigate('/ratinglist/updateRatingList')} type='primary' style={{ marginBottom: '20px' }} >创建等级</Button>
            <Table columns={columns} dataSource={data} bordered={true} />
            <Modal title="确定删除绩效等级" visible={isModalOpen} onOk={handleOk} onCancel={() => setIsModalOpen(false)}>
                <p>绩效等级删除后将无法恢复，并且有可能影响员工绩效核酸，是否确定删除？</p>
            </Modal>
        </div>)
}