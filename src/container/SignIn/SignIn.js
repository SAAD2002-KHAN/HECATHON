import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router";
import './signin.css';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const UserSignin = ()  => {
        const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Logged in Successfully")
    navigate ('/home')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
    }

    
    return (
        <>
        <h1 className='hea-con'>FREINDS</h1>
        
        <div className="container">
            <h1 className='con-head'>SignIn Form</h1>
        <Form onFinish={UserSignin}
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} 
                placeholder="Username"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }
            }
              />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please Input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                />
            </Form.Item>
            
            <Form.Item className='con-butt'>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Sign In
                </Button>                
            </Form.Item>
            <div className='con-link'>
            Or <Link to='signUp'>SignUp</Link>
            </div>
        </Form>
        </div>
        </>
    );
};

export default SignIn;