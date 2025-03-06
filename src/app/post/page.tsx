import { fetchPosts } from "../getpost/serveraction";
import Link from "next/link";
export default async function PostPage() {
  const posts = await fetchPosts();
  if (!posts) {
    return <p className="text-red-500 text-center">Failed to load posts</p>;
  }
  return (
    <section className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul className="space-y-4">
        {posts.map((post: { id: number; title: string }) => (
          <li key={post.id} className="border p-4 rounded-md shadow-md">
            <Link
              href={`/post/${post.id}`}
              className="text-blue-500 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
