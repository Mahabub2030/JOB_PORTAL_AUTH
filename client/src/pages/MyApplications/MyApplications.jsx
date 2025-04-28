import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';


const MyApplications = () => {
    const { user } = useAuth();
    const [jobs, setJobs ] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9000/job-applications?email=${user.email}`)
          .then((res) => res.json())
          .then((data) => setJobs(data));
    
    }, [user.email])
   

   
    return (
      <div>
        <h2 className="text-3xl">My Applications:{jobs.length} </h2>
        <div className="overflow-x-auto">
          <table className="table">
            <p className="text-xl">this job apllcation table </p>
          </table>
        </div>
      </div>
    );
};

export default MyApplications;