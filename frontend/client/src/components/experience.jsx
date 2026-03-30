import { useAuth } from "../store/auth.jsx";

export const Experience = () => {
  const { technologies, cert, experiences } = useAuth();

  return (
    <>
      <nav>
        <div className="nav nav-tabs mb-5" id="nav-tab" role="tablist">
          <button
            className="nav-link"
            id="nav-experience-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-experience"
            type="button"
            role="tab"
            aria-controls="nav-experience"
            aria-selected="false"
            style={{ color: "rgb(98, 98, 98)" }}
          >
            Experience
          </button>

          <button
            className="nav-link"
            id="nav-certifications-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-certifications"
            type="button"
            role="tab"
            aria-controls="nav-certifications"
            aria-selected="false"
            style={{ color: "rgb(98, 98, 98)" }}
          >
            Certifications
          </button>

          <button
            className="nav-link active"
            id="nav-technologies-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-technologies"
            type="button"
            role="tab"
            aria-controls="nav-technologies"
            aria-selected="true"
            style={{ color: "rgb(98, 98, 98)" }}
          >
            Technologies
          </button>
        </div>
      </nav>

      <div
        className="tab-content mb-5 description"
        id="nav-tabContent"
        style={{ height: "30vh", overflowY: "auto" }}
      >
        {/* Experience Tab */}
        <div
          className="tab-pane fade"
          id="nav-experience"
          role="tabpanel"
          aria-labelledby="nav-experience-tab"
        >
         
          <div className="accordion" id="accordionExample">
            {experiences.map((curr, idx) => {
              const headingId = `heading${idx}`;
              const collapseId = `collapse${idx}`;
              return (
                <div className="accordion-item" key={idx}>
                  <h2 className="accordion-header" id={headingId}>
                    <button
                      className="accordion-button "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${collapseId}`}
                      aria-expanded={idx === 0 ? "true" : "false"}
                      aria-controls={collapseId}
                      style={{ backgroundColor: " rgba(252, 246, 243, 1)" }}
                    >
                      {curr.jobRole} – {curr.CompanyName}
                    </button>
                  </h2>
                  <div
                    id={collapseId}
                    className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                    aria-labelledby={headingId}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body description">
                      <strong style={{ color: "black" }}>{curr.Duration}</strong>
                      </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications Tab */}
        <div
          className="tab-pane fade text-capitalize"
          id="nav-certifications"
          role="tabpanel"
          aria-labelledby="nav-certifications-tab"

        >
          <ul>
            {Array.isArray(cert) &&
              cert.map((currr, inx) => (
                <li key={inx} className="mb-3">
                  <i> {currr.certificateName}</i> {" "} –{" "} <span style={{ color: "rgba(252, 176, 176, 1)" }}>{currr.organizationName}</span>
                  <div className="description" style={{ color: " rgba(248, 214, 168, 1)" }}>
                    {currr.Timeline}
                  </div>
                </li>
              ))}
          </ul>
        </div>

        {/* Technologies Tab (active by default) */}
        <div
          className="tab-pane fade show active"
          id="nav-technologies"
          role="tabpanel"
          aria-labelledby="nav-technologies-tab"

        >
          {Array.isArray(technologies) &&
            technologies.map((currElem, index) => (
              <div className="d-flex align-items-center my-2" key={index}>
                <span className="badge m-1">{currElem.technologyName}</span>
                <div
                  className="progress flex-grow-1 mx-5"
                  style={{ height: "8px" }}
                >
                  <div
                    className="progress-bar bg-secondary"
                    role="progressbar"
                    style={{ width: `${currElem.progress}%`, color: "white" }}
                    aria-valuenow={currElem.progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>


    </>
  );
};