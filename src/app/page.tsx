// app/page.tsx

import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-5xl font-bold mb-6">MRCET Confession</h1>
        <p className="text-xl mb-8">
          A platform where students can share their thoughts, experiences, and stories anonymously.
        </p>
        <Link 
          href="/posts" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
