import React, {useState} from "react";
import {useHttp} from "../Hooks/http.hook";

const divContainer = {
  padding: "15px",
  margin: "30px auto",
};
const login = {
  color: "green",
  textAlign: "center",
  paddingBottom: "30px",
};

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const {loading,error,request} = useHttp()

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const loginHandelr = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form})
    }catch (e){

    }
  }

  return (
    <div className="container mt-4" style={divContainer}>
      <div>
        <h1 style={login}>Login</h1>
      </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name = "email"
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
            onChange={changeHandler}
            placeholder="Password"
          ></input>
        </div>
        <div className="form-check"></div>
        <button onClick={loginHandelr} type="submit" className="btn btn-primary">
          Login
        </button>
    </div>
  );
}
export default Login;
