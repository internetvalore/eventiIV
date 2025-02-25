import React from 'react';
import { Target, Facebook, Search, BarChart2, ArrowRight } from 'lucide-react';
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

export default function Specializations() {
  const { language } = useLanguage();

  const content = {
    title: language === 'it' ? 'Specializzazioni' : 'Specializations',
    subtitle: language === 'it' ? 'Expertise in Marketing Digitale per Eventi' : 'Digital Marketing Expertise for Events',
    description: language === 'it'
      ? 'Soluzioni specializzate per massimizzare la visibilità e l\'engagement nel settore eventi, dalla generazione di visitatori all\'ottimizzazione della conversione.'
      : 'Specialized solutions to maximize visibility and engagement in the event sector, from visitor generation to conversion optimization.'
  };

  const googleAdsFeatures = language === 'it' ? [
    {
      title: 'Campagne Ottimizzate per Eventi',
      description: 'Ottimizzazione continua delle campagne Google Ads per attrarre visitatori qualificati a mostre e fiere.'
    },
    {
      title: 'Targeting Preciso per il Settore Eventi',
      description: 'Raggiungimento del pubblico ideale per il tuo evento con targeting demografico e comportamentale specifico.'
    },
    {
      title: 'Analisi Dettagliata delle Performance degli Annunci Evento',
      description: 'Report completi e analisi approfondite delle performance delle campagne pubblicitarie per eventi.'
    }
  ] : [
    {
      title: 'Optimized Campaigns for Events',
      description: 'Continuous optimization of Google Ads campaigns to attract qualified visitors to exhibitions and fairs.'
    },
    {
      title: 'Precise Targeting for the Event Sector',
      description: 'Reach your ideal audience for your event with specific demographic and behavioral targeting.'
    },
    {
      title: 'Detailed Analysis of Event Ad Performance',
      description: 'Comprehensive reports and in-depth analysis of the performance of advertising campaigns for events.'
    }
  ];

  const facebookAdsFeatures = language === 'it' ? [
    {
      title: 'Audience Personalizzate per Eventi',
      description: 'Creazione di audience specifiche su Facebook basate sui partecipanti ideali per il tuo evento.'
    },
    {
      title: 'Creatività Coinvolgente per Promozioni Evento',
      description: 'Design accattivante e messaggi persuasivi per massimizzare l\'engagement con le promozioni del tuo evento su Facebook.'
    },
    {
      title: 'Retargeting Avanzato per Visitatori di Eventi',
      description: 'Strategie di remarketing per riconvertire visitatori interessati al tuo evento su Facebook.'
    }
  ] : [
    {
      title: 'Custom Audiences for Events',
      description: 'Creation of specific audiences on Facebook based on the ideal attendees for your event.'
    },
    {
      title: 'Engaging Creativity for Event Promotions',
      description: 'Captivating design and persuasive messages to maximize engagement with your event promotions on Facebook.'
    },
    {
      title: 'Advanced Retargeting for Event Visitors',
      description: 'Remarketing strategies to reconvert visitors interested in your event on Facebook.'
    }
  ];

  const seoFeatures = language === 'it' ? [
    {
      title: 'Ottimizzazione On-Page per Eventi',
      description: 'Miglioramento di contenuti e struttura del sito web del tuo evento per i motori di ricerca.'
    },
    {
      title: 'Link Building per il Settore Eventi',
      description: 'Costruzione di backlink di qualità per aumentare l\'autorità del dominio del tuo evento.'
    },
    {
      title: 'SEO Tecnico per Performance Ottimali del Sito Evento',
      description: 'Ottimizzazione della performance e dell\'architettura del sito web del tuo evento.'
    }
  ] : [
    {
      title: 'On-Page Optimization for Events',
      description: 'Improvement of content and structure of your event website for search engines.'
    },
    {
      title: 'Link Building for the Event Sector',
      description: 'Quality backlink building to increase the domain authority of your event.'
    },
    {
      title: 'Technical SEO for Optimal Event Site Performance',
      description: 'Optimization of the performance and architecture of your event website.'
    }
  ];

  const analyticsFeatures = language === 'it' ? [
    {
      title: 'Dashboard Personalizzate per Eventi',
      description: 'Visualizzazione chiara dei KPI più importanti per il successo del tuo evento.'
    },
    {
      title: 'Tracciamento Avanzato del Comportamento dei Visitatori',
      description: 'Monitoraggio dettagliato del comportamento degli utenti sul sito web del tuo evento.'
    },
    {
      title: 'Report Automatizzati con Insights Chiave per Eventi',
      description: 'Generazione automatica di report periodici con insights chiave per migliorare le performance del tuo evento.'
    }
  ] : [
    {
      title: 'Custom Dashboards for Events',
      description: 'Clear visualization of the most important KPIs for the success of your event.'
    },
    {
      title: 'Advanced Tracking of Visitor Behavior',
      description: 'Detailed monitoring of user behavior on your event website.'
    },
    {
      title: 'Automated Reports with Key Insights for Events',
      description: 'Automatic generation of periodic reports with key insights to improve the performance of your event.'
    }
  ];

  const sections = {
    googleAds: {
      title: language === 'it' ? 'Google Ads per Eventi' : 'Google Ads for Events',
      description: language === 'it'
        ? 'Campagne pubblicitarie mirate per attrarre visitatori qualificati al tuo evento.'
        : 'Targeted advertising campaigns to attract qualified visitors to your event.'
    },
    facebookAds: {
      title: language === 'it' ? 'Facebook Ads per Eventi' : 'Facebook Ads for Events',
      description: language === 'it'
        ? 'Strategie social media per raggiungere il tuo pubblico target e promuovere il tuo evento su Facebook.'
        : 'Social media strategies to reach your target audience and promote your event on Facebook.'
    },
    seo: {
      title: 'SEO per Eventi',
      description: language === 'it'
        ? 'Ottimizzazione per i motori di ricerca per aumentare la visibilità organica del tuo evento.'
        : 'Search engine optimization to increase the organic visibility of your event.'
    },
    analytics: {
      title: 'Analytics per Eventi',
      description: language === 'it'
        ? 'Analisi approfondita dei dati per decisioni basate sui risultati e miglioramento continuo del tuo evento.'
        : 'In-depth data analysis for results-based decisions and continuous improvement of your event.'
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
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {content.title}
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {content.subtitle}
          </motion.p>
          <motion.p
            className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {content.description}
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              className="group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform">
                <div className="flex items-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="p-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl shadow-lg"
                  >
                    <Target className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="ml-4 text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {sections.googleAds.title}
                  </h3>
                </div>
                <div className="mt-6 space-y-4">
                  {googleAdsFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-6 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <h4 className="text-lg font-medium text-gray-900 flex items-center">
                        <ArrowRight className="h-5 w-5 text-blue-600 mr-2" />
                        {feature.title}
                      </h4>
                      <p className="mt-2 text-gray-500">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="p-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl shadow-lg"
                  >
                    <Facebook className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="ml-4 text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {sections.facebookAds.title}
                  </h3>
                </div>
                <div className="mt-6 space-y-4">
                  {facebookAdsFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-6 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <h4 className="text-lg font-medium text-gray-900 flex items-center">
                        <ArrowRight className="h-5 w-5 text-blue-600 mr-2" />
                        {feature.title}
                      </h4>
                      <p className="mt-2 text-gray-500">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              className="group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="p-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl shadow-lg"
                  >
                    <Search className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="ml-4 text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {sections.seo.title}
                  </h3>
                </div>
                <div className="mt-6">
                  <p className="text-gray-500 mb-4">
                    {sections.seo.description}
                  </p>
                  <div className="space-y-4">
                    {seoFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start bg-white p-4 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors duration-300"
                        whileHover={{ y: -5 }}
                      >
                        <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">{feature.title}</h4>
                          <p className="mt-1 text-sm text-gray-500">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="p-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl shadow-lg"
                  >
                    <BarChart2 className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="ml-4 text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {sections.analytics.title}
                  </h3>
                </div>
                <div className="mt-6">
                  <p className="text-gray-500 mb-4">
                    {sections.analytics.description}
                  </p>
                  <div className="space-y-4">
                    {analyticsFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start bg-white p-4 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors duration-300"
                        whileHover={{ y: -5 }}
                      >
                        <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">{feature.title}</h4>
                          <p className="mt-1 text-sm text-gray-500">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
