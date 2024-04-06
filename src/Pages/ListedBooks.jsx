import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Components/Utility/LocalStorage";
import ReadBooks from "../Components/ReadBooks/ReadBooks";

const ListedBooks = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([])
  useEffect(() => {
    const storeJobIds = getStoredJobApplication();
    if(jobs.length > 0){
      const jobsApplied = jobs.filter(job => storeJobIds.includes(job.id))
      // const jobsApplied = [];
      // for(const id of storeJobIds){
      //   const job = job.find(job => job.id === id);
      //   if(job){
      //     jobsApplied.push(job)
      //   }
      // }
      // console.log(jobs, storeJobIds, jobsApplied)
      setAppliedJobs(jobsApplied)
    }
  }, [])
  return (
    <div className="space-y-4">
      {
        appliedJobs.map(blog => <ReadBooks key={blog.id} blog={blog} ></ReadBooks>)
      }
    </div>
  ); 
};

export default ListedBooks;
