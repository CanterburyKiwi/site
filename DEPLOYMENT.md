# Canterbury Kiwi - Deployment Guide

## GitHub Upload Instructions

Your website is now ready for GitHub upload! All large images have been moved to Cloudinary.

### Quick Upload Steps:

1. **Create Repository**: 
   - Go to github.com and create a new repository
   - Name it "canterbury-kiwi-website" or similar
   - Don't initialize with README (you already have one)

2. **Download Project**:
   - Use Replit's download/export feature
   - The .gitignore will exclude large files automatically

3. **Upload Files**:
   - Upload these key directories/files:
     - `client/` - Frontend React app
     - `server/` - Backend Express server
     - `shared/` - TypeScript schemas
     - `package.json` - Dependencies
     - `vite.config.ts` - Build configuration
     - `tailwind.config.ts` - Styling
     - `README.md` - Documentation
     - `.gitignore` - Exclude rules

4. **Environment Setup**:
   - Set DATABASE_URL for PostgreSQL
   - Set SENDGRID_API_KEY for email functionality
   - Images are already configured for Cloudinary

### Cloudinary Benefits:
- ✅ Fast global CDN delivery
- ✅ Automatic image optimization
- ✅ No GitHub file size limits
- ✅ WebP/AVIF format support
- ✅ Responsive image scaling

### What's Excluded:
- `node_modules/` - Will be installed via npm
- `attached_assets/` - Now hosted on Cloudinary
- `.replit` files - Replit-specific configuration

Your website is production-ready with professional image hosting!