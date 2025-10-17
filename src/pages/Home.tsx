import { motion } from 'motion/react';
import { Link } from 'wouter';
import { Button } from '../components/ui/button';
import { Music, Disc, ArrowRight, Play } from 'lucide-react';
import heroImage from 'figma:asset/aea765e000172c9c240041cf02f9956547e719b2.png';

interface HomeProps {
  language: string;
}

const content = {
  al: {
    hero: {
      title: 'Ku Muzika Takohet me Pasionin',
      subtitle: 'Profesionalizmi, cilësia dhe kreativiteti në çdo notë. DuoBass Records - partneri juaj në suksesin muzikor.',
      cta1: 'Eksploro Shërbimet',
      cta2: 'Shiko Punën Tonë'
    },
    services: {
      title: 'Çfarë Ofrojmë',
      subtitle: 'Shërbime profesionale për të gjithë artistët',
      items: [
        {
          title: 'Produksion Muzike',
          description: 'Mixing dhe mastering profesional, krijim të këngëve origjinale me teknologjinë më të fundit',
          icon: Music
        },
        {
          title: 'Shërbime Label',
          description: 'Publikim, menaxhim artistik, dhe marketing strategjik për karrierën tuaj muzikore',
          icon: Disc
        }
      ]
    },
    cta: {
      title: 'Gati të Fillosh Projektin Tënd?',
      subtitle: 'Na kontakto sot dhe le të krijojmë diçka të jashtëzakonshme bashkë',
      button: 'Kontaktona Tani'
    }
  },
  en: {
    hero: {
      title: 'Where Music Meets Passion',
      subtitle: 'Professionalism, quality, and creativity in every note. DuoBass Records - your partner in musical success.',
      cta1: 'Explore Services',
      cta2: 'See Our Work'
    },
    services: {
      title: 'What We Offer',
      subtitle: 'Professional services for all artists',
      items: [
        {
          title: 'Music Production',
          description: 'Professional mixing and mastering, original song creation with the latest technology',
          icon: Music
        },
        {
          title: 'Record Label Services',
          description: 'Publishing, artist management, and strategic marketing for your music career',
          icon: Disc
        }
      ]
    },
    cta: {
      title: 'Ready to Start Your Project?',
      subtitle: 'Contact us today and let\'s create something extraordinary together',
      button: 'Contact Us Now'
    }
  }
};

export default function Home({ language }: HomeProps) {
  const t = content[language as keyof typeof content];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6 px-6 py-2 bg-[#E4213E]/10 border border-[#E4213E]/30 rounded-full backdrop-blur-sm"
            >
              <span className="text-[#E4213E] uppercase tracking-wider">DuoBass Records</span>
            </motion.div>

            <h1 className="text-white mb-6">
              {t.hero.title}
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/80 mb-12 max-w-3xl mx-auto"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/services">
                <Button size="lg" className="bg-[#E4213E] hover:bg-[#c01b33] text-white px-8 group">
                  {t.hero.cta1}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/work">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 group">
                  <Play className="mr-2 h-5 w-5" />
                  {t.hero.cta2}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4">{t.services.title}</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {t.services.items.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative bg-gradient-to-br from-zinc-900 to-black p-8 rounded-2xl border border-white/5 hover:border-[#E4213E]/50 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E4213E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex p-4 bg-[#E4213E]/10 rounded-xl group-hover:bg-[#E4213E]/20 transition-colors">
                      <Icon className="h-8 w-8 text-[#E4213E]" />
                    </div>
                    <h3 className="text-white mb-4">{service.title}</h3>
                    <p className="text-white/60 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link href="/services">
                      <a className="inline-flex items-center text-[#E4213E] hover:gap-2 transition-all group/link">
                        {language === 'al' ? 'Mëso Më Shumë' : 'Learn More'}
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </a>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-zinc-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMmMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHM0LjQ3Ny0xMCAxMC0xMCAxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHoiIGZpbGw9IiNFNDIxM0UiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-white mb-6">{t.cta.title}</h2>
            <p className="text-white/60 mb-10 max-w-2xl mx-auto">
              {t.cta.subtitle}
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-[#E4213E] hover:bg-[#c01b33] text-white px-10 group">
                {t.cta.button}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
