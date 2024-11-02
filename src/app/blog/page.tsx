import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { getBlogs } from '@/lib/getBlogs';
import Image from 'next/image';


/**
 * Blog component that renders a list of blog posts.
 * Each blog post includes an image, title, description, author, date, and a link to the full post.
 * 
 * @returns {JSX.Element} The rendered blog component.
 */
const Blog = async () => {
  const blogs = await getBlogs();

  return (
    <div className="container mx-auto p-4">
    <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">Blog</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((data, index) => {
        const slug = data.slug; // Ensure the slug is correctly generated
        console.log(`/blogpost/${slug}`); // Log the URL for debugging
        return (
          <div key={index} className="rounded-lg shadow-lg overflow-hidden dark:border-2 dark:border-gray-600 transition-transform transform hover:scale-105">
            <Image
  src={data.image}
  alt={data.title}
  width={400} // Adjust width based on your design
  height={256} // Adjust height based on your design
  className="w-full h-64 object-cover transition duration-300 ease-in-out hover:opacity-75"
/>

            <div className="p-6 bg-white dark:bg-gray-800">
              <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">{data.title}</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">{data.description}</p>
              <div className="text-sm mb-4 text-gray-500 dark:text-gray-400">
                <span>By {data.author}</span> | <span>{new Date(data.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
              </div>
              <Link href={`/blogpost/${slug}`} className={buttonVariants({ variant: "outline" }) + " mt-4 inline-block text-center"}>
                Click here
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  
         
  );
};

export default Blog;
