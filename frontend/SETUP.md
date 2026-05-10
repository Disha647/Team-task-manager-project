# Team Task Manager - Frontend Setup Complete ✅

## Folder Structure

```
frontend/
├── src/
│   ├── api/
│   │   ├── axiosInstance.js      # Axios config with JWT interceptor
│   │   └── api.js                # API service functions
│   ├── assets/                   # Images, icons
│   ├── components/
│   │   ├── common/               # Reusable components
│   │   │   ├── Layout.jsx        # Main layout with Navbar + Sidebar
│   │   │   ├── Navbar.jsx        # Top navigation bar
│   │   │   └── Sidebar.jsx       # Side navigation menu
│   │   ├── projects/             # Project-specific components
│   │   └── tasks/                # Task-specific components
│   ├── context/
│   │   └── AuthContext.jsx       # Global auth state management
│   ├── hooks/                    # Custom React hooks
│   ├── pages/
│   │   ├── auth/                 # Login, Signup pages
│   │   ├── dashboard/            # Dashboard page
│   │   ├── projects/             # Project pages
│   │   └── tasks/                # Task pages
│   ├── routes/
│   │   ├── ProtectedRoute.jsx    # Route guard for authenticated users
│   │   └── AdminRoute.jsx        # Route guard for admin only
│   ├── utils/
│   │   └── constants.js          # App constants (status, priority, colors)
│   ├── App.jsx                   # Main app with router setup
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Tailwind + global styles
├── .env                          # Environment variables
├── tailwind.config.js            # Tailwind configuration
├── postcss.config.js             # PostCSS configuration
└── package.json

```

## Setup Complete ✅

### 1. Tailwind CSS
- Configured with custom primary color palette
- Utility classes for buttons, inputs, cards
- Responsive design ready

### 2. React Router
- BrowserRouter setup
- ProtectedRoute for authenticated users
- AdminRoute for admin-only pages
- Layout component with Navbar + Sidebar

### 3. Axios API Service
- Base URL from environment variable
- JWT token auto-attached to requests
- Auto-redirect to login on 401
- Organized API functions: authAPI, projectAPI, taskAPI

### 4. Auth Context
- Global authentication state
- login(), register(), logout() methods
- Auto-load user from localStorage
- isAdmin helper

### 5. Reusable Components
- Layout (Navbar + Sidebar + Outlet)
- Navbar (user info, logout)
- Sidebar (navigation links)
- Loading spinner in route guards

### 6. Constants & Utilities
- Task status, priority enums
- Color mappings for badges
- Ready for date formatting with date-fns

## Next Steps - Build Pages

### Order:
1. **Login Page** - src/pages/auth/Login.jsx
2. **Signup Page** - src/pages/auth/Signup.jsx
3. **Dashboard Page** - src/pages/dashboard/Dashboard.jsx
4. **Projects Page** - src/pages/projects/Projects.jsx
5. **Tasks Page** - src/pages/tasks/Tasks.jsx

## Run Frontend

```bash
cd frontend
npm run dev
```

Frontend will run on: http://localhost:5173
Backend API: http://localhost:5000

## Environment Variables

`.env` file:
```
VITE_API_URL=http://localhost:5000/api
```

## Installed Packages

- react + react-dom
- react-router-dom (routing)
- axios (HTTP client)
- react-hot-toast (notifications)
- react-icons (icon library)
- date-fns (date formatting)
- tailwindcss (styling)
