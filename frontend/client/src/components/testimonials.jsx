
import "./styles/Testimonial.css";
import "swiper/css";
import { useAuth } from "../store/auth.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export const Testimonial = () => {
  const { testimonials } = useAuth();

  return (
    <div className="container " >
      <div className="  align-items-center">
        <div className="d-flex justify-content-between">
          <h2 className="pink">Testimonials</h2>
          <a href="/testimonialform" rel="add testimonial?">
            <i className="bi bi-plus-circle text-light h-100 " ></i>
          </a>
        </div>
        <br />
        <br />
        <br />
        <br />
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 1500 }}
          loop
          spaceBetween={60}
          breakpoints={{
            0: { slidesPerView: 1 }, // mobile
            576: { slidesPerView: 2 }, // small tablets
            992: { slidesPerView: 3 }, // desktop
          }}
        >
          {testimonials.map((currElem, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-circle">
                <span>{currElem.Name}</span>
                <i>{currElem.Designation}</i>
                <a
                  href={currElem.SocialMediaLink}
                  target="_blank"
                  rel="noopener noreferrer" // security best practice
                  title="Professional profile"
                >
                  Professional Profile
                </a>
                <p>{currElem.Review}</p>

                <a
                  href="/testimonialform"
                  style={{
                    marginTop: "auto",    //THIS IS THE KEY
                    fontSize: "0.85rem",
                    color: "rgba(131, 134, 138, 1)",
                    textDecoration: "none",
                    alignSelf: "center",
                  }}
                >
                  add your testimonial?
                </a>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};










