"use client";

import { useState } from "react";
import { commentPost } from "@/server/actions";

export default function CommentBox({ postId }: any) {
    const [comment, setComment] = useState("");

    const handleCommentSubmit = async (e: any) => {
        e.preventDefault();
        if (comment.trim()) {
            await commentPost(comment, postId);
            setComment("");
        }
    };

    return (
        <form onSubmit={handleCommentSubmit} className="flex space-x-2 mt-2">
            <input
                type="text"
                placeholder="Comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="border border-gray-500 rounded-lg px-1 py-1 bg-black text-white"
            />
            <button type="submit" className="px-2 py-1 bg-black rounded-lg focus:ring focus:ring-blue-300 disabled:opacity-50">Submit</button>
        </form>
    );
}
