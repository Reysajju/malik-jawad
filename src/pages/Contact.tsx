import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>Contact - Malik Jawad | Lead Generation Services</title>
        <meta name="description" content="Get in touch with Malik Jawad for professional lead generation and data entry services. Available 24/7 to help your business grow." />
      </Helmet>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8"
            >
              Let's discuss how we can help your business grow
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center space-x-6"
            >
              <a
                href="https://www.linkedin.com/in/malik-jawad-12315030b"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/share/19yCxCa1HR/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/malikjawad369"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <Phone className="text-indigo-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-600">Phone</p>
                    <a href="tel:+923008778733" className="text-lg font-medium text-gray-900">
                      +92 300 8778733
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <Mail className="text-indigo-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-600">Email</p>
                    <a href="mailto:malikthelord167@gmail.com" className="text-lg font-medium text-gray-900">
                      malikthelord167@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <Clock className="text-indigo-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-600">Working Hours</p>
                    <p className="text-lg font-medium text-gray-900">24/7 Available</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;