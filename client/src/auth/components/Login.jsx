import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../rtk/auth.action";
const loginState = {
  email: "",
  password: "",
};
const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(loginState);
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Login Form Submitted");
    console.log(formData);
    // dispatch login action
    dispatch(loginUserAction(formData));
  };
  const { email, password } = formData;
  return (
    <>
      {" "}
      <section class="container">
        <h1 class="large text-primary">Sign In</h1>
        <p class="lead">
          <i class="fas fa-user"></i> Sign into Your Account
        </p>
        <form class="form" onSubmit={onSubmit}>
          <div class="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
              value={email}
              onChange={onChange}
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <input type="submit" class="btn btn-primary" value="Login" />
        </form>
        <p class="my-1">
          Don't have an account? <a href="register.html">Sign Up</a>
        </p>
      </section>
    </>
  );
};

export default Login;
