import React from "react";

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
  return (
    <div className="container mt-4" style={divContainer}>
      <div>
        <h1 style={login}>Login</h1>
      </div>
      <form>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
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
            id="exampleInputPassword1"
            placeholder="Password"
          ></input>
        </div>
        <div className="form-check"></div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
