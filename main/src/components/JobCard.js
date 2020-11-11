import React from "react";

export const JobCard = ({ job }) => {
  return (
    <div>
      <h1>
        Заголовок <b>{job.title}</b>
      </h1>
      <h1>
        Описание <b>{job.body}</b>
      </h1>
      <h1>Создатель {job.owner}</h1>
    </div>
  );
};
