import React from "react";
import { Link } from "react-router-dom";

const card = {
  width: "18rem",
};

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
      {jobs.map((job, index) => {
        return (
          <div className="container  mt-5 text-center">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">
                  <b>{job.title}</b>
                </h5>
                <p class="card-text">{job.body}</p>
                <Link to="" className="btn btn-primary">
                  Подробней
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default JobsList;
