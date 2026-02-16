"use client";

import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f7]/80 backdrop-blur-md border-b border-[#e0e0e0]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-mono text-lg font-bold tracking-tight hover:text-blue-600 transition-colors">
          TK
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/#about" className="text-[#666] hover:text-black transition-colors">About</Link>
          <Link href="/#projects" className="text-[#666] hover:text-black transition-colors">Projects</Link>
          <Link href="/#experience" className="text-[#666] hover:text-black transition-colors">Experience</Link>
          <Link href="/#skills" className="text-[#666] hover:text-black transition-colors">Skills</Link>
          <Link href="/#contact" className="text-[#666] hover:text-black transition-colors">Contact</Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-[#666] hover:text-black" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#e0e0e0] bg-[#faf9f7]/95 backdrop-blur-md">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm">
            <Link href="/#about" onClick={() => setOpen(false)} className="text-[#666] hover:text-black">About</Link>
            <Link href="/#projects" onClick={() => setOpen(false)} className="text-[#666] hover:text-black">Projects</Link>
            <Link href="/#experience" onClick={() => setOpen(false)} className="text-[#666] hover:text-black">Experience</Link>
            <Link href="/#skills" onClick={() => setOpen(false)} className="text-[#666] hover:text-black">Skills</Link>
            <Link href="/#contact" onClick={() => setOpen(false)} className="text-[#666] hover:text-black">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
