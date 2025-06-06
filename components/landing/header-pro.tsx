"use client";

import Link from "next/link";
import XIcon from "../icons/x-icon";
import { useState, useEffect } from "react";

interface HeaderContent {
  text: string;
  productName: string;
  link: string;
}

export function HeaderPro() {
  const [content, setContent] = useState<HeaderContent>({
    text: "",
    productName: "",
    link: "",
  });
  
  // Animation state for hover effects
  const [isHovered, setIsHovered] = useState({
    github: false,
    twitter: false,
    instagram: false
  });

  useEffect(() => {
    const random = Math.random();
    if (random < 0.75) {
      setContent({
        text: "Built app fast",
        productName: "CodeSnippet Boilerplate",
        link: "#",
      });
    } else {
      setContent({
        text: "Explore new components",
        productName: "ZypherUI",
        link: "#",
      });
    }
  }, []);

  return (
    <div className="flex items-center justify-end gap-1 flex-1">
      <div className="flex items-center justify-start md:justify-end gap-2 flex-1">
        
        <Link
          href="https://github.com/AYONX4"
          target="_blank"
          className="hidden group relative md:inline-flex items-center gap-2 px-1.5 py-1.5 text-sm rounded-lg bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-105"
          onMouseEnter={() => setIsHovered({...isHovered, github: true})}
          onMouseLeave={() => setIsHovered({...isHovered, github: false})}
        >
          <div className="relative flex items-center gap-2 w-full">
            <svg
              viewBox="0 0 24 24"
              className={`w-4 h-4 text-white dark:text-zinc-900 transition-transform duration-300 ${isHovered.github ? 'rotate-12' : ''}`}
              fill="currentColor"
            >
              <title>Github</title>
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </div>
        </Link>
        
        <Link
          href="https://x.com/AyonXzz14"
          target="_blank"
          className="hidden group relative md:inline-flex items-center gap-2 px-1.5 py-1.5 text-sm rounded-lg bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-105"
          onMouseEnter={() => setIsHovered({...isHovered, twitter: true})}
          onMouseLeave={() => setIsHovered({...isHovered, twitter: false})}
        >
          <XIcon className={`w-4 h-4 text-white dark:text-zinc-900 transition-transform duration-300 ${isHovered.twitter ? 'rotate-12' : ''}`} />
        </Link>
        
        {/* Instagram Button */}
        <Link
          href="https://instagram.com/4yon___" 
          target="_blank"
          className="hidden group relative md:inline-flex items-center gap-2 px-1.5 py-1.5 text-sm rounded-lg bg-zinc-900 dark:bg-zinc-100 transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-105"
          onMouseEnter={() => setIsHovered({...isHovered, instagram: true})}
          onMouseLeave={() => setIsHovered({...isHovered, instagram: false})}
        >
          <div className="relative flex items-center gap-2 w-full">
            <svg 
              viewBox="0 0 24 24" 
              className={`w-4 h-4 text-white dark:text-zinc-900 transition-transform duration-300 ${isHovered.instagram ? 'rotate-12' : ''}`}
              fill="currentColor"
            >
              <title>Instagram</title>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}