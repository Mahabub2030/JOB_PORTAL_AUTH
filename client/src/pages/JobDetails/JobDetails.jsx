import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
const JobDetails = () => {
    const job = useLoaderData();
    const {
      _id,
      title,
      company,
      company_logo,
      requirements,
      description,
      location,
      salaryRange,
    } = job;
    console.log(job)

    return (
      <div className="m-10 border bg-zinc-600 text-bold w-1/2 flex">
        <div className=" bg-base-100 shadow-sm">
          <figure>
            <img
              className="w-1/4 text-center items-center mx-auto"
              src={company_logo}
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <p>{location}</p>
            <p>{requirements}</p>
            <div className="card-actions justify-end">
              {/* <button className="btn btn-primary">{company}</button> */}
              <Link to={`/jobApply/${_id}`}>
                <button className="btn btn-primary">Apply Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default JobDetails;