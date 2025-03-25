#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment process..."

# Install Vercel CLI if not installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Check if user is logged in to Vercel
if ! vercel whoami &> /dev/null; then
    echo "🔑 Please log in to Vercel..."
    vercel login
fi

# Deploy frontend
echo "🌐 Deploying frontend..."
cd frontend
vercel --prod

# Deploy backend
echo "⚙️ Deploying backend..."
cd ../backend
vercel --prod

echo "✅ Deployment complete!"
echo "Frontend URL: https://somasmart.vercel.app"
echo "Backend URL: https://somasmart-api.vercel.app" 