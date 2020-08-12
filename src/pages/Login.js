import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import fetchAPI from "../API/fetchAPI";

const Login = (props) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    username: ""
  });

  const [error, setError] = useState("");

  const history = useHistory();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = login;
    Login(email, password);
  };

  const convertArrToJson = (arr) => {
    let json = {};
    for (let item of arr) {
      json = item;
    }
    return json;
  };

  const Login = (email, password) => {
    fetchAPI(`/user/login`, "POST", {email, password})
      .then((res) => {
        if (res.status === 200 ) {
          const js = res.data;
          localStorage.setItem("login", JSON.stringify());
          setError("");
          history.push({ pathname: "/" });
        } else {
          setError("Login Fail");
        }
      })
      .catch((e) => console.log("Lỗi", e));
    // if (email === "cong@gmail.com" && password === "1") {;
    //   localStorage.setItem("login", JSON.stringify(login));
    //   setError("");
    //   history.push({ pathname: "/" });
    // } else {
    //   setError("Login Fail");
    // }
  };

  const checkLogin = (error) => {
    return error && <span className="alert alert-danger">{error}</span>;
  };

  const { email, password } = login;

  return (
    <div className="sign-up">
      <div className="circle circle--red"></div>
      <div className="circle circle--yellow"></div>
      <div className="circle circle--green"></div>
      <div className="circle circle--purple"></div>
      <form className="sign-up__form"  onSubmit={onHandleSubmit}>
        <div className="sign-up__content">
          <h2 className="sign-up__title">Login</h2>
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
          {checkLogin(error)}
          {/* <a className="forgot__password" href="!">
          Forgot your password ?
        </a> */}
        </div>
        <div className="sign-up__buttons">
          <Link to="/register" className="btn btn--register">
            Register
          </Link>
          <button className="btn btn--signin" type="submit">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
