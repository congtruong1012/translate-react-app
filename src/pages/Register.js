import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { notification } from "antd";
import fetchAPI from "../API/fetchAPI";

const Register = (props) => {
  const history = useHistory();

  const [register, setRegister] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    fetchAPI("auth", "POST", register).then((res) => {
      if (res.status === 201) {
        setTimeout(() => {
          history.push({ pathname: "/login" });
        }, 1000);
        notification["success"]({
          message: "Register Success",
        });
      }
    });
  };

  const { email, password, username } = register;

  return (
    <>
      <div className="sign-up">
        <div className="circle circle--red"></div>
        <div className="circle circle--yellow"></div>
        <div className="circle circle--green"></div>
        <div className="circle circle--purple"></div>
        <form className="sign-up__form" onSubmit={onHandleSubmit}>
          <div className="sign-up__content">
            <h2 className="sign-up__title">Register</h2>
            <input
              className="sign-up__inp"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={onHandleChange}
            />
            <input
              className="sign-up__inp"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={onHandleChange}
            />
            <input
              className="sign-up__inp"
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={onHandleChange}
            />
          </div>
          <div className="sign-up__buttons">
            <button className="btn btn--register" type="submit">
              Register
            </button>
            <Link to="/login" className="btn btn--signin">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

Register.propTypes = {};

export default Register;
