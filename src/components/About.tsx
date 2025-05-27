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
              Konya Teknik Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisiyim. 2022 yılında başladığım lisans eğitimim süresince özellikle <span className="font-medium text-blue-600 dark:text-blue-400">siber güvenlik</span> alanına yoğun bir ilgi geliştirdim ve bu alanda kendimi hem teknik hem de topluluk yöneticiliği açısından geliştirmeye odaklandım.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Sektörel tecrübeme 1 yıl süreyle çalıştığım <span className="font-medium">Sibereum</span> firmasında başladım. Burada web uygulamaları ve iç ağlar üzerinde zafiyet testleri gerçekleştirdim. Bunun yanı sıra bu testlerin ardından yürütülen teknik raporlama süreçlerinde de aktif görev aldım. Bu süreç, hem teknik analiz yetkinliğimi hem de yazılı iletişim becerilerimi geliştirmemde önemli rol oynadı.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Son 6 aydır <span className="font-medium">Divizyon</span> çatısı altında Brand Ambassador olarak görev yapmaktayım. Bu rol kapsamında,  yazılım ve dijital sanatlar  alanında  kampüs bazlı stratejik çalışmalar yürütüyor; yazılım ve dijital sanatlar topluluklarıyla iş birliği içinde projeler üretip  etkinlikler organize ediyoruz.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Aynı zamanda <span className="font-medium">KTÜN Siber Güvenlik Topluluğu</span> başkanı olarak, üniversite içerisinde siber güvenlik farkındalığını artırmaya yönelik teknik eğitimler, seminerler ve atölyeler düzenliyorum. Bu görevim, liderlik becerilerimi geliştirmenin yanı sıra, teknik bilgimi topluluklara aktarma yönünde de bana güçlü bir platform sunuyor.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Eğitim</h3>
              <div className="text-gray-700 dark:text-gray-300 flex flex-col items-center space-y-1">
                <span>Konya Teknik Üniversitesi</span>
                <span>Bilgisayar Mühendisliği</span>
                <span>2022 - Devam Ediyor</span>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Deneyim</h3>
              <div className="text-gray-700 dark:text-gray-300 flex flex-col items-center space-y-1">
                <span>Sibereum - Jr. Penetrasyon Tester</span>
                <span>Divizyon - Brand Ambassador</span>
                <span>KTÜN Siber Güvenlik Topluluğu - Başkan</span>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">İlgi Alanları</h3>
              <div className="text-gray-700 dark:text-gray-300 flex flex-col items-center space-y-1">
                <span>Siber Güvenlik</span>
                <span>Web Geliştirme</span>
                <span>Ağ Güvenliği</span>
                <span>Bug Bounty</span>
                <span>Topluluk Liderliği</span>
              </div>
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