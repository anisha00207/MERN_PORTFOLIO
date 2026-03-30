import { useAuth } from "../store/auth.jsx";
import { useEffect, useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import './styles/projects.css'
// First 3 projects (homepage)
export const FeaturedProjects = () => {
    const { projects } = useAuth();
    const featured = projects.slice(0, 3);

    return (
        <>
            <div className="row g-4 justify-content-center" style={{ marginTop: "4%" }}>
                {featured.map((currElem, index) => (
                    <div className="col-12 col-md-6 col-lg-4" key={index}>
                        <div className="card w-100 project-card">

                            <img
                                className="card-img-top"
                                src={currElem.ImageURL}
                                alt={currElem.ProjectName}
                                style={{ height: "18rem", objectFit: "cover" }}
                            />

                            <a
                                href={currElem.Link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card-overlay text-decoration-none"
                            >
                                <i className="bi bi-box-arrow-up-right overlay-icon"></i>
                                <p className="text-capitalize">{currElem.Description}</p>
                            </a>

                            <div
                                className="card-body pb-3 pt-3"
                                style={{ backgroundColor: "rgba(209, 209, 255, 1)" }}
                            >
                                <h5 className="card-title text-capitalize mb-1">
                                    {currElem.ProjectName}
                                </h5>

                                <b className="text-secondary d-block mb-1">
                                    {currElem.TechStack}
                                </b>

                                <p className="text-capitalize mb-1" style={{ fontSize: "70%" }}>
                                    {currElem.Duration}
                                </p>
                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </>
    );
};


//------------------------------------

// all projects

//------------------------------------



export const AllProjects = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    const { projects } = useAuth();
    // if you still want to hide first 3 (featured) on this page:
    //const rest = projects.slice(3);
    // or: const rest = projects; // <- show all on this page too

    // Allowed keywords only (no free text)
    const KEYWORDS = ["Frontend", "Backend", "fullstack", "React", "Node", "Other"];

    const [selectedKeyword, setSelectedKeyword] = useState("");//keyword in searchbox
    const [search, setSearch] = useState(""); // the committed search value

    // Filtered list:
    // - if search is empty -> show ALL projects
    // - else -> projects whose Keywords contains the search (case-insensitive)
    const filteredProjects = useMemo(() => {
        const list = projects || [];
        const needle = search.trim().toLowerCase();
        if (!needle) return list; // <-- show ALL when empty
        return list.filter((project) =>
            Array.isArray(project.Keywords) &&
            project.Keywords.map((k) => String(k).toLowerCase()).includes(needle)
        );
    }, [projects, search]);

    // Commit the selected keyword as the active search
    const handleSearch = (e) => {
        setSelectedKeyword(e);
        setSearch(e); // empty => show all, non-empty => filter
    };

    // Optional: allow Enter key to trigger search
    


    return (


        <section className="min-vh-100 grey py-5 ">
            <div className="container" 
            
            
            style={{ paddingTop: "10%" }}>

                <div className="d-flex justify-content-center  mb-5 gap-3"  >


                    <NavLink to="/" className="text-decoration-none">
                        <span
                            className="d-inline-flex align-items-center justify-content-center rounded-circle"
                            style={{
                                width: "2.75rem",         // circle diameter
                                height: "2.75rem",
                                backgroundColor: "rgba(75, 75, 75, 1)",
                                color: "black"
                            }}
                        >
                            <i className="bi bi-arrow-left" style={{ fontSize: "1rem", backgroundColor: "rgba(75, 75, 75, 1)", color: "white" }} />
                        </span>
                    </NavLink>



                    <select
                        className="form-select w-50"
                        value={selectedKeyword}
                        onChange={(e) => handleSearch(e.target.value)}

                    >
                        <option value=""></option>
                        {KEYWORDS.map((k) => (
                            <option key={k} value={k} >
                                {k}
                            </option>
                        ))}
                    </select>



                    {/* Optional clear button to quickly reset */}
                    <button
                        className="btn btn-outline-secondary"
                        onClick={() => {
                            setSelectedKeyword("");
                            setSearch("");
                        }}
                    >
                        Clear
                    </button>
                </div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5 mt-5">
                    {filteredProjects.map((project) => (
                        <div className="col" key={project._id}>
                            <div className="card h-100 w-100 project-card">

                                {/* IMAGE (only one) */}
                                <img
                                    src={project.ImageURL}
                                    className="card-img-top"
                                    alt={project.ProjectName}
                                    style={{ objectFit: "cover", height: "14rem" }}
                                />

                                {/*OVERLAY (on hover) */}
                                <a
                                    href={project.Link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="card-overlay text-decoration-none "
                                >
                                    <i className="bi bi-box-arrow-up-right overlay-icon"></i>
                                    <p className="text-capitalize ">
                                        {project.Description}
                                    </p>
                                </a>

                                {/* CARD BODY */}
                                <div
                                    className="card-body"
                                    style={{ backgroundColor: "rgba(209, 209, 255, 1)" }}
                                >
                                    <h5 className="card-title text-capitalize">
                                        {project.ProjectName}
                                    </h5>

                                    <b className="text-secondary">
                                        {project.TechStack}
                                    </b>

                                    <p className="text-capitalize" style={{ fontSize: "70%" }}>
                                        {project.Duration}
                                    </p>

                                    <div className="d-flex gap-2 mt-2">
                                        {project.Keywords.map((k) => (
                                            <span
                                                key={k}
                                                className="badge"
                                                style={{ backgroundColor: "pink", color: "black" }}
                                            >
                                                {k}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>

                    ))}
                </div>

                {search && filteredProjects.length === 0 && (
                    <h3 className="text-center pt-5 description">
                        No projects found for <b>{search}</b>
                    </h3>
                )}

                <ScrollToTop
                    smooth
                    color=" white"
                    style={{
                        backgroundColor: "rgb(23, 23, 23)",
                        borderRadius: "50%",
                        border: "3px solid rgb(214, 90, 111)",
                    }}
                />

            </div>
        </section>
    );
};
