import React from 'react';
import { Rocket, Clock, CheckCircle, Wrench, Calendar, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true }
};

export default function InstantWebsites() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleStartNow = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/', { state: { scrollToContact: true } });
  };

  const steps = [
    {
      icon: CheckCircle,
      title: t('instantWebsites.steps.discovery.title'),
      description: t('instantWebsites.steps.discovery.description'),
      day: "1-2"
    },
    {
      icon: Wrench,
      title: t('instantWebsites.steps.planning.title'),
      description: t('instantWebsites.steps.planning.description'),
      day: "3"
    },
    {
      icon: Rocket,
      title: t('instantWebsites.steps.development.title'),
      description: t('instantWebsites.steps.development.description'),
      day: "4-6"
    },
    {
      icon: Sparkles,
      title: t('instantWebsites.steps.launch.title'),
      description: t('instantWebsites.steps.launch.description'),
      day: "7"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: language === 'it' ? 'Sviluppo Rapido' : 'Rapid Development',
      description: language === 'it' 
        ? 'Dal primo contatto al lancio in soli 7 giorni, senza compromessi sulla qualità. Siti web perfetti per eventi.'
        : 'From first contact to launch in just 7 days, without compromising on quality. Perfect websites for events.'
    },
    {
      icon: Calendar,
      title: language === 'it' ? 'Supporto Annuale' : 'Annual Support',
      description: language === 'it'
        ? 'Assistenza tecnica e consulenza inclusa per tutto l\'anno.'
        : 'Technical assistance and consultation included for the entire year.'
    },
    {
      icon: Zap,
      title: language === 'it' ? 'Pacchetto Modifiche Annuali' : 'Annual Changes Package',
      description: language === 'it'
        ? 'Pacchetto modifiche annuali incluso nel prezzo iniziale.'
        : 'Annual changes package included in the initial price.'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-base text-blue-600 font-semibold tracking-wide uppercase"
            {...fadeInUp}
          >
            {t('instantWebsites.title')}
          </motion.h2>
          <motion.p 
            className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('instantWebsites.subtitle')}
          </motion.p>
          <motion.p 
            className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto"
            {...fadeInUp}
          >
            {t('instantWebsites.descriptionForEvents')}
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          className="mt-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-400 to-blue-600" />
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:justify-end' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className={`${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex-grow`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                        Day {step.day}
                      </span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6"
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t('instantWebsites.cta.title')}
            </h3>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              {t('instantWebsites.cta.description')}
            </p>
            <motion.button
              onClick={handleStartNow}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              {t('instantWebsites.cta.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
