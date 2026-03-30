import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";

export const AdminTestimonials = () => {
   const {Base_Url}=useAuth();
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const adminToken = localStorage.getItem("adminToken");

  const fetchTestimonials = async () => {
   
    try {
      const res = await fetch(
        `${Base_Url}/review/testimonials`
      );
      const data = await res.json();

      setTestimonials(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch testimonials", error);
      setTestimonials([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const approveTestimonial = async (id) => {
    if (!adminToken) {
      alert("Admin not logged in");
      return;
    }

    await fetch(
      `${Base_Url}/review/testimonials/${id}/approve`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${adminToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    setTestimonials((prev) =>
      prev.map((t) =>
        t._id === id ? { ...t, approval: "approved" } : t
      )
    );
  };

  const rejectTestimonial = async (id) => {
    if (!adminToken) {
      alert("Admin not logged in");
      return;
    }

    await fetch(
  `${Base_Url}/review/testimonials/${id}`,
  {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
    },
  }
);

    setTestimonials((prev) =>
      prev.filter((t) => t._id !== id)
    );
  };

  if (loading) return <h3 className="text-light">Loading...</h3>;

  return (
    <div className="container mt-5 text-light">
      <h2 className="mb-4">Pending / Approved Testimonials</h2>

      {testimonials.length === 0 ? (
        <p>No testimonials</p>
      ) : (
        testimonials.map((t) => (
          <div key={t._id} className="border p-3 rounded mb-3 bg-dark">
            <h5>{t.Name}</h5>
            <p className="text-secondary">{t.Designation}</p>
            <p>{t.Review}</p>

            <div className="mt-3 d-flex gap-2">
              {t.approval === "approved" ? (
                <button className="btn btn-success" disabled>
                  Approved 
                </button>
              ) : (
                <button
                  className="btn btn-success"
                  onClick={() => approveTestimonial(t._id)}
                >
                  Approve
                </button>
              )}

              <button
                className="btn btn-danger"
                onClick={() => rejectTestimonial(t._id)}
              >
                Reject
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};