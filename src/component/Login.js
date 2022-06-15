import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "../style/login.css";
import { useNavigate } from "react-router-dom";
import { userService } from "../services/userService";
import { useUser } from "../contexts/UserContext";
import { useLoading } from "../contexts/LoadingContext";
import Loading from "./Loading";
export default function Login() {
  const [user, setUser] = useUser();
  const [loading, setLoading] = useLoading();
  const onFinish = (values) => {
    setLoading(true);
    userService
      .loginUser(values)
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          console.log(res);
          setUser({
            userName: res.data.name,
            email: res.data.email,
            id: res.data.id,
            address: res.data.address,
            token: res.token,
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const navi = useNavigate();
  const handler = () => {
    navi("/home");
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="login-right">
          <p>a</p>
          <Form
            className="loginForm"
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            onSubmit={handler}
          >
            <Form.Item
              label="E-Mail"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </>
  );
}
