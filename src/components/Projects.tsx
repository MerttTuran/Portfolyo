'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projectCategories = ['all', 'siber güvenlik', 'web', 'diğer'];
  
  const projects = [
    {
      title: "Web Zafiyet Tarama Aracı",
      description: "Python ile geliştirilmiş, web uygulamalarındaki yaygın güvenlik açıklarını tespit eden bir tarama aracı.",
      image: "/projects/project1.jpg",
      category: "siber güvenlik",
      tech: ["Python", "BeautifulSoup", "Requests"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Siber Güvenlik Eğitim Platformu",
      description: "Siber güvenlik alanında temel eğitimleri içeren interaktif bir web uygulaması.",
      image: "/projects/project2.jpg",
      category: "web",
      tech: ["HTML", "CSS", "JavaScript", "Firebase"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Ağ Trafik Monitörü",
      description: "Yerel ağ trafiğini analiz eden ve güvenlik tehditlerine karşı uyarı veren bir Java uygulaması.",
      image: "/projects/project3.jpg",
      category: "siber güvenlik",
      tech: ["Java", "JavaFX", "Pcap4J"],
      links: {
        github: "#",
        live: null
      }
    },
    {
      title: "Portfolyo Sitesi",
      description: "React ve Next.js kullanılarak geliştirilmiş kişisel portfolyo web sitesi.",
      image: "/projects/project4.jpg",
      category: "web",
      tech: ["React", "Next.js", "Tailwind CSS"],
      links: {
        github: "https://github.com/MerttTuran/Portfolyo",
        live: "#"
      }
    },
    {
      title: "Sızma Testi Rapor Oluşturucu",
      description: "Sızma testlerinin sonuçlarını otomatik olarak rapor haline getiren bir araç.",
      image: "/projects/project5.jpg",
      category: "diğer",
      tech: ["Python", "ReportLab", "Django"],
      links: {
        github: "#",
        live: null
      }
    },
    {
      title: "Zafiyet Veritabanı Uygulaması",
      description: "Bilinen güvenlik zafiyetlerini kategorize eden ve güncel tutan bir veritabanı uygulaması.",
      image: "/projects/project6.jpg",
      category: "siber güvenlik",
      tech: ["React", "Node.js", "MongoDB"],
      links: {
        github: "#",
        live: "#"
      }
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="w-full py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Projelerim
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {projectCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-full capitalize text-sm font-medium transition-colors duration-300 ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 bg-gray-300 dark:bg-gray-700 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400 text-lg font-medium">
                    {project.title}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4 h-20 overflow-hidden">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.links.github && (
                      <a 
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <FaGithub size={16} />
                        <span className="text-sm">GitHub</span>
                      </a>
                    )}
                    
                    {project.links.live && (
                      <a 
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <FaExternalLinkAlt size={14} />
                        <span className="text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 