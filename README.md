# Trading Academy Website

A modern full-stack website for a trading academy built with Next.js, Express.js, and MongoDB.

## Features

- Responsive modern UI with Tailwind CSS
- User authentication system
- Course management
- Contact form
- Admin dashboard
- Interactive learning materials

## Tech Stack

- **Frontend:**
  - Next.js 14
  - TypeScript
  - Tailwind CSS
  - React

- **Backend:**
  - Express.js
  - MongoDB
  - JWT Authentication

## Getting Started

1. Clone the repository:
```bash
git clone [your-repo-url]
cd akademi_trading
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add:
```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
akademi_trading/
├── src/
│   ├── app/              # Next.js pages
│   ├── components/       # React components
│   └── styles/          # Global styles
├── public/              # Static files
│   └── images/          # Website images
├── backend/             # Express.js backend
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 