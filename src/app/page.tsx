'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Heart, Lock, MessageSquare, Shield } from 'lucide-react';
import { SparklesCore } from '@/components/ui/sparkles';
import { Spotlight } from '@/components/ui/spotlight';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const textReveal = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Hero Section */}
      <motion.section 
        className="w-full max-w-5xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-4xl font-bold tracking-tight sm:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Share Your Confessions{" "}
          <span className="text-primary">Anonymously</span>
        </motion.h1>
        <motion.p 
          className="mt-6 text-lg leading-8 text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          A safe space to share your thoughts, experiences, and confessions without revealing your identity.
          Join our community and let your voice be heard.
        </motion.p>
        <motion.div 
          className="mt-10 flex items-center justify-center gap-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Button size="lg" onClick={() => router.push('/posts')}>
            Start Confessing
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className='text-black'>
            Learn More
          </Button>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="w-full max-w-5xl py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={textReveal}>
            <Card>
              <CardHeader>
                <Lock className="h-8 w-8 text-primary" />
                <CardTitle>100% Anonymous</CardTitle>
                <CardDescription>
                  Your identity is completely protected. Share freely without any worries.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div variants={textReveal}>
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary" />
                <CardTitle>Safe Space</CardTitle>
                <CardDescription>
                  A judgment-free zone where you can express yourself openly.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div variants={textReveal}>
            <Card>
              <CardHeader>
                <MessageSquare className="h-8 w-8 text-primary" />
                <CardTitle>Community Support</CardTitle>
                <CardDescription>
                  Connect with others who understand and support your journey.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="w-full max-w-5xl py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          What People Are Saying
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 gap-8 sm:grid-cols-2"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={textReveal}>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground">
                  "This platform gave me the courage to share things I've been holding inside for years."
                </p>
                <div className="mt-4 flex items-center">
                  <Heart className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm text-muted-foreground">Anonymous User</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={textReveal}>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground">
                  "I found a community that truly understands. The support I've received here has been incredible."
                </p>
                <div className="mt-4 flex items-center">
                  <Heart className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm text-muted-foreground">Anonymous User</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="w-full max-w-5xl py-24 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Ready to Share Your Story?
        </motion.h2>
        <motion.p 
          className="text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Join thousands of others who have found their voice through anonymous confessions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button size="lg" onClick={() => router.push('/posts')}>
            Get Started Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </motion.section>
    </main>
  );
}
