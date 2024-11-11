import React from 'react';

export default function MainButton({
  className,
  text,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.HTMLAttributes<HTMLButtonElement> & {
    text: string;
  }) {
  return (
    <button
      className={`w-full rounded-xl bg-blue-600 p-4 text-white font-bold ${className}`}
      {...props}
    >
      {text}
    </button>
  );
}
