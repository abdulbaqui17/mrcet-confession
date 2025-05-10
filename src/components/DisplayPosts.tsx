// components/DisplayPosts.tsx

export const dynamic = 'force-dynamic';
import { Post } from "@/types/post";
import { getServerSession } from "next-auth";
import AnimatedPostList from "./AnimatedPostList";

interface DisplayPostsProps {
    posts: Post[];
}

async function DisplayPosts({ posts }: DisplayPostsProps) {
    const session = await getServerSession();
    
    return <AnimatedPostList posts={posts} session={session} />;
}

export default DisplayPosts;
