import React from "react";
import { Link } from "react-router-dom";

export const ResponseCard = (job) => {
  return (
    <div className="container">
      <h1>Отклик на вакансию {job.job.title}</h1>
      <div className="conteiner mt-4 shadow-lg p-5 mb-5">
        <h3 className="text-center">{job.job.title}</h3>
        <p>Оисание: {job.job.body}</p>
        <p>
          <b>Город: </b> {job.job.city}
        </p>
      </div>
      <p>Загрузите ваше резюме:</p>
      <input type="file"></input>
      <br></br>
      <textarea
        className="mt-3"
        placeholder="Сопроводительное письмо..."
      ></textarea>
      <br></br>
      <button className="btn btn-success mt-3">Отклик</button>
      <br></br>
      <label className="mt-4 mr-1">или </label>
      <Link to="/" className="btn btn-danger mb-4">
        Отменить
      </Link>
    </div>
  );
};
