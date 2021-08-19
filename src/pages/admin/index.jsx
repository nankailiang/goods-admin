import React, { Component } from 'react'
import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Redirect } from 'react-router-dom'
import LeftNav from '../../components/leftNav'
import TopNav from '../../components/topNav'
import { getUser } from '../../utils/storageUtils'
import './index.less'

/*
    导航栏和菜单
*/
const { Header, Sider, Content } = Layout
export default class Admin extends Component {
    state = {
        collapsed: false
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        const user = getUser()
        console.log(user)
        if(!user._id) {
            return <Redirect to='/login' />
        }
        return (
            <Layout style={{height: "100%"}}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <LeftNav />
                </Sider>
                <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: this.toggle,
                    })}
                    <TopNav />
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    }}
                >
                    Content
                </Content>
                </Layout>
            </Layout>
        )
    }
}