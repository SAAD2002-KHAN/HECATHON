import React from 'react'
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';


const EssentialLog = () => {
    return (
        <div>
            <Result
                status="404"
                subTitle="User is already Logged in."
                extra={<Link to='/'><Button type="primary">Back to Home</Button></Link>}
            />
        </div>
    )
}

export default EssentialLog;