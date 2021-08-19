import React, { Component } from 'react'
import { Form, Input, Button, message} from 'antd'
import { MailOutlined, LockOutlined } from '@ant-design/icons'
import { login } from '../../api'
import { saveUser, getUser } from '../../utils/storageUtils'


import './index.less'
/*
    登录页面
*/

export default class Login extends Component {
    componentDidMount = () => {
        const user = getUser()
        if(user._id) {
            this.props.history.push('/')
        }
    }

    render() {
        const onFinish = (values) => {
            console.log('Success:', values)
            login(values)
            .then(res => {
                console.log('res:', res)
                if(res.data.data) {
                    saveUser(res.data.data)
                    this.props.history.push('/')
                } else {
                    message.error(res.data.errors[0].msg)
                }
            })
            .catch(err =>{
                message.error(err)
            })
        }

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo)
        }
        return (
            <React.Fragment>
                <div className="login">
                    <section className="login-content">
                        <h2>用户登录</h2>
                        <Form
                            name="userInfo"
                            wrapperCol={{
                                offset: 2,
                                span: 20,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入邮箱!',
                                    },
                                    {
                                        type: 'email',
                                    }
                                ]}
                            >
                                <Input prefix={<MailOutlined className="site-form-item-icon" />}
                                    placeholder="Email"
                                    defaultValue="1003857254@qq.com" 
                                />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入密码!',
                                    },
                                ]}
                            >
                                <Input.Password prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                    defaultValue="nan123456"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </section>
                </div>
            </React.Fragment>
        )
    }
}