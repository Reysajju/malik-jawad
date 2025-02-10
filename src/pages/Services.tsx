import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import {
  Users,
  UserPlus,
  Megaphone,
  Database,
  BarChart,
  ShoppingCart,
  Mail,
  Search,
  MessageSquare,
  Target,
  Bot,
  FileSpreadsheet,
  ClipboardCheck,
  Store,
} from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const serviceCategories = [
    {
      title: "B2B Lead Generation",
      icon: <Users className="w-12 h-12 text-indigo-600" />,
      services: [
        "B2B Contact List Building",
        "Targeted Prospecting",
        "LinkedIn Lead Generation",
        "Cold Email Outreach",
        "Account-Based Marketing (ABM)",
        "Industry-Specific Research",
        "Competitor Analysis",
        "B2B Appointment Setting",
        "Database Enrichment",
        "Lead Scoring"
      ]
    },
    {
      title: "B2C Lead Generation",
      icon: <UserPlus className="w-12 h-12 text-indigo-600" />,
      services: [
        "Consumer Contact Lists",
        "Social Media Leads",
        "Google Ads Generation",
        "Local Business Leads",
        "E-commerce Email Lists",
        "Survey-Based Leads",
        "Real Estate Leads",
        "Healthcare Leads",
        "Automotive Leads",
        "Education Leads"
      ]
    },
    {
      title: "Digital Marketing Leads",
      icon: <Megaphone className="w-12 h-12 text-indigo-600" />,
      services: [
        "SEO Lead Generation",
        "PPC Lead Generation",
        "Social Media Ads",
        "Landing Page Optimization",
        "Retargeting Strategies",
        "Influencer Partnerships",
        "Affiliate Marketing",
        "YouTube Marketing",
        "Referral Programs",
        "Lead Nurturing"
      ]
    },
    {
      title: "CRM & Automation",
      icon: <Bot className="w-12 h-12 text-indigo-600" />,
      services: [
        "CRM Data Management",
        "Marketing Automation",
        "Lead Segmentation",
        "Chatbot Development",
        "AI-Powered Scoring",
        "Workflow Automation",
        "Integration Setup",
        "Performance Analytics",
        "Email Automation",
        "SMS Marketing"
      ]
    },
    {
      title: "General Data Entry",
      icon: <FileSpreadsheet className="w-12 h-12 text-indigo-600" />,
      services: [
        "Manual Data Entry",
        "PDF Conversion",
        "Survey Data Entry",
        "Online/Offline Entry",
        "Data Formatting",
        "Document Processing",
        "Form Processing",
        "Data Verification",
        "Quality Assurance",
        "Bulk Data Entry"
      ]
    },
    {
      title: "Data Processing",
      icon: <Database className="w-12 h-12 text-indigo-600" />,
      services: [
        "Data Cleaning",
        "Data Mining",
        "Data Sorting",
        "Data Validation",
        "Big Data Management",
        "Data Analysis",
        "Report Generation",
        "Data Migration",
        "Database Management",
        "Data Backup"
      ]
    },
    {
      title: "E-commerce Services",
      icon: <Store className="w-12 h-12 text-indigo-600" />,
      services: [
        "Product Listing",
        "Inventory Management",
        "Order Processing",
        "Price Analysis",
        "Catalog Management",
        "Product Description",
        "Category Mapping",
        "Image Optimization",
        "Stock Updates",
        "Market Research"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>Services - Malik Jawad | Lead Generation & Data Entry</title>
        <meta name="description" content="Comprehensive lead generation and data entry services including B2B & B2C lead generation, CRM management, and data processing solutions." />
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
              Comprehensive Services
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-indigo-100 max-w-3xl mx-auto"
            >
              From lead generation to data management, we deliver excellence in every aspect
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    {category.icon}
                    <h2 className="text-2xl font-bold text-gray-900">
                      {category.title}
                    </h2>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={serviceIndex}
                        whileHover={{ scale: 1.02 }}
                        className="p-4 rounded-lg bg-gray-50 hover:bg-indigo-50 transition-colors duration-300"
                      >
                        <p className="text-gray-700">{service}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-indigo-600 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-indigo-50 transition-colors duration-300"
          >
            Get Started Today
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;