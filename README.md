# NextHire

NextHire is a modern hiring platform built with Next.js that streamlines the hiring process for both candidates and employers. The application provides secure authentication, role-based access control, and an intuitive user interface.

## ✨ Features

- **🔐 Secure Authentication**: JWT-based user authentication with bcrypt password hashing
- **👤 Role-Based Access Control**: Support for Admin, Employer, and Candidate roles
- **📱 Responsive Design**: Built with TailwindCSS for seamless cross-device experience
- **🛡️ Protected Routes**: Middleware-based route protection and automatic redirects
- **✅ Form Validation**: Comprehensive form validation using Zod schema validation
- **🎨 Modern UI**: Clean and professional interface with smooth animations
- **🚀 Performance Optimized**: Server-side rendering and optimized bundle size
- **📊 Database Integration**: MongoDB with Mongoose ODM for robust data management

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: TailwindCSS 4, Lucide React icons
- **Backend**: Next.js API Routes, Server Actions
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT tokens, bcrypt password hashing
- **Validation**: Zod schema validation
- **Animations**: Framer Motion
- **Development**: ESLint, TypeScript

## 📁 Project Structure

```
next-hire/
├── app/
│   ├── (auth)/              # Auth-related pages (login, register, dashboard)
│   ├── api/                 # API routes
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── actions/                 # Server actions
│   └── auth.ts              # Authentication actions
├── components/              # Reusable UI components
│   ├── navbar/              # Navigation components
│   ├── input-field.tsx      # Form input component
│   ├── logout-button.tsx    # Logout functionality
│   └── footer.tsx           # Footer component
├── lib/                     # Utility functions
│   ├── db.ts                # Database connection
│   ├── jwt.ts               # JWT utilities
│   ├── validation-schema.ts # Zod validation schemas
│   └── route-response.ts    # API response helpers
├── models/                  # Database models
│   └── User.ts              # User model with methods
├── types/                   # TypeScript type definitions
│   └── user.ts              # User-related types
└── middleware.ts            # Route protection middleware
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB database (local or cloud)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/next-hire.git
   cd next-hire
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## 🔐 Authentication Flow

1. **Registration**: Users can create accounts with name, email, and password
2. **Login**: Secure login with email and password validation
3. **JWT Tokens**: Secure token-based authentication stored in HTTP-only cookies
4. **Role Management**: Users are assigned roles (Admin, Employer, Candidate)
5. **Protected Routes**: Automatic redirection based on authentication status

## 🛡️ Security Features

- Password hashing with bcrypt (10 salt rounds)
- JWT tokens with 7-day expiration
- HTTP-only cookies for token storage
- Input validation and sanitization
- Protected API routes and pages
- CSRF protection through server actions

## 🎨 UI/UX Features

- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Form Validation**: Real-time validation with error messages
- **Loading States**: Smooth loading indicators and disabled states
- **Navigation**: Role-based navigation with protected links
- **Animations**: Subtle animations for better user experience

## 🔄 User Roles

- **Candidate**: Default role for job seekers
- **Employer**: Can post jobs and manage listings
- **Admin**: Full system access and user management

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Database powered by [MongoDB](https://www.mongodb.com/)
