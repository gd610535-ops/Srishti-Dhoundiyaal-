import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const specials = [
  {
    name: 'Malai Paneer Chaap Roll',
    desc: 'Creamy, smoky and loaded with bold flavors. A luxurious blend of soft paneer and creamy chaap.',
    price: 306,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Cheese Paneer Pav Bhaji',
    desc: 'Buttery bhaji loaded with rich cheese. A street-food classic upgraded for proper family dining.',
    price: 324,
    image: 'https://images.unsplash.com/photo-1626804475297-41609ea182eb?q=80&w=800&auto=format&fit=crop', // This is just a placeholder, maybe a food dish
  },
  {
    name: 'Matar Paneer Special',
    desc: 'Fresh paneer cubes and green peas simmered in our signature rich, spiced tomato gravy.',
    price: 195,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc0?q=80&w=800&auto=format&fit=crop',
  }
];

export default function Specials() {
  return (
    <section id="specials" className="py-24 bg-primary-900 text-background-page relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-400/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-background-page/10 pb-8">
           <div>
             <div className="mb-4 inline-flex items-center space-x-3">
                <span className="h-[1px] w-8 bg-accent-400"></span>
                <span className="uppercase tracking-[0.3em] text-accent-400 font-bold text-xs italic">Must Try</span>
              </div>
              <h2 className="text-4xl md:text-[56px] font-serif font-bold text-background-page leading-tight">
                Chef's <span className="italic font-light text-accent-400">Specials</span>
              </h2>
           </div>
           <p className="text-background-page/70 max-w-sm text-sm">
             Carefully crafted by our head chef, these signature dishes represent the true essence of Swagat's culinary excellence.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {specials.map((special, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: i * 0.1 }}
               className="bg-background-page border-[8px] border-accent-400/20 p-3 group flex flex-col hover:border-accent-400 transition-colors duration-500"
             >
                <div className="relative h-64 overflow-hidden bg-primary-900">
                   <img 
                      src={special.image} 
                      alt={special.name} 
                      className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700"
                   />
                   <div className="absolute top-4 left-4 bg-primary-900 text-background-page px-3 py-1 font-bold text-[10px] uppercase tracking-widest shadow-md">
                     Signature
                   </div>
                </div>
                <div className="pt-6 pb-2 px-2 flex-1 flex flex-col bg-background-page">
                   <h3 className="text-2xl font-bold font-serif mb-3 text-primary-900">{special.name}</h3>
                   <p className="text-primary-900/70 text-sm mb-6 flex-1">
                     {special.desc}
                   </p>
                   <div className="flex items-center justify-between mt-auto border-t border-primary-900/10 pt-4">
                     <span className="text-2xl font-bold text-accent-400 font-serif">₹{special.price}</span>
                     <button className="text-primary-900 font-bold uppercase tracking-widest text-xs hover:text-accent-400 transition-colors flex items-center gap-2">
                        Order Now <span className="text-lg leading-none">&rarr;</span>
                     </button>
                   </div>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
