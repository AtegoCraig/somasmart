# Exit on error
$ErrorActionPreference = "Stop"

Write-Host "🚀 Starting deployment process..." -ForegroundColor Green

# Check if Vercel CLI is installed
try {
    $null = Get-Command vercel -ErrorAction Stop
} catch {
    Write-Host "📦 Installing Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
}

# Check if user is logged in to Vercel
try {
    vercel whoami | Out-Null
} catch {
    Write-Host "🔑 Please log in to Vercel..." -ForegroundColor Yellow
    vercel login
}

# Deploy frontend
Write-Host "🌐 Deploying frontend..." -ForegroundColor Yellow
Set-Location frontend
vercel --prod
Set-Location ..

# Deploy backend
Write-Host "⚙️ Deploying backend..." -ForegroundColor Yellow
Set-Location backend
vercel --prod
Set-Location ..

Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host "Frontend URL: https://somasmart.vercel.app" -ForegroundColor Cyan
Write-Host "Backend URL: https://somasmart-api.vercel.app" -ForegroundColor Cyan 