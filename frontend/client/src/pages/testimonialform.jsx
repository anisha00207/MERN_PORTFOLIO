import { NavLink } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";
export const TestimonialForm = () => {
const {Base_Url}=useAuth();
    const [Name, setName] = useState("");
    const [Designation, setDesignation] = useState("");
    const [SocialMediaLink, setSocialMediaLink] = useState("");
    const [Review, setReview] = useState("");

    const HandleSubmit = async (e) => {
        e.preventDefault(); // stop page refresh

        try {
            const response = await fetch(
                `${Base_Url}/review/testimonials`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        Name,
                        Designation,
                        SocialMediaLink,
                        Review,
                    }),
                }
            );

            const data = await response.json();

            if (response.ok) {
                toast.success("Thank you! Your testimonial is submitted for review to Admin.");

                // clear form
                setName("");
                setDesignation("");
                setSocialMediaLink("");
                setReview("");
            } else {
                toast.error(data.extraDetails ? data.extraDetails : data.message);
            }

        } catch (error) {
            console.error("error from addtestimonial", error);
            toast.error("Server error. Please try again later.");
        }
    };

    return (
        <div className="min-vh-100 bg-dark" style={{ padding: "10%" }}>

            <NavLink to="/" className="text-decoration-none">
                <span
                    className="d-inline-flex align-items-center justify-content-center rounded-circle"
                    style={{
                        width: "2.75rem",
                        height: "2.75rem",
                        backgroundColor: "rgba(75, 75, 75, 1)",
                    }}
                >
                    <i
                        className="bi bi-arrow-left"
                        style={{ fontSize: "1rem", color: "white" }}
                    />
                </span>
            </NavLink>

            <form onSubmit={HandleSubmit}>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control input"
                        placeholder="your name"
                        id="name"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="designation">Your Designation</label>
                    <input
                        type="text"
                        className="form-control input"
                        id="designation"
                        placeholder=" your current or previous designation Example - Tech Lead at XYZ "
                        value={Designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="url">Professional Profile</label>
                    <input
                        type="url"
                        className="form-control input"
                        id="url"
                        placeholder="LinkedIn / GitHub URL (professional profile)"
                        value={SocialMediaLink}
                        onChange={(e) => setSocialMediaLink(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">
                        Write Testimonial
                    </label>

                    <textarea
                        className="form-control"
                        id="description"
                        rows={5}
                        value={Review}
                        onChange={(e) => setReview(e.target.value)}
                        placeholder="Write your words here in less than 250 chars"
                        maxLength={250}          
                        required
                    />
                </div>
                <br />

                <button type="submit" className="btnn p-2">
                    Submit
                </button>

            </form>
        </div>
    );
};


