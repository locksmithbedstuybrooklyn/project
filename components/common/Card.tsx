import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`
        bg-white border border-gray-200 rounded-lg p-6 shadow-sm
        ${hover ? 'hover:shadow-md hover:scale-102 transition-all duration-200' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
