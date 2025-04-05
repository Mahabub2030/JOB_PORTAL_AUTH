# 🏆 Job Portal Application

A full-stack job portal application that allows users to post and apply for jobs. Built using **Node.js, Express.js, MongoDB, and Tailwind CSS** for a seamless user experience.

## 🚀 Features
- 🔹 User Authentication (Signup/Login)
- 🔹 Job Posting (Create, Edit, Delete Jobs)
- 🔹 Job Search & Filtering
- 🔹 Application Management
- 🔹 Admin Dashboard
- 🔹 Secure Database Storage (MongoDB Atlas)

## 🛠 Technologies Used
- **Frontend**: HTML, Tailwind CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT (JSON Web Token)

## 📌 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mahabub2030/Job-Portal-Application-.git
   cd job-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file and add:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Run the server**
   ```bash
   nodemon index.js
   ```
   or  
   ```bash
   node index.js
   ```

5. **Visit the app**
   Open your browser and go to:  
   ```
   http://localhost:5000
   ```

## 📝 API Endpoints
| Method | Endpoint | Description |
|--------|---------|------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | User login |
| GET | `/api/jobs` | Get all jobs |
| POST | `/api/jobs` | Post a new job |
| PUT | `/api/jobs/:id` | Edit a job |
| DELETE | `/api/jobs/:id` | Delete a job |

## 📢 Contributing
Feel free to fork the repository and create a pull request if you'd like to contribute!

---

💪 Built with passion for job seekers and recruiters!# JOB_PORTAL_AUTH
