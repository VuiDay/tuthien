'use client'
import React, { useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import '@/app/Login/Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image'
import imageCheck from "@/assests/School/charity.png"
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  return (
    <div className='login-outside'>
        <div className='login-main'>
          <div className='image-form'>
            <Image
              src={imageCheck}
              alt="Picture of the author"
            />
          </div>
          <Form 
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
           
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your Email!' }]}
            >
              <Input
                prefix={<FontAwesomeIcon icon={faEnvelope} className="site-form-item-icon" />}
                type="email"
                className='input-form'
                placeholder="Email"
                value={email}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon"/>}
                type="password"
                className='input-form'
                placeholder="Password"
                value={password}
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <Link href='/Register'>register now!</Link>
            </Form.Item>
          </Form>
        </div>
    </div>
  )
}
