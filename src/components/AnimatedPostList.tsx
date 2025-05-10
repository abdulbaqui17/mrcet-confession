'use client';

import { Post } from '@/types/post';
import LikeButton from "./LikeButton";
import CommentBox from "./commentBox";
import { motion, useInView } from "framer-motion";
import { Session } from "next-auth";
import { format } from 'date-fns';
import { useRef } from 'react';

interface AnimatedPostListProps {
    posts: Post[];
    session: Session | null;
}

function AnimatedPostList({ posts, session }: AnimatedPostListProps) {
    const formatDate = (dateString: string) => {
        return format(new Date(dateString), 'yyyy-MM-dd');
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="my-2 w-full max-w-xl p-4 mx-auto m-6 border rounded-lg shadow-md bg-black text-white"
        >
            <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg font-semibold mb-4"
            >
                Your Feed
            </motion.h2>
            <ul className="space-y-4">
                {posts.map((post, index) => (
                    <PostItem 
                        key={post.id} 
                        post={post} 
                        session={session} 
                        index={index} 
                    />
                ))}
            </ul>
        </motion.div>
    );
}

// Separate component for individual posts
function PostItem({ post, session, index }: { post: Post; session: Session | null; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    
    const formatDate = (dateString: string) => {
        return format(new Date(dateString), 'yyyy-MM-dd');
    };

    return (
        <motion.li 
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ 
                duration: 0.5,
                delay: 0.1
            }}
            whileHover={{ scale: 1.02 }}
            className="p-4 border rounded-lg bg-gray-800"
        >
            <div className="flex items-center gap-4">
                <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-full flex justify-center font-bold text-2xl bg-black pt-1"
                >
                    {post.id}
                </motion.div>
                <div className="font-medium dark:text-white">
                    <div className='text-2xl'>Anonymous post</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400"></div>
                </div>
            </div>
            <div className='p-2 m-2'>
                <motion.h3 
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl"
                >
                    {post.title}
                </motion.h3>
                {post.image && (
                    <motion.img 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ delay: 0.4 }}
                        src={post.image} 
                        alt={post.title} 
                        className="mx-auto mt-2 rounded-lg" 
                    />
                )}
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-400 mt-1"
                >
                    Posted on {formatDate(post.createdAt)}
                </motion.p>
            </div>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-4"
            >
                <LikeButton
                    likesCount={post.likes.length}
                    postId={post.id}
                />
                <div className="mt-2">
                    <h4 className="text-gray-300 font-semibold">Comments:</h4>
                    <ul className="space-y-2 mt-2">
                        {session?.user && <CommentBox postId={post.id} />}
                        {post.comments.map((comment: {text: string}, index: number) => (
                            <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                                <p>{comment.text}</p>
                            </div>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </motion.li>
    );
}

export default AnimatedPostList; 