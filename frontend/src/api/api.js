import axiosInstance from "./axiosInstance";

export const authAPI = {
  register: (data) => axiosInstance.post("/auth/register", data),
  login: (data) => axiosInstance.post("/auth/login", data),
};

export const projectAPI = {
  getAll: () => axiosInstance.get("/projects"),
  getById: (id) => axiosInstance.get(`/projects/${id}`),
  create: (data) => axiosInstance.post("/projects", data),
  update: (id, data) => axiosInstance.put(`/projects/${id}`, data),
  delete: (id) => axiosInstance.delete(`/projects/${id}`),
  addMember: (id, userId) => axiosInstance.post(`/projects/${id}/members`, { userId }),
  removeMember: (id, userId) => axiosInstance.delete(`/projects/${id}/members/${userId}`),
};

export const taskAPI = {
  getAll: (params) => axiosInstance.get("/tasks", { params }),
  getById: (id) => axiosInstance.get(`/tasks/${id}`),
  getMyTasks: () => axiosInstance.get("/tasks/my-tasks"),
  getOverdue: () => axiosInstance.get("/tasks/overdue"),
  create: (data) => axiosInstance.post("/tasks", data),
  update: (id, data) => axiosInstance.put(`/tasks/${id}`, data),
  updateStatus: (id, status) => axiosInstance.patch(`/tasks/${id}/status`, { status }),
  delete: (id) => axiosInstance.delete(`/tasks/${id}`),
};

export const userAPI = {
  getAll: () => axiosInstance.get("/users"),
};
