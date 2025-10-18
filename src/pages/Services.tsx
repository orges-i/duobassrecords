import { motion } from 'motion/react';
import { Music, Disc, Mic2, Radio, BarChart3, Users, Headphones, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'wouter';
import servicesHeroImage from '../assets/862b0069fc0dea16db0a3c7021578468d46f230a.png';

interface ServicesProps {
  language: string;
}

const content = {
  al: {
    title: 'Shërbimet Tona',
    subtitle: 'Zgjidhje profesionale për artistët që duan të shkëlqejnë',
    production: {
      title: 'Produksion Muzike',
      description: 'Shërbime të plota produksioni për të gjitha llojet e muzikës',
      services: [
        { title: 'Mixing & Mastering', description: 'Cilësi profesionale me teknologjinë më të fundit', icon: Headphones },
        { title: 'Krijim Muzike Origjinale', description: 'Beate dhe instrumentale custom për projektin tuaj', icon: Music },
        { title: 'Recording Studio', description: 'Studio moderne me pajisje të nivelit të lartë', icon: Mic2 },
        { title: 'Sound Design', description: 'Krijim të zërave dhe efekteve unike', icon: Radio }
      ]
    },
    label: {
      title: 'Shërbime Label',
      description: 'Mbështetje e plotë për karrierën tuaj muzikore',
      services: [
        { title: 'Publikim & Distribution', description: 'Publikim në të gjitha platformat kryesore', icon: Disc },
        { title: 'Marketing Muzikor', description: 'Strategji marketingu për rritjen tuaj', icon: BarChart3 },
        { title: 'Menaxhim Artistik', description: 'Mbështetje profesionale për karrierën', icon: Users },
        { title: 'Brand Development', description: 'Ndërtim të imazhit tuaj artistik', icon: Award }
      ]
    },
    cta: {
      title: 'Gati për të filluar?',
      button: 'Kontaktona'
    }
  },
  en: {
    title: 'Our Services',
    subtitle: 'Professional solutions for artists who want to excel',
    production: {
      title: 'Music Production',
      description: 'Complete production services for all types of music',
      services: [
        { title: 'Mixing & Mastering', description: 'Professional quality with the latest technology', icon: Headphones },
        { title: 'Original Music Creation', description: 'Custom beats and instrumentals for your project', icon: Music },
        { title: 'Recording Studio', description: 'Modern studio with high-end equipment', icon: Mic2 },
        { title: 'Sound Design', description: 'Creation of unique sounds and effects', icon: Radio }
      ]
    },
    label: {
      title: 'Record Label Services',
      description: 'Full support for your music career',
      services: [
        { title: 'Publishing & Distribution', description: 'Release on all major platforms', icon: Disc },
        { title: 'Music Marketing', description: 'Marketing strategies for your growth', icon: BarChart3 },
        { title: 'Artist Management', description: 'Professional career support', icon: Users },
        { title: 'Brand Development', description: 'Building your artistic image', icon: Award }
      ]
    },
    cta: {
      title: 'Ready to get started?',
      button: 'Contact Us'
    }
  }
};

export default function Services({ language }: ServicesProps) {
  const t = content[language as keyof typeof content];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Image */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${servicesHeroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white mb-6">{t.title}</h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-6 py-20">
        {/* Music Production Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="mb-12">
            <h2 className="text-white mb-4">{t.production.title}</h2>
            <p className="text-white/60 max-w-2xl">
              {t.production.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.production.services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-gradient-to-br from-zinc-900 to-black p-8 rounded-2xl border border-white/5 hover:border-[#E4213E]/50 transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 p-4 bg-[#E4213E]/10 rounded-xl group-hover:bg-[#E4213E]/20 transition-colors">
                      <Icon className="h-8 w-8 text-[#E4213E]" />
                    </div>
                    <div>
                      <h3 className="text-white mb-3">{service.title}</h3>
                      <p className="text-white/60 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Label Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="mb-12">
            <h2 className="text-white mb-4">{t.label.title}</h2>
            <p className="text-white/60 max-w-2xl">
              {t.label.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.label.services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-gradient-to-br from-zinc-900 to-black p-8 rounded-2xl border border-white/5 hover:border-[#E4213E]/50 transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 p-4 bg-[#E4213E]/10 rounded-xl group-hover:bg-[#E4213E]/20 transition-colors">
                      <Icon className="h-8 w-8 text-[#E4213E]" />
                    </div>
                    <div>
                      <h3 className="text-white mb-3">{service.title}</h3>
                      <p className="text-white/60 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-br from-[#E4213E]/10 to-transparent p-16 rounded-3xl border border-[#E4213E]/20"
        >
          <h2 className="text-white mb-6">{t.cta.title}</h2>
          <Link href="/contact">
            <Button size="lg" className="bg-[#E4213E] hover:bg-[#c01b33] text-white px-12">
              {t.cta.button}
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
