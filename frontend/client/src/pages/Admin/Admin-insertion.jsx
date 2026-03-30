import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../store/auth";

export const AdminInsertion = () => {
    const  {Base_Url}=useAuth();
    const token = localStorage.getItem("adminToken");

    /* =========================
       EXPERIENCE STATE
    ========================= */
    const [jobRole, setJobRole] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [expDuration, setExpDuration] = useState("");

    const submitExperience = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(
                `${Base_Url}/user_data/experience`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        jobRole,
                        CompanyName: companyName,
                        Duration: expDuration,
                    }),
                }
            );

            if (!res.ok) throw new Error();
            toast.success(" Experience added");

            setJobRole("");
            setCompanyName("");
            setExpDuration("");
        } catch {
            toast.error(" Failed to add experience");
        }
    };

    /* =========================
       TECHNOLOGY STATE
    ========================= */
    const [technologyName, setTechnologyName] = useState("");
    const [progress, setProgress] = useState("");

    const submitTechnology = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(
                `${Base_Url}/skills/technology`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ technologyName, progress }),
                }
            );

            if (!res.ok) throw new Error();
            toast.success(" Technology added");

            setTechnologyName("");
            setProgress("");
        } catch {
            toast.error(" Failed to add technology");
        }
    };

    /* =========================
       CERTIFICATION STATE
    ========================= */
    const [certificateName, setCertificateName] = useState("");
    const [organizationName, setOrganizationName] = useState("");
    const [timeline, setTimeline] = useState("");

    const submitCertification = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(
                `${Base_Url}/cert/certification`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },

                    body: JSON.stringify({
                        certificateName,
                        organizationName,
                        Timeline: timeline,
                    }),

                }
            );

            if (!res.ok) throw new Error();
            toast.success("Certification added");

            setCertificateName("");
            setOrganizationName("");
            setTimeline("");
        } catch {
            toast.error(" Failed to add certification");
        }
    };

    /* =========================
       PROJECT STATE
    ========================= */
    const [projectName, setProjectName] = useState("");
    const [techStack, setTechStack] = useState("");
    const [projectDuration, setProjectDuration] = useState("");
    const [keywords, setKeywords] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");
    const [imageURL, setImageURL] = useState("");

    const submitProject = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(
                `${Base_Url}/data/projects`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        ProjectName: projectName,
                        TechStack: techStack,
                        Duration: projectDuration,
                        Keywords: keywords, // comma-separated, backend parses
                        Description: description,
                        Link: link,
                        ImageURL: imageURL,
                    }),
                }
            );

            if (!res.ok) throw new Error();
            toast.success(" Project added");

            setProjectName("");
            setTechStack("");
            setProjectDuration("");
            setKeywords("");
            setDescription("");
            setLink("");
            setImageURL("");
        } catch {
            toast.error("Failed to add project");
        }
    };

    return (
        <div className="container py-5 d-flex flex-column gap-5">

            {/* EXPERIENCE */}
            <form onSubmit={submitExperience}>
                <h4>Experience</h4>
                <input className="form-control input mb-2" value={jobRole}
                    onChange={(e) => setJobRole(e.target.value)} placeholder="Job Role" required />
                <input className="form-control input mb-2" value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)} placeholder="Company Name" required />
                <input className="form-control input mb-3" value={expDuration}
                    onChange={(e) => setExpDuration(e.target.value)} placeholder="Duration" required />
                <button className="btnn p-2">Submit</button>
            </form>

            {/* TECHNOLOGY */}
            <form onSubmit={submitTechnology}>
                <h4>Technology</h4>
                <input className="form-control input mb-2" value={technologyName}
                    onChange={(e) => setTechnologyName(e.target.value)} placeholder="Technology Name" required />
                <input type="number" min={0} max={100} className="form-control input mb-3"
                    value={progress} onChange={(e) => setProgress(e.target.value)} placeholder="Progress %" required />
                <button className="btnn p-2">Submit</button>
            </form>

            {/* CERTIFICATION */}
            <form onSubmit={submitCertification}>
                <h4>Certification</h4>
                <input className="form-control input mb-2" value={certificateName}
                    onChange={(e) => setCertificateName(e.target.value)} placeholder="Certificate Name" required />
                <input className="form-control input mb-2" value={organizationName}
                    onChange={(e) => setOrganizationName(e.target.value)} placeholder="Organization" required />
                <input className="form-control input mb-3" value={timeline}
                    onChange={(e) => setTimeline(e.target.value)} placeholder="Timeline" required />
                <button className="btnn p-2">Submit</button>
            </form>

            {/* PROJECT */}
            <form onSubmit={submitProject}>
                <h4>Project</h4>
                <input className="form-control input mb-2" value={projectName}
                    onChange={(e) => setProjectName(e.target.value)} placeholder="Project Name" required />
                <input className="form-control input mb-2" value={techStack}
                    onChange={(e) => setTechStack(e.target.value)} placeholder="Tech Stack" required />
                <input className="form-control input mb-2" value={projectDuration}
                    onChange={(e) => setProjectDuration(e.target.value)} placeholder="Duration" required />
                <input className="form-control input mb-2" value={link}
                    onChange={(e) => setLink(e.target.value)} placeholder="Project Link" required />
                <input className="form-control input mb-2" value={imageURL}
                    onChange={(e) => setImageURL(e.target.value)} placeholder="Image URL" required />
                <input className="form-control input mb-3" value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    placeholder="Keywords (comma separated)frontend backend fullstack react node other" />
                <textarea className="form-control input mb-3"
                    style={{ minHeight: "150px", minWidth: "550px" }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Project description" required />
                <button className="btnn p-2">Submit</button>
            </form>

        </div>
    );
};




