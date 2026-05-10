# ⚡ Quick Deployment Checklist

## 🎯 Goal
Deploy both frontend and backend on Railway, get frontend URL for submission.

---

## ✅ Step-by-Step Checklist

### 1️⃣ MongoDB Atlas Setup (5 min)
- [ ] Create account at https://cloud.mongodb.com
- [ ] Create free cluster (M0)
- [ ] Database Access → Add user (username + password)
- [ ] Network Access → Add IP: 0.0.0.0/0
- [ ] Get connection string
- [ ] Replace `<password>` and add `/team-task-manager` after `.net`

### 2️⃣ Update Local .env Files (2 min)

**backend/.env**
```env
PORT=5000
NODE_ENV=production
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/team-task-manager?retryWrites=true&w=majority
JWT_SECRET=run_this_command_to_generate_secret
CLIENT_URL=http://localhost:5173
```

Generate JWT_SECRET:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

**frontend/.env**
```env
VITE_API_URL=http://localhost:5000/api
```

### 3️⃣ Test Locally (3 min)
```bash
# Terminal 1 - Backend
cd backend
npm install
npm start
# Visit: http://localhost:5000/health

# Terminal 2 - Frontend
cd frontend
npm install
npm run dev
# Visit: http://localhost:5173
```

### 4️⃣ Push to GitHub (5 min)
```bash
cd d:\Disha\team-task-manager
git init
git add .
git commit -m "Initial commit"

# Create repo on GitHub: team-task-manager
git remote add origin https://github.com/YOUR_USERNAME/team-task-manager.git
git branch -M main
git push -u origin main
```

### 5️⃣ Deploy Backend on Railway (10 min)
- [ ] Go to https://railway.app → Login with GitHub
- [ ] New Project → Deploy from GitHub repo
- [ ] Select: team-task-manager
- [ ] Click on service → Settings → Root Directory: `backend`
- [ ] Settings → Service Name: `backend`
- [ ] Variables tab → Add all backend env variables
- [ ] Settings → Networking → Generate Domain
- [ ] **Copy backend URL** (e.g., https://backend-production-xxxx.up.railway.app)
- [ ] Test: Visit `https://your-backend-url/health`

### 6️⃣ Deploy Frontend on Railway (10 min)
- [ ] Same Railway project → New Service → GitHub Repo
- [ ] Select: team-task-manager (same repo)
- [ ] Click on service → Settings → Root Directory: `frontend`
- [ ] Settings → Service Name: `frontend`
- [ ] Variables tab → Add: `VITE_API_URL=https://your-backend-url/api`
- [ ] Settings → Networking → Generate Domain
- [ ] **Copy frontend URL** (e.g., https://frontend-production-xxxx.up.railway.app)
- [ ] **THIS IS YOUR SUBMISSION URL!** 🎉

### 7️⃣ Update Backend CORS (2 min)
- [ ] Go to Backend service → Variables tab
- [ ] Update: `CLIENT_URL=https://your-frontend-url.railway.app`
- [ ] Save (auto-redeploys)

### 8️⃣ Test Live Application (5 min)
- [ ] Visit frontend URL
- [ ] Register new user
- [ ] Login
- [ ] Create project (if admin)
- [ ] Create task
- [ ] Check dashboard

---

## 🎯 Final URLs

```
✅ Submission URL (Frontend): https://frontend-production-xxxx.up.railway.app
✅ Backend API: https://backend-production-xxxx.up.railway.app
✅ Health Check: https://backend-production-xxxx.up.railway.app/health
```

---

## 🐛 If Build Fails

### Backend Build Failed
1. Check `backend/railway.json` exists ✅
2. Check `backend/nixpacks.toml` exists ✅
3. Verify Root Directory is set to `backend`
4. Check Railway logs for specific error

### Frontend Build Failed
1. Check `frontend/railway.json` exists ✅
2. Check `frontend/nixpacks.toml` exists ✅
3. Verify Root Directory is set to `frontend`
4. Ensure `VITE_API_URL` is set in Variables

### CORS Error
1. Verify `CLIENT_URL` in backend matches frontend URL exactly
2. No trailing slashes
3. Both should use HTTPS

---

## 📋 Railway Environment Variables

### Backend Service
```
PORT=5000
NODE_ENV=production
MONGO_URI=mongodb+srv://...
JWT_SECRET=your_secret
CLIENT_URL=https://your-frontend-url.railway.app
```

### Frontend Service
```
VITE_API_URL=https://your-backend-url.railway.app/api
```

---

## ⏱️ Total Time: ~40 minutes

**You're deploying BOTH on Railway, not Vercel!**

**Submission URL = Frontend Railway URL** ✅
