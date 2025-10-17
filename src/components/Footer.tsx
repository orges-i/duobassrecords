import { Instagram, Youtube, Mail } from 'lucide-react';
import { Link } from 'wouter';
import logoImage from 'figma:asset/70b011ab5daef8d07bbe86fd809e477b8cd2ed65.png';

interface FooterProps {
  language: string;
}

const content = {
  al: {
    copyright: '© 2025 DuoBass Records. Të gjitha të drejtat e rezervuara.',
    links: [
      { text: 'Home', path: '/' },
      { text: 'Shërbimet', path: '/services' },
      { text: 'Puna Jonë', path: '/work' },
      { text: 'Rreth Nesh', path: '/about' },
      { text: 'Kontakt', path: '/contact' }
    ],
    contact: 'Kontakt',
    follow: 'Na Ndiqni'
  },
  en: {
    copyright: '© 2025 DuoBass Records. All rights reserved.',
    links: [
      { text: 'Home', path: '/' },
      { text: 'Services', path: '/services' },
      { text: 'Our Work', path: '/work' },
      { text: 'About', path: '/about' },
      { text: 'Contact', path: '/contact' }
    ],
    contact: 'Contact',
    follow: 'Follow Us'
  }
};

const socialLinks = [
  { 
    name: 'Instagram', 
    url: 'https://www.instagram.com/duobass.records/?hl=en',
    icon: Instagram
  },
  { 
    name: 'YouTube', 
    url: 'https://www.youtube.com/@duobassrecords',
    icon: Youtube
  },
  { 
    name: 'Genius', 
    url: 'https://genius.com/artists/Duo-bass-records/songs',
    icon: Mail
  }
];

export function Footer({ language }: FooterProps) {
  const t = content[language as keyof typeof content];

  return (
    <footer className="bg-black border-t border-white/5">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <img src={logoImage} alt="DuoBass Records" className="h-16 w-auto mb-4" />
            <p className="text-white/40 text-sm leading-relaxed">
              {language === 'al' 
                ? 'Profesionalizmi, cilësia dhe kreativiteti në çdo notë.'
                : 'Professionalism, quality, and creativity in every note.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">
              {language === 'al' ? 'Lidhje' : 'Links'}
            </h4>
            <ul className="space-y-2">
              {t.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className="text-white/60 hover:text-[#E4213E] transition-colors text-sm">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">{t.contact}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="tel:+38349530540" 
                  className="text-white/60 hover:text-[#E4213E] transition-colors"
                >
                  +383 49 - 530 - 540
                </a>
              </li>
              <li>
                <a 
                  href="tel:+38349588616" 
                  className="text-white/60 hover:text-[#E4213E] transition-colors"
                >
                  +383 49 - 588 - 616
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Duobass.records@gmail.com" 
                  className="text-white/60 hover:text-[#E4213E] transition-colors break-all"
                >
                  Duobass.records@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white mb-4">{t.follow}</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-lg hover:bg-[#E4213E] transition-all hover:scale-110 group"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5 text-white/60 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              {t.copyright}
            </p>
            <div className="flex gap-6 text-sm text-white/40">
              <span>Made with ❤️ in Kosovo</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}