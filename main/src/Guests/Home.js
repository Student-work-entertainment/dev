import React from "react";
import { SearchJob } from "../components/SearchJob";
import Content from "./Content";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="text-center">
        <h1>Ищешь работу? 🙄</h1>
        <p>Мы поможем! </p>
      </div>
      <div className="text-center pb-5">
        <p>
          На нашем сайте 1.000.000 вакансий! Надеемся ты найдешь что то для
          себя!
        </p>
      </div>
      <hr></hr>
      <div className="row mt-5">
        <div className="col text-center">
          <img src={"./images/anket.png"} width="200px" height="200px"></img>
          <p>Отправь резюме работодателю</p>
        </div>
        <div className="col text-center">
          <img
            src={"./images/opertunity.png"}
            width="200px"
            height="200px"
          ></img>
          <p>Получи положительный отклик</p>
        </div>
        <div className="col text-center">
          <img src={"./images/work.png"} width="200px" height="200px"></img>
          <p>Работай</p>
        </div>
      </div>
      <hr></hr>
      <div className="text-center mt-5">
        <h1>Начни прям сейчас!</h1>
      </div>
      <div className="container mb-5">
        <SearchJob></SearchJob>
      </div>
      <div className="row mb-5">
        <div className="col">
          <Content></Content>
        </div>
        <div className="col">
          <div className="text-center">
            <h1>Зарегестрируйтесь</h1>
            <Link to="/register" className="mt-3 btn btn-outline-warning">
              Регестрация
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
