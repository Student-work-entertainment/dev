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
const login = {
  color: "green",
  textAlign: "center",
  paddingBottom: "30px",
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
    <div>
      <div className="container col-sm-3 mt-4 md" style={divContainer}>
        <div>
          <h1 style={login}>Login page</h1>
        </div>
        <div className="form-group ">
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
            onChange={changeHandler}
            placeholder="Password"
          ></input>
        </div>
        <div className="form-check"></div>
        <button
          disabled={loading}
          onClick={loginHandelr}
          type="submit"
          className="btn btn-block btn-primary m-auto"
        >
          Login
        </button>
        <label className="mt-2">Нету аккаута?</label>
        <p>
          <Link to="/register">Зарегестрироваться</Link>
        </p>
      </div>
    </div>
  );
}
export default Login;
