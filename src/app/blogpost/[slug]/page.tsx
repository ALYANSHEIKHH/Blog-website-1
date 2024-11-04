// Import necessary modules and components
import { InferGetStaticPropsType } from 'next';
import fs from 'fs';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import rehypePrettyCode from 'rehype-pretty-code';
import { transformerCopyButton } from '@rehype-pretty/transformers';
import OnThisPage from '@/components/onthispage';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import CommentSection from '@/components/CommentSection';

// Function to retrieve and process blog post data
async function getPostData(slug: string) {
  const filepath = `src/content/${slug}.md`;

  if (!fs.existsSync(filepath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filepath, 'utf-8');
  const { content, data } = matter(fileContent);

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: data.title })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: 'github-dark',
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3000,
        }),
      ],
    });

  const file = await processor.process(content);
  const htmlContent = String(file);

  return { htmlContent, data };
}

// Page component that renders blog content, 'On This Page' section, and comments
export default async function Page({
  params,
}: InferGetStaticPropsType<typeof generateStaticParams>) {
  // Await params
  const { slug } = await params; // Make sure to await params

  const { htmlContent, data } = await getPostData(slug);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-start">{data.title}</h1>
      <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
        &quot;{data.description}&quot;
      </p>
      <div className="flex gap-2">
        <p className="text-sm text-gray-500 mb-4 italic">By {data.author}</p>
        <p className="text-sm text-gray-500 mb-4">
          {new Date(data.date).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          })}
        </p>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="prose dark:prose-invert mb-6"
      ></div>
      <OnThisPage htmlContent={htmlContent} />
      <CommentSection slug={slug} /> {/* Adds the comments section here */}
    </div>
  );
}

// Generate static paths for each markdown file
export async function generateStaticParams() {
  const files = fs.readdirSync('src/content');
  const paths = files.map((file) => ({
    slug: file.replace(/\.md$/, ''), // Remove .md extension
  }));

  return paths.map((path) => ({ params: path }));
}
