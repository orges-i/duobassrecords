import { motion } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogClose } from '../components/ui/dialog';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import foundersImage from 'figma:asset/089ea5095a042117f713291a5eb8665a2c0dee5c.png';

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
    galleryTitle: 'Galeria Jonë'
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
    galleryTitle: 'Our Gallery'
  }
};

const galleryImages = [
  'https://images.unsplash.com/photo-1670848767161-0476ade5d1b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMGdhbGxlcnl8ZW58MXx8fHwxNzYwNzMyNDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1680466457036-30e400aeabab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW8lMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYwNjk1MTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1758336716950-370f54b7a43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y3Rpb24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwNzMyNDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1631277016725-99cbb1271d9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VuZCUyMG1peGluZyUyMGRlc2t8ZW58MXx8fHwxNzYwNzMyNDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
];

export default function About({ language }: AboutProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-white mb-12 text-center">{t.galleryTitle}</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square cursor-pointer overflow-hidden rounded-xl border border-white/5 hover:border-[#E4213E]/50 transition-all group"
                onClick={() => setSelectedImage(image)}
              >
                <ImageWithFallback
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl bg-black border border-[#E4213E]/50 p-2">
          <DialogClose className="absolute -right-12 top-0 z-10 rounded-full bg-black/80 p-2 hover:bg-[#E4213E] transition-colors border border-white/10">
            <X className="h-6 w-6 text-white" />
          </DialogClose>
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Gallery" 
              className="w-full h-auto rounded-xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}