import React, { useCallback, useEffect, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useHttp } from "../Hooks/http.hook";
import { Loader } from "../components/Loader";
import JobsList from "../components/JobsList";

function UserProfile() {
  const auth = useContext(AuthContext);
  const { token } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const { loading, request } = useHttp();
  const jobsFeched = useCallback(async () => {
    try {
      const feched = await request("/api/jobs/myvacancy", "GET", null, {
        Authorization: `Bearer ${auth.token}`,
      });
      setJobs(feched);
    } catch (e) {}
  }, [request, token]);

  useEffect(() => {
    jobsFeched();
  }, [jobsFeched]);

  if (loading) {
    return <Loader></Loader>;
  }
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
                <b>Ваши вакансии: </b>
              </h3>
              <>{!loading && <JobsList jobs={jobs}></JobsList>}</>
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
