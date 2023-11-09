import Link from 'next/link';
import React from 'react';

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <header className="bg-gradient-to-r from-[#030819] to-[#1722b9] text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
      <Link href="/">
        <button className="fixed top-0 right-0 bg-white text-black hover:bg-[#1722b9] hover:text-white rounded-lg text-sm px-5 py-2.5 text-center mr-3 mt-3 inline-flex items-center">
          <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          <span>Home</span>
        </button>
      </Link>
    </header>
  );
};

export default Header;