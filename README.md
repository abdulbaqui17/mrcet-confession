# 🎓 MRCET Confessions

A modern, full-stack anonymous confession platform built with Next.js 15, featuring real-time interactions, secure authentication, and a beautiful UI. Perfect for college communities to share thoughts anonymously.

## ✨ Key Features

- **🔐 Secure Authentication** - Google OAuth integration with NextAuth.js
- **📝 Anonymous Posts** - Create confessions with optional image uploads (Cloudinary)
- **❤️ Real-time Interactions** - Like and comment on posts instantly
- **🎨 Modern UI** - Beautiful animations with Framer Motion & NextUI components
- **⚡ Server Actions** - Fast, optimized data fetching with Next.js 15
- **🗄️ Database** - PostgreSQL with Prisma ORM for type-safe queries
- **📱 Responsive Design** - Tailwind CSS for mobile-first experience
- **🎭 Animated Components** - Sparkles, spotlight effects, and smooth transitions

## 🛠️ Tech Stack

**Frontend:**
- Next.js 15 (App Router)
- React 18 + TypeScript
- Tailwind CSS + DaisyUI
- Framer Motion
- NextUI Components
- Lucide Icons

**Backend:**
- Next.js API Routes
- NextAuth.js (Google OAuth)
- Prisma ORM
- PostgreSQL Database
- Cloudinary (Image hosting)

**Tools:**
- TypeScript
- ESLint
- React Hot Toast

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- PostgreSQL database
- Google OAuth credentials
- Cloudinary account

### 1. Clone the Repository
```bash
git clone https://github.com/abdulbaqui17/mrcet-confession.git
cd mrcet-confession
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/mrcet_confessions"
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
NEXTAUTH_SECRET="your_nextauth_secret"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Database Setup
```bash
npx prisma migrate deploy
npx prisma generate
```

### 5. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the app.

## 📦 Fork & Contribute

### Forking
1. Click the **Fork** button at the top right of this repository
2. Clone your forked repository
3. Create a new branch: `git checkout -b feature/your-feature`
4. Make your changes and commit: `git commit -m "Add feature"`
5. Push to your fork: `git push origin feature/your-feature`
6. Create a Pull Request

## 📂 Project Structure

```
├── prisma/              # Database schema & migrations
├── src/
│   ├── app/            # Next.js 15 app router pages
│   ├── components/     # Reusable React components
│   ├── lib/            # Auth & utility functions
│   ├── server/         # Server actions
│   └── types/          # TypeScript types
├── public/             # Static assets
└── tailwind.config.ts  # Tailwind configuration
```

## 🎯 What Makes This Project Stand Out

- **Modern Stack**: Uses Next.js 15 with latest React Server Components
- **Type Safety**: Full TypeScript implementation with Prisma
- **Real-world Features**: Authentication, database relations, file uploads
- **Production Ready**: Includes migrations, error handling, and optimization
- **Best Practices**: Server actions, proper data fetching, and security measures
- **Beautiful UI**: Professionally designed with modern animations

## 📸 Screenshots & Demo

The project includes:
- Landing page with hero section, features, and testimonials
- Authentication flow with Google OAuth
- Post creation with image upload
- Interactive feed with likes and comments
- Responsive design for all devices

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ by Abdul Baqui** | [GitHub](https://github.com/abdulbaqui17)
