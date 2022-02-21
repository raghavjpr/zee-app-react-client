//function based Component
import React, { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState({});
  // const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Hello from Login");
    console.log(JSON.stringify(formData));

    axios
      .post("/api/auth/signin", formData)
      .then((res) => console.log(JSON.stringify(res.data)))
      .catch((err) => {
        console.log(JSON.stringify(err.response.data));
        setError(err.response.data);
      });
  };

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Log In</h1>
            <p className="lead text-center">Sign in to your Zee5 account</p>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="username"
                  className="form-control form-control-lg"
                  placeholder="User Name"
                  name="username"
                  onChange={onChange}
                />
                <div>{error.username}</div>
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
