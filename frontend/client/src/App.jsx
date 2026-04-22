import {BrowserRouter,Routes,Route} from "react-router-dom"
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Home } from "./pages/Home.jsx"
//import { About } from "./pages/About"

import { AllProjects } from "./components/projects"
//import { Register } from "./pages/Register"
//import { Login } from "./pages/Login"
//import { NavBar } from "./components/navbar"
import { Footer } from "./components/footer"
import {Error} from "./pages/Error"
//import { Logout } from "./pages/Logout"
import { Contact } from "./components/contact.jsx";
import { AdminLayout } from "./components/layouts/Admin-layout.jsx";

import { AdminContacts } from "./pages/Admin/Admin-Contacts.jsx";
import { AdminTestimonials } from "./pages/Admin/Admin-testimonials.jsx";
import { NavBar } from "./components/navbar.jsx";
import { TestimonialForm } from "./pages/testimonialform.jsx";
import { AdminLogin } from "./pages/Admin/Admin-login.jsx";
import AdminRoute from "./components/adminLogout.jsx";
import { AdminInsertion } from "./pages/Admin/Admin-insertion.jsx";
import { AdminDataList } from "./pages/Admin/Admin-Deletion.jsx";

const App=()=>{
return(<>
<BrowserRouter>
<div className="fullbody">
  
<NavBar />

<Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/testimonialform" element={<TestimonialForm/>}/>
     {/* <Route path="/about" element={<About/>}/> */}
      <Route path="/projects" element={<AllProjects/>}/>
       {/* <Route path="/login" element={<Login/>}/> */}
        {/* <Route path="/register" element={<Register/>}/> */}
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/admin-login" element={<AdminLogin/>}/>
         <Route path="/*" element={<Error/>}/>
       {/* <Route path="/logout" element={<Logout/>}/> */}
       
<Route
  path="/admin"
  element={
    <AdminRoute>
      <AdminLayout />
    </AdminRoute>
  }
>

       
 <Route path="contacts" element={ <AdminContacts/>}/>
 <Route path="testimonials" element={<AdminTestimonials/>}/>
  <Route path="insertion" element={<AdminInsertion/>}/>
<Route path="deletion" element={<AdminDataList/>}/>
</Route>
      
  </Routes>
  
 <Footer/>
  </div>
  </BrowserRouter>
</>)
}
export default App

