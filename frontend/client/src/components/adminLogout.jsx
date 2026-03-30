
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const AdminLogout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  return (
    <button
      className="btn btn-outline-danger"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};




const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  return token ? children : <Navigate to="/admin-login" />;
};

export default AdminRoute;