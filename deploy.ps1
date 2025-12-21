# OrbitScale Deployment Script for Windows
# Quick deployment to various platforms

Write-Output "╔════════════════════════════════════════════════╗"
Write-Output "║      OrbitScale Deployment Assistant          ║"
Write-Output "╚════════════════════════════════════════════════╝"
Write-Output ""
Write-Output "Choose deployment method:"
Write-Output "1. Netlify (Drag & Drop)"
Write-Output "2. Vercel (CLI)"
Write-Output "3. GitHub Pages"
Write-Output "4. Test Locally"
Write-Output ""
$choice = Read-Host "Enter choice (1-4)"

switch ($choice) {
    "1" {
        Write-Output ""
        Write-Output "📦 NETLIFY DEPLOYMENT"
        Write-Output "1. Go to: https://app.netlify.com/drop"
        Write-Output "2. Drag and drop this entire folder"
        Write-Output "3. Done! Your site will be live in seconds"
        Write-Output ""
        Write-Output "Opening Netlify..."
        Start-Process "https://app.netlify.com/drop"
    }
    "2" {
        Write-Output ""
        Write-Output "📦 VERCEL DEPLOYMENT"
        Write-Output "Installing Vercel CLI..."
        npm i -g vercel
        Write-Output "Deploying..."
        vercel
    }
    "3" {
        Write-Output ""
        Write-Output "📦 GITHUB PAGES DEPLOYMENT"
        Write-Output "1. Create a new repository on GitHub"
        Write-Output "2. Run these commands:"
        Write-Output ""
        Write-Output '   git init'
        Write-Output '   git add .'
        Write-Output '   git commit -m "Initial deployment"'
        Write-Output '   git branch -M main'
        Write-Output '   git remote add origin <your-repo-url>'
        Write-Output '   git push -u origin main'
        Write-Output ""
        Write-Output "3. Enable GitHub Pages in repository settings"
    }
    "4" {
        Write-Output ""
        Write-Output "🧪 LOCAL TEST SERVER"
        Write-Output "Starting server at http://localhost:8080"
        Write-Output "Press Ctrl+C to stop"
        Write-Output ""
        
        if (Get-Command python -ErrorAction SilentlyContinue) {
            python -m http.server 8080
        } elseif (Get-Command python3 -ErrorAction SilentlyContinue) {
            python3 -m http.server 8080
        } else {
            Write-Output "Python not found. Installing http-server via npm..."
            npx http-server -p 8080
        }
    }
    default {
        Write-Output "Invalid choice"
    }
}
