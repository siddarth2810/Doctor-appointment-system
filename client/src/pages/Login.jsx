import React from "react";
import { Form, Input } from "antd";
import "../styles/RegisterStyles.css";
import { Link } from "react-router-dom";

const Login = () => {
    const onFinishHandler = (values) => {
        console.log(values);
    };
    return (
        <>
            <div className="form-container">
                <Form
                    layout="vertical"
                    onFinish={onFinishHandler}
                    className="register-form card p-3 "
                >
                    <h3>Login</h3>

                    <Form.Item label="Email" name="email">
                        <Input type="email" required />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type="password" required />
                    </Form.Item>
                    <button className="btn btn-primary" type="submit">
                        Login
                    </button>

                    <Link to="/register" className="ms-2">
                        Not a User
                    </Link>
                </Form>
            </div>
        </>
    );
}

export default Login;
