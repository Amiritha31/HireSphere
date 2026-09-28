import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {

    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

            <div className="container">

                <Link className="navbar-brand" to="/">
                    HireSphere
                </Link>

                <div className="navbar-nav ms-auto">

                    <Link className="nav-link" to="/">
                        Home
                    </Link>

                    {user ? (
                        <>
                            <span className="nav-link">
                                Welcome, {user.name}
                            </span>

                            <button
                                className="btn btn-light btn-sm ms-2"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link className="nav-link" to="/login">
                                Login
                            </Link>

                            <Link className="nav-link" to="/register">
                                Register
                            </Link>
                        </>
                    )}

                </div>

            </div>

        </nav>
    );
}

export default Navbar;