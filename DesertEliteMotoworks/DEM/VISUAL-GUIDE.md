# 🗺️ Visual Reference Guide - Where Everything Is

## 📁 Project Structure

```
desert-elite-motorworks/
│
├── 📄 START-HERE.md           ← READ THIS FIRST!
├── 📄 QUICK-START.md          ← Get running in 5 minutes
├── 📄 STRATEGY.md             ← Marketing & positioning
├── 📄 PRE-LAUNCH-CHECKLIST.md ← Everything before launch
├── 📄 MESSAGING-GUIDE.md      ← How to talk to clients
├── 📄 README.md               ← Technical documentation
│
├── 📦 package.json            ← Project dependencies
├── ⚙️ next.config.js          ← Next.js configuration
├── ⚙️ tailwind.config.js     ← Tailwind CSS config
├── ⚙️ tsconfig.json           ← TypeScript config
├── ⚙️ postcss.config.js       ← PostCSS config
├── 🚫 .gitignore              ← Git ignore rules
│
└── 📁 app/                    ← Your website code
    ├── 📄 page.tsx            ← MAIN WEBSITE CONTENT (edit this!)
    ├── 📄 layout.tsx          ← Page structure
    └── 🎨 globals.css         ← Global styles
```

---

## 🎯 The One File You'll Edit Most

### `app/page.tsx` - Your Website Content

This is where ALL your website content lives. Here's what's in it:

```
app/page.tsx
│
├── 📱 Navigation (line ~30)
│   └── Logo, menu items, phone number
│
├── 🌟 Hero Section (line ~100)
│   └── Main headline, CTA buttons, trust badges
│
├── 🔧 Services Section (line ~200)
│   └── Four service offerings with features
│
├── 💪 Why Choose Us (line ~350)
│   └── Your differentiators, 4.9 stars
│
├── ⭐ Testimonials (line ~450)
│   └── Real Google reviews
│
├── 📞 Contact Section (line ~550)
│   └── Contact form, phone, email, address
│
└── 🔗 Footer (line ~700)
    └── Logo, links, copyright
```

---

## 🔍 Quick Find - Common Updates

### To Change Phone Number:
**Search for**: `(760) 555-ELITE`
**File**: `app/page.tsx`
**Appears**: 3 times (nav, hero, contact)
**Replace with**: Your real number

### To Change Email:
**Search for**: `info@desertelitemotorworks.com`
**File**: `app/page.tsx`
**Appears**: 2 times (contact, footer)
**Replace with**: Your real email

### To Change Address:
**Search for**: `Indio, California`
**File**: `app/page.tsx`
**Appears**: 1 time (contact section)
**Replace with**: Your new address

### To Update Logo:
**Search for**: `<Wrench className=`
**File**: `app/page.tsx`
**Appears**: 2 times (nav, footer)
**Replace with**: `<img src="/logo.png" alt="Desert Elite" />`

### To Update Business Hours:
**Search for**: `Mon-Fri: 8AM-6PM`
**File**: `app/page.tsx`
**Appears**: 1 time (contact section)
**Replace with**: Your actual hours

---

## 🎨 Where Styling Lives

### Colors:
**File**: `app/page.tsx` & `tailwind.config.js`
- Black: `bg-black`
- Gold: `amber-400`, `amber-500`, `amber-600`
- Gray: `zinc-900`, `zinc-800`, `zinc-700`

### Fonts:
**File**: `app/layout.tsx`
- Currently using: Inter (Google Font)
- To change: Update the font import

### Spacing/Layout:
**File**: `app/page.tsx`
- Using Tailwind CSS utility classes
- Example: `py-24` = padding top/bottom
- Example: `px-6` = padding left/right

---

## 🖼️ Where to Add Images

### Option 1: Public Folder (Recommended)
```
Create folder: /public/images/
Add images: logo.png, hero-bg.jpg, etc.
Reference: /images/logo.png
```

### Option 2: Direct URLs
```
Use image hosting: Imgur, Cloudinary, etc.
Reference: Full URL
```

### To Add Images:
**File**: `app/page.tsx`
**Method**: Replace background or add img tags
```tsx
<img src="/images/your-image.jpg" alt="Description" />
```

---

## 📝 Content Locations Mapped

### Navigation Bar
```
Line: ~30-60
Contains:
- Logo
- Desktop menu items
- Mobile menu (hidden on desktop)
- "Book Service" CTA
```

### Hero Section
```
Line: ~100-180
Contains:
- Trust badge (4.9 stars)
- Main headline
- Subtitle
- Two CTA buttons
- Trust indicators
- Scroll indicator
```

### Services Grid
```
Line: ~200-340
Contains:
- Section header
- Four service cards
  • Elite Restorations
  • Classic Builds
  • High-End Service
  • White Glove Concierge
```

### Why Choose Us
```
Line: ~350-440
Contains:
- Section header
- Feature descriptions
- 4.9 star callout
- Sample testimonial
```

### Testimonials
```
Line: ~450-540
Contains:
- Section header
- Four testimonial cards
- Link to all reviews
```

### Contact Form
```
Line: ~550-690
Contains:
- Contact info cards
- Contact form
- Form fields
- Submit button
```

