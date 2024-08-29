// src/app/blog/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// This would typically come from a database or API
const blogPosts = [
  {
    slug: "revolutionary-ai-breakthrough-quantum-computing",
    title: "Revolutionary AI Breakthrough in Quantum Computing",
    content: "Full article content here...",
    image: "/tech-news-image.jpg",
  },
  {
    slug: "rise-of-edge-computing",
    title: "The Rise of Edge Computing",
    content: "Full article content here...",
    image: "/edge-computing.jpg",
  },
  {
    slug: "cybersecurity-in-the-age-of-5g",
    title: "Cybersecurity in the Age of 5G",
    content: "Full article content here...",
    image: "/cybersecurity-5g.jpg",
  },
  {
    slug: "future-of-sustainable-tech",
    title: "The Future of Sustainable Tech",
    content: "Full article content here...",
    image: "/sustainable-tech.jpg",
  },
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8 font-virgil bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="text-primary-light dark:text-primary-dark hover:underline mb-8 inline-block"
        >
          ← Back to Home
        </Link>
        <article className="bg-background-light dark:bg-background-dark rounded-lg shadow-lg overflow-hidden border border-secondary-light dark:border-secondary-dark transition-colors duration-300">
          <Image
            src={post.image}
            alt={`${post.title} featured image`}
            width={1200}
            height={600}
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h1 className="text-3xl font-bold text-text-light dark:text-text-dark mb-4 transition-colors duration-300">
              {post.title}
            </h1>
            <div className="text-secondary-light dark:text-secondary-dark transition-colors duration-300">
              {post.content}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
