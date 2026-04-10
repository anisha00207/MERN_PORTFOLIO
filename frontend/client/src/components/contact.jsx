import { useState } from "react";

import { toast } from "react-toastify";
import { useAuth } from "../store/auth";



export const Contact = () => {
  const {Base_Url}=useAuth();
  //! creating a user state that stores an object of the field names 
  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  });



   //! handling the input values on change
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  //! handling form submission

  const handleSubmit = async (e) => {

    e.preventDefault();

    //! function to fetch backend route
    try {
     const response = await fetch(`${Base_Url}/form/contact`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(user),
});

const text = await response.text();
const res_data = text ? JSON.parse(text) : null;
    

      if (response.ok) {
        toast.success("Message Submitted Successfully");
        //! set the values to blank again
        setUser({
          username: "",
          email: "",
          message: "",
        });
        //after setting the data to blank keep the boolean state true so that function can execute again
      }
      else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.log("contacrt form :", error);
    }
  };




  return (
    <>
        <div className="container">
        <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
          <label htmlFor="username" className="description">name:</label>
          <input
            type="text"
            name="username"
            placeholder="name"
            id="username"
            className="input"
            autoComplete="off"
            required
            value={user.username}
            onChange={handleInput}
          />

          <label htmlFor="email" className="description">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input"
            id="email"
            required
            autoComplete="off"
            value={user.email}
            onChange={handleInput}
          />

          <label htmlFor="msg" className="description">Message:</label>
          <textarea
            rows="6"
            cols="28"
            id="msg"
            name="message"
            value={user.message}
            onChange={handleInput}
            placeholder="Type your message here..."
            className="input"
            style={{ height: "auto" }}  // override height for textarea
          ></textarea>

          <div className="d-flex gap-3 mt-3 justify-content-center">
            <button className="btnn p-2">Submit</button>
            <a
              href="/files/Anisha_joshi_cv.pdf"
              download="Anisha_Joshi_Resume.pdf"  // filename users will see
              className="btnn p-2 text-decoration-none"
            >
              Download Resume
            </a>
          </div>


        </form>
      </div>


      </>
  );


}






