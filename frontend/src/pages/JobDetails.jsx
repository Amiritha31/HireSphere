import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

function JobDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const { user } = useAuth();

    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchJob();
    }, [id]);

    const fetchJob = async () => {
        try {

            const response = await api.get(`/jobs/${id}`);

            setJob(response.data);
            setLoading(false);

        } catch (error) {

            console.log(error);

            setError("Failed to load job details");
            setLoading(false);
        }
    };


    const handleApply = async () => {

        if (!user) {
            alert("Please login to apply for this job.");
            navigate("/login");
            return;
        }

        if (user.role !== "CANDIDATE") {
            alert("Only candidates can apply for jobs.");
            return;
        }

        try {

            const applicationData = {
                jobId: job.id,
                candidateId: user.id,
                status: "APPLIED",
                appliedDate: new Date().toISOString().split("T")[0]
            };

            await api.post("/applications", applicationData);

            alert("Application submitted successfully!");

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Failed to submit application"
            );
        }
    };


    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <h4>Loading job details...</h4>
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


    if (!job) {
        return (
            <div className="container mt-5">

                <div className="alert alert-warning">
                    Job not found.
                </div>

            </div>
        );
    }


    return (
        <div className="container mt-5">

            <button
                className="btn btn-secondary mb-4"
                onClick={() => navigate("/jobs")}
            >
                ← Back to Jobs
            </button>


            <div className="card shadow">

                <div className="card-body p-4">

                    <h2 className="mb-3">
                        {job.title}
                    </h2>

                    <hr />


                    <h5>🏢 Company</h5>

                    <p>
                        {job.companyName}
                    </p>


                    <h5>📍 Location</h5>

                    <p>
                        {job.location || "Not specified"}
                    </p>


                    <h5>💼 Job Type</h5>

                    <p>
                        {job.jobType || "Not specified"}
                    </p>


                    <h5>💰 Salary</h5>

                    <p>
                        {job.salary
                            ? `₹${job.salary}`
                            : "Not specified"}
                    </p>


                    <h5>🛠️ Required Skills</h5>

                    <p>
                        {job.skills || "Not specified"}
                    </p>


                    <h5>📝 Job Description</h5>

                    <p>
                        {job.description}
                    </p>


                    <button
                        className="btn btn-primary mt-3"
                        onClick={handleApply}
                    >
                        Apply Now
                    </button>

                </div>

            </div>

        </div>
    );
}

export default JobDetails;