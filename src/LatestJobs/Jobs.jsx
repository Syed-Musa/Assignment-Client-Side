/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import LatestJobs from "./LatestJobs";
import axios from "axios";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    const url = 'http://localhost:5000/jobs';
    useEffect(()=>{
        axios.get(url, {withCredentials: true})
        .then(res => {
            setJobs(res.data);
        })
        
    }, [])

    return (
        <div className="my-10 max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold uppercase text-center text-emerald-900 italic">Our Latests Jobs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    jobs?.map(job => <LatestJobs key={job.id} job={job}></LatestJobs>)
                }
            </div>
        </div>
    );
};

export default Jobs;