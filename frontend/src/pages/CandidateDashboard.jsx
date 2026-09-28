import { useAuth } from "../context/AuthContext";

function CandidateDashboard() {

    const { user } = useAuth();

    return (
        <div className="container mt-5">

            <h2>Candidate Dashboard</h2>

            <p className="lead">
                Welcome, {user?.name} 👋
            </p>

            <div className="row mt-4">

                <div className="col-md-4 mb-3">
                    <div className="card p-4 h-100">
                        <h4>🔍 Find Jobs</h4>
                        <p>
                            Search and explore available job opportunities.
                        </p>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card p-4 h-100">
                        <h4>📄 My Applications</h4>
                        <p>
                            Track the jobs you have applied for.
                        </p>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="card p-4 h-100">
                        <h4>👤 My Profile</h4>
                        <p>
                            Manage your personal and career information.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default CandidateDashboard;