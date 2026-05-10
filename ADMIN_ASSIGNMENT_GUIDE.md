# Admin Guide: Assigning Members and Tasks

## Overview
Admins can now assign members to projects and assign tasks to users directly from the application UI.

---

## 1. Assign Members to Projects

### Step 1: Navigate to Projects Page
- Click "Projects" in the sidebar
- You'll see all projects in a grid layout

### Step 2: Click "Manage Members" Button
- Each project card has a "Manage Members" button at the bottom
- Click it to open the Members Management Modal

### Step 3: Add Members
**In the Modal, you'll see two sections:**

**Current Members:**
- Shows all users currently in the project
- Click "Remove" to remove a member from the project

**Add Members:**
- Shows all users NOT in the project
- Displays: Name, Email, Role (admin/member)
- Click "Add" next to any user to add them to the project

### Step 4: Close Modal
- Click "Close" button or X icon
- Changes are saved immediately

---

## 2. Assign Tasks to Users

### Step 1: Navigate to Tasks Page
- Click "Tasks" in the sidebar

### Step 2: Create or Edit a Task
- Click "Create Task" button (top right) for new task
- OR click edit icon on existing task card

### Step 3: Use "Assign To" Dropdown
**In the Task Form Modal:**
- Find the "Assign To" field (next to Project field)
- Dropdown shows all users in the system
- Format: "Name (role)"
- Select a user to assign the task
- OR select "Unassigned" to leave it unassigned

### Step 4: Save Task
- Fill in other required fields (Title, Project)
- Click "Create" or "Update"
- Task is now assigned to the selected user

---

## Features

### Projects - Manage Members
✅ View current project members
✅ Add any user to a project
✅ Remove members from a project
✅ See user email and role before adding
✅ Real-time updates (no page refresh needed)
✅ Toast notifications for success/errors

### Tasks - Assign To
✅ Assign task to any user during creation
✅ Change task assignment during edit
✅ Leave task unassigned (optional)
✅ See user role in dropdown (admin/member)
✅ Works for both new and existing tasks

---

## Member Visibility

### What Members See:
**Projects:**
- Only projects they are members of
- Cannot see "Manage Members" button

**Tasks:**
- Tasks assigned to them
- Tasks they created
- Cannot see "Assign To" field in forms

---

## Example Workflow

### Scenario: New Project with Team Members

1. **Create Project**
   - Click "Create Project"
   - Enter: "Mobile App Development"
   - Click "Create"

2. **Add Team Members**
   - Click "Manage Members" on the new project card
   - Add members: John (member), Sarah (member), Mike (admin)
   - Click "Add" for each
   - Click "Close"

3. **Create Tasks and Assign**
   - Click "Create Task"
   - Title: "Design Login Screen"
   - Project: "Mobile App Development"
   - Assign To: "John (member)"
   - Priority: High
   - Due Date: Select date
   - Click "Create"

4. **Repeat for More Tasks**
   - Create task for Sarah
   - Create task for Mike
   - Leave some unassigned for later

5. **Members Can Now:**
   - See the project in their Projects page
   - See their assigned tasks in Tasks page
   - Update status of their tasks

---

## Tips

### Best Practices:
- Add members to projects BEFORE assigning tasks
- Assign tasks to members who are in the project
- Use "Unassigned" for tasks that need assignment later
- Remove members from projects they no longer work on

### Troubleshooting:
**Member can't see project:**
- Make sure they're added via "Manage Members"

**Member can't see task:**
- Make sure task is assigned to them
- OR make sure they created the task

**Can't add member to project:**
- Check if they're already in the project
- Check if user exists in the system

---

## Backend API Endpoints Used

These are automatically called by the UI:

```
GET  /api/users                          - Get all users
POST /api/projects/:id/members           - Add member to project
DELETE /api/projects/:id/members/:userId - Remove member from project
POST /api/tasks                          - Create task with assignedTo
PUT  /api/tasks/:id                      - Update task with assignedTo
```

---

## Summary

✅ **Projects:** Use "Manage Members" button to add/remove users
✅ **Tasks:** Use "Assign To" dropdown in task form
✅ **No Postman needed:** Everything can be done from the UI
✅ **Real-time updates:** Changes reflect immediately
✅ **Member filtering:** Members only see relevant data

Now admins can fully manage team assignments from the application! 🎉
