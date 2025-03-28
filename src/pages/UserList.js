import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./style.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

    useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }

    axios.get("https://reqres.in/api/users?page=1").then((response) => {
      let updatedUsers = response.data.data;

      if (location.state?.updatedUser) {
        updatedUsers = updatedUsers.map(user => 
          user.id === location.state.updatedUser.id ? location.state.updatedUser : user
        );
      }

      setUsers(updatedUsers);
    });
  }, [location.state]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      alert("User deleted successfully!");

      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user.");
    }
  };

  const filteredUsers = users.filter(user =>
    `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="table-container">
      <h2 className="text-center text-primary">User List</h2>
      
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by name or email..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <table className="table table-striped table-hover mt-3">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td><img src={user.avatar} alt={user.first_name} className="avatar" /></td>
              <td>{user.first_name} {user.last_name}</td>
              <td>{user.email}</td>
              <td>
                <button 
                  className="btn btn-warning me-2" 
                  onClick={() => navigate(`/edit/${user.id}`)}
                >
                  Edit
                </button>
                <button 
                  className="btn btn-danger" 
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;