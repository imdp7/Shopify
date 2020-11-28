import React from 'react'
import './UserBlocked.css'
import {LockOutlined } from '@ant-design/icons'
import {Button} from 'antd'

function UserBlocked() {
    return (
        <div className="container" style={{textAlign:'center',top:'200px',paddingTop:'50px'}}>
            <LockOutlined style={{ fontSize: '76px',color: '#8C9196'}} />
            <div>
            <p>You don’t have permission to view Home</p>
            <span className="block">Email the account owner to get access to this page.</span>
            <div className="button">
            <Button type="primary" size="large">Request Access</Button>
            </div>
            </div>

        </div>
    )
}

export default UserBlocked
