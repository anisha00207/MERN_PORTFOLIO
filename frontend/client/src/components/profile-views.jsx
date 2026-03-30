import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

const ProfileViews = () => {
  const [views, setViews] = useState(null);
const {Base_Url}=useAuth();
  useEffect(() => {
    // Count once per session
    if (!sessionStorage.getItem("viewed")) {
      fetch(`${Base_Url}/stats/profile-views`)
        .then(res => res.json())
        .then(data => {
          setViews(data.views);
          sessionStorage.setItem("viewed", "true");
        });
    } else {
      // Just fetch value without incrementing
      fetch(`${Base_Url}/stats/profile-views`)
        .then(res => res.json())
        .then(data => setViews(data.views));
    }
  }, []);

  return (
    <span>
    *_*{" "}{views ?? "Loading..."}{" "} views
    </span>
  );
};

export default ProfileViews;