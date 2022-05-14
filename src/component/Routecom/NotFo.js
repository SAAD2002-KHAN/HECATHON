import React from 'react'
import { Result, Button } from 'antd';
import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Status error."
            extra={<Link to="/">
                <Button type='primary' >Back to Home</Button>
            </Link>}
        />
    )
}

export default NotFound