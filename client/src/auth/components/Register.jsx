import React, { useState } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};
const Register = () => {
  const [formData, setFormData] = useState(initialState);
  // const : declare a constant / final spec
  // formData : name of the state
  // setFormData : function to update the state
  // useState : react hook to create a state in functional component
  // initialState : initial value of the state
  // onChange : it is used to handle the chnage event of input fields ==> value change ===> do we need to capture the value in the state
  const onChange = (e) => {
    // e : event object will help us to get the value from the input field
    const { name, value } = e.target; // destructuring
    // name = e.target.name
    // value = e.target.value
    // value : new valued entered by the user in the input field
    // updated new value ==> set it to the state (formData)
    // we have to call setFormData function to update the state
    setFormData({
      ...formData, // spread operator to copy the existing values from the state
      [name]: value, // update the specific field with new value
    });
  };
  // onSubmit ==> to handle the form submission event
  const onSubmit = (e) => {};
  return (
    <>
      {" "}
      <section className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Create Your Account
        </p>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text" placeholder="Name" name="name"
            value={}
            required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" name="email"
            value={}
            />
            <small className="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
            value={}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              minLength="6"
            value={}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <a href="login.html">Sign In</a>
        </p>
      </section>
    </>
  );
};

export default Register;
