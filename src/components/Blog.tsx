import React from 'react';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: AI-Powered Tools',
      excerpt: 'Discover how artificial intelligence is revolutionizing the way we build websites and applications, from automated code generation to intelligent debugging.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      category: 'Technology',
      author: 'Sarah Johnson',
      date: 'March 15, 2025',
      readTime: '5 min read',
      link: '#',
    },
    {
      id: 2,
      title: 'Building Scalable Mobile Apps: Best Practices',
      excerpt: 'Learn the essential strategies and techniques for creating mobile applications that can grow with your business and handle increasing user demands.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      category: 'Development',
      author: 'Mike Chen',
      date: 'March 10, 2025',
      readTime: '7 min read',
      link: '#',
    },
    {
      id: 3,
      title: 'Digital Marketing Trends That Will Dominate 2025',
      excerpt: 'Explore the latest digital marketing strategies and trends that are reshaping how businesses connect with their audiences in the digital age.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      category: 'Marketing',
      author: 'Emily Rodriguez',
      date: 'March 5, 2025',
      readTime: '6 min read',
      link: '#',
    },
  ];

  return (
    <section className="py-20 relative" id="blog">
      <div className="container mx-auto px-6">
        {/* Section Header - Text directly on dark background */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ider-yellow">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, tips, and insights from our team of digital experts
          </p>
        </div>

        {/* Blog Posts Grid - Box-style cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="group relative bg-gray-50 rounded-3xl overflow-hidden hover:bg-gray-100 transition-all duration-300 border border-gray-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Blog Post Image */}
              <div className="relative overflow-hidden h-48">
                <Image
                  src={post.image}
                  alt={`Featured image for ${post.title} - ${post.excerpt.substring(0, 60)}...`}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  unoptimized={post.image.startsWith('https://')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-ider-yellow text-white text-sm rounded-full font-semibold">
                    {post.category}
                  </span>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={post.link}
                    className="bg-ider-yellow text-white p-3 rounded-full hover:opacity-90 transition-colors duration-300"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Blog Post Info */}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-ider-yellow transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>

                {/* Read More Link */}
                <a
                  href={post.link}
                  className="inline-flex items-center space-x-2 text-ider-yellow hover:opacity-80 font-semibold group-hover:translate-x-2 transition-transform duration-300"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-16">
          <a
            href="/blog"
            className="bg-ider-yellow text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 inline-flex items-center space-x-2 yellow-glow"
          >
            <span>📚 View All Articles</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog; 