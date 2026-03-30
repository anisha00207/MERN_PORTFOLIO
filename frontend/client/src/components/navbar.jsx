import { NavLink, useLocation } from "react-router-dom";

import { FaRegUser } from "react-icons/fa6";

export const NavBar = () => {
 
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <>
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top"
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <div className="container-fluid p-3">

            {/* Logo / Home icon – ALWAYS visible */}
            <h1 className="mb-0">
              <NavLink
                to="/"
                className="text-decoration-none purple fst-italic"
                style={{ color: "rgba(248, 237, 236, 1)" }}
              >
                <i
                  className="bi bi-house-door"
                  style={{
                    display: "inline-block",          
                    fontSize: "2rem",
                    transform: "translateY(-14px) ",

                  }}
                ></i>
                {" "}


              </NavLink>
            </h1>

            <span className="d-flex flex-column description"
              style={{
               fontFamily: "'Dancing Script', cursive",
                fontStyle: "italic",
                fontWeight: "200",
                fontSize: "1.4rem"
              }}
            >


              <span> {" "}Anisha</span>
              <span>{" "}joshi</span>
            </span>


            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 align-items-center">

               
                {isHomePage && (
                  <>
                    <li className="nav-item">
                      <a href="#" className="text-decoration-none purple">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#projects" className="text-decoration-none purple">
                        Projects
                      </a>
                    </li>

                    <li>
                      <a href="#experience" className="text-decoration-none purple">
                        Experience
                      </a>
                    </li>

                  

                    <li className="nav-item">
                      <div className="btn-group dropdown">

                      
                        <a
                          href="#testimonials"
                          className="nav-link text-decoration-none"
                          style={{ color: "rgb(250, 222, 185)" }}
                        >
                          Testimonials
                        </a>

              
                        <button
                          type="button"
                          className="btn btn-sm dropdown-toggle dropdown-toggle-split nav-link"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{ color: "rgb(250, 222, 185)" }}
                        >
                        </button>

                
                        <ul
                          className="dropdown-menu"
                          style={{ backgroundColor: "black" }}
                        >
                          <li>
                            <NavLink
                              to="/testimonialform"
                              className="dropdown-item"
                              style={{ color: "rgb(250, 222, 185)", backgroundColor: "black" }}

                            >
                              Add Testimonial
                            </NavLink>
                          </li>
                        </ul>

                      </div>
                    </li>
                    <li>
                      <a href="#contact" className="text-decoration-none purple">
                        Contact
                      </a>
                    </li>

                    {/* Admin – only on Home (as you wanted) */}
                    <li>
                      <NavLink to="/admin-login" className="text-decoration-none">
                        <FaRegUser className="purple" />{" "}
                        <span className="pink fw-bold">Admin</span>
                      </NavLink>
                    </li>
                  </>
                )}

              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
