import React from "react";

const register = {
  color: "green",
  textAlign: "center",
  paddingBottom: "30px",
};

function Register() {
  return (
    <div className="container mt-4">
      <div>
        <h1 style={register}>Register accaunt</h1>
      </div>
      <form>
        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label for="validationCustom01">First name</label>
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              placeholder="Write you name"
              required
            ></input>
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="validationCustom02">Last name</label>
            <input
              type="text"
              class="form-control"
              id="validationCustom02"
              placeholder="Write you last name"
              required
            ></input>
            <div class="valid-feedback">Looks good!</div>
          </div>
        </div>
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
        <div class="form-group">
          <label for="exampleInputPassword1">Password again</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password again"
          ></input>
        </div>
        <div class="form-check"></div>
        <button type="submit" class="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}
export default Register;
