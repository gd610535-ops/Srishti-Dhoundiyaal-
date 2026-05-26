import { motion } from 'motion/react';
import { Star, ShieldCheck, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 pb-16 overflow-hidden bg-background-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col flex-1 justify-center pr-0 lg:pr-12 z-10 pt-10 lg:pt-0"
          >
            <div className="mb-4 inline-flex items-center space-x-3">
              <span className="h-[1px] w-8 bg-accent-400"></span>
              <span className="uppercase tracking-[0.3em] text-accent-400 font-bold text-xs italic">Authentic Taste • Family Vibes</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[72px] leading-[1.05] font-serif font-bold text-primary-900 mb-6">
              Freshly Cooked <br />
              <span className="italic font-light">Happiness</span> <br />
              Served Daily
            </h1>

            <p className="text-primary-900/70 text-lg leading-relaxed mb-8 max-w-md">
              From spicy chaap rolls to rich North Indian curries &mdash; every bite at Swagat feels like home. Crafted with love and traditional spices.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <a
                href="#menu"
                className="bg-accent-400 text-text-dark px-8 py-4 font-bold text-sm uppercase tracking-widest shadow-xl shadow-accent-400/20 text-center hover:bg-accent-500 transition-colors"
              >
                View Full Menu
              </a>
              <a
                href="#contact"
                className="border border-primary-900 text-primary-900 px-8 py-4 font-bold text-sm uppercase tracking-widest text-center hover:bg-primary-900/5 transition-colors"
              >
                Order Online
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-4 sm:space-x-8 border-t border-primary-900/10 pt-8">
              <div>
                <p className="text-2xl font-serif font-bold text-primary-900">4.8</p>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-50 text-primary-900">Trust Rating</p>
              </div>
              <div className="h-8 w-[1px] bg-primary-900/10 hidden sm:block"></div>
              <div>
                <p className="text-lg font-medium text-primary-900">Hygienic Kitchen</p>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-50 text-accent-400">Certified Safe</p>
              </div>
              <div className="h-8 w-[1px] bg-primary-900/10 hidden sm:block"></div>
              <div className="hidden sm:block">
                <p className="text-lg font-medium text-primary-900">Family Dining</p>
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-50 text-primary-900">Kid Friendly</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center w-full"
          >
            {/* Main Premium Food Image Frame */}
            <div className="relative w-full max-w-[400px] sm:max-w-[500px] aspect-square rounded-full overflow-hidden border-[12px] border-accent-400/20 bg-primary-900 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900 to-transparent opacity-40 z-10 pointer-events-none"></div>
              <img
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1600&auto=format&fit=crop"
                alt="Premium North Indian Food"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 relative z-0"
              />
            </div>
            
            {/* Floating Card 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 right-0 sm:right-4 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-white/50 w-56 hidden sm:block"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] bg-primary-900 text-white px-2 py-0.5 rounded font-bold uppercase tracking-tighter">Chef's Special</span>
                <span className="text-accent-400 font-bold text-sm">₹306</span>
              </div>
              <p className="font-serif font-bold text-primary-900 text-lg leading-tight">Malai Paneer Chaap</p>
              <p className="text-[11px] text-primary-900/60 leading-snug mt-1 italic">Creamy smoky chaap wrapped in rumali roll.</p>
            </motion.div>

            {/* Floating Card 2 */}
             <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-0 sm:left-4 bg-accent-400 p-5 rounded-2xl shadow-2xl w-48 hidden sm:block"
            >
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mb-2">
                <span className="text-primary-900 font-bold">★</span>
              </div>
              <p className="font-serif font-bold text-primary-900 text-lg">Freshly Made</p>
              <p className="text-[11px] text-primary-900 font-medium opacity-80 uppercase tracking-wider">Daily Sourced Ingredients</p>
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-12 h-12 border-2 border-accent-400 rounded-full opacity-20 hidden md:block"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border border-primary-900 rounded-full opacity-10 hidden md:block"></div>
            <div className="absolute top-1/2 left-0 w-4 h-4 bg-accent-400 rounded-full hidden md:block"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
