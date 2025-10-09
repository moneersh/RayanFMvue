#!/bin/bash

# Force SSL Certificate Regeneration for rayanfm.net
# This script temporarily removes and re-adds the CNAME to trigger SSL certificate generation

echo "🔄 Force SSL Certificate Regeneration for rayanfm.net"
echo "====================================================="
echo ""
echo "This will temporarily remove and re-add the custom domain to force GitHub Pages"
echo "to generate a new SSL certificate for rayanfm.net."
echo ""

# Function to wait with countdown
countdown() {
    local seconds=$1
    local message=$2
    
    echo "$message"
    for ((i=seconds; i>0; i--)); do
        printf "\r⏰ Waiting... %d seconds remaining" $i
        sleep 1
    done
    printf "\r✅ Wait complete!                    \n"
}

# Step 1: Remove CNAME temporarily
echo "📝 Step 1: Temporarily removing CNAME file..."
if [ -f "public/CNAME" ]; then
    mv public/CNAME public/CNAME.backup
    echo "   CNAME file backed up"
else
    echo "   CNAME file not found, creating backup marker"
    echo "rayanfm.net" > public/CNAME.backup
fi

# Step 2: Commit and push the removal
echo ""
echo "📤 Step 2: Committing CNAME removal..."
git add public/
git commit -m "temp: remove CNAME to force SSL certificate regeneration"
git push origin master

echo "   ✅ CNAME removal pushed to GitHub"

# Step 3: Wait for GitHub to process
countdown 60 "⏳ Step 3: Waiting for GitHub Pages to process removal..."

# Step 4: Restore CNAME
echo ""
echo "📝 Step 4: Restoring CNAME file..."
if [ -f "public/CNAME.backup" ]; then
    mv public/CNAME.backup public/CNAME
    echo "   CNAME file restored"
else
    echo "rayanfm.net" > public/CNAME
    echo "   CNAME file recreated"
fi

# Step 5: Commit and push the restoration
echo ""
echo "📤 Step 5: Committing CNAME restoration..."
git add public/CNAME
git commit -m "feat: restore CNAME for rayanfm.net with SSL certificate regeneration"
git push origin master

echo "   ✅ CNAME restoration pushed to GitHub"

# Step 6: Wait for certificate generation
echo ""
echo "🔒 Step 6: Waiting for SSL certificate generation..."
echo "   This process typically takes 5-15 minutes for GitHub Pages to:"
echo "   - Detect the custom domain"
echo "   - Request a new Let's Encrypt certificate for rayanfm.net"  
echo "   - Deploy the certificate"
echo ""

countdown 300 "⏳ Waiting 5 minutes for initial certificate generation..."

# Step 7: Test SSL certificate
echo ""
echo "🧪 Step 7: Testing SSL certificate..."
echo ""

for attempt in {1..5}; do
    echo "   Attempt $attempt/5: Testing HTTPS connection..."
    
    if curl -I -s --connect-timeout 10 https://rayanfm.net > /dev/null 2>&1; then
        echo "   ✅ HTTPS connection successful!"
        
        # Get certificate details
        echo ""
        echo "📋 New certificate details:"
        echo | openssl s_client -servername rayanfm.net -connect rayanfm.net:443 2>/dev/null | openssl x509 -noout -subject -issuer -dates 2>/dev/null || echo "Could not retrieve certificate details"
        
        echo ""
        echo "🎉 SUCCESS! SSL certificate has been regenerated for rayanfm.net"
        echo "🌐 Your site should now be accessible at: https://rayanfm.net"
        echo ""
        echo "✅ Next steps:"
        echo "   1. Clear your browser cache (Ctrl+Shift+R)"
        echo "   2. Try accessing https://rayanfm.net in incognito/private mode"
        echo "   3. The certificate may take additional time to propagate globally"
        exit 0
    else
        echo "   ❌ HTTPS connection still failing..."
        if [ $attempt -lt 5 ]; then
            countdown 120 "   ⏳ Waiting 2 more minutes before next attempt..."
        fi
    fi
done

echo ""
echo "⚠️  SSL certificate generation is taking longer than expected."
echo ""
echo "🔧 Manual steps to complete:"
echo "   1. Go to: https://github.com/moneersh/RayanFMvue/settings/pages"
echo "   2. Verify that 'rayanfm.net' appears in the custom domain field"
echo "   3. Make sure 'Enforce HTTPS' is checked"
echo "   4. If the domain field is empty, re-enter 'rayanfm.net' and save"
echo "   5. Wait 10-30 minutes for certificate generation"
echo ""
echo "📞 If issues persist:"
echo "   - Check GitHub Pages status: https://www.githubstatus.com/"
echo "   - Run: npm run fix-ssl (to test again)"
echo ""