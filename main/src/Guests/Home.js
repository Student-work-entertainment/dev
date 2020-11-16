import React from "react";
import { SearchJob } from "../components/SearchJob";
import Content from "./Content";

function Home() {
  return (
    <div className=" container mt-5">
      <div className="mb-5">
        <SearchJob></SearchJob>
      </div>
      <h1>Популярные вакансии на сегодняшний день: </h1>
      <Content></Content>
    </div>
  );
}
export default Home;
