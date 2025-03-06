export async function fetchPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }
    return await res.json();
  } catch (err) {
    console.error("Error fetching post:", err);
    return [];
  }
}
