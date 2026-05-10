# 🚂 Railway Deployment Guide - Frontend & Backend

Complete guide to deploy both frontend and backend on Railway.

---

## 📋 Prerequisites

- ✅ MongoDB Atlas account with connection string
- ✅ GitHub account
- ✅ Railway account (sign up at https://railway.app)
- ✅ Code pushed to GitHub repository

---

## 🎯 Deployment Overview

You'll create **TWO separate services** on Railway:
1. **Backend Service** - Express API (will run on its own URL)
2. **Frontend Service** - React Vite app (this is your submission URL)

---

## 📦 Step 1: Push Code to GitHub

```bash
# From project root
cd d:\Disha\team-task-manager

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Team Task Manager"

# Create repository on GitHub named: team-task-manager
# Then push:
git remote add origin https://github.com/YOUR_USERNAME/team-task-manager.git
git branch -M main
git push -u origin main
```

---

## 🚀 Step 2: Deploy Backend on Railway

### 2.1 Create Backend Service

1. Go to https://railway.app and login with GitHub
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Select your **team-task-manager** repository
5. Railway will detect multiple services - click **"Add Service"** manually

### 2.2 Configure Backend Service

1. After service is created, click on it
2. Go to **Settings** tab
3. **Root Directory**: Set to `backend`
4. **Service Name**: Rename to `backend` or `api`
5. **Start Command**: Should auto-detect as `node server.js`

### 2.3 Add Environment Variables

Click on **Variables** tab and add:

```
PORT=5000
NODE_ENV=production
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/team-task-manager?retryWrites=true&w=majority
JWT_SECRET=your_generated_secret_key_here
CLIENT_URL=https://your-frontend-url.railway.app
```

**Note**: You'll update CLIENT_URL after deploying frontend

### 2.4 Generate Domain

1. Go to **Settings** tab
2. Scroll to **Networking** section
3. Click **"Generate Domain"**
4. Copy the URL (e.g., `https://backend-production-xxxx.up.railway.app`)
5. **Save this URL** - you'll need it for frontend

### 2.5 Deploy

1. Click **"Deploy"** button
2. Wait for build to complete (2-3 minutes)
3. Check logs for "Server running on port 5000"
4. Test: Visit `https://your-backend-url.railway.app/health`
5. Should see: `{"status":"OK","message":"Server is running"}`

---

## 🎨 Step 3: Deploy Frontend on Railway

### 3.1 Create Frontend Service

1. In the same Railway project, click **"New Service"**
2. Select **"GitHub Repo"** (same repository)
3. Select your **team-task-manager** repository again

### 3.2 Configure Frontend Service

1. Click on the new service
2. Go to **Settings** tab
3. **Root Directory**: Set to `frontend`
4. **Service Name**: Rename to `frontend` or `web`
5. **Build Command**: Should auto-detect as `npm run build`
6. **Start Command**: Should be `npm run preview -- --host 0.0.0.0 --port $PORT`

### 3.3 Add Environment Variables

Click on **Variables** tab and add:

```
VITE_API_URL=https://your-backend-url.railway.app/api
```

**Replace** `your-backend-url` with the actual backend URL from Step 2.4

### 3.4 Generate Domain

1. Go to **Settings** tab
2. Scroll to **Networking** section
3. Click **"Generate Domain"**
4. Copy the URL (e.g., `https://frontend-production-xxxx.up.railway.app`)
5. **This is your submission URL!** 🎉

### 3.5 Deploy

1. Click **"Deploy"** button
2. Wait for build to complete (3-5 minutes)
3. Visit your frontend URL
4. You should see the login page

---

## 🔄 Step 4: Update Backend CORS

Now that you have the frontend URL, update backend:

1. Go to **Backend Service** in Railway
2. Click **Variables** tab
3. Update `CLIENT_URL` to your frontend URL:
   ```
   CLIENT_URL=https://your-frontend-url.railway.app
   ```
4. Save - Railway will auto-redeploy backend

---

## ✅ Step 5: Test Your Application

### Test Backend
```bash
# Health check
curl https://your-backend-url.railway.app/health

# Should return: {"status":"OK","message":"Server is running"}
```

### Test Frontend
1. Visit your frontend URL: `https://your-frontend-url.railway.app`
2. Try to register a new user
3. Login with credentials
4. Create a project
5. Create a task

---

## 🐛 Troubleshooting

### Backend Build Failed

**Error**: "Failed to build an image"

**Solutions**:
1. Check `railway.json` and `nixpacks.toml` exist in backend folder
2. Verify `package.json` has correct start script
3. Check Railway logs for specific error
4. Ensure Node version is specified in package.json

**Fix**: Railway should use these files:
- `backend/railway.json` ✅ (created)
- `backend/nixpacks.toml` ✅ (created)
- `backend/Procfile` ✅ (created)

### Frontend Build Failed

**Error**: "Build command failed"

**Solutions**:
1. Check `railway.json` and `nixpacks.toml` exist in frontend folder
2. Verify all dependencies are in package.json
3. Check for TypeScript errors
4. Ensure VITE_API_URL is set

### CORS Errors

**Error**: "Access to fetch blocked by CORS policy"

**Solution**:
1. Verify `CLIENT_URL` in backend matches frontend URL exactly
2. No trailing slash in URLs
3. Use HTTPS (Railway provides this automatically)

### 502 Bad Gateway

**Error**: Frontend shows 502 error

**Solutions**:
1. Check backend is running (visit /health endpoint)
2. Verify VITE_API_URL in frontend is correct
3. Check backend logs for errors
4. Ensure MongoDB connection is working

### Cannot Connect to Database

**Error**: "MongooseServerSelectionError"

**Solutions**:
1. Verify MONGO_URI is correct
2. Check MongoDB Atlas IP whitelist includes 0.0.0.0/0
3. Verify database user credentials
4. Check MongoDB Atlas cluster is running

---

## 📝 Important URLs to Save

After deployment, save these URLs:

```
Backend API: https://backend-production-xxxx.up.railway.app
Frontend App: https://frontend-production-xxxx.up.railway.app
Health Check: https://backend-production-xxxx.up.railway.app/health

MongoDB Atlas: https://cloud.mongodb.com
Railway Dashboard: https://railway.app/dashboard
```

---

## 🎯 Submission URL

**Use your Frontend URL for submission:**
```
https://frontend-production-xxxx.up.railway.app
```

This is the main application URL where users can:
- Register and login
- View dashboard
- Manage projects and tasks
- Access all features

---

## 🔐 Environment Variables Summary

### Backend Variables (Railway)
```env
PORT=5000
NODE_ENV=production
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/team-task-manager?retryWrites=true&w=majority
JWT_SECRET=your_64_character_random_secret
CLIENT_URL=https://your-frontend-url.railway.app
```

### Frontend Variables (Railway)
```env
VITE_API_URL=https://your-backend-url.railway.app/api
```

---

## 🔄 Redeployment

To redeploy after making changes:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Your changes"
   git push
   ```

2. **Railway Auto-Deploys**: Both services will automatically redeploy

3. **Manual Redeploy**: Click "Deploy" button in Railway dashboard

---

## 💰 Railway Free Tier

- **$5 free credit per month**
- **500 hours of usage**
- Enough for 2 services running 24/7
- No credit card required initially

---

## 📊 Monitoring

### Check Deployment Status
1. Go to Railway dashboard
2. Click on service
3. View **Deployments** tab
4. Check logs for errors

### View Logs
1. Click on service
2. Go to **Logs** tab
3. Real-time logs appear here
4. Filter by error/warning/info

---

## ✨ Post-Deployment Checklist

- [ ] Backend health check returns OK
- [ ] Frontend loads without errors
- [ ] Can register new user
- [ ] Can login successfully
- [ ] Can create project (admin)
- [ ] Can create task (admin)
- [ ] Can update task status (member)
- [ ] Dashboard shows statistics
- [ ] Mobile responsive works
- [ ] No CORS errors in console

---

## 🎉 Success!

Your application is now live on Railway!

**Frontend URL** (Submission): `https://your-frontend-url.railway.app`
**Backend API**: `https://your-backend-url.railway.app`

Share your frontend URL for project submission! 🚀

---

## 📞 Need Help?

If deployment fails:
1. Check Railway logs for specific errors
2. Verify all environment variables are set
3. Test backend /health endpoint
4. Check MongoDB Atlas connection
5. Review CORS configuration

**Common Issues**: See Troubleshooting section above
