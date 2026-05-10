# 🚀 Team Task Manager

A full-stack MERN (MongoDB, Express.js, React, Node.js) web application for managing team projects and tasks with role-based access control.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D20.16.0-brightgreen)
![React](https://img.shields.io/badge/react-18.3.1-blue)
![MongoDB](https://img.shields.io/badge/mongodb-latest-green)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Demo Credentials](#demo-credentials)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

Team Task Manager is a modern, responsive web application designed to help teams collaborate effectively by managing projects and tasks. Built with the MERN stack, it features a clean UI inspired by Trello and Jira, with comprehensive role-based access control (RBAC) for admins and members.

### Key Highlights

- 🔐 **Secure Authentication** - JWT-based authentication with role management
- 👥 **Role-Based Access Control** - Admin and Member roles with different permissions
- 📊 **Real-time Dashboard** - Visual statistics and progress tracking
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- 🎨 **Modern UI** - Clean interface built with Tailwind CSS
- ⚡ **Fast & Efficient** - Optimized performance with React and Express

---

## ✨ Features

### Authentication & Authorization
- ✅ User registration and login
- ✅ JWT token-based authentication
- ✅ Role-based access control (Admin/Member)
- ✅ Protected routes and API endpoints
- ✅ Secure password hashing with bcrypt

### Dashboard
- ✅ Visual statistics (Total, Completed, In Progress, Overdue tasks)
- ✅ Recent tasks overview
- ✅ Project progress tracking
- ✅ Personalized welcome message

### Project Management (Admin Only)
- ✅ Create, edit, and delete projects
- ✅ Add/remove team members to projects
- ✅ Project status management (Active/Archived)
- ✅ Member management interface

### Task Management
- ✅ Create, edit, and delete tasks (Admin only)
- ✅ Assign tasks to team members
- ✅ Update task status (All users for assigned tasks)
- ✅ Set priority levels (Low, Medium, High)
- ✅ Due date tracking with overdue detection
- ✅ Filter tasks by status, priority, and project
- ✅ Task descriptions and details

### User Experience
- ✅ Responsive design for all devices
- ✅ Mobile-friendly navigation with hamburger menu
- ✅ Toast notifications for user feedback
- ✅ Loading states and error handling
- ✅ Intuitive UI with color-coded badges
- ✅ Empty states with helpful messages

---

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **Vite 5.4.11** - Build tool and dev server
- **React Router DOM 7.1.1** - Client-side routing
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Axios 1.7.9** - HTTP client
- **React Hot Toast 2.4.1** - Toast notifications
- **React Icons 5.4.0** - Icon library
- **Date-fns 4.1.0** - Date formatting

### Backend
- **Node.js 20.16.0** - Runtime environment
- **Express.js 5.2.1** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose 9.6.2** - MongoDB ODM
- **JWT (jsonwebtoken 9.0.3)** - Authentication
- **Bcrypt.js 3.0.3** - Password hashing
- **Express Validator 7.3.2** - Input validation
- **CORS 2.8.6** - Cross-origin resource sharing
- **Dotenv 17.4.2** - Environment variables

### Development Tools
- **Nodemon 3.1.14** - Auto-restart server
- **ESLint** - Code linting
- **PostCSS & Autoprefixer** - CSS processing

---

## 📁 Folder Structure

```
team-task-manager/
│
├── backend/                      # Backend Node.js + Express
│   ├── config/
│   │   └── db.js                # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js    # Authentication logic
│   │   ├── projectController.js # Project CRUD operations
│   │   ├── taskController.js    # Task CRUD operations
│   │   └── userController.js    # User management
│   ├── middleware/
│   │   ├── authMiddleware.js    # JWT verification
│   │   └── roleMiddleware.js    # Role-based access control
│   ├── models/
│   │   ├── User.js              # User schema
│   │   ├── Project.js           # Project schema
│   │   └── Task.js              # Task schema
│   ├── routes/
│   │   ├── authRoutes.js        # Auth endpoints
│   │   ├── projectRoutes.js     # Project endpoints
│   │   ├── taskRoutes.js        # Task endpoints
│   │   └── userRoutes.js        # User endpoints
│   ├── .env                     # Environment variables
│   ├── server.js                # Express app entry point
│   └── package.json
│
├── frontend/                     # Frontend React + Vite
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   ├── axiosInstance.js # Axios configuration
│   │   │   └── api.js           # API service functions
│   │   ├── components/
│   │   │   └── common/
│   │   │       ├── Layout.jsx   # Main layout wrapper
│   │   │       ├── Navbar.jsx   # Top navigation bar
│   │   │       └── Sidebar.jsx  # Side navigation menu
│   │   ├── context/
│   │   │   └── AuthContext.jsx  # Authentication context
│   │   ├── hooks/               # Custom React hooks
│   │   ├── pages/
│   │   │   ├── auth/
│   │   │   │   ├── Login.jsx    # Login page
│   │   │   │   └── Signup.jsx   # Signup page
│   │   │   ├── dashboard/
│   │   │   │   └── Dashboard.jsx # Dashboard page
│   │   │   ├── projects/
│   │   │   │   └── Projects.jsx  # Projects page
│   │   │   └── tasks/
│   │   │       └── Tasks.jsx     # Tasks page
│   │   ├── routes/
│   │   │   ├── ProtectedRoute.jsx # Route guard
│   │   │   └── AdminRoute.jsx     # Admin route guard
│   │   ├── utils/
│   │   │   └── constants.js      # App constants
│   │   ├── App.jsx              # Main app component
│   │   ├── main.jsx             # Entry point
│   │   └── index.css            # Global styles
│   ├── .env                     # Environment variables
│   ├── index.html
│   ├── tailwind.config.js       # Tailwind configuration
│   ├── vite.config.js           # Vite configuration
│   └── package.json
│
├── README.md                     # Project documentation
├── RBAC_DOCUMENTATION.md         # RBAC implementation guide
├── CODE_REVIEW_CLEANUP.md        # Code review suggestions
├── MOBILE_RESPONSIVENESS.md      # Responsive design guide
└── ADMIN_ASSIGNMENT_GUIDE.md     # Admin user guide
```

---

## 🚀 Installation

### Prerequisites

- Node.js (v20.16.0 or higher)
- MongoDB (local or Atlas account)
- npm or yarn package manager

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/team-task-manager.git
   cd team-task-manager
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Create `.env` file in backend directory**
   ```bash
   touch .env
   ```

4. **Add environment variables** (see [Environment Variables](#environment-variables))

5. **Start the backend server**
   ```bash
   # Development mode with auto-restart
   npm run dev

   # Production mode
   npm start
   ```

   Server will run on `http://localhost:5000`

### Frontend Setup

1. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

2. **Create `.env` file in frontend directory**
   ```bash
   touch .env
   ```

3. **Add environment variables**
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Start the frontend development server**
   ```bash
   npm run dev
   ```

   Frontend will run on `http://localhost:5173` (or next available port)

5. **Build for production**
   ```bash
   npm run build
   ```

---

## 🔐 Environment Variables

### Backend (.env)

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/team-task-manager?retryWrites=true&w=majority

# JWT Secret (use a strong random string)
JWT_SECRET=your_super_secret_jwt_key_here_change_in_production

# Frontend URL (for CORS)
CLIENT_URL=http://localhost:5173
```

### Frontend (.env)

```env
# Backend API URL
VITE_API_URL=http://localhost:5000/api
```

### 🔒 Security Notes

- Never commit `.env` files to version control
- Use strong, unique JWT secrets in production
- Rotate secrets regularly
- Use environment-specific configurations

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/auth/register` | Register new user | Public |
| POST | `/api/auth/login` | Login user | Public |

### Users

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/users` | Get all users | Protected |

### Projects

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/projects` | Get all projects | Protected |
| GET | `/api/projects/:id` | Get project by ID | Protected |
| POST | `/api/projects` | Create project | Admin |
| PUT | `/api/projects/:id` | Update project | Admin |
| DELETE | `/api/projects/:id` | Delete project | Admin |
| POST | `/api/projects/:id/members` | Add member to project | Admin |
| DELETE | `/api/projects/:id/members/:userId` | Remove member | Admin |

### Tasks

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/tasks` | Get all tasks (filtered) | Protected |
| GET | `/api/tasks/:id` | Get task by ID | Protected |
| GET | `/api/tasks/my-tasks` | Get user's assigned tasks | Protected |
| GET | `/api/tasks/overdue` | Get overdue tasks | Protected |
| POST | `/api/tasks` | Create task | Admin |
| PUT | `/api/tasks/:id` | Update task | Admin |
| PATCH | `/api/tasks/:id/status` | Update task status | Protected* |
| DELETE | `/api/tasks/:id` | Delete task | Admin |

*Members can only update status of their assigned tasks

### Request Headers

All protected routes require JWT token:
```
Authorization: Bearer <your_jwt_token>
```

### Example API Requests

**Register User:**
```bash
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "member"
}
```

**Create Task:**
```bash
POST /api/tasks
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Design Homepage",
  "description": "Create mockup for homepage",
  "project": "project_id_here",
  "assignedTo": "user_id_here",
  "priority": "high",
  "dueDate": "2024-12-31"
}
```

---

## 💻 Usage

### For Admins

1. **Register** as admin or login with admin credentials
2. **Create Projects** from the Projects page
3. **Add Members** to projects using "Manage Members" button
4. **Create Tasks** and assign them to team members
5. **Monitor Progress** from the Dashboard
6. **Manage Team** - edit/delete projects and tasks

### For Members

1. **Register** as member or login with member credentials
2. **View Projects** you're assigned to
3. **View Tasks** assigned to you
4. **Update Task Status** for your assigned tasks
5. **Track Progress** from the Dashboard

### Navigation

- **Dashboard** - Overview of all tasks and projects
- **Projects** - View and manage projects
- **Tasks** - View and manage tasks with filters
- **Profile** - View user info and logout

---

## 🌐 Deployment

### Backend Deployment (Railway)

1. **Create Railway account** at [railway.app](https://railway.app)

2. **Create new project** and add MongoDB database

3. **Deploy backend:**
   ```bash
   # Install Railway CLI
   npm install -g @railway/cli

   # Login
   railway login

   # Link project
   railway link

   # Add environment variables in Railway dashboard
   # Deploy
   railway up
   ```

4. **Set environment variables** in Railway dashboard:
   - `MONGO_URI`
   - `JWT_SECRET`
   - `CLIENT_URL` (your frontend URL)
   - `NODE_ENV=production`

### Frontend Deployment (Vercel)

1. **Create Vercel account** at [vercel.com](https://vercel.com)

2. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

3. **Deploy frontend:**
   ```bash
   cd frontend
   vercel
   ```

4. **Set environment variable** in Vercel dashboard:
   - `VITE_API_URL` (your Railway backend URL)

5. **Update CORS** in backend to allow your Vercel domain

### Alternative Deployment Options

- **Backend:** Heroku, Render, AWS, DigitalOcean
- **Frontend:** Netlify, GitHub Pages, AWS S3
- **Database:** MongoDB Atlas (recommended)

---

## 📸 Screenshots

### Login Page
![Login Page](screenshots/login.png)
*Clean and modern login interface*

### Dashboard
![Dashboard](screenshots/dashboard.png)
*Overview with statistics and recent tasks*

### Projects Page
![Projects](screenshots/projects.png)
*Project management with member assignment*

### Tasks Page
![Tasks](screenshots/tasks.png)
*Task management with filters and status updates*

### Mobile View
![Mobile](screenshots/mobile.png)
*Fully responsive design for mobile devices*

---

## 🔑 Demo Credentials

### Admin Account
```
Email: admin@test.com
Password: 123456
```

**Admin Capabilities:**
- Create, edit, delete projects
- Create, edit, delete tasks
- Assign tasks to users
- Add/remove members from projects
- View all projects and tasks

### Member Account
```
Email: member@test.com
Password: 123456
```

**Member Capabilities:**
- View assigned projects
- View assigned tasks
- Update status of assigned tasks
- View dashboard statistics

> **Note:** These are demo credentials for testing purposes. In production, use strong passwords and implement password reset functionality.

---

## 🎨 Features Showcase

### Role-Based Access Control (RBAC)

| Feature | Admin | Member |
|---------|-------|--------|
| View Dashboard | ✅ | ✅ |
| View Projects | ✅ All | ✅ Assigned only |
| Create Projects | ✅ | ❌ |
| Edit Projects | ✅ | ❌ |
| Delete Projects | ✅ | ❌ |
| Manage Members | ✅ | ❌ |
| View Tasks | ✅ All | ✅ Assigned/Created |
| Create Tasks | ✅ | ❌ |
| Edit Tasks | ✅ | ❌ |
| Delete Tasks | ✅ | ❌ |
| Update Task Status | ✅ Any task | ✅ Assigned tasks only |

### Responsive Design

- 📱 **Mobile** (< 640px) - Hamburger menu, stacked layout
- 📱 **Tablet** (640px - 1024px) - 2-column grid
- 💻 **Desktop** (≥ 1024px) - Full layout with sidebar

---

## 🧪 Testing

### Manual Testing

1. **Authentication Flow**
   - Register new user
   - Login with credentials
   - Verify JWT token storage
   - Test protected routes

2. **Admin Functionality**
   - Create project
   - Add members to project
   - Create and assign tasks
   - Edit and delete operations

3. **Member Functionality**
   - View assigned projects
   - View assigned tasks
   - Update task status
   - Verify access restrictions

4. **Responsive Design**
   - Test on mobile (375px)
   - Test on tablet (768px)
   - Test on desktop (1920px)

### API Testing with Postman

Import the API collection and test all endpoints:
- Authentication endpoints
- CRUD operations
- Role-based access
- Error handling

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Coding Standards

- Follow existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- [React Documentation](https://react.dev/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- Inspired by Trello and Jira

---

## 📞 Support

If you have any questions or need help, please:

1. Check the [documentation](docs/)
2. Search [existing issues](https://github.com/yourusername/team-task-manager/issues)
3. Create a [new issue](https://github.com/yourusername/team-task-manager/issues/new)

---

## 🗺️ Roadmap

### Upcoming Features

- [ ] Email notifications
- [ ] Real-time updates with WebSockets
- [ ] File attachments for tasks
- [ ] Comments and activity log
- [ ] Advanced filtering and search
- [ ] Export reports (PDF/CSV)
- [ ] Dark mode
- [ ] Multi-language support
- [ ] Calendar view
- [ ] Kanban board view

---

## 📊 Project Stats

- **Total Lines of Code:** ~5,000+
- **Components:** 15+
- **API Endpoints:** 20+
- **Development Time:** 2-3 weeks
- **Last Updated:** January 2024

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

Made with ❤️ using MERN Stack

[Report Bug](https://github.com/yourusername/team-task-manager/issues) · [Request Feature](https://github.com/yourusername/team-task-manager/issues)

</div>
