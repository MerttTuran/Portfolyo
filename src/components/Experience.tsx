'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaUniversity } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Brand Ambassador",
      company: "Divizyon",
      period: "Aralık 2024 - Devam Ediyor",
      description: "Divizyon Açık İnovasyon Platformu çatısı altında yürütülen kampüs odaklı stratejik çalışmalarda yer alıyor; kolektif üretim ve öğrenme yaklaşımıyla düzenlenen yazılım sprintlerine katılarak ekip halinde web ve mobil uygulama geliştirme süreçlerinde yeni kazanımlar elde ettim.",
      icon: <FaBriefcase className="text-blue-500" size={24} />,
      skills: ["Yazılım & Dijital Sanatlar", "Organizasyon", "Topluluk Yönetimi"]
    },
    {
      title: "Başkan",
      company: "KTÜN Siber Güvenlik Topluluğu",
      period: "Ekim 2022 - Devam Ediyor",
      description: "Siber güvenlik topluluğunun başkanı olarak, siber güvenlik alanına ilgi duyan öğrencileri bir araya getirerek teknik bilgi paylaşımını teşvik eden etkinlikler ve eğitimler organize ediyor; aynı zamanda ekibimizle birlikte çeşitli Capture The Flag (CTF) yarışmalarına aktif olarak katılım sağlıyoruz.",
      icon: <FaUniversity className="text-green-500" size={24} />,
      skills: ["Liderlik", "Etkinlik Organizasyonu", "Siber Güvenlik Eğitimi"]
    },
    {
      title: "Jr. Penetrasyon Tester",
      company: "Sibereum",
      period: "Ocak 2024 - Şubat 2025",
      description: "Web ve iç ağ sistemlerine yönelik kapsamlı zafiyet testleri gerçekleştirdim; elde edilen bulguların teknik düzeyde analiz edilip, üst yönetime ve ilgili birimlere yönelik detaylı raporların hazırlanmasında aktif görev aldım.",
      icon: <FaBriefcase className="text-red-500" size={24} />,
      skills: ["Web Zafiyet Testleri", "Ağ Zafiyet Testleri", "Teknik Raporlama"]
    }
  ];

  return (
    <section id="experience" className="w-full py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Deneyim
          </h2>
          
          <div className="relative border-l-2 border-blue-500 dark:border-blue-400 ml-6 pl-8 space-y-10">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-14 flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-700 border-2 border-blue-500 dark:border-blue-400">
                  {exp.icon}
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title} | {exp.company}
                    </h3>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Experience; 