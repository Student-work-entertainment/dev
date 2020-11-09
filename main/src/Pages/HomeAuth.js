import React from "react";
import { AuthContext } from "../Context/AuthContext";
import { ToastContainer } from "react-toastify";

function HomeAuth() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
