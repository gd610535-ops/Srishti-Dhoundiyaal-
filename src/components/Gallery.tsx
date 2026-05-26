import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

const galleryImages = [
  "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop", // Indian food top view
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop", // Interior
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop", // Family dining
  "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop", // Close up food
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop", // Kitchen / prep
  "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800&auto=format&fit=crop"  // More food
];

export default function Gallery() {
  return (
    <section className="py-24 bg-background-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
           <div>
              <div className="mb-4 inline-flex items-center space-x-3">
                <span className="h-[1px] w-8 bg-accent-400"></span>
                <span className="uppercase tracking-[0.3em] text-accent-400 font-bold text-xs italic">Gallery</span>
              </div>
              <h2 className="text-4xl md:text-[56px] font-serif font-bold text-primary-900 leading-tight">
                Swagat in <span className="italic font-light text-primary-900">Pictures</span>
              </h2>
           </div>
           <a href="#" className="inline-flex items-center gap-2 border border-primary-900 text-primary-900 px-6 py-3 font-bold text-xs uppercase tracking-widest hover:bg-primary-900 hover:text-background-page transition-colors w-fit">
             <Instagram className="w-4 h-4" />
             Follow @SwagatRestro
           </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
           {galleryImages.map((src, i) => (
             <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`overflow-hidden relative group ${
                  i === 0 ? 'col-span-2 row-span-2' : ''
                } ${i === 3 ? 'md:col-span-2' : ''}`}
             >
                <div className="absolute inset-0 bg-primary-900/60 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-accent-400 scale-50 group-hover:scale-100 transition-transform duration-300" />
                </div>
                <img 
                   src={src} 
                   alt={`Swagat Gallery Image ${i + 1}`} 
                   className="w-full h-full object-cover aspect-square sm:aspect-auto sm:h-full grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
