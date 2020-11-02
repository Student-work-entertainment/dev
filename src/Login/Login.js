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
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          ></input>
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          ></input>
        </div>
        <div class="form-check"></div>
        <button type="submit" class="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
