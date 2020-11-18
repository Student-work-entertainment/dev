import React from "react";
import { Link } from "react-router-dom";

export const ResponseCard = (job) => {
  return (
    <div className="container">
      <div className="text-center">
        <h1>Отклик на вакансию {job.job.title}</h1>
      </div>

      <div className="row">
        <div className="col mt-4 shadow-lg p-5 mb-5">
          <h3 className="text-center">{job.job.title}</h3>
          <p>Описание: {job.job.body}</p>
          <p>
            <b>Город: </b> {job.job.city}
          </p>
        </div>
        <div className="col">
          <div className="container">
            <img
              src={"../images/anket.png"}
              className="d-flex justify-content-center mx-auto"
              width="300px"
            ></img>
          </div>
          <div className="contaier text-center">
            <h3>Загрузите ваше резюме</h3>
            <input type="file" className="mt-3"></input>
          </div>
          <div className="container">
            <textarea
              className="mt-3 btn-block"
              placeholder="Сопроводительное письмо..."
            ></textarea>
            <br></br>
            <button className="btn btn-block btn-success mt-3">Отклик</button>
            <Link to="/" className="btn btn-block mt-3 btn-danger mb-4">
              Отменить
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
