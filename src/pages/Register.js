import React from "react";
import { Link, useHistory } from "react-router-dom";

const Register = (props) => {
  const history = useHistory();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    history.push({ pathname: "/login" });
  };

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
            <input className="sign-up__inp" type="email" placeholder="Email" />
            <input
              className="sign-up__inp"
              type="password"
              placeholder="Password"
            />
            <input
              className="sign-up__inp"
              type="username"
              placeholder="Username"
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
