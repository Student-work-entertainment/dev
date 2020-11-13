import React from "react";
import { AuthContext } from "../Context/AuthContext";
import Content from "../Guests/Content";

export const Vacancy = () => {
  return (
    <div>
      <AuthContext.Consumer>
        {(value) => {
          return (
            <div className="container mt-5">
              <h1>
                <b>Вакансии на текущий момент для вас {value.userFN} 😌 </b>
              </h1>
            </div>
          );
        }}
      </AuthContext.Consumer>
      <Content></Content>
    </div>
  );
};
