"use client";
import { useState } from 'react';
import { likePost } from '@/server/actions';
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface LikeButtonProps {
    likesCount: number;
    postId: number;
}

export default function LikeButton({ likesCount, postId }: LikeButtonProps) {
    const [likes, setLikes] = useState(likesCount);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = async () => {
        try {
            await likePost(postId);
            setLikes(likes + 1);
            setIsLiked(true);
        } catch (error) {
            console.error('Error liking the post:', error);
        }
    };

    return (
        <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleLike}
            className={`gap-2 ${isLiked ? 'text-primary' : ''}`}
        >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-primary' : ''}`} />
            {likes}
        </Button>
    );
}
