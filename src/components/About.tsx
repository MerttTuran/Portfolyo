'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="w-full py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Hakkımda
          </h2>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 md:p-8 shadow-sm">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Bilgisayar Mühendisliği 3. sınıf öğrencisi olarak Konya Teknik Üniversitesi&apos;nde eğitim 
              görmekteyim. 2022 yılında başladığım bu yolculukta, özellikle <span className="font-medium text-blue-600 dark:text-blue-400">siber güvenlik</span> alanına 
              yoğun ilgi duyuyorum.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              1 yıl boyunca <span className="font-medium">Sibereum</span> firmasında çalıştım. Bu süre zarfında web ve 
              iç ağ zafiyet testleri gerçekleştirdim; ayrıca bu testlerin ardından teknik raporlama 
              süreçlerinde aktif rol aldım.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Halihazırda 6 aydır <span className="font-medium">Divizyon</span> çatısı altında brand ambassador olarak 
              çalışıyor, dijital iletişim ve teknoloji topluluklarını bir araya getiren stratejik kampüs 
              çalışmaları yürütüyorum.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Aynı zamanda <span className="font-medium">KTÜN Siber Güvenlik Topluluğu</span>&apos;nun başkanı olarak siber 
              güvenlik farkındalığını artırmaya yönelik etkinlikler ve eğitimler organize ediyorum.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Eğitim</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Konya Teknik Üniversitesi
                <br />
                Bilgisayar Mühendisliği
                <br />
                2022 - Devam Ediyor
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Deneyim</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Sibereum - Jr. Penetrasyon Tester
                <br />
                <br />
                Divizyon - Brand Ambassador
                <br />
                <br />
                KTÜN Siber Güvenlik Topluluğu - Başkan
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">İlgi Alanları</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Siber Güvenlik
                <br />
                Web Geliştirme
                <br />
                Ağ Güvenliği
                <br />
                Bug Bounty
                <br />
                Topluluk Liderliği
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 