import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star } from 'lucide-react';

const categories = [
  'Starters',
  'Rolls & Chaap',
  'Noodles & Momos',
  'Main Course',
  'Sides & Sweets',
];

const menuData = {
  'Starters': [
    { name: 'Cheese Paneer Pav Bhaji', desc: 'Creamy buttery bhaji loaded with rich cheese and spicy paneer flavors.', price: 324, isChefSpecial: true },
    { name: 'Chole Bhature', desc: 'Fluffy bhature served with spicy Punjabi-style chole and fresh onions.', price: 162, isChefSpecial: true },
    { name: 'Puri Sabji', desc: 'Golden crispy puris paired with comforting homestyle potato curry.', price: 126, isChefSpecial: false },
  ],
  'Rolls & Chaap': [
    { name: 'Chaap Roll', desc: 'Smoky chaap wrapped in soft rumali bread with flavorful sauces.', price: 216, isChefSpecial: false },
    { name: 'Malai Chaap Roll', desc: 'Creamy grilled chaap infused with rich malai spices and smoky aroma.', price: 270, isChefSpecial: true },
    { name: 'Malai Paneer Chaap Roll', desc: 'A luxurious blend of soft paneer, creamy chaap, and irresistible flavors.', price: 306, isChefSpecial: true },
  ],
  'Noodles & Momos': [
    { name: 'Chilli Garlic Noodles', desc: 'Fiery noodles tossed with garlic, veggies, and bold Indo-Chinese spices.', price: 162, isChefSpecial: true },
    { name: 'Hakka Noodles', desc: 'Classic street-style noodles packed with crunchy vegetables and sauces.', price: 180, isChefSpecial: false },
    { name: 'Paneer Fry Momos', desc: 'Crispy fried momos stuffed with spicy paneer and aromatic seasonings.', price: 108, isChefSpecial: false },
    { name: 'Paneer Peri Peri Momos', desc: 'Juicy paneer momos coated in smoky peri peri seasoning for a spicy kick.', price: 140, isChefSpecial: true },
  ],
  'Main Course': [
    { name: 'Aloo Jeera', desc: 'Simple yet flavorful potatoes tossed with cumin and Indian spices.', price: 104, isChefSpecial: false },
    { name: 'Chana Masala', desc: 'Rich and hearty chickpea curry cooked in authentic Punjabi gravy.', price: 180, isChefSpecial: false },
    { name: 'Dum Aloo', desc: 'Soft potatoes slow-cooked in creamy spicy North Indian masala.', price: 162, isChefSpecial: true },
    { name: 'Matar Paneer', desc: 'Fresh paneer cubes and green peas simmered in rich tomato gravy.', price: 195, isChefSpecial: true },
    { name: 'Mushroom Do Pyaza', desc: 'Juicy mushrooms cooked with caramelized onions and aromatic spices.', price: 182, isChefSpecial: false },
  ],
  'Sides & Sweets': [
    { name: 'Mix Raita', desc: 'Refreshing yogurt blended with fresh vegetables and roasted spices.', price: 130, isChefSpecial: false },
    { name: 'Gulab Jamun', desc: 'Soft melt-in-mouth dumplings soaked in warm saffron sugar syrup.', price: 54, isChefSpecial: true },
  ],
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section id="menu" className="py-24 bg-background-page relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center space-x-3">
            <span className="h-[1px] w-8 bg-accent-400"></span>
            <span className="uppercase tracking-[0.3em] text-accent-400 font-bold text-xs italic">Discover Our Menu</span>
            <span className="h-[1px] w-8 bg-accent-400"></span>
          </div>
          <h2 className="text-4xl md:text-[56px] font-serif font-bold text-primary-900 leading-tight">
            Taste the <span className="italic font-light">Tradition</span>
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-primary-900/20 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 ${
                activeTab === cat
                  ? 'text-primary-900 border-b-2 border-accent-400'
                  : 'text-primary-900/60 hover:text-primary-900 border-b-2 border-transparent hover:border-accent-400/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-x-16 gap-y-12"
            >
              {menuData[activeTab as keyof typeof menuData].map((item, idx) => (
                <div key={idx} className="group relative border-b border-primary-900/10 pb-6">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-serif font-bold text-2xl text-primary-900">
                      {item.name}
                    </h4>
                    <div className="flex items-center gap-4">
                      {/* Dotted Leader Line (Responsive illusion) */}
                      <span className="font-serif text-xl font-bold text-accent-400 ml-4">
                        ₹{item.price}
                      </span>
                    </div>
                  </div>
                  <p className="text-primary-900/70 text-sm md:text-base leading-relaxed max-w-[90%]">
                    {item.desc}
                  </p>
                  {item.isChefSpecial && (
                    <span className="absolute top-1 -left-4 md:-left-8 text-accent-400 font-bold" title="Chef's Special">
                      ★
                    </span>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-20 text-center">
            <a href="#" className="inline-block border border-primary-900 text-primary-900 px-10 py-5 font-bold text-sm uppercase tracking-widest hover:bg-primary-900 hover:text-background-page transition-colors shadow-[8px_8px_0_var(--color-primary-900)] hover:shadow-[4px_4px_0_var(--color-primary-900)]">
                Download Menu PDF
            </a>
        </div>
      </div>
    </section>
  );
}
