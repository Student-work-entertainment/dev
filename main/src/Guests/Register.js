import React, { useState, useEffect } from "react";
import { useHttp } from "../Hooks/http.hook";
import { useMessageError, useMessageSuccess } from "../Hooks/message.hook";

const register = {
  color: "green",
  textAlign: "center",
  paddingBottom: "30px",
};

function Register() {
  const messageError = useMessageError();
  const messageSuccess = useMessageSuccess();
  const [form, setForm] = useState({
    FirsName: "",
    LastName: "",
    email: "",
    password: "",
    secondPassword: "",
  });

  const { loading, error, request, clearError } = useHttp();

  useEffect(() => {
    messageError(error);
    clearError();
  }, [error, messageError, clearError]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandelr = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      messageSuccess(data.message);
    } catch (e) {}
  };

  return (
    <div className="container mb-5">
      <div className="row p-5">
        <div className="col need-hide mt-5 ">
          <img src={"./images/register.png"} width="500px" height="500px"></img>
        </div>
        <div className="col">
          <div className="pb-3">
            <h1 className="text-warning text-center">Регестрация 😼</h1>
            <hr></hr>
          </div>
          <div className="form-row">
            <div className="text-center col-md-6 mb-3">
              <label>Ваше имя?</label>
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
            <div className="text-center col-md-6 mb-3">
              <label>Ваша фамилия?</label>
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
            <label>Ваш email</label>
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
            <label>Ваш новый пароль</label>
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
            <label>Введите его ещё раз</label>
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
          <button
            type="submit"
            className="btn btn-warning btn-block mb-4"
            onClick={registerHandelr}
            disabled={loading}
          >
            Регестрация
          </button>
        </div>
      </div>
    </div>
  );
}
export default Register;
