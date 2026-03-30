import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import ProfileViews from './profile-views';



export const Footer = () => {
     

  return (
    <footer className="bg-light text-black  py-4 border border-2 border-black  ">
  <div className="container bg-light">
    <div className=" bg-light d-flex justify-content-between ">
      
      {/* Social Icons */}
      <div className="  d-flex  justify-content-left gap-3 bg-light pb-5">
        
        
        <a href="https://github.com/anisha00207" className="bg-light" target="blank">
          <i className="bi bi-github fs-5 text-dark bg-light"></i>
        </a>
        <a href="https://www.linkedin.com/in/anisha-joshi15/" traget="blank" className=" bg-light">
          <i className="bi bi-linkedin fs-5 text-dark bg-light "></i>
        </a>
        {/* <NavLink to="#" className=" bg-light">
          <i className="bi bi-twitter-x fs-5 text-dark bg-light "></i>
        </NavLink> */}
<a href="https://leetcode.com/u/anisha002july/" target="blank" className=" bg-light">
        <i class="bi bi-braces fs-5 text-dark bg-light "></i>
        </a>
      </div>

      {/* Copyright */}
      <div className=" d-flex gap-5 text-center text-end bg-light pb-1">
        <p style={{backgroundColor:"white"}}><ProfileViews/></p>
        <small className='bg-light'>
          <b>© anisha_joshi </b><br />
          created by 🖤
        </small>
      </div>

    </div>
  </div>
</footer>

  );
};

