import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ first_name: "", last_name: "", email: "" });

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then((response) => {
      setUser(response.data.data);
    });
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    
    try {
      await axios.put(`https://reqres.in/api/users/${id}`, user);
      
      alert("User updated successfully!");

      navigate("/users", { state: { refresh: true } });
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg animate__animated animate__fadeIn">
        <h2 className="text-center text-success mb-4">Edit User</h2>
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            className="form-control mb-2"
            value={user.first_name}
            onChange={(e) => setUser({ ...user, first_name: e.target.value })}
            required
          />
          <input
            type="text"
            className="form-control mb-2"
            value={user.last_name}
            onChange={(e) => setUser({ ...user, last_name: e.target.value })}
            required
          />
          <input
            type="email"
            className="form-control mb-2"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
          <button type="submit" className="btn btn-success w-100">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;