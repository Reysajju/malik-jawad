import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Users, Database, BarChart, Target, Bot, Store, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "E-commerce Lead Generation Campaign",
      category: "B2C Lead Generation",
      description: "Led a comprehensive e-commerce lead generation campaign for a major retail client, implementing multi-channel strategies including social media, email marketing, and targeted ads. Generated 10,000+ qualified leads resulting in a 30% conversion rate and $200K+ in sales.",
      icon: <Store className="w-8 h-8 text-indigo-600" />,
      metrics: ["10,000+ Leads", "30% Conversion", "$200K+ Sales"],
      technologies: ["Facebook Ads", "Email Marketing", "CRM Integration"],
    },
    {
      title: "Healthcare Data Management Project",
      category: "Data Entry & Management",
      description: "Managed and optimized a large-scale healthcare database containing 1M+ patient records. Implemented data cleaning protocols, ensuring 99.9% accuracy while maintaining HIPAA compliance. Reduced data processing time by 40% through automation.",
      icon: <Database className="w-8 h-8 text-indigo-600" />,
      metrics: ["1M+ Records", "99.9% Accuracy", "40% Faster Processing"],
      technologies: ["SQL", "Data Cleaning", "Healthcare Systems"],
    },
    {
      title: "B2B Sales Pipeline Development",
      category: "Lead Generation",
      description: "Developed and executed a B2B lead generation strategy for a SaaS company, building a robust sales pipeline worth $500K. Utilized LinkedIn outreach, cold email campaigns, and targeted content marketing to generate high-quality leads.",
      icon: <BarChart className="w-8 h-8 text-indigo-600" />,
      metrics: ["$500K Pipeline", "200+ Qualified Leads", "45% Response Rate"],
      technologies: ["LinkedIn Sales Navigator", "Email Automation", "CRM"],
    },
    {
      title: "Marketing Automation Implementation",
      category: "CRM & Automation",
      description: "Designed and implemented a comprehensive marketing automation system for a mid-sized business, resulting in 65% improved lead nurturing efficiency and 40% increase in conversion rates.",
      icon: <Bot className="w-8 h-8 text-indigo-600" />,
      metrics: ["65% Efficiency Gain", "40% Higher Conversion", "5000+ Automated Emails"],
      technologies: ["HubSpot", "Zapier", "Email Marketing"],
    },
  ];

  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, TechCorp Solutions",
      content: "Malik's expertise in lead generation transformed our B2B sales process. His strategic approach and attention to detail helped us achieve a 200% increase in qualified leads within just three months. His work ethic and professionalism are outstanding.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director, E-Shop Global",
      content: "Working with Malik has been a game-changer for our e-commerce business. His data management skills and lead generation strategies helped us scale our operations significantly. The quality of leads and attention to detail in data management is exceptional.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Michael Chen",
      role: "Operations Manager, HealthTech Inc",
      content: "Malik's work on our healthcare database project was exemplary. His attention to detail and commitment to data accuracy while maintaining strict compliance requirements was impressive. He's a true professional who delivers results.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>Portfolio - Malik Jawad | Success Stories</title>
        <meta name="description" content="Explore Malik Jawad's portfolio of successful lead generation and data management projects. See how we've helped businesses achieve their goals." />
      </Helmet>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Portfolio & Success Stories
              </h1>
              <p className="text-xl text-indigo-100 mb-8">
                Showcasing impactful projects and transformative results in lead generation and data management
              </p>
              <div className="flex md:justify-start justify-center space-x-6">
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
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center"
            >
              <img
                src="https://raw.githubusercontent.com/Reysajju/malik-jawad/main/WhatsApp%20Image%202025-02-10%20at%2011.32.32%20AM.jpeg"
                alt="Malik Jawad"
                className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-indigo-50 p-3 rounded-lg">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-indigo-600 text-sm">{project.category}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="bg-indigo-50 p-2 rounded-lg text-center">
                        <div className="text-sm font-semibold text-indigo-600">{metric}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;