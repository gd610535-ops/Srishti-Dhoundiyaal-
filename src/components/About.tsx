import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-background-muted relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-12 h-12 bg-accent-400 rounded-full blur-2xl opacity-20 hidden md:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Image Group */}
          <div className="relative z-10">
             <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative bg-primary-900 p-3 sm:p-4 border-[1px] border-primary-900 max-w-[90%] md:max-w-full"
             >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
                    alt="Swagat Restaurant Ambience"
                    className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-accent-400 px-6 py-4 shadow-xl z-20">
                  <p className="text-primary-900 font-serif italic text-xl font-bold">
                    "Crafted with love."
                  </p>
                </div>
             </motion.div>
             
             {/* Small floating image */}
             <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -top-10 -right-4 w-48 h-48 border-[8px] border-background-page bg-primary-900 overflow-hidden shadow-2xl hidden md:block z-30"
             >
               <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=400&auto=format&fit=crop"
                  alt="Authentic Indian Cooking"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
             </motion.div>
          </div>

          {/* Right Content */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="pt-10 lg:pt-0"
          >
            <div className="mb-4 inline-flex items-center space-x-3">
              <span className="h-[1px] w-8 bg-accent-400"></span>
              <span className="uppercase tracking-[0.3em] text-accent-400 font-bold text-xs italic">About Swagat</span>
            </div>
            
            <h2 className="text-4xl md:text-[56px] font-serif font-bold text-primary-900 mb-6 leading-tight">
              Warm meals, rich taste and <span className="text-primary-900 italic font-light">family moments.</span>
            </h2>
            <p className="text-primary-900/70 text-lg mb-8 leading-relaxed">
              At Swagat Family Restaurant, food is more than just a meal &mdash; it&rsquo;s an experience shared with family and friends. From authentic North Indian favorites to flavorful street-style delights, every dish is freshly prepared with rich ingredients, traditional recipes, and a touch of love.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10 pt-8 border-t border-primary-900/10">
              <div className="border-l-4 border-accent-400 pl-4">
                <h4 className="text-4xl font-serif font-bold text-primary-900 mb-1">5k+</h4>
                <p className="text-primary-900/70 text-xs font-bold uppercase tracking-widest">Happy Guests</p>
              </div>
              <div className="border-l-4 border-accent-400 pl-4">
                <h4 className="text-4xl font-serif font-bold text-primary-900 mb-1">100%</h4>
                <p className="text-primary-900/70 text-xs font-bold uppercase tracking-widest">Authentic Recipes</p>
              </div>
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 text-primary-900 font-bold uppercase tracking-widest text-sm hover:text-accent-400 transition-colors group">
              Learn more about our journey 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
