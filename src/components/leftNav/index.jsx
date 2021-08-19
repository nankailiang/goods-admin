import React, { Component } from 'react'
import { Menu } from 'antd'
import { UserOutlined, HomeOutlined, SafetyOutlined, 
    ToolOutlined, ShoppingOutlined, AppstoreOutlined, 
    PieChartOutlined, AreaChartOutlined, BarChartOutlined, 
    LineChartOutlined } from '@ant-design/icons'
import './index.less'

const { SubMenu } = Menu
// 左侧导航栏组件
class LeftNav extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="logo">商品管理后台</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        首页
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<AppstoreOutlined />} title="商品">
                        <Menu.Item key="4" icon={<ShoppingOutlined />}>商品管理</Menu.Item>
                        <Menu.Item key="5" icon={<ToolOutlined />}>品类管理</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                        用户管理
                    </Menu.Item>
                    <Menu.Item key="3" icon={<SafetyOutlined />}>
                        角色管理
                    </Menu.Item>
                    <SubMenu key="sub2" icon={<AreaChartOutlined />} title="统计图表">
                        <Menu.Item key="6" icon={<BarChartOutlined />}>柱状图</Menu.Item>
                        <Menu.Item key="7" icon={<LineChartOutlined />}>折线图</Menu.Item>
                        <Menu.Item key="8" icon={<PieChartOutlined />}>饼图</Menu.Item>
                    </SubMenu>
                </Menu>
            </React.Fragment>
        )
    } 
}

export default LeftNav