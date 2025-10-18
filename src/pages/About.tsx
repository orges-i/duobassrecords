import { motion } from 'motion/react';
import foundersImage from '../assets/089ea5095a042117f713291a5eb8665a2c0dee5c.png';

interface AboutProps {
  language: string;
}

const content = {
  al: {
    title: 'Rreth Nesh',
    subtitle: 'Historia jonë dhe njerëzit pas DuoBass Records',
    foundersTitle: 'Themeluesit',
    founders: [
      { 
        name: 'Pimi Isufi', 
        role: 'Themelues',
        bio: 'Me pasion të thellë për muzikën dhe vite përvojë në produksion, Pimi sjell vizionin kreativ në çdo projekt.'
      },
      { 
        name: 'Endrit Rexhepi', 
        role: 'Themelues',
        bio: 'Ekspert në teknologjinë muzikore dhe sound design, Endrit siguron që çdo track të ketë cilësinë më të lartë.'
      }
    ],
    story: {
      title: 'Historia Jonë',
      text: 'DuoBass Records u themelua me një vizion të qartë: të krijojmë muzikë cilësore dhe të mbështesim artistët në rrugëtimin e tyre drejt suksesit. Me pasion, përkushtim dhe teknologjinë më të fundit, ne kemi prodhuar qindra këngë që kanë prekur zemrat e miliona njerëzve.'
    },
    mission: {
      title: 'Misioni Ynë',
      text: 'Të ofrojmë shërbime produksioni muzikor në nivelin më të lartë dhe të ndihmojmë artistët të realizojnë potencialin e tyre të plotë. Ne besojmë në fuqinë e muzikës për të lidhur njerëzit dhe për të treguar histori.'
    },
  },
  en: {
    title: 'About Us',
    subtitle: 'Our story and the people behind DuoBass Records',
    foundersTitle: 'The Founders',
    founders: [
      { 
        name: 'Pimi Isufi', 
        role: 'Themelues',
        bio: 'With a deep passion for music and years of production experience, Pimi brings creative vision to every project.'
      },
      { 
        name: 'Endrit Rexhepi', 
        role: 'Themelues',
        bio: 'Expert in music technology and sound design, Endrit ensures every track has the highest quality.'
      }
    ],
    story: {
      title: 'Our Story',
      text: 'DuoBass Records was founded with a clear vision: to create quality music and support artists on their journey to success. With passion, dedication, and the latest technology, we have produced hundreds of songs that have touched the hearts of millions.'
    },
    mission: {
      title: 'Our Mission',
      text: 'To provide music production services at the highest level and help artists realize their full potential. We believe in the power of music to connect people and tell stories.'
    },
  }
};


export default function About({ language }: AboutProps) {
  const t = content[language as keyof typeof content];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-white mb-6">{t.title}</h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Founders Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="mb-32"
        >
          <h2 className="text-white mb-12 text-center">{t.foundersTitle}</h2>
          
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-zinc-900 to-black rounded-3xl overflow-hidden border border-white/10">
            <div className="w-full overflow-hidden" style={{ height: '500px' }}>
              <img 
                src={foundersImage} 
                alt="Founders" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 p-12">
              {t.founders.map((founder, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <h3 className="text-white mb-2">{founder.name}</h3>
                  <div className="text-[#E4213E] mb-4">{founder.role}</div>
                  <p className="text-white/60 leading-relaxed">
                    {founder.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Story and Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-32 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-zinc-900 to-black p-10 rounded-2xl border border-white/5"
          >
            <h3 className="text-white mb-6">{t.story.title}</h3>
            <p className="text-white/60 leading-relaxed">
              {t.story.text}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-zinc-900 to-black p-10 rounded-2xl border border-white/5"
          >
            <h3 className="text-white mb-6">{t.mission.title}</h3>
            <p className="text-white/60 leading-relaxed">
              {t.mission.text}
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}