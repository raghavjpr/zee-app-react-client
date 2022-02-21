import axios from "axios";
import React, { useState } from "react";

export const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Hello from Register");
    console.log(JSON.stringify(formData));

    axios
      .post("/api/auth/signup", formData)
      .then((res) => console.log(JSON.stringify(res.data)))
      .catch((err) => {
        const er = {};
        console.log(JSON.stringify(err.response.data.subErrors));
        err.response.data.subErrors.forEach((err) => {
          console.log(err.field + ": " + err.message);
          er[err.field] = err.message;
        });
        console.log(JSON.stringify(er));
        setError(er);
      });
  };

  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">Create your Zee5 account</p>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="User Name"
                  name="username"
                  onChange={onChange}
                />
                <div>{error.username}</div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="First Name"
                  name="firstName"
                  onChange={onChange}
                />
                <div>{error.firstName}</div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={onChange}
                />
                <div>{error.lastName}</div>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Email Address"
                  name="email"
                  onChange={onChange}
                />
                <div>{error.email}</div>
                <small className="form-text text-muted">
                  This site uses Gravatar so if you want a profile image, use a
                  Gravatar email
                </small>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  name="password"
                  onChange={onChange}
                />
                <div>{error.password}</div>
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
