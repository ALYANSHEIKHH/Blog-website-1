"use client"; // Indicates this component is a client component in Next.js
import React, { useEffect, useState } from 'react';

interface Heading {
  text: string | null; // Text may be null if the heading doesn't have content
  id: string | null;   // ID may be null if the heading doesn't have an ID
}

interface OnThisPageProps {
  htmlContent: string; // The HTML content passed as a prop
}

const OnThisPage: React.FC<OnThisPageProps> = ({ htmlContent }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    // Parse the HTML content and extract h2 headings
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const h2Elements = tempDiv.querySelectorAll('h2');

    const h2Data: Heading[] = Array.from(h2Elements).map(h2 => ({
      text: h2.textContent || null, // Ensure text is not undefined
      id: h2.id || null              // Ensure id is not undefined
    })).filter(heading => heading.text); // Filter out any headings without text

    setHeadings(h2Data);
  }, [htmlContent]);

  
     


  return (
    <div className="on-this-page absolute top-24 md:right-48 lg:right-1/4 hidden lg:block">
      <h2 className='text-md font-bold my-2'>On This Page</h2>
      <ul className='text-sm space-y-1'>
        {headings.map((heading, index) => (
          <li key={index}>
            <a href={`#${heading.id || ''}`}>{heading.text || 'Untitled'}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnThisPage;
