import React, { useCallback, useEffect, useState } from "react";
import { useHttp } from "../Hooks/http.hook";
import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader";
import { ResponseCard } from "../components/ResponseCard";

export const Response = () => {
  const { loading, request } = useHttp();
  const [job, setJob] = useState([]);
  const jobId = useParams().id;

  const jobsFeched = useCallback(async () => {
    try {
      const feched = await request(`/api/jobs/${jobId}`, "GET", null);
      setJob(feched);
    } catch (e) {}
  }, [request, jobId]);

  useEffect(() => {
    jobsFeched();
  }, [jobsFeched]);

  if (loading) {
    return <Loader></Loader>;
  }

  return <>{!loading && <ResponseCard job={job}></ResponseCard>}</>;
};
