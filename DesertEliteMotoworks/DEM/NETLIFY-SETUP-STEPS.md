# 🚀 NETLIFY DEPLOYMENT - STEP BY STEP GUIDE

## ⚠️ FIXING THE 404 ERROR

The 404 error means the site hasn't been properly deployed yet. Follow these exact steps:

---

## 📋 DEPLOYMENT STEPS (5 MINUTES)

### **STEP 1: Go to Netlify Dashboard**
1. Open: **https://app.netlify.com/teams/danksters/sites**
2. You should already be logged in as: lorddreadcoin@gmail.com

### **STEP 2: Create New Site**
1. Click the **"Add new site"** button (green button)
2. Select **"Import an existing project"**

### **STEP 3: Connect to GitHub**
1. Click **"Deploy with GitHub"**
2. If prompted, authorize Netlify to access your repositories
3. Search for: **desertelitemotorworks**
4. Click on the **desertelitemotorworks** repository

### **STEP 4: Configure Build Settings**

Netlify should auto-detect Next.js. Verify these settings:

**Basic build settings:**
- **Branch to deploy:** `main`
- **Build command:** `npm run build`
- **Publish directory:** `.next`

**Advanced build settings:**
Click "Show advanced" and add:
- **Key:** `NODE_VERSION`
- **Value:** `18.17.0`

### **STEP 5: Deploy Site**
1. Click **"Deploy [site-name]"** button
2. Wait 2-4 minutes for the build to complete
3. Watch the deploy log for any errors

---

## 🎯 WHAT TO EXPECT

### During Deployment:
- ⏳ Building (1-2 minutes)
- ⏳ Uploading (30 seconds)
- ⏳ Processing (30 seconds)
- ✅ Published!

### After Successful Deployment:
You'll see:
- ✅ **Site is live** badge
- 🌐 Your live URL (e.g., `https://desert-elite-motorworks.netlify.app`)
- 📊 Deploy summary

---

## 🔧 IF BUILD FAILS

### Check These Common Issues:

1. **Node Version Error:**
   - Go to Site settings → Build & deploy → Environment
   - Add: `NODE_VERSION` = `18.17.0`
   - Retry deploy

2. **Build Command Error:**
   - Verify build command is: `npm run build`
   - Check publish directory is: `.next`

3. **Dependency Error:**
   - Check the deploy log for specific error
   - May need to clear cache: Site settings → Build & deploy → Clear cache

---

## 📱 AFTER DEPLOYMENT - TEST YOUR SITE

Once deployed, test these features:

### ✅ Desktop Testing:
- [ ] Site loads without 404 error
- [ ] Hero animations play
- [ ] Stats count up on scroll
- [ ] Before/after sliders work
- [ ] Phone number clickable: (760) 899-8244
- [ ] No console errors (F12)

### ✅ Mobile Testing:
- [ ] Responsive design works
- [ ] Touch interactions work
- [ ] Tap-to-dial phone number
- [ ] All sections visible

---

## 🌐 YOUR SITE URL

After deployment, you'll get a URL like:
**https://desert-elite-motorworks.netlify.app**

Or with a random name like:
**https://magical-unicorn-123456.netlify.app**

You can change this in: **Site settings → Site details → Change site name**

---

## 🎨 CUSTOM DOMAIN (OPTIONAL)

To use **desertelitemotorworks.com**:

1. In Netlify: **Site settings → Domain management**
2. Click **"Add custom domain"**
3. Enter: `desertelitemotorworks.com`
4. Follow DNS configuration instructions

---

## 🔄 CONTINUOUS DEPLOYMENT

Once connected, every push to GitHub automatically deploys:

```bash
# Make changes
git add .
git commit -m "Update site"
git push

# Netlify automatically deploys in 2-3 minutes!
```

---

## 💡 TROUBLESHOOTING TIPS

### Site Shows 404:
- ✅ Ensure build completed successfully
- ✅ Check publish directory is `.next`
- ✅ Verify Next.js plugin is enabled
- ✅ Clear cache and retry deploy

### Build Fails:
- ✅ Check deploy logs for errors
- ✅ Verify NODE_VERSION is set
- ✅ Test `npm run build` locally first

### Site Loads But Broken:
- ✅ Check browser console for errors
- ✅ Verify all dependencies installed
- ✅ Check if images/assets are loading

---

## 🚀 READY TO DEPLOY?

**Go to:** https://app.netlify.com/teams/danksters/sites

**Click:** "Add new site" → "Import an existing project"

**Your legendary website awaits! 🎉**
