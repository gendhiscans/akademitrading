# Akademi Trading

A modern full-stack trading academy platform built with Next.js and Express.js.

## Features

- 🎓 Comprehensive trading courses
- 👥 User authentication and profiles
- 📱 Responsive design
- 🛒 Course enrollment system
- 💻 Modern UI with Tailwind CSS

## Tech Stack

- **Frontend:**
  - Next.js 14
  - React 18
  - Tailwind CSS
  - TypeScript
  - Axios

- **Backend:**
  - Express.js
  - MongoDB
  - JWT Authentication

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- MongoDB (for backend)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/[your-username]/akademi-trading.git
cd akademi-trading
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm run dev
```

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install backend dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the backend server:
```bash
npm run dev
```

## Deployment

- Frontend is configured for Netlify deployment
- Backend can be deployed to any Node.js hosting service

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
