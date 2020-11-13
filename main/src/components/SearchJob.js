import React, { useEffect, useState } from "react";
import { useHttp } from "../Hooks/http.hook";
import { useMessageError, useMessageSuccess } from "../Hooks/message.hook";
import { Loader } from "../components/Loader";

export const SearchJob = () => {
  const messageError = useMessageError();
  const messageSuccess = useMessageSuccess();

  const { loading, error, request, clearError } = useHttp();
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const [form, setForm] = useState({
    title: "",
    city: "",
  });

  useEffect(() => {
    messageError(error);
    clearError();
  }, [error, messageError, clearError]);

  const Search = async () => {
    try {
      const data = await request("/api/jobs/search", "POST", { ...form });
      messageSuccess(data);
    } catch (e) {}
  };

  if (loading) {
    <Loader></Loader>;
  }
  return (
    <div className="container text-dark mt-5">
      <div className="form-inline my-2 my-lg-0 text-center">
        <div className="container">
          <h1>Поиск вакансий</h1>
        </div>
        <div className="container">
          <input
            className="form-control mr-sm-2 d-inline"
            type="search"
            placeholder="Поиск вкансий..."
            aria-label="Search"
            name="title"
            onChange={changeHandler}
          ></input>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Город"
            aria-label="Search"
            name="city"
            onChange={changeHandler}
          ></input>
          <button
            onClick={Search}
            className="btn btn-primary my-2 my-sm-0"
            type="submit"
          >
            Поиск
          </button>
        </div>
      </div>
    </div>
  );
};
