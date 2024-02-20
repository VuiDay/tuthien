'use client'
import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Upload } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';
import imageCheck from '@/assests/School/charity.png';
import Link from 'next/link';
import './Register.css'

export default function Register() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8088/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(values)
      });
      if (response.ok) {
        const result = await response.json();
        console.log(result);
      } else {
        throw new Error('Đăng ký thất bại');
      }
    } catch (error) {
      console.error('Lỗi:', error);
      alert('Đăng ký thất bại. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="login-outside">
      <div className="login-main">
        <div className="image-form">
          <Image src={imageCheck} alt="Logo" priority/>
        </div>
        <Form
          form={form}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          encType="multipart/form-data"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Vui lòng nhập Email của bạn!' }]}
          >
            <Input
              prefix={<FontAwesomeIcon icon={faEnvelope} className="site-form-item-icon" />}
              type="email"
              className="input-form"
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Vui lòng nhập Tên đăng nhập của bạn!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              type="text"
              className="input-form"
              placeholder="Tên đăng nhập"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập Mật khẩu của bạn!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              className="input-form"
              placeholder="Mật khẩu"
            />
          </Form.Item>
          <Form.Item
            name="avatar"
          >
            <div>
              <label htmlFor="avatar">Chọn avatar</label>
              <Input
                type="file"
                id="avatar"
                className="input-form"
                accept="image/*"
              />
            </div>
          </Form.Item>
          <Form.Item>
            <a className="login-form-forgot" href="#">
              Quên mật khẩu?
            </a>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
              Đăng ký
            </Button>
            Hoặc <Link href="/Login">Bạn đã có tài khoản!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
