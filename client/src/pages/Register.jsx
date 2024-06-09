import React from "react";
import { Form, message, Input } from "antd";
import "../styles/RegisterStyles.css";
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";

const Register = () => {
  const onFinishHandler = async (values) => {
    try {
        const navigate = useNavigate();
      const res = await axios.post("/api/v1/user/Register", values);

      if (res.data.success) {
        message.success("registered successfully");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      message.error("something went wrong");
    }
  };

  return (
    <>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          className="register-form card p-3"
        >
          <h3>Register User</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
          <Link to="/login" className="ms-2">
            Already a User
          </Link>
        </Form>
      </div>
    </>
  );
};

export default Register;
