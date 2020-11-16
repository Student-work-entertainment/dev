import React, { useEffect, useState } from "react";
import { useHttp } from "../Hooks/http.hook";
import { useMessageError, useMessageSuccess } from "../Hooks/message.hook";
import { Loader } from "../components/Loader";
import { Link } from "react-router-dom";

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
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    messageError(error);
    clearError();
  }, [error, messageError, clearError]);

  const Search = async () => {
    try {
      const data = await request("/api/jobs/search", "POST", { ...form });
      setSearchData(data);
    } catch (e) {}
  };

  if (loading) {
    return <Loader />;
  }
  if (!loading && searchData.length >= 1) {
    return (
      <div>
        {searchData.map((job, index, key) => {
          return (
            <div className="container mt-5" key={job.jobId}>
              <div className="row">
                <div className="col mt-1">
                  <div className="card" id="card">
                    <div className="card-body">
                      <Link to={`/detail/${job.jobId}`} className="">
                        <h5 className="card-title">{job.jobTitle}</h5>
                      </Link>
                      <p className="card-text">{job.jobsBody}</p>
                      <p className="card-text">
                        Город <b>{job.jobCity}</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="container text-dark mt-5">
      <div className="form-inline my-2 my-lg-0 text-center">
        <div className="container">
          <h1 className="mb-4">
            Поиск вакансий{" "}
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-search"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
              />
              <path
                fillRule="evenodd"
                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
              />
            </svg>
          </h1>
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
