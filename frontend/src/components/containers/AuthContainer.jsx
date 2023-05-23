import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth";
import { signin, signup } from "../../api";

export default function AuthContainer({ authTokens }) {
  
  let [authMode, setAuthMode] = useState("signin");
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [form, setForm] = useState(initialState);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { setAuthTokens } = useAuth();
  const history = useNavigate();

  const signIn =async (data) => {
    const response=await signin(data);
    if (response.status===200){
      setAuthTokens(response.data);
      setLoggedIn(true);
      
    }
    else{
      console.log(response.message);
    }
  };

  const signUp = async (data) => {
    const response=await signup(data);
    if (response.status===200){
      setAuthTokens(response.data);
      setLoggedIn(true);
    }
    else{
      console.log(response.message);
    }
  };

  const handlechange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (authMode === "signup") {
      signUp(form);
    } else {
      signIn(form);
    }
    history("/");
  };



  

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container mx-auto" style={{ width: "400px" }}>
        <form className="Auth-form " onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title ">Sign In</h3>

            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={handlechange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={handlechange}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Auth-form-container mx-auto " style={{ width: "400px" }}>
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>

          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control mt-3"
              placeholder="e.g Jane Doe"
              onChange={handlechange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="text"
              name='lastName'
              className="form-control mt-3"
              placeholder="e.g Jane Doe"
              onChange={handlechange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control mt-3"
              placeholder="Email Address"
              onChange={handlechange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control mt-3"
              placeholder="Password"
              onChange={handlechange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div className="text-center mt-3">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
