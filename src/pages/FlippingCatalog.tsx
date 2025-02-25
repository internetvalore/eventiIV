import React from 'react';
import { Book, Smartphone, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
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

export default function FlippingCatalog() {
  const { language } = useLanguage();

  const content = language === 'it' ? {
    title: 'Flipping Catalog Eventi',
    description: 'Trasforma la tua brochure evento in un catalogo digitale interattivo. Metti in mostra espositori, speaker e workshop in un formato sfogliabile.',
    subtitle: 'Un modo coinvolgente per presentare i contenuti del tuo evento, aumentando l\'interesse e la partecipazione.',
    advantages: {
      title: 'Vantaggi del Flipping Catalog Eventi',
      items: [
        {
          title: 'Esperienza Immersiva',
          description: 'Effetto di sfogliamento realistico che cattura l\'attenzione dei partecipanti, invitandoli a scoprire espositori, speaker e sessioni.'
        },
        {
          title: 'Ottimizzato per Mobile',
          description: 'Visualizzazione perfetta su tutti i dispositivi, garantendo un\'esperienza utente ottimale anche su smartphone e tablet durante l\'evento.'
        },
        {
          title: 'Interazione Aumentata',
          description: 'Call-to-action integrate per facilitare l\'iscrizione ai workshop, la visita agli stand degli espositori e l\'accesso alle informazioni sugli speaker.'
        }
      ]
    },
    useCases: {
      title: 'Casi d\'uso',
      items: [
        {
          title: 'Brochure Evento',
          description: 'Presenta tutti i dettagli del tuo evento in un formato digitale sfogliabile, inclusi gli espositori, gli speaker e il programma dei workshop.'
        },
        {
          title: 'Guida Espositori',
          description: 'Crea una guida interattiva per gli espositori, con profili dettagliati, offerte speciali e informazioni di contatto.'
        },
        {
          title: 'Programma Workshop',
          description: 'Offri un programma workshop interattivo, con descrizioni delle sessioni, biografie degli speaker e link per l\'iscrizione.'
        }
      ]
    }
  } : {
    title: 'Flipping Catalog Events',
    description: 'Transform your event brochure into an interactive digital catalog. Showcase exhibitors, speakers, and workshops in a page-turning format.',
    subtitle: 'An engaging way to present your event content, increasing interest and participation.',
    advantages: {
      title: 'Flipping Catalog Events Advantages',
      items: [
        {
          title: 'Immersive Experience',
          description: 'Realistic page-turning effect that captures the attention of attendees, inviting them to discover exhibitors, speakers, and sessions.'
        },
        {
          title: 'Mobile Optimized',
          description: 'Perfect visualization on all devices, ensuring an optimal user experience even on smartphones and tablets during the event.'
        },
        {
          title: 'Increased Interaction',
          description: 'Integrated call-to-actions to facilitate workshop registration, exhibitor booth visits, and access to speaker information.'
        }
      ]
    },
    useCases: {
      title: 'Use Cases',
      items: [
        {
          title: 'Event Brochure',
          description: 'Present all the details of your event in a page-turning digital format, including exhibitors, speakers, and the workshop program.'
        },
        {
          title: 'Exhibitor Guide',
          description: 'Create an interactive guide for exhibitors, with detailed profiles, special offers, and contact information.'
        },
        {
          title: 'Workshop Program',
          description: 'Offer an interactive workshop program, with session descriptions, speaker biographies, and registration links.'
        }
      ]
    }
  };

  return (
    <div className="bg-white">
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
            className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {content.description}
          </motion.p>
          <motion.p 
            className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {content.subtitle}
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
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="aspect-w-16 aspect-h-9"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  className="object-cover shadow-lg rounded-lg"
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Group of people looking at tablet content"
                />
              </motion.div>
            </motion.div>
            <motion.div 
              className="space-y-6"
              variants={{
                hidden: { opacity: 0, x: 50 },
                show: { opacity: 1, x: 0 }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900">
                {content.advantages.title}
              </h3>
              <div className="space-y-4">
                {content.advantages.items.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        {index === 0 && <Book className="h-6 w-6 text-blue-600" />}
                        {index === 1 && <Smartphone className="h-6 w-6 text-blue-600" />}
                        {index === 2 && <Zap className="h-6 w-6 text-blue-600" />}
                      </motion.div>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">{item.title}</h4>
                      <p className="mt-1 text-gray-500">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="bg-blue-50 rounded-lg px-6 py-8 sm:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{content.useCases.title}</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {content.useCases.items.map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg font-medium text-gray-900">{item.title}</h4>
                  <p className="mt-2 text-gray-500">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
