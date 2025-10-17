import { motion } from 'motion/react';
import { Phone, Mail, Instagram, Youtube, MapPin } from 'lucide-react';

interface ContactProps {
  language: string;
}

const content = {
  al: {
    title: 'Na Kontaktoni',
    subtitle: 'Jemi këtu për të dëgjuar projektin tuaj dhe për të ndihmuar',
    info: {
      title: 'Informacioni i Kontaktit',
      phone: 'Telefon',
      email: 'Email',
      location: 'Vendndodhja',
      social: 'Mediat Sociale'
    }
  },
  en: {
    title: 'Contact Us',
    subtitle: 'We\'re here to listen to your project and help',
    info: {
      title: 'Contact Information',
      phone: 'Phone',
      email: 'Email',
      location: 'Location',
      social: 'Social Media'
    }
  }
};

const socialLinks = [
  { 
    name: 'Instagram', 
    url: 'https://www.instagram.com/duobass.records/?hl=en',
    icon: Instagram,
    handle: '@duobass.records'
  },
  { 
    name: 'YouTube', 
    url: 'https://www.youtube.com/@duobassrecords',
    icon: Youtube,
    handle: '@duobassrecords'
  }
];

export default function Contact({ language }: ContactProps) {
  const t = content[language as keyof typeof content];

  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
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
        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-7xl mx-auto">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-2xl border border-white/5 hover:border-[#E4213E]/50 transition-all group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-[#E4213E]/10 rounded-xl group-hover:bg-[#E4213E]/20 transition-colors">
                <Phone className="h-8 w-8 text-[#E4213E]" />
              </div>
              <h3 className="text-white mb-4">{t.info.phone}</h3>
              <a href="tel:+38349530540" className="text-white/60 hover:text-[#E4213E] transition-colors block mb-2">
                +383 49 - 530 - 540
              </a>
              <a href="tel:+38349588616" className="text-white/60 hover:text-[#E4213E] transition-colors block">
                +383 49 - 588 - 616
              </a>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-2xl border border-white/5 hover:border-[#E4213E]/50 transition-all group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-[#E4213E]/10 rounded-xl group-hover:bg-[#E4213E]/20 transition-colors">
                <Mail className="h-8 w-8 text-[#E4213E]" />
              </div>
              <h3 className="text-white mb-4">{t.info.email}</h3>
              <a 
                href="mailto:Duobass.records@gmail.com" 
                className="text-white/60 hover:text-[#E4213E] transition-colors break-all"
              >
                Duobass.records@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-2xl border border-white/5 hover:border-[#E4213E]/50 transition-all group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-[#E4213E]/10 rounded-xl group-hover:bg-[#E4213E]/20 transition-colors">
                <MapPin className="h-8 w-8 text-[#E4213E]" />
              </div>
              <h3 className="text-white mb-4">{t.info.location}</h3>
              <p className="text-white/60">
                Jakov Xoxa, Mati 1<br />
                Pristina, Kosovo
              </p>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-2xl border border-white/5 hover:border-[#E4213E]/50 transition-all"
          >
            <div className="flex flex-col items-center text-center">
              <h3 className="text-white mb-6">{t.info.social}</h3>
              <div className="space-y-4 w-full">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#E4213E]/10 transition-all group/social"
                    >
                      <div className="p-2 bg-[#E4213E]/10 rounded-lg group-hover/social:bg-[#E4213E] transition-colors">
                        <Icon className="h-5 w-5 text-[#E4213E] group-hover/social:text-white" />
                      </div>
                      <div className="text-left">
                        <div className="text-white text-sm">{social.name}</div>
                        <div className="text-white/40 text-xs">{social.handle}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full Width Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full"
        >
          <div className="h-[600px] rounded-2xl overflow-hidden border border-white/10 hover:border-[#E4213E]/50 transition-all">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.502169878975!2d21.172979780609275!3d42.64661031931044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549dbcf07f151b%3A0x43b83f6dc3c6b1bb!2sJakov%20Xoxa%2C%20Mati%201%2C%20Pristina!5e0!3m2!1sen!2s!4v1697030000000!5m2!1sen!2s&q=42.64660242775536,21.173022696038934"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
