# SomaSmart

A modern web application for smart home management and automation.

## Project Structure

```
somasmart/
├── frontend/          # Next.js frontend application
│   ├── components/    # Reusable components
│   ├── pages/        # Next.js routes
│   └── styles/       # CSS modules
│
└── backend/          # Node.js + Express backend
    ├── src/
    │   ├── config/   # Configuration files
    │   ├── controllers/ # API endpoints
    │   ├── models/    # Database models
    │   └── services/  # Business logic
    └── tests/        # Test files
```

## Setup Instructions

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   PORT=3001
   DATABASE_URL=postgres://username:password@localhost:5432/somasmart
   CLERK_SECRET_KEY=your-clerk-key
   NODE_ENV=development
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

### Prerequisites

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Log in to Vercel:
   ```bash
   vercel login
   ```

3. Set up environment variables in Vercel Dashboard:
   - DATABASE_URL
   - CLERK_SECRET_KEY
   - TWILIO_ACCOUNT_SID
   - TWILIO_AUTH_TOKEN
   - AWS_ACCESS_KEY_ID
   - AWS_SECRET_ACCESS_KEY
   - NEXT_PUBLIC_CLERK_FRONTEND_API

### Deployment Options

#### Option 1: Using Deployment Script

For Windows users:
```powershell
# Run the PowerShell deployment script
.\deploy.ps1
```

For Unix-based systems (Linux/macOS):
```bash
# Make the script executable
chmod +x deploy.sh

# Run the deployment script
./deploy.sh
```

#### Option 2: Manual Deployment

1. Deploy frontend:
   ```bash
   cd frontend
   vercel --prod
   ```

2. Deploy backend:
   ```bash
   cd backend
   vercel --prod
   ```

### GitHub Integration

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/somasmart.git
   git push -u origin main
   ```

2. Connect your GitHub repository in Vercel Dashboard:
   - Go to Settings → Git
   - Connect your GitHub repository
   - Enable automatic deployments

### Custom Domain Setup

1. Go to Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## Technologies Used

- Frontend:
  - Next.js
  - TypeScript
  - Tailwind CSS
  - Clerk Authentication

- Backend:
  - Node.js
  - Express
  - TypeScript
  - PostgreSQL
  - Winston Logger

## Development

- Frontend runs on: http://localhost:3000
- Backend runs on: http://localhost:3001

## Testing

Run tests for both frontend and backend:

```bash
# Frontend tests
cd frontend
npm test

# Backend tests
cd backend
npm test
``` 