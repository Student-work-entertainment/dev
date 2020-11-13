import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { JobCard } from "../components/JobCard";
import { Loader } from "../components/Loader";
import { useHttp } from "../Hooks/http.hook";

function DetailPage() {
  const [job, setJob] = useState(null);
  const jobId = useParams().id;
  const { request, loading } = useHttp();

  const getJob = useCallback(async () => {
    try {
      const fetched = await request(`/api/jobs/${jobId}`, "GET", null);
      setJob(fetched);
    } catch (e) {}
  }, [request, jobId]);

  useEffect(() => {
    getJob();
  }, [getJob]);

  if (loading) {
    return (
      <>
        <h3 className="text-center text-success">
          Грузим эту вакансию для вас 😄
        </h3>
        <Loader></Loader>
      </>
    );
  }
  return <div>{!loading && job && <JobCard job={job}></JobCard>}</div>;
}
export default DetailPage;
