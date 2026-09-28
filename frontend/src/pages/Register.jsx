import { useState } from "react";
import api from "../services/api";

function Register() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "CANDIDATE"
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/users", formData);

            alert("Registration successful!");

            console.log(response.data);

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Registration failed"
            );
        }
    };

    return (
        <div className="container mt-5">

            <div className="col-md-6 mx-auto">

                <h2 className="text-center mb-4">
                    Create Account
                </h2>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label className="form-label">
                            Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

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
                            placeholder="Create a password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Role
                        </label>

                        <select
                            name="role"
                            className="form-select"
                            value={formData.role}
                            onChange={handleChange}
                        >
                            <option value="CANDIDATE">
                                Candidate
                            </option>

                            <option value="RECRUITER">
                                Recruiter
                            </option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                    >
                        Register
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Register;