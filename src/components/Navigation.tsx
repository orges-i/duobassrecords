import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from './ui/button';
import { Globe, Menu, X } from 'lucide-react';
import logoImage from '../assets/70b011ab5daef8d07bbe86fd809e477b8cd2ed65.png';

interface NavigationProps {
  language: string;
  onLanguageChange: (lang: string) => void;
}

const navLinks = {
  al: [
    { text: 'Home', path: '/' },
    { text: 'Shërbimet', path: '/services' },
    { text: 'Puna Jonë', path: '/work' },
    { text: 'Rreth Nesh', path: '/about' },
    { text: 'Kontakt', path: '/contact' }
  ],
  en: [
    { text: 'Home', path: '/' },
    { text: 'Services', path: '/services' },
    { text: 'Our Work', path: '/work' },
    { text: 'About', path: '/about' },
    { text: 'Contact', path: '/contact' }
  ]
};

export function Navigation({ language, onLanguageChange }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = navLinks[language as keyof typeof navLinks];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/95 backdrop-blur-xl border-b border-white/5 shadow-xl' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20 py-4">
            <Link href="/" className="flex items-center gap-3 group">
              <img src={logoImage} alt="DuoBass Records" className="h-16 w-auto transition-transform group-hover:scale-105" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {links.map((link, index) => (
                <Link key={index} href={link.path}>
                  <button className={`px-5 py-2 rounded-lg transition-all duration-300 ${
                    location === link.path 
                      ? 'bg-[#E4213E] text-white' 
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}>
                    {link.text}
                  </button>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onLanguageChange(language === 'al' ? 'en' : 'al')}
                className="border-[#E4213E] text-white hover:bg-[#E4213E] hover:text-white transition-all hidden sm:flex"
              >
                <Globe className="mr-2 h-4 w-4" />
                {language === 'al' ? 'EN' : 'AL'}
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/95 backdrop-blur-xl pt-24 px-6">
            <div className="flex flex-col gap-2">
              {links.map((link, index) => (
                <Link key={index} href={link.path}>
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 ${
                      location === link.path 
                        ? 'bg-[#E4213E] text-white' 
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.text}
                  </button>
                </Link>
              ))}
              <button
                onClick={() => {
                  onLanguageChange(language === 'al' ? 'en' : 'al');
                  setIsMobileMenuOpen(false);
                }}
                className="mt-4 px-6 py-4 border border-[#E4213E] text-white rounded-lg hover:bg-[#E4213E] transition-all flex items-center justify-center gap-2"
              >
                <Globe className="h-4 w-4" />
                {language === 'al' ? 'English' : 'Shqip'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}