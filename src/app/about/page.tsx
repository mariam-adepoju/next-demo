import Link from "next/link";
export default function AboutPage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-semibold">Our Mission & Vision</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          we are committed to preserving digital content for future generations.
          Our mission is to provide a seamless and secure platform for archiving
          posts, ensuring that valuable information, stories, and conversations
          remain accessible over time. We empower individuals and businesses to
          organize, store, and retrieve their digital history with ease,
          fostering knowledge retention and continuity in an ever-evolving
          digital world.
        </p>
      </section>

      <section className="mt-12 text-center">
        <h2 className="text-3xl font-semibold">Contact Us</h2>
        <p className="mt-4 text-gray-700">Email: contact@company.com</p>
        <p className="mt-1 text-gray-700">Phone: +1 (234) 567-890</p>
        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-md shadow-md"
        >
          ← Back to Home
        </Link>
      </section>
    </main>
  );
}
