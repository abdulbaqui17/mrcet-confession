"use client";
import { useState } from 'react';
import { likePost } from '@/server/actions'; 
interface LikeButtonProps {
    likesCount: number;
    postId: number; 
}
export default function LikeButton({ likesCount, postId }: LikeButtonProps) {
    const [likes, setLikes] = useState(likesCount);
    const handleLike = async () => {
        try {
            await likePost(postId);
            setLikes(likes + 1);
        } catch (error) {
            console.error('Error liking the post:', error);
        }
    };
    return (
        <p className="text-gray-300">
            <button
                className="hover:bg-gray-600 transition-all duration-300 p-1 rounded-md focus:outline-none"
                onClick={handleLike} >
                <span className="text-gray-300 hover:text-white">👍</span>
            </button>
            {likes}
        </p>
    );
}
