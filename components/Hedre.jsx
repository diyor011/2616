import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white py-4 px-12 flex justify-between items-center z-50">

      <h1 className="text-xl font-bold">Local Face</h1>

      <nav className="flex space-x-8">
        <a href="/" className="hover:text-gray-400">Home</a>
        <a href="/shop" className="hover:text-gray-400">Shop</a>
        <a href="/about" className="text-orange-400 font-medium">About Us</a>
        <a href="/services" className="hover:text-gray-400">Service</a>
        <a href="/blog" className="hover:text-gray-400">Blog</a>
      </nav>

     
      <div className="flex space-x-6 text-lg">
        <i className="ri-search-line cursor-pointer"></i>
        <i className="ri-user-line cursor-pointer"></i>
        <i className="ri-shopping-bag-line cursor-pointer"></i>
      </div>
    </header>
  );
};

export default Header;
