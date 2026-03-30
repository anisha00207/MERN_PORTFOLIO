import { useState ,useEffect,useRef} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../store/auth";


export const AdminLogin = () => {
  const {Base_Url}=useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


const hasShownToast = useRef(false);

useEffect(() => {
  if (window.innerWidth < 768 && !hasShownToast.current) {
    hasShownToast.current = true;
    toast.error("Admin can't be operated on mobile phones");
    navigate("/");
  }
}, [navigate]);




  const handleLogin = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch(
        `${Base_Url}/admin/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
            password: password.trim(),
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Invalid credentials");
        setLoading(false);
        return;
      }

      //  Save token
      localStorage.setItem("adminToken", data.token);

      toast.success("Login successful");
      navigate("/admin"); // redirect to admin page

    } catch (error) {
      console.error("Admin login error:", error);
      toast.error("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-vh-100 bg-dark d-flex flex-column align-items-center"
      style={{ paddingTop: "15%" }}
    >
      <h2 className="description mb-4">
        <b>Admin Login</b>
      </h2>

      <form onSubmit={handleLogin} style={{ width: "300px" }}>
        <label className="description">Email</label>
        <input
          type="email"
          placeholder="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br />

        <label className="description mt-3">Password</label>
        <input
          type="password"
          placeholder="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br /><br />

       <div className="d-flex justify-content-center">
  <button
    type="submit"
    className="btnn p-2"
    disabled={loading}
  >
    {loading ? "Logging in..." : "Login"}
  </button>
</div>

      </form>
    </div>
  );
};

