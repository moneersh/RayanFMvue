#!/bin/bash

# Setup script for rayanfm.net custom domain deployment
# This script ensures secure connection without verification issues

echo "🚀 Setting up rayanfm.net deployment..."

# 1. Verify CNAME file
echo "📁 Checking CNAME file..."
if [ ! -f "public/CNAME" ]; then
    echo "rayanfm.net" > public/CNAME
    echo "✅ Created CNAME file with rayanfm.net"
else
    echo "✅ CNAME file already exists: $(cat public/CNAME)"
fi

# 2. Build the project
echo "🔨 Building project..."
npm run build

# 3. Verify build output
echo "🔍 Verifying build..."
if [ -f "dist/index.html" ]; then
    echo "✅ Build successful - index.html found"
else
    echo "❌ Build failed - index.html not found"
    exit 1
fi

# 4. Ensure CNAME is in dist
if [ ! -f "dist/CNAME" ]; then
    cp public/CNAME dist/CNAME
    echo "✅ Copied CNAME to dist folder"
fi

# 5. Create 404.html for SPA routing
cp dist/index.html dist/404.html
echo "✅ Created 404.html for SPA routing"

# 6. Show deployment info
echo ""
echo "🎉 Setup complete! Ready for deployment:"
echo "   - Custom domain: rayanfm.net"
echo "   - SPA routing: ✅ Enabled"
echo "   - HTTPS: ✅ Will be auto-configured"
echo "   - Assets path: ✅ Root directory"
echo ""
echo "Next steps:"
echo "1. Commit and push changes: git add . && git commit -m 'Setup custom domain' && git push"
echo "2. Go to GitHub repo Settings → Pages"
echo "3. Set custom domain to: rayanfm.net"
echo "4. Enable 'Enforce HTTPS' when available"
echo "5. Wait for DNS propagation (usually 5-15 minutes)"
echo ""
echo "Your site will be available at: https://rayanfm.net"