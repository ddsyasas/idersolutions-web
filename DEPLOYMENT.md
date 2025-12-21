# Deployment Guide for Ider Solutions

## ✅ Completed Steps
- ✅ Code pushed to GitHub: https://github.com/ddsyasas/idersolutions-web
- ✅ Vercel CLI installed
- ✅ Build tested successfully
- ✅ Changes committed and pushed to GitHub

## 🚀 Connect to Vercel for Automatic Deployments

### Step-by-Step Instructions:

1. **Go to Vercel Dashboard**:
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account (or create a new account)

2. **Import Your Repository**:
   - Click **"Add New..."** → **"Project"**
   - You'll see a list of your GitHub repositories
   - Find and select **`ddsyasas/idersolutions-web`**
   - Click **"Import"**

3. **Configure Project Settings** (Vercel will auto-detect from `vercel.json`):
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (from vercel.json)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (from vercel.json)
   
   ✅ All settings are already configured in `vercel.json`, so you can use the defaults!

4. **Deploy**:
   - Click **"Deploy"** button
   - Vercel will start building and deploying your site
   - This usually takes 1-2 minutes

5. **After Deployment**:
   - Your site will be live at: `https://idersolutions-web.vercel.app` (or similar)
   - You can customize the domain in Project Settings → Domains

## 🔄 Automatic Deployments

Once connected, Vercel will automatically:
- ✅ Deploy to **Production** on every push to `main` branch
- ✅ Create **Preview deployments** for every pull request
- ✅ Run builds automatically when code is pushed

### How It Works:
- Push to `main` → Automatic production deployment
- Create PR → Automatic preview deployment
- Merge PR → Automatic production deployment

## 📝 Alternative: Deploy via Vercel CLI

If you prefer using the command line:

1. **Login to Vercel**:
   ```bash
   vercel login
   ```

2. **Link to existing project** (if already created on Vercel):
   ```bash
   vercel link
   ```

3. **Deploy to production**:
   ```bash
   vercel --prod
   ```

   **Note**: For automatic deployments, connecting via the Dashboard (above) is recommended.

## Post-Deployment Checklist

- [ ] Verify the site is accessible at the Vercel URL
- [ ] Test all pages and functionality
- [ ] Check that images load correctly
- [ ] Test the contact form (if backend is configured)
- [ ] Verify SEO meta tags are working
- [ ] Check mobile responsiveness
- [ ] Test performance (Lighthouse score)

## Environment Variables

Currently, your project doesn't use any environment variables. If you need to add any in the future:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variables for Production, Preview, and Development environments
3. Redeploy for changes to take effect

## Continuous Deployment

Once connected to Git:
- Every push to `main` branch = Automatic production deployment
- Every pull request = Automatic preview deployment

## Useful Commands

```bash
# Deploy to preview environment
vercel

# Deploy to production
vercel --prod

# View deployment logs
vercel logs

# List deployments
vercel ls

# Remove deployment
vercel remove
```

## Troubleshooting

If deployment fails:
1. Check build logs in Vercel dashboard
2. Verify `vercel.json` configuration is correct
3. Ensure all dependencies are in `package.json`
4. Check for TypeScript errors: `npm run lint`
5. Test build locally: `npm run build`
