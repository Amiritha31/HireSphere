import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function PostJob() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        companyName: "",
        location: "",
        salary: "",
        jobType: "FULL_TIME",
        skills: ""
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

            const jobData = {
                ...formData,
                salary: formData.salary
                    ? Number(formData.salary)
                    : null
            };

            await api.post("/jobs", jobData);

            alert("Job posted successfully!");

            navigate("/jobs");

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Failed to post job"
            );
        }
    };

    return (
        <div className="container mt-5">

            <div className="col-md-8 mx-auto">

                <h2 className="text-center mb-4">
                    Post a New Job
                </h2>

                <form onSubmit={handleSubmit}>

                    {/* Job Title */}
                    <div className="mb-3">
                        <label className="form-label">
                            Job Title
                        </label>

                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            placeholder="Example: Java Developer"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>


                    {/* Company Name */}
                    <div className="mb-3">
                        <label className="form-label">
                            Company Name
                        </label>

                        <input
                            type="text"
                            name="companyName"
                            className="form-control"
                            placeholder="Example: ABC Technologies"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                        />
                    </div>


                    {/* Job Description */}
                    <div className="mb-3">
                        <label className="form-label">
                            Job Description
                        </label>

                        <textarea
                            name="description"
                            className="form-control"
                            rows="5"
                            placeholder="Enter job description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>


                    {/* Location */}
                    <div className="mb-3">
                        <label className="form-label">
                            Location
                        </label>

                        <input
                            type="text"
                            name="location"
                            className="form-control"
                            placeholder="Example: Chennai"
                            value={formData.location}
                            onChange={handleChange}
                        />
                    </div>


                    {/* Salary */}
                    <div className="mb-3">
                        <label className="form-label">
                            Salary
                        </label>

                        <input
                            type="number"
                            name="salary"
                            className="form-control"
                            placeholder="Example: 600000"
                            value={formData.salary}
                            onChange={handleChange}
                        />
                    </div>


                    {/* Job Type */}
                    <div className="mb-3">
                        <label className="form-label">
                            Job Type
                        </label>

                        <select
                            name="jobType"
                            className="form-select"
                            value={formData.jobType}
                            onChange={handleChange}
                        >
                            <option value="FULL_TIME">
                                Full Time
                            </option>

                            <option value="PART_TIME">
                                Part Time
                            </option>

                            <option value="INTERNSHIP">
                                Internship
                            </option>

                            <option value="CONTRACT">
                                Contract
                            </option>
                        </select>
                    </div>


                    {/* Skills */}
                    <div className="mb-3">
                        <label className="form-label">
                            Required Skills
                        </label>

                        <input
                            type="text"
                            name="skills"
                            className="form-control"
                            placeholder="Example: Java, Spring Boot, MySQL"
                            value={formData.skills}
                            onChange={handleChange}
                        />
                    </div>


                    {/* Submit */}
                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                    >
                        Post Job
                    </button>

                </form>

            </div>

        </div>
    );
}

export default PostJob;