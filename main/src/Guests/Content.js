import React, { useState, useCallback, useEffect } from "react";
import { useHttp } from "../Hooks/http.hook";
import { Loader } from "../components/Loader";

import JobsList from "../components/JobsList";

function Content() {
  const [jobs, setJobs] = useState([]);
  const { loading, request } = useHttp();
  const jobsFeched = useCallback(async () => {
    try {
      const feched = await request("/api/jobs/jobs", "GET", null);
      setJobs(feched);
    } catch (e) {}
  }, [request]);
  useEffect(() => {
    jobsFeched();
  }, [jobsFeched]);
  console.log(jobs);

  if (loading) {
    return <Loader></Loader>;
  }
  return <>{!loading && <JobsList jobs={jobs}></JobsList>}</>;
}
export default Content;
