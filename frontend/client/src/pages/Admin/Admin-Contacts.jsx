import { useState, useEffect } from "react";
import { useAuth } from "../../store/auth.jsx";

export const AdminContacts = () => {
  const {Base_Url}=useAuth();
  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    try {
      const response = await fetch(`${Base_Url}/admin/contacts`);
      if (response.ok) {
        const data = await response.json();
        setContacts(Array.isArray(data.msg) ? data.msg : []);
      }
    } catch (error) {
      console.log("contacts admin frontend error", error);
    }
  };

  const deleteContact = async (id) => {
    try {
      const response = await fetch(
        `${Base_Url}/admin/contacts/delete/${id}`,
        { method: "DELETE" }
      );
      const data = await response.json();
      if (response.ok) {
        getContacts();
        console.log(data.msg);
      }
    } catch (error) {
      console.log("delete contact error", error);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div>
      <table style={{ border: "2px solid white" }} className="p-2 description">
        <thead>
          <tr>
            <th style={{ padding: "12px", border: "2px solid white" }}>Username</th>
            <th style={{ padding: "12px", border: "2px solid white" }}>Email</th>
            <th style={{ padding: "12px", border: "2px solid white" }}>Message</th>
            <th style={{ padding: "12px", border: "2px solid white" }}>Delete</th>
          </tr>
        </thead>

        <tbody>
          {contacts.length === 0 ? (
            <tr>
              <td colSpan={4} style={{ textAlign: "center", padding: "16px" }}>
                No data here
              </td>
            </tr>
          ) : (
            contacts.map((currr) => (
              <tr key={currr._id}>
                <td style={{ padding: "12px", color: "rgb(145,112,233)", border: "2px solid white" }}>
                  {currr.username}
                </td>
                <td style={{ padding: "12px", color: "rgb(218, 248, 223)", border: "2px solid white" }}>
                  {currr.email}
                </td>
                <td style={{ padding: "12px", border: "2px solid white" }}>
                  {currr.message}
                </td>
                <td style={{ padding: "12px", border: "2px solid white" }}>
                  <button className="btnn" onClick={() => deleteContact(currr._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
