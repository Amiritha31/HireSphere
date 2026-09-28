import { useEffect, useState } from "react";
import api from "../services/api";

function Jobs() {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const response = await api.get("/jobs");

            setJobs(response.data);
            setLoading(false);

        } catch (error) {
            console.log(error);

            setError("Failed to load jobs");
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <h4>Loading jobs...</h4>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger">
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-5">

            <h2 className="mb-4">
                Available Jobs
            </h2>

            {jobs.length === 0 ? (

                <div className="alert alert-info">
                    No jobs available.
                </div>

            ) : (

                <div className="row">

                    {jobs.map((job) => (

                        <div
                            className="col-md-4 mb-4"
                            key={job.id}
                        >

                            <div className="card h-100 shadow-sm">

                                <div className="card-body">

                                    <h4 className="card-title">
                                        {job.title}
                                    </h4>

                                    <p>
                                        🏢 {job.companyName}
                                    </p>

                                    <p>
                                        📍 {job.location}
                                    </p>

                                    <p>
                                        💼 {job.jobType}
                                    </p>

                                    <p>
                                        💰 ₹{job.salary}
                                    </p>

                                    <p>
                                        🛠️ {job.skills}
                                    </p>

                                    <p>
                                        {job.description}
                                    </p>

                                    <button
                                        className="btn btn-primary"
                                        onClick={() =>
                                            window.location.href = `/jobs/${job.id}`
                                        }
                                    >
                                        View Details
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
}

export default Jobs;