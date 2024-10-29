// pages/index.tsx

import React from 'react';
import CreatePost from '@/components/CreatePost';
import DisplayPosts from '@/components/DisplayPosts';
import { getPosts } from '@/server/actions';

export interface Post {
  id: number; // Add this line
  userId: number;
  title: string;
  image?: string | null;
  createdAt: string;
}

const HomePage = async () => {
  const postsFromDB = await getPosts();
  const posts: Post[] = postsFromDB.map((post) => ({
    id: post.id,
    userId: post.userId,
    title: post.title,
    image: post.image,
    createdAt: post.createdAt.toString(),
  }));

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Display Images at the Top */}
      <div className="flex justify-center space-x-4 mb-6">
        <img src="/dashboard.png" alt="Dashboard Image" className="h- rounded-md" />
      </div>

      <CreatePost />
      <DisplayPosts posts={posts} />
    </div>
  );
};

export default HomePage;
