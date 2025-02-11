import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

const blogPath = process.env.NEXT_PUBLIC_BLOG_CONTENT_PATH || "src/content";

// Function to fetch blog posts
const getBlogPosts = () => {
  const files = fs.readdirSync(path.join(process.cwd(), blogPath));
  
  return files.map((file) => {
    const fileContent = fs.readFileSync(path.join(process.cwd(), blogPath, file), "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: file.replace(".md", ""),
      title: data.title,
      description: data.description,
      date: data.date,
      image: data.image, // Ensure your markdown includes an image path
    };
  });
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.slug} className="bg-white rounded shadow-md overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              height={200}
              width={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-600">{new Date(post.date).toLocaleDateString()}</p>
              <p className="text-gray-800">{post.description}</p>
              <Link href={`/blogpost/${post.slug}`} className="text-blue-500 mt-2 inline-block">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
