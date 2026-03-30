import { NavLink, Outlet } from "react-router-dom"
import { AdminLogout } from "../adminLogout"

export const AdminLayout=()=>{
return(
   
   <div className="  d-flex  min-vh-100 bg-dark" style={{paddingTop:"5%"}} >

   <nav  className="text-light py-5 " style={{marginRight:"20%",marginLeft:"10%"}}>

   <li><NavLink to="contacts" className="text-decoration-none purple fst-italic">contacts</NavLink></li>
   <li><NavLink to="testimonials" className="text-decoration-none purple fst-italic">testimonials</NavLink></li>
   <li><NavLink to ="insertion" className="text-decoration-none purple fst-italic">insertion</NavLink> </li>
<li><NavLink to ="deletion" className="text-decoration-none purple fst-italic">deletion</NavLink></li>
    <AdminLogout/>

   </nav>

 <div className="mt-5">
   <Outlet/>
   </div>
   </div>
   
   
)
}