# 🚀 QUICK START - Get Your Site Running in 5 Minutes

## Step 1: Install Node.js (if you haven't already)
Download and install from: https://nodejs.org/
(Choose the LTS version)

## Step 2: Open Terminal/Command Prompt

**Mac**: Press Cmd+Space, type "Terminal", press Enter
**Windows**: Press Win+R, type "cmd", press Enter

## Step 3: Navigate to Project Folder

```bash
cd path/to/desert-elite-motorworks
```

Replace "path/to" with wherever you saved the folder.

**Example**:
- Mac: `cd ~/Downloads/desert-elite-motorworks`
- Windows: `cd C:\Users\YourName\Downloads\desert-elite-motorworks`

## Step 4: Install Dependencies

```bash
npm install
```

Wait 1-2 minutes while it installs everything. You'll see a bunch of text scrolling.

## Step 5: Start Development Server

```bash
npm run dev
```

## Step 6: View Your Site

Open your web browser and go to:
```
http://localhost:3000
```

🎉 **That's it! Your site is now running locally!**

---

## What to Change First

1. **Contact Info**: Open `app/page.tsx` and search for:
   - `(760) 555-ELITE` - Replace with your real number
   - `info@desertelitemotorworks.com` - Replace with your real email
   - `Indio, California` - Update if needed

2. **Logo**: Add your logo image file and replace the placeholder

3. **Google Reviews Link**: Update the link to your actual Google My Business page

---

## Deploy to the Internet (Free with Vercel)

1. **Create account**: Go to https://vercel.com and sign up (free)
2. **Install Vercel CLI** (one time only):
   ```bash
   npm install -g vercel
   ```
3. **Deploy**:
   ```bash
   vercel
   ```
4. Follow the prompts - it'll give you a live URL!

---

## Need Help?

Check these files in your project:
- `README.md` - Detailed instructions
- `PRE-LAUNCH-CHECKLIST.md` - Everything to do before launch
- `STRATEGY.md` - Marketing and positioning guide

---

## Common Issues

**"npm not found"**: Install Node.js first (Step 1)

**"Port 3000 already in use"**: Something else is using that port. Try:
```bash
npm run dev -- -p 3001
```
Then visit http://localhost:3001

**Site looks broken**: Clear your browser cache and refresh

---

**You got this! 💪 Let's make Desert Elite Motorworks dominate!**
