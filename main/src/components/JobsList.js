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
      {jobs.map((job, index) => {
        return (
          <div className="container">
            <div class="row">
              <div class="col mt-1">
                <div class="card" id="card">
                  <div class="card-body">
                    <Link to={`/detail/${job._id}`} className="">
                      <h5 class="card-title">{job.title}</h5>
                    </Link>
                    <p class="card-text">{job.body}</p>
                    <p class="card-text">{job.data}</p>
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

export default JobsList;
