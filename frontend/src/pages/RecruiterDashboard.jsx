import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function RecruiterDashboard() {

    const { user } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="container mt-5">

            <h2>Recruiter Dashboard</h2>

            <p className="lead">
                Welcome, {user?.name} 👋
            </p>

            <div className="row mt-4">

                {/* Post Job */}
                <div className="col-md-4 mb-3">
                    <div className="card p-4 h-100">

                        <h4>💼 Post a Job</h4>

                        <p>
                            Create and publish new job opportunities.
                        </p>

                        <button
                            className="btn btn-primary"
                            onClick={() => navigate("/post-job")}
                        >
                            Post Job
                        </button>

                    </div>
                </div>


                {/* Manage Jobs */}
                <div className="col-md-4 mb-3">
                    <div className="card p-4 h-100">

                        <h4>📋 Manage Jobs</h4>

                        <p>
                            View, edit and manage your posted jobs.
                        </p>

                        <button className="btn btn-primary">
                            Manage Jobs
                        </button>

                    </div>
                </div>


                {/* Applicants */}
                <div className="col-md-4 mb-3">
                    <div className="card p-4 h-100">

                        <h4>👥 Applicants</h4>

                        <p>
                            View candidates who applied for your jobs.
                        </p>

                        <button className="btn btn-primary">
                            View Applicants
                        </button>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default RecruiterDashboard;