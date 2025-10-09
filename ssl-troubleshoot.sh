#!/bin/bash

# SSL Certificate Troubleshooting Script for rayanfm.net
# Run this script to diagnose and fix "Your connection is not private" issues

echo "🔒 SSL Certificate Troubleshooting for rayanfm.net"
echo "=================================================="

# Function to check SSL certificate
check_ssl() {
    echo "🔍 Checking SSL certificate..."
    
    # Test SSL connection
    if curl -I -s --connect-timeout 10 https://rayanfm.net > /dev/null 2>&1; then
        echo "✅ SSL connection successful!"
        
        # Get certificate details
        echo "📋 Certificate details:"
        echo | openssl s_client -servername rayanfm.net -connect rayanfm.net:443 2>/dev/null | openssl x509 -noout -dates -issuer -subject 2>/dev/null || echo "Could not retrieve certificate details"
        
    else
        echo "❌ SSL connection failed!"
        return 1
    fi
}

# Function to check DNS
check_dns() {
    echo "🌐 Checking DNS configuration..."
    
    # Check A records
    echo "A records for rayanfm.net:"
    dig +short rayanfm.net A || nslookup rayanfm.net
    
    # Check CNAME for www
    echo "CNAME record for www.rayanfm.net:"
    dig +short www.rayanfm.net CNAME || nslookup www.rayanfm.net
}

# Function to test GitHub Pages
check_github_pages() {
    echo "📄 Checking GitHub Pages configuration..."
    
    # Test direct GitHub Pages URL
    if curl -I -s --connect-timeout 10 https://moneersh.github.io/RayanFMvue/ > /dev/null 2>&1; then
        echo "✅ GitHub Pages original URL accessible"
    else
        echo "❌ GitHub Pages original URL not accessible"
    fi
    
    # Check if CNAME file exists in deployment
    if curl -s --connect-timeout 10 https://rayanfm.net/CNAME 2>/dev/null | grep -q "rayanfm.net"; then
        echo "✅ CNAME file properly deployed"
    else
        echo "❌ CNAME file missing or incorrect"
    fi
}

# Function to provide solutions
provide_solutions() {
    echo ""
    echo "🔧 SOLUTIONS FOR 'Your connection is not private':"
    echo "=================================================="
    echo ""
    echo "1. 🕒 WAIT FOR SSL CERTIFICATE (Most common):"
    echo "   - SSL certificates can take 5-60 minutes to activate"
    echo "   - GitHub Pages needs time to generate Let's Encrypt certificate"
    echo "   - Try again in 15-30 minutes"
    echo ""
    echo "2. 🔄 FORCE REFRESH:"
    echo "   - Clear browser cache: Ctrl+Shift+R (Chrome/Edge) or Cmd+Shift+R (Mac)"
    echo "   - Try incognito/private browsing mode"
    echo "   - Try different browser"
    echo ""
    echo "3. ⚙️ CHECK GITHUB SETTINGS:"
    echo "   - Go to: https://github.com/moneersh/RayanFMvue/settings/pages"
    echo "   - Verify custom domain shows: rayanfm.net"
    echo "   - Ensure 'Enforce HTTPS' is checked"
    echo "   - If not, uncheck and recheck it"
    echo ""
    echo "4. 🔨 REDEPLOY:"
    echo "   - Make a small change to README.md"
    echo "   - Commit and push to trigger new deployment"
    echo "   - Wait for GitHub Actions to complete"
    echo ""
    echo "5. 📱 MOBILE/OTHER DEVICES:"
    echo "   - Different devices may show SSL warnings longer"
    echo "   - Try from different network (mobile data vs WiFi)"
    echo ""
    echo "6. 🌍 DNS PROPAGATION:"
    echo "   - Your DNS looks correct, but may still be propagating"
    echo "   - Use different DNS: 8.8.8.8 or 1.1.1.1"
    echo "   - Check from: https://dnschecker.org/"
}

# Main execution
echo "Starting SSL diagnostics..."
echo ""

check_dns
echo ""

check_github_pages  
echo ""

if check_ssl; then
    echo ""
    echo "🎉 SSL is working! If you still see warnings:"
    echo "   - Clear browser cache and try incognito mode"
    echo "   - The certificate may still be propagating to all locations"
else
    echo ""
    provide_solutions
fi

echo ""
echo "🔗 Quick test: Try opening https://rayanfm.net in incognito mode"
echo "📞 If issues persist, check GitHub Pages status: https://www.githubstatus.com/"