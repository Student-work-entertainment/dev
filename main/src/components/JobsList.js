import React from "react";
import { Link } from "react-router-dom";

function JobsList({ jobs }) {
  if (!jobs.length) {
    return (
      <div className="container">
        <div className="alert alert-danger" role="alert">
          Работы пока что нету
        </div>
      </div>
    );
  }
  return (
    <div>
      {jobs.map((job, index, key) => {
        return (
          <div className="container" key={job._id}>
            <div className="row">
              <div className="col mt-1">
                <div className="card" id="card">
                  <div className="card-body">
                    <Link to={`/detail/${job._id}`} className="">
                      <h5 className="card-title">{job.title}</h5>
                    </Link>
                    <p className="card-text">{job.body}</p>
                    <p className="card-text">{job.data}</p>
                    <p className="card-text">
                      Город <b>{job.city}</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
}

export default JobsList;
