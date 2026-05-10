# 🚂 Railway Deployment Guide - Backend

## ✅ Pre-Deployment Checklist

Your backend is now **production-ready** with the following improvements:

### Changes Made:
1. ✅ **Enhanced CORS Configuration** - Supports multiple origins with credentials
2. ✅ **Health Check Endpoint** - `/health` for monitoring
3. ✅ **Graceful Shutdown** - Handles SIGTERM and SIGINT signals
4. ✅ **Better Error Logging** - Production-ready error handling
5. ✅ **PORT Binding** - Listens on `0.0.0.0` for Railway
6. ✅ **Package.json Updated** - Added engines and proper metadata
7. ✅ **MongoDB Connection** - Enhanced with better logging
8. ✅ **Environment Variables** - Template created (.env.example)
9. ✅ **Procfile Created** - For Railway process management
10. ✅ **.gitignore Created** - Prevents committing sensitive files

---

## 📋 Step 1: Prepare MongoDB Atlas

### 1.1 Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or log in
3. Create a **FREE** M0 cluster

### 1.2 Configure Database Access
1. Go to **Database Access** (left sidebar)
2. Click **Add New Database User**
3. Create user:
   - Username: `taskmanager_user`
   - Password: Generate strong password (save it!)
   - Database User Privileges: **Read and write to any database**
4. Click **Add User**

### 1.3 Configure Network Access
1. Go to **Network Access** (left sidebar)
2. Click **Add IP Address**
3. Click **Allow Access from Anywhere** (0.0.0.0/0)
4. Click **Confirm**

### 1.4 Get Connection String
1. Go to **Database** (left sidebar)
2. Click **Connect** on your cluster
3. Choose **Connect your application**
4. Copy the connection string:
   ```
   mongodb+srv://<username>:<password>@cluster.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<username>` and `<password>` with your credentials
6. Add database name: `/team-task-manager` before the `?`
   ```
   mongodb+srv://taskmanager_user:yourpassword@cluster.mongodb.net/team-task-manager?retryWrites=true&w=majority
   ```

---

## 🚂 Step 2: Deploy to Railway

