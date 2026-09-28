function Home() {
    return (
        <div className="container mt-5">

            <div className="text-center">
                <h1 className="display-4 fw-bold">
                    Welcome to HireSphere
                </h1>

                <p className="lead mt-3">
                    Find jobs. Hire talent. Build your career.
                </p>

                <div className="mt-4">
                    <a href="/jobs" className="btn btn-primary me-2">
                        Find Jobs
                    </a>

                    <a href="/register" className="btn btn-outline-primary">
                        Create Account
                    </a>
                </div>
            </div>

            <div className="row mt-5">

                <div className="col-md-4">
                    <div className="card p-4 text-center h-100">
                        <h3>🔍 Find Jobs</h3>
                        <p>
                            Search and explore job opportunities based on your skills.
                        </p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card p-4 text-center h-100">
                        <h3>💼 Hire Talent</h3>
                        <p>
                            Recruiters can post jobs and find suitable candidates.
                        </p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card p-4 text-center h-100">
                        <h3>🚀 Build Career</h3>
                        <p>
                            Manage your applications and grow your career with HireSphere.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Home;