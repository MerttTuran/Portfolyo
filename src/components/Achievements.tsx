import React from 'react';
import { Shield, Award } from 'lucide-react';

const Achievements = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[var(--foreground)] dark:text-[var(--foreground)]">Başarılar & Sertifikalar</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* KTÜN VDP Kartı */}
          <div className="bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 text-[var(--foreground)] dark:text-[var(--foreground)]">KTÜN VDP Listesi Üyesi</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
              Konya Teknik Üniversitesi&apos;nin resmi Vulnerability Disclosure Program listesinde yer almaktayım.
            </p>
            <div className="text-center">
              <a
                href="https://www.ktun.edu.tr/Dosyalar/1070/files/siber_guvenlik/vdplist.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300"
              >
                <Award className="w-4 h-4 mr-2" />
                Doğrula
              </a>
            </div>
          </div>
          {/* Cybersecurity Fundamentals Sertifika Kartı */}
          <div className="bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 text-[var(--foreground)] dark:text-[var(--foreground)]">Cybersecurity Fundamentals</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
              IBM SkillsBuild tarafından verilen bu sertifikaya sahibim. Sertifika kapsamında; siber güvenlik kavramları, tehdit türleri, saldırılar, sosyal mühendislik, şifreleme ve savunma stratejileri gibi temel konularda bilgi edindim.
            </p>
            <div className="text-center">
              <a
                href="https://www.credly.com/badges/bdafe382-ed94-40dd-be3a-d2787f654ae1/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300"
              >
                <Award className="w-4 h-4 mr-2" />
                Doğrula
              </a>
            </div>
          </div>
          {/* Yeni Sertifika Kartı */}
          <div className="bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 text-[var(--foreground)] dark:text-[var(--foreground)]">Siber Vatan Sertifikası</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
            Sanayi ve Teknoloji Bakanlığı onaylı Türkiye Siber Vatan Programı sertifikasına sahibim. Bu program, nitelikli siber güvenlik uzmanları yetiştirmek ve Türkiye'nin dijital savunma kapasitesini artırmak amacıyla ulusal iş birliğiyle yürütülmektedir.

Sertifika kapsamında aşağıdaki yetkinlikleri edindim:

Zararlı Yazılım Analizi,

Tersine Mühendislik,

Sızma Testleri, 

Güvenlik Analizi,

Web Güvenliği Analisti.
            </p>
            <div className="text-center">
              <a
                href="https://drdogrulama.sanayi.gov.tr/tr/verify/70194366410470/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300"
              >
                <Award className="w-4 h-4 mr-2" />
                Doğrula
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 dark:border-gray-700 my-8"></div>
      </div>
    </section>
  );
};

export default Achievements; 