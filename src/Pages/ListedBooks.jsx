import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Components/Utility/LocalStorage";
import ReadBooks from "../Components/ReadBooks/ReadBooks";
import { IoIosArrowDropdown } from "react-icons/io";

const ListedBooks = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJob, setDisplayJob] = useState([]);
  const handleBooksFilter = (filter) => {
    if (filter === "rating") {
      setDisplayJob(appliedJobs);
    } else if (filter === "totalPages") {
      const totalPages = appliedJobs.filter((book) => book.totalPages === 281);
      setDisplayJob(totalPages);
    } else if (filter === "publisher") {
      const publisher = appliedJobs.filter(
        (book) => book.publisher === 1960
      );
      setDisplayJob(publisher);
    }
  };

  useEffect(() => {
    const storeJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storeJobIds.includes(job.id));
      // const jobsApplied = [];
      // for(const id of storeJobIds){
      //   const job = job.find(job => job.id === id);
      //   if(job){
      //     jobsApplied.push(job)
      //   }
      // }
      // console.log(jobs, storeJobIds, jobsApplied)
      setAppliedJobs(jobsApplied);
      setDisplayJob(jobsApplied);
    }
  }, [jobs]);
  return (
    <div className="space-y-4">
      <h2 className="text-3xl bg-gray-100 rounded p-4 my-8 text-center font-bold work-sans">
        Books
      </h2>
      <div className="text-center">
        <details className="dropdown">
          <summary className="m-1 btn bg-green-500 text-white work-sans">
            Sort By <IoIosArrowDropdown />
          </summary>
          <ul className="p-2 shadow bg-gray-100 menu dropdown-content z-[1]  rounded-box w-52">
            <li onClick={()=> handleBooksFilter('rating')}>
              <a>Rating</a>
            </li>
            <li onClick={()=> handleBooksFilter('totalPages')}>
              <a>Number Of Pages</a>
            </li>
            <li onClick={()=> handleBooksFilter('J. B. Lippincott & Co.')}>
              <a>Publisher Year</a>
            </li>
          </ul>
        </details>
      </div>
      <div className=" py-8">
        {displayJob.map((blog) => (
          <ReadBooks key={blog.id} blog={blog}></ReadBooks>
        ))}
      </div>
    </div>
  );
};

export default ListedBooks;
