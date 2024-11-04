"use client";

import { useEffect, useState } from 'react';

interface Comment {
  slug: string;
  content: string;
}

interface CommentSectionProps {
  slug: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ slug }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/comments?slug=${slug}`);
        if (!response.ok) {
          throw new Error('Failed to fetch comments');
        }
        const data: Comment[] = await response.json();
        setComments(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchComments();
  }, [slug]);

  const handleCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComment.trim()) {
      try {
        const response = await fetch(`/api/comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ slug, content: newComment }),
        });
        if (!response.ok) {
          throw new Error('Failed to submit comment');
        }
        const comment: Comment = await response.json();
        setComments((prevComments) => [...prevComments, comment]);
        setNewComment('');
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleDeleteComment = async (commentToDelete: Comment) => {
    try {
      const response = await fetch(`/api/comments`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slug, content: commentToDelete.content }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete comment');
      }

      setComments((prevComments) =>
        prevComments.filter((comment) => comment.content !== commentToDelete.content)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      <form onSubmit={handleCommentSubmit} className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows={4}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          placeholder="Leave a comment..."
          required
        />
        <button
          type="submit"
          className="mt-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold shadow-md"
        >
          Submit
        </button>
      </form>
      <div>
        {comments.map((comment, index) => (
          <div key={index} className="mb-4 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
            <p className="text-gray-800">{comment.content}</p>
            <button
              onClick={() => handleDeleteComment(comment)}
              className="mt-3  text-gray-600 py-1 px-2 rounded-lg  transition duration-200 font-semibold shadow-md"

            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
