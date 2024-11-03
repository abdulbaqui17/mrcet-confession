// components/DisplayPosts.tsx

export const dynamic = 'force-dynamic';
import { Post } from "@/app/page";
import LikeButton from "./LikeButton";
import CommentBox from "./commentBox";
import { getServerSession } from "next-auth";

interface DisplayPostsProps {
    posts: Post[];
}

async function DisplayPosts({ posts }: DisplayPostsProps) {
    const session = await getServerSession();

    return (
        <div className="my-2 w-full max-w-xl p-4 mx-auto m-6 border rounded-lg shadow-md bg-black text-white">
            <h2 className="text-lg font-semibold mb-4">Your Feed</h2>
            <ul className="space-y-4">
                {posts.map((post) => (
                    <li key={post.id} className="p-4 border rounded-lg bg-gray-800">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full flex justify-center font-bold text-2xl bg-black pt-1">
                                {post.id}
                            </div>
                            <div className="font-medium dark:text-white">
                                <div className='text-2xl'>Anonymous post</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400"></div>
                            </div>
                        </div>
                        <div className='p-2 m-2'>
                            <h3 className="text-xl">{post.title}</h3>
                            {post.image && <img src={post.image} alt={post.title} className="mx-auto mt-2 rounded-lg" />}
                            <p className="text-gray-400 mt-1">
                                Posted on {new Date(post.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                        {/* Display Likes and Comments */}
                        <div className="mt-4">
                            {/* Likes */}
                            <LikeButton
                                likesCount={post.likes.length}
                                postId={post.id} // Pass postId to LikeButton
                            />
                            {/* Comments */}
                            <div className="mt-2">
                                <h4 className="text-gray-300 font-semibold">Comments:</h4>
                                <ul className="space-y-2 mt-2">
                                    {session?.user && <CommentBox postId={post.id} />}
                                    {post.comments.map((comment, index) => (
                                        <li key={index} className="text-gray-300">
                                            👉 {comment.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayPosts;
