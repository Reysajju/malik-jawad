import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Users, Database, Target, Briefcase, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const achievements = [
    { icon: <Users />, value: '500+', label: 'Satisfied Clients' },
    { icon: <Target />, value: '1000+', label: 'Successful Projects' },
    { icon: <Database />, value: '1M+', label: 'Data Entries' },
    { icon: <Briefcase />, value: '3+', label: 'Years Experience' },
  ];

  const benefits = [
    'Proven Track Record',
    'Upwork Verified Expertise',
    'Customized Solutions',
    'Fast & Reliable Delivery',
    '100% Accuracy Guarantee',
    'Confidentiality Assured',
  ];

  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>About - Malik Jawad | Lead Generation Expert</title>
        <meta name="description" content="Learn about Malik Jawad's expertise in lead generation and data entry services. Over 3 years of experience helping businesses grow with professional data solutions." />
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
              About Malik Jawad
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8"
            >
              Lead Generation & Data Entry Expert
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

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Professional Background</h2>
              <p className="text-gray-600 mb-6">
                Malik Jawad is a seasoned Lead Generation and Data Entry Specialist with over 3 years of experience, 
                helping businesses grow by providing high-quality leads and accurate data management solutions.
              </p>
              <p className="text-gray-600 mb-6">
                With a strong background in B2B & B2C lead generation, CRM data management, and e-commerce data entry, 
                Malik has successfully worked with clients both locally and on Upwork, delivering efficient and 
                results-driven solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                >
                  <div className="text-indigo-600 mb-2 flex justify-center">
                    {achievement.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {achievement.value}
                  </div>
                  <div className="text-gray-600">{achievement.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Why Choose Malik Jawad?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white p-6 rounded-lg shadow-md"
                >
                  <CheckCircle className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;