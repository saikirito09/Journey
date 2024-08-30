import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import pruningContent from "@/data/pruning.json";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { title, introduction, images, sections } = pruningContent;

  if (!title || !sections || !images) {
    notFound();
  }

  if (params.slug !== title.toLowerCase().replace(/\s+/g, "-")) {
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
          <div className="p-8">
            <h1 className="text-3xl font-bold text-text-light dark:text-text-dark mb-4 transition-colors duration-300">
              {title}
            </h1>
            {introduction && (
              <p className="text-secondary-light dark:text-secondary-dark transition-colors duration-300 mb-6">
                {introduction}
              </p>
            )}
            {sections.map((section: any, index: number) => (
              <div key={index} className="mb-6">
                <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark mb-2">
                  {section.heading}
                </h2>
                <p className="text-secondary-light dark:text-secondary-dark mb-4">
                  {section.content}
                </p>
                {section.example && (
                  <blockquote className="italic text-sm text-secondary-light dark:text-secondary-dark mb-4">
                    Example: {section.example}
                  </blockquote>
                )}
                {section.steps && (
                  <ul className="list-disc list-inside mb-4">
                    {section.steps.map((step: string, stepIndex: number) => (
                      <li
                        key={stepIndex}
                        className="text-secondary-light dark:text-secondary-dark"
                      >
                        {step}
                      </li>
                    ))}
                  </ul>
                )}
                {section.pros && (
                  <div className="mb-4">
                    <h3 className="font-medium text-text-light dark:text-text-dark">
                      Pros:
                    </h3>
                    <ul className="list-disc list-inside">
                      {section.pros.map((pro: string, proIndex: number) => (
                        <li
                          key={proIndex}
                          className="text-secondary-light dark:text-secondary-dark"
                        >
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {section.cons && (
                  <div>
                    <h3 className="font-medium text-text-light dark:text-text-dark">
                      Cons:
                    </h3>
                    <ul className="list-disc list-inside">
                      {section.cons.map((con: string, conIndex: number) => (
                        <li
                          key={conIndex}
                          className="text-secondary-light dark:text-secondary-dark"
                        >
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {section.heading.toLowerCase() === "pruning" && (
                  <>
                    {images.light_mode && (
                      <Image
                        src={`/${images.light_mode}`}
                        alt={images.alt_text}
                        width={1200}
                        height={600}
                        className="w-full object-contain mb-6 dark:hidden"
                      />
                    )}
                    {images.dark_mode && (
                      <Image
                        src={`/${images.dark_mode}`}
                        alt={images.alt_text}
                        width={1200}
                        height={600}
                        className="w-full object-contain mb-6 hidden dark:block"
                      />
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
