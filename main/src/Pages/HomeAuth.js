import React from "react";
import { AuthContext } from "../Context/AuthContext";

function HomeAuth() {
  return (
    <div>
      <AuthContext.Consumer>
        {(value) => {
          return (
            <div className="container mt-5">
              <h1>Hello {value.userFN} !</h1>
              <label className="label">
                {" "}
                You full name: {value.userFN + " " + value.userLN}
              </label>
            </div>
          );
        }}
      </AuthContext.Consumer>
    </div>
  );
}
export default HomeAuth;
