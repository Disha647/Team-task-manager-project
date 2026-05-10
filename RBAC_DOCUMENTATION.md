# Role-Based Access Control (RBAC) Implementation

## Overview
The Team Task Manager implements comprehensive role-based access control with two roles: **Admin** and **Member**.

---

## User Roles

### Admin Role
- Full access to all features
- Can create, edit, and delete projects
- Can create, edit, and delete tasks
- Can assign tasks to any user
- Can change status of any task
- Can manage all projects and tasks

### Member Role
- Read-only access to projects
- Can view all tasks
- Can only update status of tasks assigned to them
- Cannot create, edit, or delete projects
- Cannot create or delete tasks
- Cannot edit tasks

---

## RBAC Implementation by Page

### 1. Dashboard (`/dashboard`)
**All Users:**
- View statistics (Total Tasks, Completed, In Progress, Overdue)
- View recent tasks
- View project overview with progress bars
- Click "View All" to navigate to tasks page

**No Role Restrictions:**
- Dashboard is informational only, no actions require admin privileges

---

### 2. Projects Page (`/projects`)

**Admin Users Can:**
- ✅ See "Create Project" button
- ✅ Create new projects via modal form
- ✅ Edit existing projects (edit icon on each card)
- ✅ Delete projects (delete icon on each card)
- ✅ View all projects

**Member Users Can:**
- ✅ View projects they are members of
- ❌ Cannot see "Create Project" button
- ❌ Cannot see edit/delete icons on project cards
- ℹ️ See info banner: "You can view projects that you're a member of. Contact an admin to create or modify projects."

**UI Elements Hidden for Members:**
- "Create Project" button (top right)
- Edit icon (FiEdit2) on project cards
- Delete icon (FiTrash2) on project cards

---

### 3. Tasks Page (`/tasks`)

**Admin Users Can:**
- ✅ See "Create Task" button
- ✅ Create new tasks via modal form
- ✅ Edit any task (edit icon on each card)
- ✅ Delete any task (delete icon on each card)
- ✅ Change status of any task (dropdown on card)
- ✅ Assign tasks to users
- ✅ Use all filters (status, priority, project)

**Member Users Can:**
- ✅ View all tasks (filtered by backend based on membership)
- ✅ Change status ONLY of tasks assigned to them (dropdown becomes active)
- ✅ Use all filters
- ❌ Cannot see "Create Task" button
- ❌ Cannot see edit/delete icons on task cards
- ❌ Cannot change status of tasks not assigned to them (dropdown becomes read-only badge)
- ℹ️ See info banner: "You can view all tasks and update the status of tasks assigned to you."

**UI Elements Hidden for Members:**
- "Create Task" button (top right)
- Edit icon (FiEdit2) on task cards
- Delete icon (FiTrash2) on task cards

**Conditional UI for Members:**
- Status dropdown: Only active if `task.assignedTo._id === user._id`
- If not assigned to member, status shows as read-only badge

---

### 4. Navbar (`/components/common/Navbar.jsx`)

**All Users:**
- See their name
- See their role with visual distinction:
  - Admin: "👑 Admin" in primary blue color
  - Member: "Member" in gray color
- Role displayed in a card-style container
- Logout button

**Visual Indicators:**
- Admin role has crown emoji (👑) and primary color
- Member role has standard text and gray color
- Role is prominently displayed next to user name

---

### 5. Sidebar (`/components/common/Sidebar.jsx`)

**All Users:**
- Dashboard link
- Projects link
- Tasks link

**No Role Restrictions:**
- All navigation links are visible to all users
- Access control is handled at the page level

---

## Technical Implementation

### AuthContext
```javascript
const { user, isAdmin } = useAuth();
// user contains: { _id, name, email, role, token }
// isAdmin is a computed boolean: user?.role === "admin"
```

### Conditional Rendering Pattern
```javascript
{isAdmin && (
  <button>Admin Only Action</button>
)}
```

### Task Status Update Logic
```javascript
{(isAdmin || task.assignedTo?._id === user._id) ? (
  <select>...</select>  // Editable dropdown
) : (
  <span>...</span>      // Read-only badge
)}
```

---

## Backend RBAC (Already Implemented)

### Protected Routes
- All routes require JWT authentication
- Token is automatically attached via Axios interceptor

### Admin-Only Endpoints
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project
- `POST /api/tasks` - Create task
- `PUT /api/tasks/:id` - Update task (full update)
- `DELETE /api/tasks/:id` - Delete task

### Member-Accessible Endpoints
- `GET /api/projects` - Get projects (filtered by membership)
- `GET /api/tasks` - Get tasks (filtered by assignment/creation)
- `PATCH /api/tasks/:id/status` - Update task status (only assigned tasks)

### Middleware
- `protect` - Verifies JWT token
- `adminOnly` - Checks if `user.role === "admin"`

---

## Security Features

1. **Frontend Validation:**
   - UI elements hidden based on role
   - Prevents accidental unauthorized actions

2. **Backend Validation:**
   - All admin actions verified on server
   - Members cannot bypass frontend restrictions via API calls
   - JWT token contains role information

3. **Data Filtering:**
   - Members only see projects they belong to
   - Members only see tasks assigned to them or created by them
   - Admins see all data

---

## Testing RBAC

### As Admin:
1. Login with admin credentials
2. Navigate to Projects - see "Create Project" button and edit/delete icons
3. Navigate to Tasks - see "Create Task" button and edit/delete icons
4. Can change status of any task
5. Navbar shows "👑 Admin"

### As Member:
1. Login with member credentials
2. Navigate to Projects - no create/edit/delete buttons, see info banner
3. Navigate to Tasks - no create/edit/delete buttons, see info banner
4. Can only change status of assigned tasks
5. Navbar shows "Member"

---

## Future Enhancements

Potential RBAC improvements:
- Add "Project Manager" role (between Admin and Member)
- Task assignment notifications
- Activity logs for admin actions
- Bulk operations for admins
- Team/department-based access control
- Custom permissions per user

---

## Summary

✅ Complete RBAC implementation across all pages
✅ Visual indicators for user roles
✅ Info banners for members explaining permissions
✅ Conditional UI rendering based on role
✅ Backend validation for all admin actions
✅ Secure JWT-based authentication
✅ Data filtering based on user role and membership