### 2.1 Create Railway Account
1. Go to [Railway.app](https://railway.app)
2. Sign up with GitHub (recommended)

### 2.2 Create New Project
1. Click **New Project**
2. Choose **Deploy from GitHub repo**
3. Select your repository
4. Railway will auto-detect your backend

### 2.3 Configure Root Directory (Important!)
1. Click on your service
2. Go to **Settings** tab
3. Find **Root Directory**
4. Set to: `backend`
5. Click **Save**

### 2.4 Add Environment Variables
1. Go to **Variables** tab
2. Click **Add Variable** and add these:

```env
NODE_ENV=production
PORT=5000
MONGO_URI=mongodb+srv://taskmanager_user:yourpassword@cluster.mongodb.net/team-task-manager?retryWrites=true&w=majority
JWT_SECRET=generate_a_strong_random_32_character_secret_key_here
CLIENT_URL=https://your-frontend-url.vercel.app
```

**Generate JWT Secret:**
```bash
# Run this in terminal to generate a secure secret
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 2.5 Deploy
1. Railway will automatically deploy
2. Wait for deployment to complete (2-3 minutes)
3. Check logs for any errors

### 2.6 Get Your Backend URL
1. Go to **Settings** tab
2. Find **Domains** section
3. Click **Generate Domain**
4. Your backend URL will be: `https://your-app.railway.app`

---

## 🧪 Step 3: Test Your Deployment

### 3.1 Test Health Endpoint
Open in browser or use curl:
```bash
https://your-app.railway.app/health
```

**Expected Response:**
```json
{
  "status": "OK",
  "message": "Server is healthy",
  "environment": "production",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### 3.2 Test Base Endpoint
```bash
https://your-app.railway.app/
```

**Expected Response:**
```json
{
  "message": "Team Task Manager API",
  "version": "1.0.0",
  "status": "running",
  "endpoints": {
    "health": "/health",
    "auth": "/api/auth",
    "projects": "/api/projects",
    "tasks": "/api/tasks",
    "users": "/api/users"
  }
}
```

### 3.3 Test API Endpoints with Postman

**Register User:**
```
POST https://your-app.railway.app/api/auth/register
Content-Type: application/json

{
  "name": "Test User",
  "email": "test@example.com",
  "password": "123456",
  "role": "admin"
}
```

**Login:**
```
POST https://your-app.railway.app/api/auth/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "123456"
}
```

---

## 🔧 Step 4: Update Frontend

### 4.1 Update Frontend .env
In your frontend `.env` file:
```env
VITE_API_URL=https://your-app.railway.app/api
```

### 4.2 Update CORS in Railway
After deploying frontend to Vercel:
1. Go back to Railway
2. Update `CLIENT_URL` variable:
   ```
   CLIENT_URL=https://your-frontend.vercel.app
   ```
3. Railway will auto-redeploy

---

## 📊 Step 5: Monitor Your Deployment

### 5.1 View Logs
1. Go to Railway dashboard
2. Click on your service
3. Go to **Deployments** tab
4. Click on latest deployment
5. View real-time logs

### 5.2 Check Metrics
1. Go to **Metrics** tab
2. Monitor:
   - CPU usage
   - Memory usage
   - Network traffic
   - Response times

### 5.3 Health Monitoring
Set up monitoring with:
- [UptimeRobot](https://uptimerobot.com) - Free uptime monitoring
- Ping your `/health` endpoint every 5 minutes

---

## 🐛 Troubleshooting

### Issue: "Application failed to respond"
**Solution:**
- Check if PORT is set correctly in environment variables
- Verify server is listening on `0.0.0.0`
- Check Railway logs for errors

### Issue: "MongoDB connection failed"
**Solution:**
- Verify MONGO_URI is correct
- Check MongoDB Atlas network access (0.0.0.0/0)
- Verify database user credentials
- Check if IP whitelist includes Railway IPs

### Issue: "CORS errors from frontend"
**Solution:**
- Update CLIENT_URL in Railway variables
- Make sure it matches your Vercel URL exactly
- Redeploy after changing variables

### Issue: "JWT authentication not working"
**Solution:**
- Verify JWT_SECRET is set in Railway
- Make sure it's the same secret used for signing tokens
- Check token expiration settings

### Issue: "Routes returning 404"
**Solution:**
- Verify Root Directory is set to `backend`
- Check if all route files are committed to Git
- Review Railway deployment logs

---

## 🔐 Security Best Practices

### ✅ Implemented:
- [x] Environment variables for secrets
- [x] CORS configured for specific origins
- [x] MongoDB connection with authentication
- [x] JWT token-based authentication
- [x] Password hashing with bcrypt
- [x] Error messages don't expose sensitive info
- [x] Graceful shutdown handling

### 🔒 Additional Recommendations:
1. **Rate Limiting** - Add express-rate-limit
2. **Helmet** - Add security headers
3. **Input Sanitization** - Add express-mongo-sanitize
4. **HTTPS Only** - Railway provides this automatically
5. **Regular Updates** - Keep dependencies updated

---

## 📈 Scaling & Performance

### Railway Free Tier:
- ✅ 500 hours/month (enough for 24/7 uptime)
- ✅ 512 MB RAM
- ✅ 1 GB Disk
- ✅ Shared CPU

### When to Upgrade:
- High traffic (>10,000 requests/day)
- Need more memory
- Need dedicated resources
- Need custom domains

---

## 🔄 Continuous Deployment

Railway automatically deploys when you push to GitHub:

1. Make changes to your code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update backend"
   git push origin main
   ```
3. Railway detects changes and auto-deploys
4. Check deployment status in Railway dashboard

---

## 📝 Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `production` |
| `PORT` | Server port | `5000` |
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://...` |
| `JWT_SECRET` | Secret for JWT signing | `32+ character string` |
| `CLIENT_URL` | Frontend URL for CORS | `https://app.vercel.app` |

---

## ✅ Deployment Checklist

Before going live:

- [ ] MongoDB Atlas cluster created
- [ ] Database user created with proper permissions
- [ ] Network access configured (0.0.0.0/0)
- [ ] Railway account created
- [ ] Backend deployed to Railway
- [ ] Root directory set to `backend`
- [ ] All environment variables added
- [ ] Health endpoint tested
- [ ] API endpoints tested with Postman
- [ ] Frontend updated with Railway URL
- [ ] CORS configured with frontend URL
- [ ] Logs checked for errors
- [ ] Test user registration and login
- [ ] Test CRUD operations
- [ ] Monitor for 24 hours

---

## 🎉 Success!

Your backend is now deployed and running on Railway!

**Your API Base URL:**
```
https://your-app.railway.app
```

**Next Steps:**
1. Deploy frontend to Vercel
2. Update frontend with Railway URL
3. Update Railway CORS with Vercel URL
4. Test full application flow
5. Share with users!

---

## 📞 Support

**Railway Issues:**
- [Railway Docs](https://docs.railway.app)
- [Railway Discord](https://discord.gg/railway)

**MongoDB Issues:**
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com)
- [MongoDB Community](https://community.mongodb.com)

**Application Issues:**
- Check Railway logs
- Review error messages
- Test locally first
- Check environment variables

---

## 🔗 Useful Links

- [Railway Dashboard](https://railway.app/dashboard)
- [MongoDB Atlas](https://cloud.mongodb.com)
- [Railway Docs](https://docs.railway.app)
- [Express.js Docs](https://expressjs.com)
- [Mongoose Docs](https://mongoosejs.com)

---

**Your backend is production-ready! 🚀**
