# Canterbury Kiwi - GitHub Deployment Fix

## The Issue
Your Canterbury Kiwi website is a React application that needs to be built before deployment. GitHub Pages can't directly run the development code.

## Solution Options:

### Option 1: GitHub Pages with Build (Recommended)
1. **Add GitHub Actions for auto-build**:
   - Create `.github/workflows/deploy.yml` in your repository
   - This will automatically build and deploy your site

2. **Enable GitHub Pages**:
   - Go to your repository Settings
   - Scroll to "Pages" section
   - Select "GitHub Actions" as source
   - Your site will be available at: `https://yourusername.github.io/canterbury-kiwi-website`

### Option 2: Netlify (Easiest)
1. **Connect to Netlify**:
   - Go to netlify.com
   - Click "Add new site" → "Import from Git"
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`

### Option 3: Vercel (Fast & Free)
1. **Deploy to Vercel**:
   - Go to vercel.com
   - Import your GitHub repository
   - Vercel auto-detects Vite projects
   - Instant deployment with custom domain

### Option 4: Manual Build & Upload
1. **Build locally**:
   ```bash
   npm install
   npm run build
   ```
2. **Upload `dist/` folder contents** to GitHub Pages

## Recommended: Netlify
- Easiest setup for React apps
- Automatic deployments on code changes
- Free custom domain
- Perfect for your agricultural business website

Would you like me to create the GitHub Actions file for automatic deployment?