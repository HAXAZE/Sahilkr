"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Sahil. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
      <p className="text-lg mt-2">
        Coded with <span className="heart-pump" role="img" aria-label="brown heart">🤎</span> by{" "}
        <a
          href="https://www.linkedin.com/in/haxaze/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-500 hover:underline"
        >
          Sahil
        </a>
      </p>
      <style jsx>{`
        .heart-pump {
          font-size: 1.75rem;
          display: inline-block;
          animation: pump 0.6s infinite alternate;
        }

        @keyframes pump {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.3);
          }
        }
      `}</style>
    </footer>
  );
}
