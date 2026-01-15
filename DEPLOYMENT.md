# Deployment Configuration

This application is configured to be deployed at:
**https://www.getmaxim.ai/bifrost/model-library**

## Configuration Summary

### 1. Next.js Configuration (`next.config.ts`)
- `basePath`: `/bifrost/model-library` - All routes will be prefixed with this path
- `assetPrefix`: `/bifrost/model-library` - All static assets will be served from this path

### 2. Base URL
The application uses `NEXT_PUBLIC_BASE_URL` environment variable for:
- SEO metadata (Open Graph, Twitter Cards)
- Sitemap generation
- Canonical URLs

**Production URL**: `https://www.getmaxim.ai/bifrost/model-library`
**Development URL**: `http://localhost:3000`

### 3. Environment Variable Setup

When deploying, set the following environment variable in your deployment platform:

```
NEXT_PUBLIC_BASE_URL=https://www.getmaxim.ai/bifrost/model-library
```

#### Vercel
1. Go to Project Settings → Environment Variables
2. Add `NEXT_PUBLIC_BASE_URL` with the value above
3. Make sure it's set for Production environment

#### Other Platforms
Set the environment variable according to your platform's documentation.

### 4. Important Notes

- The `basePath` in `next.config.ts` means:
  - Homepage will be at `/bifrost/model-library`
  - Models will be at `/bifrost/model-library/model/[slug]`
  - Providers will be at `/bifrost/model-library/provider/[provider]`
  
- All internal links in the app use relative paths, so they will automatically work with the base path

- External links to other Bifrost pages (in Navbar and Footer) are absolute URLs and will work correctly

### 5. Testing Locally

To test the base path configuration locally:

```bash
npm run build
npm start
```

Then navigate to: `http://localhost:3000/bifrost/model-library`

### 6. Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## Verification Checklist

After deployment, verify:
- [ ] Homepage loads at `https://www.getmaxim.ai/bifrost/model-library`
- [ ] Navigation works correctly
- [ ] Model pages load correctly
- [ ] Provider pages load correctly
- [ ] Sitemap is accessible at `/bifrost/model-library/sitemap.xml`
- [ ] Static assets (CSS, JS, images) load correctly
- [ ] Provider logos display correctly
- [ ] All internal links work with the base path
- [ ] SEO meta tags have correct URLs
