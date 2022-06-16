import React from "react";
import { Button, Form, Input, Select } from "antd";
import { useState } from "react";
import { Drawer } from "antd";
import { useUser } from "../../contexts/UserContext";
import { userService } from "../../services/userService";
export default function Config(props) {
  const saveUser = [];
  const [user, setUser] = useUser();
  function onFinish(values) {
    // fetch("http://52.221.191.153/admin/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(credentials),
    //   });
    userService
      .UpdateUser({
        email: user.email,
        name: values.nickname,
        phone: values.phone,
        password: values.password,
        token: user.token,
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success === true) {
          console.log("amjilttai");
        }
      })
      .catch((e) => console.warn(e.message))
      .finally(() => {});
  }

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const { Option } = Select;
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="94">94</Option>
        <Option value="99">99</Option>
      </Select>
    </Form.Item>
  );

  const [form] = Form.useForm();

  return (
    <Drawer
      title="Тохиргоо"
      width={450}
      closable={false}
      onClose={props.onClose}
      visible={props.visible}
      style={{ textAlign: "center" }}
    >
      <Form
        {...formItemLayout}
        form={form}
        name="update"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="nickname"
          label="Nickname"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your nickname!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
}
