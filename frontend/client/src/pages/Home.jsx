import "swiper/css";
//import "./styles/Home.css";
import ScrollToTop from "react-scroll-to-top";
//!
import { useNavigate } from "react-router-dom"
import { Testimonial } from "../components/testimonials";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FeaturedProjects } from "../components/projects";
import { Experience } from "../components/experience";
import { Contact } from "../components/contact";
import { NavBar } from "../components/navbar";
import { toast } from "react-toastify";

//!

//! greeting code

const greetings = ["Hi ...", "Hola ...", "Namaste ..."];

export const Home = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let word = greetings[index];
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      setDisplayText(word.slice(0, charIndex + 1));
      charIndex++;
      if (charIndex === word.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % greetings.length);
          setDisplayText("");
        }, 1200);
      }
    }, 80);
    return () => clearInterval(typingInterval);
  }, [index]);

  //!
useEffect(() => {
  toast.warning("Backend may take a few seconds to wake up (free hosting)");
}, []);
  return (
  <>

      <section
        className="min-vh-100 py-5 grey"
        id="#"
      >
        <div className="container">
         
          <div className="row align-items-center py-5" style={{ marginTop: "5%" }}>

            {/* Left column */}
            <div className="col-lg-6 col-md-12 mb-5 text-start">
              <div style={{ marginBottom: "1.5rem", color: "rgb(214, 90, 111)" }}>
                <h1
                  style={{
                    fontFamily:  "Dancing Script, cursive",
                    fontSize: "3rem",
                    fontWeight: "lighter",
                  }}
                >
                  <i>{displayText}.</i>
                </h1>
              </div>

              <p className="description fst-italic" style={{ fontSize: "1.1rem" }}>
                A Fullstack Developer with over a year of experience working
                across <span className="pink">MERN </span>and <span className="pink">MEAN </span>stacks. Focused on building practical,
                reliable web applications that balance functionality with ease of
                use. Comfortable working with different web technologies and
                adapting to project needs, bringing consistency and clarity to
                development. With a steady approach to problem-solving and a
                willingness to learn, contributes to projects that require both
                technical understanding and thoughtful execution. Dedicated to
                creating solutions that serve users effectively while keeping pace
                with the evolving landscape of modern web development.
              </p>

              <div className="d-flex  " style={{ marginTop: "12%" }}>
                <a href="#contact" className="text-decoration-none">
                  <button className="btnn px-4 py-2">Contact</button>
                </a>
              </div>
            </div>

            {/* Right column */}
            <div className="col-lg-6 col-md-12 mt-3 text-end">
              <div className="image-circle-wrapper">
                <img
                  src="/images/gif5.gif"
                  alt="a girl coding"
                  className="img-fluid rounded"
                  style={{ height: "90%", width: "90%" }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      <section id="experience" className="black">
        <div className="container p-5" >
          <h2 className="justify-content-left pink mb-3">Experience</h2>
          <br />
          <div>
            <Experience />
          </div>
          {/* <br />
            <br />
            <br /> */}
        </div>
      </section>
      <section id="projects" className="grey">
        <div className="container p-5" >
          <h2 className="pink">Projects</h2>
          {/* <br />
            <br />
            <br /> */}
          <FeaturedProjects />

          <div className="d-flex justify-content-center">
            <NavLink to="/projects">
              <button className="btnn mt-5 p-2 align-items-center ">
                Explore All
              </button>
            </NavLink>
          </div>
          <br />

          <br />
        </div>
      </section>

      <section id="testimonials" className="black">
        <div className="p-5">
          <Testimonial /></div>
      </section>
      <section
        id="contact"
        className="grey"

      >
        <div className="container p-5 ">
          <h2 className="pink">Contact Me</h2>
          <br />
          <br />
          <Contact />
        </div>
      </section>
      <div>
        <ScrollToTop
          smooth
          color=" white"
          style={{
            backgroundColor: "rgb(23, 23, 23)",
            borderRadius: "50%",
            border: "3px solid rgb(214, 90, 111)",
            boxShadow: "80px 80px 50px rgba(253, 250, 250, 0.95),"
          }}
        />
      </div>
    </>
  );
};


