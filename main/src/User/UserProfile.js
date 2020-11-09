import React from "react";
import { AuthContext } from "../Context/AuthContext";

function UserProfile() {
  return (
    <div className="container">
      <AuthContext.Consumer>
        {(value) => {
          return (
            <div className="container mt-5">
              <h1> Ваш профиль {value.userFN} 😄</h1>
              <h3>
                <b>Ваше имя:</b> {" " + value.userFN}
              </h3>
              <h3>
                <b>Ваша фамилия:</b>
                {" " + value.userLN}
              </h3>
              <h3>
                <b> Аккаунт ID: </b>
                {value.userId}
              </h3>
              <h3>
                <b>Ваши резюме: </b>
                {"Тут будут ваши резюме :)"}
              </h3>
              <h3>
                <b>Статус аккаунта: </b>
                {"User"}
              </h3>
            </div>
          );
        }}
      </AuthContext.Consumer>
    </div>
  );
}
export default UserProfile;
