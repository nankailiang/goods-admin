import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { MailOutlined, LockOutlined } from '@ant-design/icons'
import { login } from '../../api'

import './index.less'
/*
    登录页面
*/

export default class Login extends Component {
    render() {
        const onFinish = (values) => {
            console.log('Success:', values)
            login(values)
            .then(res => {
                console.log('res:', res)
            })
            .catch(err =>{
                console.log('err:', err)
            })
        }

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo)
        }
        return (
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
                            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
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
        )
    }
}