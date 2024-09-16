import React from 'react';

interface CardProps {
  children: React.ReactNode;
}
export default function Card({ children }: CardProps) {
  return (
    <section className="p-6 rounded-2xl flex flex-col bg-white font-medium text-sm mb-4">
      {children}
    </section>
  );
}
