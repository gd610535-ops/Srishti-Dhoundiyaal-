import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu as MenuIcon, X, MapPin, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Specials', href: '#specials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background-page/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary-900 rounded-full flex items-center justify-center">
            <span className="text-accent-400 font-serif text-2xl font-bold">S</span>
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight text-primary-900">
            SWAGAT
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium uppercase tracking-[0.2em] text-primary-900/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:border-b hover:border-accent-400 transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="flex items-center gap-2 text-sm text-primary-900/70 uppercase tracking-widest mr-4"
          >
            <Phone className="w-4 h-4 text-accent-400" />
            <span>+91 98765</span>
          </a>
          <a
            href="#contact"
            className="bg-primary-900 text-background-page px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-primary-800 transition-colors"
          >
            Book a Table
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-text-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background-page border-t border-background-muted overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-lg font-medium text-text-dark hover:text-primary-900"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-background-muted flex flex-col gap-4">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-primary-900 text-white text-center px-5 py-3 rounded-full font-medium"
                >
                  Book a Table
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
