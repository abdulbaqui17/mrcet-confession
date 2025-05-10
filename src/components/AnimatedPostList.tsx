'use client';

import { Post } from '@/types/post';
import LikeButton from "./LikeButton";
import CommentBox from "./commentBox";
import { motion, useInView } from "framer-motion";
import { Session } from "next-auth";
import { format } from 'date-fns';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare } from "lucide-react";

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
            className="w-full max-w-5xl mx-auto p-6"
        >
            <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold text-center mb-12"
            >
                Recent Confessions
            </motion.h2>
            <div className="grid grid-cols-1 gap-8">
                {posts.map((post, index) => (
                    <PostItem 
                        key={post.id} 
                        post={post} 
                        session={session} 
                        index={index} 
                    />
                ))}
            </div>
        </motion.div>
    );
}

function PostItem({ post, session, index }: { post: Post; session: Session | null; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    
    const formatDate = (dateString: string) => {
        return format(new Date(dateString), 'yyyy-MM-dd');
    };

    return (
        <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ 
                duration: 0.5,
                delay: index * 0.1
            }}
            whileHover={{ scale: 1.02 }}
        >
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="text-primary font-semibold">A</span>
                            </div>
                            <div>
                                <CardTitle>Anonymous Confession</CardTitle>
                                <p className="text-sm text-muted-foreground">
                                    Posted on {formatDate(post.createdAt)}
                                </p>
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3 className="text-xl font-semibold mb-4">{post.title}</h3>
                        {post.image && (
                            <motion.img 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.4 }}
                                src={post.image} 
                                alt={post.title} 
                                className="w-full h-auto rounded-lg mb-4" 
                            />
                        )}
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-6 space-y-4"
                    >
                        <div className="flex items-center gap-4">
                            <LikeButton
                                likesCount={post.likes.length}
                                postId={post.id}
                            />
                            <Button variant="ghost" size="sm" className="gap-2">
                                <MessageSquare className="h-4 w-4" />
                                {post.comments.length} Comments
                            </Button>
                        </div>

                        <div className="mt-4 space-y-4">
                            {session?.user && <CommentBox postId={post.id} />}
                            {post.comments.map((comment: {text: string}, index: number) => (
                                <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="text-primary text-sm">A</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{comment.text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </CardContent>
            </Card>
        </motion.div>
    );
}

export default AnimatedPostList; 