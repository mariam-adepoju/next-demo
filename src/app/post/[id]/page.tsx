"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function PostPage() {
  const { id } = useParams(); // Get post ID from the URL
  const [post, setPost] = useState<{ title: string; body: string } | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return; // Prevent fetching if id is undefined

    setLoading(true);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch post");
        return res.json();
      })
      .then((data) => setPost(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return <p className="text-gray-500 text-center">Loading post...</p>;
  if (error) return <p className="text-red-500 text-center">Error: {error}</p>;
  if (!post)
    return <p className="text-gray-500 text-center">Post not found.</p>;

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-700 mt-4">{post.body}</p>
      <Link href="/post" className="text-blue-500 mt-4 block">
        ← Back to Posts
      </Link>
    </main>
  );
}
