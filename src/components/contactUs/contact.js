import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

function AppContact() {
  const onFinish = async (values) => {
    try {
      await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      console.log('Email sent');
    } catch (error) {
      console.error(error);
      console.log('Email not sent');
    }
  };

  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Get in Touch</h2>
        </div>
        <Form
          name="contactForm"
          onFinish={onFinish}
        >
          <Form.Item
            name="fullname"
            rules={[{ required: true, message: 'Please enter your full name!' }]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { type: 'email', message: 'The input is not valid E-mail!' },
              { required: true, message: 'Please input your E-mail!' },
            ]}
          >
            <Input placeholder="Email Address" />
          </Form.Item>
          <Form.Item name="telephone">
            <Input placeholder="Telephone" />
          </Form.Item>
          <Form.Item name="subject">
            <Input placeholder="Subject" />
          </Form.Item>
          <Form.Item name="message">
            <Input.TextArea placeholder="Message" />
          </Form.Item>
          <Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              noStyle
              rules={[
                { validator: (_, value) => (value ? Promise.resolve() : Promise.reject('Should accept agreement')) },
              ]}
            >
              <Checkbox>I agree with terms and conditions.</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AppContact;