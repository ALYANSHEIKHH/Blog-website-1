import { NextApiRequest, NextApiResponse } from 'next';

type Comment = {
  slug: string;
  content: string;
};

// Temporary in-memory data store for comments
let comments: Comment[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === 'GET') {
    const { slug } = req.query;
    const postComments = comments.filter((comment) => comment.slug === slug);
    res.status(200).json(postComments);
  } else if (method === 'POST') {
    const { slug, content } = req.body;
    const newComment: Comment = { slug, content };
    comments.push(newComment);
    res.status(201).json(newComment);
  } else if (method === 'DELETE') {
    const { slug, content } = req.body;
    comments = comments.filter((comment) => !(comment.slug === slug && comment.content === content));
    res.status(204).end(); // No content response
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
