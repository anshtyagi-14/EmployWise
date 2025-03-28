📝 React User Management App

This is a simple React-based User Management System that allows users to:
✅ View a list of users
✅ Edit user details
✅ Delete users
✅ Search & Filter users
✅ Navigate between pages using React Router

⸻

🚀 Tech Stack

🔹 React - Frontend framework
🔹 React Router - Navigation
🔹 Axios - API calls
🔹 Bootstrap - UI styling
🔹 Reqres API - Mock backend

⸻

📌 Features

1️⃣ User Authentication (Mocked)
	•	Uses localStorage to check if the user is logged in.
	•	Redirects to the login page if no token is found.

2️⃣ User List
	•	Fetches users from the Reqres API (https://reqres.in/api/users?page=1).
	•	Displays users in a table format with Edit & Delete options.
	•	Implements client-side search and filtering.

3️⃣ Edit User
	•	Allows users to update their name & email.
	•	Uses Axios PUT request to update user details.
	•	Navigates back to the User List after a successful update.

4️⃣ Delete User
	•	Uses Axios DELETE request to remove a user.
	•	Updates the UI immediately after deletion.

⸻

📂 Project Structure

📦 react-user-management
 ┣ 📂 src
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📜 Login.js
 ┃ ┃ ┣ 📜 UserList.js
 ┃ ┃ ┣ 📜 EditUser.js
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 Navbar.js
 ┃ ┣ 📂 styles
 ┃ ┃ ┣ 📜 style.css
 ┃ ┣ 📜 App.js
 ┃ ┣ 📜 index.js
 ┃ ┣ 📜 routes.js
 ┣ 📜 package.json
 ┣ 📜 README.md



⸻

🛠 Setup & Installation

1️⃣ Clone the Repository

git clone https://github.com/yourusername/react-user-management.git
cd react-user-management

2️⃣ Install Dependencies

npm install

3️⃣ Run the Application

npm start

4️⃣ Open in Browser

http://localhost:3000



⸻

🏗 API Endpoints Used

Method	Endpoint	Description
GET	/api/users?page=1	Fetch all users
GET	/api/users/:id	Get a single user
PUT	/api/users/:id	Update a user
DELETE	/api/users/:id	Delete a user



⸻

📸 Screenshots

User List Page

Edit User Page


⸻

🤝 Contributing

Feel free to fork this repo and submit a Pull Request if you have improvements! 🎉

⸻

📜 License

This project is licensed under the MIT License.

⸻

🔹 Happy Coding! 💻🚀
Let me know if you need any modifications! 😊
