import React from "react";
import { Link } from "react-router-dom";

function JobsList({ jobs }) {
  if (!jobs.length) {
    return (
      <div className="container">
        <div
          className="alert alert-danger text-center text-dark mt-3"
          role="alert"
        >
          Здесь пока ничего нету 😓
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      {jobs.map((job, index, key) => {
        return (
          <div className="container shadow mb-5 p-3 mt-5" key={job._id}>
            <div className="mt-1">
              <div className="card-body">
                <Link to={`/detail/${job._id}`} className="text-warning">
                  <h5 className="card-title">{job.title}</h5>
                </Link>
                <p className="card-text">Описание: {job.body}</p>
                <p className="card-text">
                  Город <b>{job.city}</b>
                </p>
                <p className="card-text">
                  Дата размещения: {new Date(job.data).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="container">
        {/* <button className="btn btn-outline-warning btn-lg btn-block mb-5">
          Загрузить ещё
        </button> */}
      </div>
    </div>
  );
}

export default JobsList;
