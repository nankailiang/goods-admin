import React, { Component } from 'react'
import { getUser } from '../../utils/storageUtils'


/*
    导航栏和菜单
*/

export default class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const user = getUser()
        return (
        <div>Hello,{ user.username }</div>
        )
    }
}