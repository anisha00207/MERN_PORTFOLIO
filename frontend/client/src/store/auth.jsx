import { createContext, useContext, useEffect, useState } from "react";
// import { incrementProfileViews } from "./profileViews";

export const AuthContext = createContext();
//! authprovider function

export const AuthProvider = ({ children }) => {
    //! usestate hook to store the token in token variable
    
    const [projects, setProjects] = useState([]);
    const [technologies, setTechnologies] = useState([])
    const [cert, setCert] = useState([])
    const [experiences, setExperiences] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
   
    //const [contacts,setContacts]=useState([]);
    const Base_Url = "http://localhost:3002/api";
    
    //!function to set token and update state
    const storedtokenInLS = (serverToken) => {
        localStorage.setItem("token", serverToken);
        setToken(serverToken);
    };


    // useEffect(() => {
    //   if (token) {
    //     const decoded = jwtDecode(token);
    //     setuserfromjwt(decoded);
    //   } else {
    //     setuserfromjwt(null);
    //   }
    // }, [token]); // <-- must depend on token


    //! logout function to remove token


    //! coverting token to boolean value
    


   

    //! fetch the service array from backend
    const getProjects = async () => {
        try {
            const response = await fetch(`${Base_Url}/data/projects`, {
                method: "GET",
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data.msg)
                setProjects(data.msg)
            }

        }
        catch (error) {
            console.log(`services frontend error ${error}`)
        }


    }



    const getCertificates = async () => {
        try {
            const response1 = await fetch(`${Base_Url}/cert/certification`, {
                method: "GET",
            });
            if (response1.ok) {
                const data1 = await response1.json();
                console.log(data1.msg)
                setCert(data1.msg)
            }

        }
        catch (error) {
            console.log(`certificate frontend error ${error}`)
        }


    }

    const getExperiences = async () => {
        try {
            const response2 = await fetch(`${Base_Url}/user_data/experience`, {
                method: "GET",
            });
            if (response2.ok) {
                const data2 = await response2.json();
                console.log(data2.msg)
                setExperiences(data2.msg)
            }

        }
        catch (error) {
            console.log(`experiences frontend error ${error}`)
        }


    }

    const getTechnologies = async () => {
        try {
            const response3 = await fetch(`${Base_Url}/skills/technology`, {
                method: "GET",
            });
            if (response3.ok) {
                const data3 = await response3.json();
                console.log(data3.msg)
                setTechnologies(data3.msg)
            }

        }
        catch (error) {
            console.log(`technologies frontend error ${error}`)
        }


    }




    const getTestimonials = async () => {
  try {
    const response = await fetch(
    `${Base_Url}/review/testimonials`
    );

    const data = await response.json();

    const approvedOnly = Array.isArray(data)
      ? data.filter((t) => t.approval === "approved")
      : [];

    setTestimonials(approvedOnly);
  } catch (error) {
    console.log("testimonials frontend error", error);
    setTestimonials([]);
  }
};

    // In your AuthProvider (or wherever you keep this)


// const getContacts=async()=>{
//      try {
//             const response4 = await fetch('http://localhost:3002/api/admin/contacts', {
//                 method: "GET",
//             });
//             if (response4.ok) {
//                 const data4 = await response4.json();
// console.log("response from admin contacts",data4.msg);
//                 setContacts(data4.msg)
//             }

//         }
//         catch (error) {
//             console.log(`contacts admin frontend error ${error}`)
//         }

// }




    useEffect(() => {

        getProjects();
        getCertificates();
        getExperiences();
        getTechnologies();
        getTestimonials();
        
        // getContacts();
        // const next = incrementProfileViews(profileViews); // uses "profileViews"
        // setprofileViews(next);
      

        

    }, []);
    

    //! providing these values to children
    return (
        <AuthContext.Provider
            value={{   projects, technologies, cert, experiences, testimonials ,Base_Url}}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useauth used outside ofprovider");
    }

    return authContextValue;
};