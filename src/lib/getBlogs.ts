// src/lib/getBlogs.ts
import fs from "fs";
import path from "path";
import matter from 'gray-matter';

export const getBlogs = () => {
  const dirPath = path.join(process.cwd(), "src", "content"); // Adjust path to point to src/content
  const dirContent = fs.readdirSync(dirPath, "utf-8");

  const blogs = dirContent.map((file) => {
    const filePath = path.join(dirPath, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return data;
  });

  return blogs;
};
