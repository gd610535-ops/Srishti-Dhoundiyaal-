import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-background-page pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-accent-400 flex items-center justify-center">
                <span className="text-primary-900 font-serif text-2xl font-bold">S</span>
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight text-accent-400">
                SWAGAT
              </span>
            </a>
            <p className="text-background-page/70 text-sm leading-relaxed mb-6">
              Where every bite feels like home. Enjoy authentic North Indian flavors and warm family dining experiences.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 border border-accent-400/50 flex items-center justify-center hover:bg-accent-400 hover:text-primary-900 transition-all text-accent-400">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-accent-400/50 flex items-center justify-center hover:bg-accent-400 hover:text-primary-900 transition-all text-accent-400">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-accent-400/50 flex items-center justify-center hover:bg-accent-400 hover:text-primary-900 transition-all text-accent-400">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-accent-400 mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-background-page/70 text-sm">
              <li><a href="#about" className="hover:text-accent-400 transition-colors">Our Story</a></li>
              <li><a href="#menu" className="hover:text-accent-400 transition-colors">Full Menu</a></li>
              <li><a href="#specials" className="hover:text-accent-400 transition-colors">Chef's Specials</a></li>
              <li><a href="#contact" className="hover:text-accent-400 transition-colors">Book a Table</a></li>
              <li><a href="#" className="hover:text-accent-400 transition-colors">Catering</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-accent-400 mb-6">Contact</h4>
            <ul className="flex flex-col gap-4 text-background-page/70 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-accent-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>123 Swagat Lane, Foodie Market, New Delhi, 110001</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-accent-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+919876543210" className="hover:text-accent-400 transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-accent-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:hello@swagat.com" className="hover:text-accent-400 transition-colors">hello@swagat.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-accent-400 mb-6">Stay Updated</h4>
            <p className="text-background-page/70 text-sm mb-4">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent border-b border-accent-400/50 py-3 text-sm text-background-page placeholder:text-background-page/40 focus:outline-none focus:border-accent-400 transition-colors pr-24 rounded-none"
              />
              <button 
                type="submit" 
                className="absolute right-0 top-1 bottom-1 text-accent-400 font-bold text-xs uppercase tracking-widest hover:text-background-page transition-colors flex items-center pr-2"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-accent-400/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-background-page/50 text-xs text-center md:text-left font-bold uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Swagat Family Restaurant. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