### Footer
```
Line: ~700-760
Contains:
- Logo
- Navigation links
- Copyright
```

---

## ⚙️ Technical Files Explained

### package.json
```
What it does: Lists all code libraries needed
When to edit: Almost never (it works as-is)
Contains: React, Next.js, Tailwind, etc.
```

### next.config.js
```
What it does: Configures Next.js
When to edit: Rarely (for advanced features)
Contains: Basic Next.js settings
```

### tailwind.config.js
```
What it does: Configures Tailwind CSS
When to edit: To add custom colors/fonts
Contains: Theme customization
```

### tsconfig.json
```
What it does: Configures TypeScript
When to edit: Never (it works as-is)
Contains: TypeScript settings
```

---

## 🚀 Commands Cheat Sheet

### Development Commands
```bash
npm install          # Install dependencies (first time only)
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Run production build
```

### File Operations
```bash
# Navigate to project
cd path/to/desert-elite-motorworks

# Open in code editor
code .               # VS Code
atom .               # Atom
subl .               # Sublime Text
```

### Deployment
```bash
vercel               # Deploy to Vercel
git push             # Push to GitHub
```

---

## 🎯 Your Editing Workflow

### 1. Open Terminal
```bash
cd desert-elite-motorworks
npm run dev
```

### 2. Open app/page.tsx in Editor
Use any text editor:
- VS Code (recommended)
- Sublime Text
- Atom
- Even Notepad works!

### 3. Find What to Change
Use Ctrl+F (or Cmd+F on Mac) to search for:
- Phone number
- Email
- Address
- Any text you see on the site

### 4. Make Changes
Edit the text between the quotes or tags

### 5. Save File
Ctrl+S (or Cmd+S on Mac)

### 6. Check Browser
Site updates automatically!
If not, refresh the page

### 7. Repeat
Keep editing until perfect

---

## 🔍 Search Terms for Quick Updates

| What to Update | Search For | File |
|----------------|------------|------|
| Phone Number | `(760) 555-ELITE` | app/page.tsx |
| Email | `info@desertelitemotorworks.com` | app/page.tsx |
| Address | `Indio, California` | app/page.tsx |
| Business Name | `Desert Elite` | app/page.tsx |
| Hours | `Mon-Fri` | app/page.tsx |
| Logo | `<Wrench` | app/page.tsx |
| Testimonials | `testimonials =` | app/page.tsx |
| Services | `services =` | app/page.tsx |

---

## 💡 Pro Tips

### Tip 1: Use Find & Replace
- Ctrl+H (Cmd+H on Mac)
- Change all instances at once
- Saves time!

### Tip 2: Keep Backups
- Before major changes, copy the file
- Name it `page.tsx.backup`
- Easy to restore if needed

### Tip 3: Test Everything
- Check all links
- Try the contact form
- Test on mobile (resize browser)
- Have someone else look at it

### Tip 4: Small Changes First
- Update one thing at a time
- Save and check
- Reduces errors

### Tip 5: Use Browser DevTools
- Right-click → Inspect
- See real-time changes
- Learn what does what

---

## 🆘 Common Issues & Solutions

### Site Won't Load
```
Problem: npm run dev doesn't work
Solution: 
1. Make sure you ran `npm install` first
2. Check Node.js is installed: `node --version`
3. Try `npm run dev -- -p 3001` (different port)
```

### Changes Don't Show
```
Problem: Edited file, but site looks the same
Solution:
1. Make sure you saved the file (Ctrl+S / Cmd+S)
2. Refresh browser (Ctrl+R / Cmd+R)
3. Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
4. Clear browser cache
```

### Site Looks Broken
```
Problem: Layout is messed up
Solution:
1. Check for syntax errors (missing brackets, quotes)
2. Look at terminal for error messages
3. Restore from backup
4. Start dev server again: Ctrl+C, then `npm run dev`
```

### Can't Find File
```
Problem: File paths confusing
Solution:
1. All paths are relative to project root
2. app/ means the app folder
3. Use terminal: `ls` (Mac) or `dir` (Windows) to see files
```

---

## 📚 Learning Resources

### Next.js
- Official Docs: https://nextjs.org/docs
- Tutorial: https://nextjs.org/learn
- Examples: https://github.com/vercel/next.js/tree/canary/examples

### Tailwind CSS
- Docs: https://tailwindcss.com/docs
- Playground: https://play.tailwindcss.com/
- Cheat Sheet: https://nerdcave.com/tailwind-cheat-sheet

### React
- Docs: https://react.dev/
- Tutorial: https://react.dev/learn
- Hooks: https://react.dev/reference/react

### Deployment
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com/
- GitHub Pages: https://pages.github.com/

---

## ✅ Your Checklist

- [ ] Found the project folder
- [ ] Opened terminal/command prompt
- [ ] Ran `npm install`
- [ ] Ran `npm run dev`
- [ ] Visited http://localhost:3000
- [ ] Opened `app/page.tsx` in editor
- [ ] Found phone number to change
- [ ] Made first edit
- [ ] Saved file
- [ ] Saw change in browser
- [ ] Feel confident to continue!

---

**You've got this! Remember: It's just text in a file. Nothing scary. You can't break it (and if you do, you have backups). 💪**
