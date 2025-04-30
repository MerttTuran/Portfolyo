'use client';

import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaJava } from 'react-icons/fa';
import { SiJavascript, SiCyberdefenders, SiBurpsuite } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" />, level: 75 },
        { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-500" />, level: 75 },
        { name: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-500" />, level: 70 },
        { name: "React", icon: <FaReact size={40} className="text-blue-400" />, level: 50 },
      ]
    },
    {
      title: "Backend & Genel",
      skills: [
        { name: "Python", icon: <FaPython size={40} className="text-green-500" />, level: 75 },
        { name: "C", icon: <TbBrandCSharp size={40} className="text-purple-500" />, level: 60 },
        { name: "Java", icon: <FaJava size={40} className="text-red-500" />, level: 45 },
      ]
    },
    {
      title: "Siber Güvenlik",
      skills: [
        { name: "Burp Suite", icon: <SiBurpsuite size={40} className="text-orange-700" />, level: 75 },
        { name: "Nessus", icon: <SiCyberdefenders size={40} className="text-green-600" />, level: 85 },
        { name: "Acunetix", icon: <SiCyberdefenders size={40} className="text-blue-600" />, level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="w-full py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Teknik Yetkinliklerim
          </h2>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {skillCategories.map((category, index) => (
              <div key={index} className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex}
                      variants={item}
                      className="flex flex-col"
                    >
                      <div className="flex items-center mb-2">
                        <div className="mr-3">{skill.icon}</div>
                        <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <motion.div 
                          className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
                          style={{ width: `${skill.level}%` }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 