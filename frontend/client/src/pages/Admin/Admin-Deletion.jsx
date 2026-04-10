import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../store/auth";

export const AdminDataList = () => {
  const {Base_Url}=useAuth();
  const token = localStorage.getItem("adminToken");

  const [experiences, setExperiences] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const [expRes, techRes, certRes, projRes] = await Promise.all([
        fetch(`${Base_Url}/user_data/experience`),
        fetch(`${Base_Url}/skills/technology`),
        fetch(`${Base_Url}/cert/certification`),
        fetch(`${Base_Url}/data/projects`),
      ]);

      const expData = await expRes.json();
      const techData = await techRes.json();
      const certData = await certRes.json();
      const projData = await projRes.json();

      // ✅ extract .msg safely
      setExperiences(Array.isArray(expData.msg) ? expData.msg : []);
      setTechnologies(Array.isArray(techData.msg) ? techData.msg : []);
      setCertifications(Array.isArray(certData.msg) ? certData.msg : []);
      setProjects(Array.isArray(projData.msg) ? projData.msg : []);
    } catch (error) {
      toast.error("Failed to load admin data");
      console.error(error);
    }
  };

  // ✅ reusable delete helper
  const handleDelete = async (url, setter, id, successMsg) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error();

      setter((prev) => prev.filter((item) => item._id !== id));
      toast.success(successMsg);
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="container py-5 description">

      {/* EXPERIENCE */}
      <h3>Experience</h3>
      {experiences.map((exp) => (
        <div key={exp._id} className="border p-3 mb-2">
          <b>{exp.jobRole}</b>
          <p>{exp.CompanyName} — {exp.Duration}</p>
          <button
            className="btn btn-danger btn-sm"
            onClick={() =>
              handleDelete(
                `${Base_Url}/user_data/experience/${exp._id}`,
                setExperiences,
                exp._id,
                "Experience deleted"
              )
            }
          >
            Delete
          </button>
        </div>
      ))}

      {/* TECHNOLOGY */}
      <h3 className="mt-4">Technology</h3>
      {technologies.map((tech) => (
        <div key={tech._id} className="border p-3 mb-2">
          <b>{tech.technologyName}</b>
          <p>Progress: {tech.progress}%</p>
          <button
            className="btn btn-danger btn-sm"
            onClick={() =>
              handleDelete(
                `${Base_Url}/skills/technology/${tech._id}`,
                setTechnologies,
                tech._id,
                "Technology deleted"
              )
            }
          >
            Delete
          </button>
        </div>
      ))}

      {/* CERTIFICATION */}
      <h3 className="mt-4">Certification</h3>
      {certifications.map((cert) => (
        <div key={cert._id} className="border p-3 mb-2">
          <b>{cert.certificateName}</b>
          <p>{cert.organizationName}</p>
          <p>{cert.Timeline}</p>
          <button
            className="btn btn-danger btn-sm"
            onClick={() =>
              handleDelete(
                `${Base_Url}/cert/certification/${cert._id}`,
                setCertifications,
                cert._id,
                "Certification deleted"
              )
            }
          >
            Delete
          </button>
        </div>
      ))}

      {/* PROJECTS */}
      <h3 className="mt-4">Projects</h3>
      {projects.map((proj) => (
        <div key={proj._id} className="border p-3 mb-3">
          <b>{proj.ProjectName}</b>
          <p>{proj.TechStack}</p>
          <p>{proj.Duration}</p>
          <p>{proj.Keywords?.join(", ")}</p>
          <button
            className="btn btn-danger btn-sm"
            onClick={() =>
              handleDelete(
                `${Base_Url}/data/projects/${proj._id}`,
                setProjects,
                proj._id,
                "Project deleted"
              )
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
