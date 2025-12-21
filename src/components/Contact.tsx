'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Mail, Globe, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const captchaRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState('');

  // Re-initialize hCaptcha on component mount
  useEffect(() => {
    const initCaptcha = () => {
      if (typeof window === 'undefined') return;

      const w = window as any;
      
      // Check if Web3Forms is loaded
      if (w.Web3Forms && captchaRef.current) {
        // Reset any existing captcha
        if (captchaRef.current.innerHTML) {
          captchaRef.current.innerHTML = '';
        }

        // Let Web3Forms re-initialize the form and captcha
        if (formRef.current) {
          w.Web3Forms.init(formRef.current);
        }
      } else if (w.hcaptcha && captchaRef.current) {
        // Fallback: Use hCaptcha directly if Web3Forms not ready
        try {
          if (captchaRef.current.innerHTML) {
            captchaRef.current.innerHTML = '';
          }
          w.hcaptcha.render(captchaRef.current, {
            sitekey: '50b2fe65-b00b-4b9e-ad62-3ba471098be2' // Web3Forms public key
          });
        } catch (error) {
          console.log('Captcha already rendered or error:', error);
        }
      } else {
        // Not ready yet, try again
        setTimeout(initCaptcha, 200);
      }
    };

    const timer = setTimeout(initCaptcha, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []); // Re-run on every mount

  const projectTypes = [
    'Web Development',
    'Mobile App Development',
    'Digital Marketing',
    'Graphic Design',
    'Custom Solution',
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // hCaptcha validation
    const hCaptchaResponse = e.currentTarget.querySelector<HTMLTextAreaElement>('textarea[name="h-captcha-response"]');
    if (!hCaptchaResponse || !hCaptchaResponse.value) {
      toast({
        title: "Please complete the captcha",
        description: "Please verify that you're not a robot.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitResult('');

    try {
      const formDataToSend = new FormData(e.currentTarget);
      formDataToSend.append("access_key", "7699df5a-5b6f-4cb6-b248-fe5440a6926d");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setSubmitResult('success');
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
      } else {
        setSubmitResult('error');
        toast({
          title: "Error sending message",
          description: data.message || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      setSubmitResult('error');
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Let&apos;s bring it to life.
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your vision into reality? Get in touch and let&apos;s discuss your next big project.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email Contact - Box-style */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-ider-yellow rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Get In Touch</h3>
                  <p className="text-gray-600">Drop us a line anytime</p>
                </div>
              </div>
              <a
                href="mailto:yasas@idersolutions.com"
                className="text-ider-yellow hover:opacity-80 text-xl font-semibold transition-colors duration-300"
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
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form - Box-style */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-gray-900 font-semibold mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-ider-yellow focus:ring-2 focus:ring-ider-yellow/20 transition-all duration-300"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-gray-900 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-ider-yellow focus:ring-2 focus:ring-ider-yellow/20 transition-all duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-gray-900 font-semibold mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-ider-yellow focus:ring-2 focus:ring-ider-yellow/20 transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-gray-900 font-semibold mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-ider-yellow focus:ring-2 focus:ring-ider-yellow/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project, goals, and requirements..."
                  required
                />
              </div>

              {/* hCaptcha */}
              <div className="my-6">
                <div 
                  ref={captchaRef}
                  className="h-captcha" 
                  data-captcha="true"
                  style={{
                    minHeight: '78px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                ></div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-ider-yellow text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all duration-300 group yellow-glow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {!isSubmitting && (
                    <span className="group-hover:translate-x-1 transition-transform duration-300">🚀</span>
                  )}
                </span>
              </button>

              {/* Result Message */}
              {submitResult && (
                <div className={`mt-4 p-4 rounded-lg text-center font-semibold ${
                  submitResult === 'success' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {submitResult === 'success' 
                    ? '✓ Message sent successfully!' 
                    : '✗ Failed to send message. Please try again.'}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg">
            Prefer a direct conversation? Email us at{' '}
            <a
              href="mailto:yasas@idersolutions.com"
              className="text-ider-yellow hover:opacity-80 font-semibold transition-colors duration-300"
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