'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Mert Turan
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-blue-600 dark:text-blue-400 mb-8">
            Siber Güvenlik Uzmanı & Front-end Geliştirici
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Konya Teknik Üniversitesi Bilgisayar Mühendisliği öğrencisi, siber güvenlik tutkunu ve topluluk lideri.
            Güvenli yazılımlar geliştirmeye odaklanıyorum.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-8 py-3 rounded-md bg-blue-600 text-white font-medium text-lg hover:bg-blue-700 transition duration-300"
            >
              İletişime Geç
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="px-8 py-3 rounded-md border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-medium text-lg hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Projelerim
            </motion.a>
          </div>
          
          <div className="flex justify-center mt-10 gap-6">
            <motion.a 
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/MerttTuran" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
            >
              <FaGithub size={30} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/mert-turann/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
            >
              <FaLinkedin size={30} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://medium.com/@mertTrn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
            >
              <FaMedium size={30} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 