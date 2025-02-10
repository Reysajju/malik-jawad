import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] md:w-full md:max-w-lg bg-white rounded-2xl shadow-xl z-50"
          >
            <div className="flex flex-col max-h-[90vh]">
              <div className="flex justify-between items-center p-4 sm:p-6 sticky top-0 bg-white rounded-t-2xl border-b">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Get Started</h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 transition-colors p-1"
                  aria-label="Close popup"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="overflow-y-auto p-4 sm:p-6">
                <form
                  name="contact-popup"
                  method="POST"
                  data-netlify="true"
                  className="space-y-4 sm:space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Handle form submission here
                    onClose();
                  }}
                >
                  <input type="hidden" name="form-name" value="contact-popup" />
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-base"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-base"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      id="service"
                      required
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-base"
                    >
                      <option value="">Select a service</option>
                      <option value="b2b">B2B Lead Generation</option>
                      <option value="b2c">B2C Lead Generation</option>
                      <option value="digital">Digital Marketing Leads</option>
                      <option value="crm">CRM & Automation</option>
                      <option value="data-entry">General Data Entry</option>
                      <option value="data-processing">Data Processing</option>
                      <option value="ecommerce">E-commerce Services</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-base"
                      placeholder="Tell us about your project"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2.5 sm:py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300 text-base"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;