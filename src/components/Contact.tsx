import React, { useState } from 'react';
import { Mail, Globe, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const projectTypes = [
    'Web Development',
    'Mobile App Development',
    'Digital Marketing',
    'Graphic Design',
    'Custom Solution',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      projectType: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header - Text directly on dark background */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-ider-yellow">
            Have an idea?
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Let's bring it to life.
          </h3>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Ready to transform your vision into reality? Get in touch and let's discuss your next big project.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email Contact - Box-style */}
            <div className="bg-gray-800/50 rounded-3xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-ider-yellow rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-ider-dark" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Get In Touch</h3>
                  <p className="text-white/80">Drop us a line anytime</p>
                </div>
              </div>
              <a
                href="mailto:yasas@idersolutions.com"
                className="text-ider-yellow hover:text-yellow-400 text-xl font-semibold transition-colors duration-300"
              >
                yasas@idersolutions.com
              </a>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {[
                {
                  icon: Zap,
                  title: 'Quick Response',
                  description: 'We respond to all inquiries within 24 hours',
                },
                {
                  icon: Globe,
                  title: 'Global Service',
                  description: 'Serving clients worldwide with remote collaboration',
                },
                {
                  icon: Mail,
                  title: 'Free Consultation',
                  description: 'Get expert advice on your project at no cost',
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ider-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-ider-dark" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-white/80">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form - Box-style */}
          <div className="bg-gray-800/50 rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-ider-yellow focus:ring-2 focus:ring-ider-yellow/20 transition-all duration-300"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-ider-yellow focus:ring-2 focus:ring-ider-yellow/20 transition-all duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-white font-semibold mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-ider-yellow focus:ring-2 focus:ring-ider-yellow/20 transition-all duration-300"
                >
                  <option value="" className="bg-ider-dark">Select a service</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-ider-dark">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-ider-yellow focus:ring-2 focus:ring-ider-yellow/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project, goals, and requirements..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-ider-yellow text-ider-dark py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 group yellow-glow"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">🚀</span>
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-white/80 text-lg">
            Prefer a direct conversation? Email us at{' '}
            <a
              href="mailto:yasas@idersolutions.com"
              className="text-ider-yellow hover:text-yellow-400 font-semibold transition-colors duration-300"
            >
              yasas@idersolutions.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact; 