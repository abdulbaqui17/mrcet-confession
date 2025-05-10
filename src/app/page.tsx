'use client';

import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Testimonials from '@/components/landing/Testimonials';
import Footer from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}
