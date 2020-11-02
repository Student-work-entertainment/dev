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
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              placeholder="Write you name"
              required
            ></input>
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6 mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              placeholder="Write you last name"
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
        <div className="form-group">
          <label>Password again</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password again"
          ></input>
        </div>
        <div className="form-check"></div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}
export default Register;
