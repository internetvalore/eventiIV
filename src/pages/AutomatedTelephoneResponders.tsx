import React from 'react';
import { PhoneCall, List, Info, ArrowRight, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

export default function AutomatedTelephoneResponders() {
  const { language } = useLanguage();

  const content = language === 'it' ? {
    title: 'Risponditori Automatici Telefonici per Eventi',
    subtitle: 'Supporto Telefonico Intelligente per il Tuo Evento',
    description: 'Offri un\'esperienza informativa e coinvolgente ai partecipanti del tuo evento con i nostri risponditori automatici telefonici.',
    features: [
      {
        title: 'Informazioni sugli Espositori',
        description: 'Fornisci dettagli rapidi e precisi sugli espositori presenti al tuo evento.'
      },
      {
        title: 'Informazioni Logistiche',
        description: 'Offri indicazioni su orari, location, parcheggi e trasporti.'
      },
      {
        title: 'Supporto Multilingue',
        description: 'Accogli partecipanti da tutto il mondo con supporto in diverse lingue.'
      },
      {
        title: 'Integrazione con Sistemi CRM',
        description: 'Raccogli dati preziosi sui partecipanti e integra con i tuoi sistemi CRM.'
      }
    ],
    process: {
      title: 'Come Funziona',
      steps: [
        {
          title: 'Configurazione Personalizzata',
          description: 'Definiamo insieme le informazioni chiave da fornire.'
        },
        {
          title: 'Implementazione Rapida',
          description: 'Configuriamo il risponditore automatico in tempi brevi.'
        },
        {
          title: 'Test e Ottimizzazione',
          description: 'Verifichiamo e ottimizziamo il sistema per garantire la massima efficacia.'
        },
        {
          title: 'Monitoraggio Continuo',
          description: 'Monitoriamo le performance e apportiamo eventuali miglioramenti.'
        }
      ]
    },
    cta: {
      title: 'Pronto a migliorare l\'esperienza del tuo evento?',
      description: 'Contattaci per una consulenza gratuita.',
      button: 'Inizia Ora'
    }
  } : {
    title: 'Automated Telephone Responders for Events',
    subtitle: 'Intelligent Telephone Support for Your Event',
    description: 'Offer an informative and engaging experience to your event participants with our automated telephone responders.',
    features: [
      {
        title: 'Exhibitor Information',
        description: 'Provide quick and accurate details about the exhibitors at your event.'
      },
      {
        title: 'Logistical Information',
        description: 'Offer directions on schedules, locations, parking, and transportation.'
      },
      {
        title: 'Multilingual Support',
        description: 'Welcome participants from all over the world with support in different languages.'
      },
      {
        title: 'CRM System Integration',
        description: 'Collect valuable data on participants and integrate with your CRM systems.'
      }
    ],
    process: {
      title: 'How It Works',
      steps: [
        {
          title: 'Custom Configuration',
          description: 'Together we define the key information to provide.'
        },
        {
          title: 'Quick Implementation',
          description: 'We configure the automated responder in a short time.'
        },
        {
          title: 'Testing and Optimization',
          description: 'We verify and optimize the system to ensure maximum effectiveness.'
        },
        {
          title: 'Continuous Monitoring',
          description: 'We monitor performance and make any necessary improvements.'
        }
      ]
    },
    cta: {
      title: 'Ready to improve your event experience?',
      description: 'Contact us for a free consultation.',
      button: 'Start Now'
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">{content.title}</span>
            <span className="block text-blue-600 text-3xl sm:text-4xl mt-3">
              {content.subtitle}
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {content.description}
          </p>
        </motion.div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {content.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      {index === 0 && <Info className="h-6 w-6" />}
                      {index === 1 && <List className="h-6 w-6" />}
                      {index === 2 && <PhoneCall className="h-6 w-6" />}
                      {index === 3 && <BarChart2 className="h-6 w-6" />}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-lg font-medium text-gray-900">{feature.title}</h2>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            {content.process.title}
          </h2>
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-between">
              {content.process.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-white px-4"
                >
                  <div className="relative">
                    <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-lg font-bold">
                      {index + 1}
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                      <p className="mt-2 text-sm text-gray-500">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <div className="bg-blue-600 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 max-w-xl mx-auto sm:px-10 sm:py-16 lg:max-w-screen-xl lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  {content.cta.title}
                </h2>
                <p className="mt-4 text-lg leading-6 text-blue-100">
                  {content.cta.description}
                </p>
                <Link
                  to="/"
                  state={{ scrollToContact: true }}
                  className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-300"
                >
                  {content.cta.button}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
