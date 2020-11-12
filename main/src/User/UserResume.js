import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useHttp } from "../Hooks/http.hook";
import { useMessageError, useMessageSuccess } from "../Hooks/message.hook";

function UserResume() {
  const history = useHistory();
  const messageError = useMessageError();
  const messageSuccess = useMessageSuccess();
  const [form, setForm] = useState({
    title: "",
    body: "",
    city: "",
  });

  const { loading, error, request, clearError } = useHttp();

  useEffect(() => {
    messageError(error);
    clearError();
  }, [error, messageError, clearError]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const AddVacancy = async () => {
    try {
      const data = await request("/api/jobs/create", "POST", { ...form });
      messageSuccess(data.message);
      history.push(`/detail/${data.jobs._id}`);
    } catch (e) {}
  };

  return (
    <div className="container mt-5">
      <h1>Создай свою вакансию 🛩 </h1>
      <div class="form-group">
        <label for="exampleFormControlInput1">Заголовк вакансии:</label>
        <input
          type="email"
          name="title"
          class="form-control"
          placeholder="Заголовок вакансии"
          onChange={changeHandler}
        ></input>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Описание вакнсии:</label>
        <textarea
          class="form-control"
          name="body"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={changeHandler}
        ></textarea>
      </div>
      <label for="selectcity">Город работы:</label>
      <input
        className="form-control"
        id="selectcity"
        name="city"
        onChange={changeHandler}
      ></input>
      <button
        type="button"
        className="btn btn-primary  btn-block mt-5"
        onClick={AddVacancy}
        disabled={loading}
      >
        Создать
      </button>
    </div>
  );
}
export default UserResume;
