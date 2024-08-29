import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    slug: "revolutionary-ai-breakthrough-quantum-computing",
    title: "Revolutionary AI Breakthrough in Quantum Computing",
    snippet:
      "Scientists have made a groundbreaking discovery in the field of quantum computing, leveraging artificial intelligence to solve complex quantum algorithms.",
    image: "/tech-news-image.jpg",
  },
  {
    slug: "rise-of-edge-computing",
    title: "The Rise of Edge Computing",
    snippet:
      "Explore how edge computing is reshaping the IoT landscape and bringing computation closer to data sources.",
    image: "/edge-computing.jpg",
  },
  {
    slug: "cybersecurity-in-the-age-of-5g",
    title: "Cybersecurity in the Age of 5G",
    snippet:
      "Delve into the new challenges and opportunities that 5G networks present for cybersecurity professionals.",
    image: "/cybersecurity-5g.jpg",
  },
  {
    slug: "future-of-sustainable-tech",
    title: "The Future of Sustainable Tech",
    snippet:
      "Discover how tech companies are innovating to reduce their carbon footprint and promote sustainability.",
    image: "/sustainable-tech.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen p-8 font-virgil bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <article className="bg-background-light dark:bg-background-dark rounded-lg shadow-lg overflow-hidden border border-secondary-light dark:border-secondary-dark transition-colors duration-300 mb-12">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                src={blogPosts[0].image}
                alt="Article featured image"
                width={600}
                height={400}
                className="h-full w-full object-cover md:w-96"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4 transition-colors duration-300">
                {blogPosts[0].title}
              </h2>
              <p className="text-secondary-light dark:text-secondary-dark mb-4 transition-colors duration-300">
                {blogPosts[0].snippet}
              </p>
              <Link
                href={`/blog/${blogPosts[0].slug}`}
                className="text-primary-light dark:text-primary-dark hover:underline transition-colors duration-300"
              >
                Read more →
              </Link>
            </div>
          </div>
        </article>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((blog, index) => (
            <div
              key={index}
              className="bg-background-light dark:bg-background-dark rounded-lg shadow-md overflow-hidden border border-secondary-light dark:border-secondary-dark transition-colors duration-300"
            >
              <Image
                src={blog.image}
                alt={`${blog.title} featured image`}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-2 transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-secondary-light dark:text-secondary-dark mb-4 transition-colors duration-300">
                  {blog.snippet}
                </p>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-primary-light dark:text-primary-dark hover:underline transition-colors duration-300"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
