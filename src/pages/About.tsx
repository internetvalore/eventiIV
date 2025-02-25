import React from 'react';
import { Users, Target, TrendingUp, Linkedin, Briefcase, Award, BarChart as ChartBar, Star, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function About() {
  const { t, language } = useLanguage();

  const features = language === 'it' ? [
    {
      title: 'Esperienza Decennale',
      description: 'Oltre 10 anni di successi nel marketing digitale per eventi e minisiti.'
    },
    {
      title: 'Approccio Innovativo',
      description: 'Utilizziamo le più recenti tecnologie e strategie per garantire risultati ottimali negli eventi.'
    },
    {
      title: 'Risultati Misurabili',
      description: 'Monitoraggio costante e report dettagliati per dimostrare il ROI delle nostre strategie negli eventi.'
    }
  ] : [
    {
      title: 'Decade of Experience',
      description: 'Over 10 years of success in digital marketing for events and minisites.'
    },
    {
      title: 'Innovative Approach',
      description: 'We use the latest technologies and strategies to ensure optimal results in events.'
    },
    {
      title: 'Measurable Results',
      description: 'Constant monitoring and detailed reports to demonstrate the ROI of our strategies in events.'
    }
  ];

  const methodologySteps = language === 'it' ? [
    {
      title: 'Analisi Iniziale',
      description: 'Studio approfondito del tuo evento e del mercato di riferimento.'
    },
    {
      title: 'Strategia Personalizzata',
      description: 'Sviluppo di un piano d\'azione su misura per il tuo evento.'
    },
    {
      title: 'Implementazione',
      description: 'Esecuzione precisa e monitoraggio costante delle performance dell\'evento.'
    },
    {
      title: 'Ottimizzazione Continua',
      description: 'Analisi dei risultati e miglioramento costante delle strategie per eventi.'
    }
  ] : [
    {
      title: 'Initial Analysis',
      description: 'In-depth study of your event and target market.'
    },
    {
      title: 'Custom Strategy',
      description: 'Development of a tailored action plan for your event.'
    },
    {
      title: 'Implementation',
      description: 'Precise execution and constant performance monitoring of the event.'
    },
    {
      title: 'Continuous Optimization',
      description: 'Results analysis and constant strategy improvement for events.'
    }
  ];

  const content = {
    title: language === 'it' ? 'Chi Siamo' : 'About Us',
    subtitle: language === 'it' ? 'La Tua Agenzia di Marketing Digitale per Eventi' : 'Your Digital Marketing Agency for Events',
    description: language === 'it' 
      ? 'Trasformiamo le sfide digitali degli eventi in opportunità di crescita per il tuo business'
      : 'We transform digital challenges of events into growth opportunities for your business',
    reputation: {
      title: language === 'it' ? 'La Nostra Reputazione' : 'Our Reputation',
      description: language === 'it' 
        ? 'Analizziamo il vostro evento prima di iniziare a lavorare con voi declinando chi non pensiamo di poter aiutare. Le recensioni su Google possono solo confermarlo'
        : 'We analyze your event before starting to work with you, declining those we don\'t think we can help. Google reviews can only confirm this',
      approach: {
        title: language === 'it' ? 'Il Nostro Approccio' : 'Our Approach',
        description: language === 'it'
          ? 'Combiniamo creatività e dati per sviluppare strategie di marketing vincenti per eventi'
          : 'We combine creativity and data to develop winning marketing strategies for events'
      }
    },
    founder: {
      title: language === 'it' ? 'Il Nostro Fondatore' : 'Our Founder',
      subtitle: language === 'it'
        ? 'Ingegnere, Imprenditore Seriale, Appassionato di Tecnologia per Eventi'
        : 'Engineer, Serial Entrepreneur, Technology Enthusiast for Events',
      description: language === 'it'
        ? 'Esperto di marketing digitale per eventi con oltre 15 anni di esperienza nel settore'
        : 'Digital marketing expert for events with over 15 years of industry experience',
      linkedin: language === 'it' ? 'Connettiti su LinkedIn' : 'Connect on LinkedIn'
    },
    methodology: {
      title: language === 'it' ? 'La Nostra Metodologia' : 'Our Methodology'
    }
  };

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
            {content.title}
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {content.subtitle}
          </motion.p>
          <motion.p 
            className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {content.description}
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl shadow-xl p-8 sm:p-10 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6"
              >
                <Star className="h-8 w-8 text-yellow-300" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">{content.reputation.title}</h3>
              <p className="text-lg mb-6">{content.reputation.description}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center space-x-1"
                >
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-300 fill-current" />
                  ))}
                </motion.div>
                <span className="text-lg font-semibold">Google Verified Reviews</span>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 mr-2" />
                  <span className="text-lg font-semibold">{content.reputation.approach.title}</span>
                </div>
                <p className="text-base">
                  {content.reputation.approach.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-8 sm:p-10 bg-gradient-to-r from-blue-600 to-blue-400">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold">{content.founder.title}</h3>
                  <div className="mt-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="inline-block rounded-full p-1 bg-white/10 backdrop-blur-sm"
                    >
                      <img
                        className="h-32 w-32 rounded-full object-cover"
                        src="https://leprimescelte.com/wp-content/uploads/2025/02/AFimmagine.jpg"
                        alt="Andrea Falzin"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className="px-6 py-8 sm:p-10">
                <div className="space-y-4 text-center">
                  <h4 className="text-xl font-semibold text-gray-900">{content.founder.subtitle}</h4>
                  <p className="text-gray-500">{content.founder.description}</p>
                  <motion.a
                    href="https://www.linkedin.com/in/andrea-falzin-788a1528/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {content.founder.linkedin} <Linkedin className="ml-2 h-5 w-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="max-w-5xl mx-auto">
            <motion.div className="text-center">
              <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{content.methodology.title}</h3>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                {language === 'it'
                  ? 'Il nostro approccio si basa su un\'analisi approfondita, una strategia personalizzata, un\'implementazione precisa e un\'ottimizzazione continua.'
                  : 'Our approach is based on in-depth analysis, a personalized strategy, precise implementation and continuous optimization.'}
              </p>
            </motion.div>
            <div className="mt-12">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {methodologySteps.map((step, index) => (
                  <motion.div key={index} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                        <Briefcase className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{step.title}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{step.description}</dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
