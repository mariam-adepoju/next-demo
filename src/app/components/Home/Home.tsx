import Link from "next/link";
export default function Home() {
  return (
    <section className="h-[90vh] flex flex-col items-center justify-center text-center bg-blue-600 text-white p-6">
      <h1 className="text-4xl md:text-6xl font-bold">Welcome to MyPosts</h1>
      <p className="text-lg md:text-xl mt-4">An Archive of Posts.</p>
      <Link
        href="/about"
        className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-md shadow-md"
      >
        About Us
      </Link>
    </section>
  );
}
