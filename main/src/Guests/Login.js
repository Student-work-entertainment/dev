import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../components/Loader";
import { AuthContext } from "../Context/AuthContext";
import { useHttp } from "../Hooks/http.hook";
import { useMessageError, useMessageSuccess } from "../Hooks/message.hook";

const divContainer = {
  padding: "15px",
  margin: "30px auto",
};

function Login() {
  const messageError = useMessageError();
  const messageSuccess = useMessageSuccess();

  const { loading, error, request, clearError } = useHttp();
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const auth = useContext(AuthContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    messageError(error);
    clearError();
  }, [error, messageError, clearError]);

  const loginHandelr = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      auth.login(data.token, data.userId, data.userFN, data.userLN);
      messageSuccess("Привет " + data.userFN + " 😃 ");
    } catch (e) {}
  };
  if (loading) {
    return (
      <>
        <h3 className="text-center text-success">Pleas Wait...</h3>
        <Loader></Loader>
      </>
    );
  }

  return (
    <div id="main-login-div">
      <div class="container">
        <div class="row">
          <div class="col need-hide">
            <div className="pt-5">
              <img src={"./images/1.png"} width="500px" height="500px"></img>
            </div>
          </div>
          <div class="col p-3">
            <div id="login-form" className="containe text-dark">
              <div>
                <div className="d-flex justify-content-center">
                  <img
                    src={"./images/profile.png"}
                    width="200px"
                    height="200px"
                  ></img>
                </div>
              </div>
              <div className="container-fluid">
                <div className="form-group mt-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control border border-warning"
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
                    className="form-control border border-warning"
                    id="password"
                    name="password"
                    onChange={changeHandler}
                    placeholder="Password"
                  ></input>
                </div>
                <div className="form-check"></div>
                <button
                  disabled={loading}
                  onClick={loginHandelr}
                  type="submit"
                  className="btn btn-block btn-warning m-auto"
                >
                  Login
                </button>
                <label className="mt-2">Нету аккаунта?</label>
                <p>
                  <Link to="/register">Зарегестрироваться</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
