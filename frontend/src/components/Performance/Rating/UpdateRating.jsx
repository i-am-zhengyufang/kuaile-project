import { Form, Input, Select, Radio, Button } from 'antd'
import './UpdateRating.css'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
export default function UpdateRating() {
    const location = useLocation()
    const navigate = useNavigate()
    let [searchParams, setSearchParams] = useSearchParams();

    const id = searchParams.get('id')[0]
    if (id) {

    }
    const handleSubmit = () => {

    }
    return <Form className='update-rating-form' onFinish={handleSubmit}>
        <Form.Item label='绩效等级' name='ratingName'>
            <Input />
        </Form.Item>
        <Form.Item label='绩效考核计划' name='ratingPlan'>
            <Select>
                <Select.Option value='1'>总部考核计划</Select.Option>
                <Select.Option value='2'>CS考核计划</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item label='绩效系数' name='ratingNum'>
            <Input />
        </Form.Item>
        <Form.Item label='等级状态' name='ratingStatus' initialValue={1}>
            <Radio.Group>
                <Radio value="0">启用</Radio>
                <Radio value="1">未启用</Radio>
            </Radio.Group>
        </Form.Item>
        <Button htmlType='submit'>保存</Button>
        <Button onClick={() => navigate.push('/ratinglist')}>取消</Button>
    </Form>
}