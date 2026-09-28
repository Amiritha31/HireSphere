import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/auth/login", formData);

            // Store user information
            login(response.data);

            alert("Login successful!");

            console.log(response.data);

            // Navigate based on user role
            if (response.data.role === "CANDIDATE") {
                navigate("/candidate-dashboard");
            }
            else if (response.data.role === "RECRUITER") {
                navigate("/recruiter-dashboard");
            }
            else {
                navigate("/");
            }

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Login failed"
            );
        }
    };

    return (
        <div className="container mt-5">

            <div className="col-md-6 mx-auto">

                <h2 className="text-center mb-4">
                    Login
                </h2>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">

                        <label className="form-label">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                    >
                        Login
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Login;