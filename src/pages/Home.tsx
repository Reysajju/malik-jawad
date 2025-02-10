import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import VideoHero from '../components/VideoHero';
import { 
  Users, 
  Database, 
  Bot,
  Target,
  Store,
  Search
} from 'lucide-react';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: 'B2B Lead Generation',
      description: 'Strategic B2B lead generation with targeted prospecting and LinkedIn outreach',
    },
    {
      icon: <Target className="w-8 h-8 text-indigo-600" />,
      title: 'B2C Lead Generation',
      description: 'Comprehensive consumer lead generation across multiple channels',
    },
    {
      icon: <Search className="w-8 h-8 text-indigo-600" />,
      title: 'Digital Marketing',
      description: 'SEO, PPC, and social media lead generation strategies',
    },
    {
      icon: <Bot className="w-8 h-8 text-indigo-600" />,
      title: 'CRM & Automation',
      description: 'Advanced CRM management and marketing automation solutions',
    },
    {
      icon: <Database className="w-8 h-8 text-indigo-600" />,
      title: 'Data Processing',
      description: 'Professional data entry, cleaning, and management services',
    },
    {
      icon: <Store className="w-8 h-8 text-indigo-600" />,
      title: 'E-commerce Services',
      description: 'Complete e-commerce data management and optimization',
    },
  ];

  const stats = [
    { value: '500+', label: 'Satisfied Clients' },
    { value: '1M+', label: 'Data Entries' },
    { value: '98%', label: 'Accuracy Rate' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <div className="min-h-screen">
      <VideoHero />

      {/* Services Section */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Expert Services
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Delivering excellence in lead generation and data management
            </p>
            <Link
              to="/services"
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              View All Services →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-indigo-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;