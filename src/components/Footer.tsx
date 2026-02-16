export function Footer() {
  return (
    <footer className="border-t border-[#e0e0e0] py-8 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#666]">
        <p>&copy; {new Date().getFullYear()} Tishya Khanna</p>
        <div className="flex gap-6">
          <a href="https://github.com/tishyakhanna97" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/tishyakhanna9" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
          <a href="mailto:tk732@cornell.edu" className="hover:text-black transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
