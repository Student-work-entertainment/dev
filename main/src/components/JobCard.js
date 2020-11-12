import React from "react";
import { Link } from "react-router-dom";

export const JobCard = ({ job }) => {
  return (
    <div>
      <div className="container mx-auto shadow-lg p-5">
        <div className="container mb-5 text-center">
          <h1>
            {" "}
            <b>Информация о вакансии </b>{" "}
          </h1>
        </div>
        <div className="text-center mb-3">
          <h1>
            <b>{job.title}</b>
          </h1>
        </div>
        <div className="text-sm-left mb-3">
          <h3>{job.body}</h3>
        </div>
        <div className="text-justify container mb-3">
          <p>
            Город работы: <b>{job.city}</b>
          </p>
        </div>
        <div className="container text-center">
          <Link to="" className="btn btn-warning mb-3 text-center">
            Откликнуться на вакансию
          </Link>
        </div>
      </div>
    </div>
  );
};
