#!/bin/bash
# OrbitScale Deployment Script
# Quick deployment to various platforms

echo "╔════════════════════════════════════════════════╗"
echo "║      OrbitScale Deployment Assistant          ║"
echo "╚════════════════════════════════════════════════╝"
echo ""
echo "Choose deployment method:"
echo "1. Netlify (Drag & Drop)"
echo "2. Vercel (CLI)"
echo "3. GitHub Pages"
echo "4. Test Locally"
echo ""
read -p "Enter choice (1-4): " choice

case $choice in
    1)
        echo ""
        echo "📦 NETLIFY DEPLOYMENT"
        echo "1. Go to: https://app.netlify.com/drop"
        echo "2. Drag and drop this entire folder"
        echo "3. Done! Your site will be live in seconds"
        ;;
    2)
        echo ""
        echo "📦 VERCEL DEPLOYMENT"
        echo "Installing Vercel CLI..."
        npm i -g vercel
        echo "Deploying..."
        vercel
        ;;
    3)
        echo ""
        echo "📦 GITHUB PAGES DEPLOYMENT"
        echo "1. Create a new repository on GitHub"
        echo "2. Run these commands:"
        echo ""
        echo "   git init"
        echo "   git add ."
        echo "   git commit -m 'Initial deployment'"
        echo "   git branch -M main"
        echo "   git remote add origin <your-repo-url>"
        echo "   git push -u origin main"
        echo ""
        echo "3. Enable GitHub Pages in repository settings"
        ;;
    4)
        echo ""
        echo "🧪 LOCAL TEST SERVER"
        echo "Starting server..."
        if command -v python3 &> /dev/null; then
            echo "Server running at: http://localhost:8080"
            python3 -m http.server 8080
        elif command -v python &> /dev/null; then
            echo "Server running at: http://localhost:8080"
            python -m http.server 8080
        else
            echo "Python not found. Install Python or use npx:"
            echo "npx http-server -p 8080"
        fi
        ;;
    *)
        echo "Invalid choice"
        ;;
esac
