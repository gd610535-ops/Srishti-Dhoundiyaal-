import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Rahul Sharma',
    review: "Best family restaurant experience nearby! The paneer dishes are absolutely fantastic and the ambiance is very welcoming.",
    rating: 5,
  },
  {
    name: 'Mitali Desai',
    review: "We ordered the Malai Chaap Roll and Chole Bhature. Everything was so fresh and perfectly spiced. Highly recommended for weekend family dinners.",
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    review: "Proper authentic North Indian taste. The hygienic kitchen standard is visible in their food quality. Swagat is our new favorite spot.",
    rating: 5,
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-background-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center space-x-3">
            <span className="h-[1px] w-8 bg-accent-400"></span>
            <span className="uppercase tracking-[0.3em] text-accent-400 font-bold text-xs italic">Testimonials</span>
            <span className="h-[1px] w-8 bg-accent-400"></span>
          </div>
          <h2 className="text-4xl md:text-[56px] font-serif font-bold text-primary-900 leading-tight">
            What Our <span className="italic font-light text-primary-900">Customers</span> Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((item, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: i * 0.15 }}
               className="bg-primary-900 p-8 border-l-[12px] border-accent-400 relative group"
             >
                <div className="absolute top-6 right-6 text-accent-400 opacity-20 group-hover:opacity-40 transition-opacity">
                   <Quote className="w-12 h-12" />
                </div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(item.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-accent-400 text-accent-400" />
                  ))}
                </div>
                
                <p className="text-background-page text-base leading-relaxed mb-6 italic relative z-10 font-serif">
                  "{item.review}"
                </p>
                
                <div className="flex items-center gap-3 pt-6 border-t border-accent-400/20">
                  <div className="w-10 h-10 bg-accent-400 flex items-center justify-center text-primary-900 font-bold font-serif">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-background-page uppercase tracking-wider">{item.name}</h4>
                    <span className="text-[10px] text-accent-400 font-bold uppercase tracking-widest block">Verified Guest</span>
                  </div>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
