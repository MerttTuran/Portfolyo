'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ text: '', isError: false });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      
      // Add form fields to FormData
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      
      // Add the access key
      formDataToSend.append('access_key', '150696ac-959a-45af-92be-0838f9e3f3f3');
      
      // Add honeypot field to prevent spam
      formDataToSend.append('botcheck', '');
      
      // Send the form using Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitMessage({
          text: 'Mesajınız gönderildi! En kısa sürede size dönüş yapacağım.',
          isError: false
        });
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(data.message || 'Bir şeyler yanlış gitti. Lütfen daha sonra tekrar deneyin.');
      }
    } catch (error) {
      setSubmitMessage({
        text: error instanceof Error ? error.message : 'Bir şeyler yanlış gitti. Lütfen daha sonra tekrar deneyin.',
        isError: true
      });
    } finally {
      setIsSubmitting(false);
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage({ text: '', isError: false });
      }, 5000);
    }
  };
  
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-blue-500" size={20} />,
      title: "E-posta",
      value: "turanmert812@gmail.com",
      link: "mailto:turanmert812@gmail.com"
    },
    {
      icon: <FaPhone className="text-blue-500" size={20} />,
      title: "Telefon",
      value: "+90 (534) 871 65 95",
      link: "tel:+905348716595"
    },
    {
      icon: <FaMapMarkerAlt className="text-blue-500" size={20} />,
      title: "Konum",
      value: "Konya, Türkiye",
      link: "https://goo.gl/maps/konya"
    }
  ];

  return (
    <section id="contact" className="w-full py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            İletişime Geç
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  İletişim Bilgileri
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a 
                      key={index}
                      href={info.link}
                      className="flex items-start gap-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <div className="mt-1">{info.icon}</div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{info.title}</h4>
                        <p>{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Sosyal Medya
                </h3>
                
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/MerttTuran" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-200 dark:bg-gray-600 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/mert-turann/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-200 dark:bg-gray-600 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Mesaj Gönder
                </h3>
                
                {submitMessage.text && (
                  <div className={`p-4 mb-6 rounded-lg ${submitMessage.isError ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'}`}>
                    {submitMessage.text}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field to prevent spam */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Ad Soyad
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        E-posta
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Konu
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      required
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto"
                  >
                    {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="mt-20 py-6 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 md:px-6 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Mert Turan. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact; 