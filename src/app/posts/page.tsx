import CreatePost from '@/components/CreatePost';
import DisplayPosts from '@/components/DisplayPosts';
import { getPosts } from '@/server/actions';

import { Post } from '@/types/post';

export const dynamic = 'force-dynamic';
const PostsPage = async () => {
  const postsFromDB = await getPosts();
  const posts: Post[] = postsFromDB.map((post) => ({
    id: post.id,
    userId: post.userId,
    title: post.title,
    image: post.image,
    createdAt: post.createdAt.toString(),
    likes: post.likes.map((like) => ({ id: like.id })),
    comments: post.comments.map((comment) => ({ text: comment.text }))
  }));

  return (
    <div className="min-h-screen bg-black text-white">
      <CreatePost />
      <DisplayPosts posts={posts} />
    </div>
  );
};

export default PostsPage;
