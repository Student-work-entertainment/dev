import React, { useState } from "react";
import {useHttp} from "../Hooks/http.hook";

const register = {
  color: "green",
  textAlign: "center",
  paddingBottom: "30px",
};

function Register() {
  const [form, setForm] = useState({
    FirsName: "",
    LastName: "",
    email: "",
    password: "",
    secondPassword: "",
  });

  const {loading,error,request} = useHttp()
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const  registerHandelr = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form})
    }catch (e){

    }
  }

  return (
    <div className="container mt-4">
      <div>
        <h1 style={register}>Register accaunt</h1>
      </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              id="FirsName"
              name="FirsName"
              placeholder="Write you name"
              onChange={changeHandler}
              required
            ></input>
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6 mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              id="LastName"
              name="LastName"
              placeholder="Write you last name"
              onChange={changeHandler}
              required
            ></input>
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={changeHandler}
          ></input>
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            onChange={changeHandler}
          ></input>
        </div>
        <div className="form-group">
          <label>Password again</label>
          <input
            type="password"
            className="form-control"
            id="secondPassword"
            name="secondPassword"
            placeholder="Password again"
            onChange={changeHandler}
          ></input>
        </div>
        <div className="form-check"></div>
        <button type="submit" className="btn btn-primary" onClick={registerHandelr} disabled={loading}>
          Register
        </button>
    </div>
  );
}
export default Register;
