import React from 'react';
import Blog from '../../components/Blog';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const BlogPage = () => {
  // For static pages, scrollY can be set to 0
  return (
    <>
      <Navbar scrollY={0} />
      <main className="pt-24 bg-ider-dark min-h-screen">
        <Blog />
      </main>
      <Footer />
    </>
  );
};

export default BlogPage; 