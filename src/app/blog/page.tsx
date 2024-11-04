// src/app/blog/page.tsx
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";

export default function BlogPage() {
  const files = fs.readdirSync('src/content');
  const posts = files.map(file => {
    const fileContent = fs.readFileSync(`src/content/${file}`, 'utf-8');
    const { data } = matter(fileContent);
    return {
      slug: file.replace('.md', ''),
      title: data.title,
      description: data.description,
      date: data.date,
      image: data.image, // Make sure to include the image path in your frontmatter
    };
  });

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map(post => (
          <div key={post.slug} className="bg-white rounded shadow-md overflow-hidden">
            <Image src={post.image} alt={post.title} height={200} width={400} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-600">{new Date(post.date).toLocaleDateString()}</p>
              <p className="text-gray-800">{post.description}</p>
              <a href={`/blogpost/${post.slug}`} className="text-blue-500 mt-2 inline-block">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
