import React from "react";
import { AuthContext } from "../Context/AuthContext";
import { ToastContainer } from "react-toastify";
import Content from "../Guests/Content";

function UserHome() {
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
}
export default UserHome;
