import { motion } from 'motion/react';
import { Leaf, ShieldCheck, Users, Flame } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'We use daily-sourced farm-fresh vegetables and pure spices.',
  },
  {
    icon: ShieldCheck,
    title: 'Hygienic Kitchen',
    description: 'Strict cleanliness standards for your peace of mind.',
  },
  {
    icon: Users,
    title: 'Family Dining',
    description: 'A warm, inviting ambiance perfect for loved ones.',
  },
  {
    icon: Flame,
    title: 'Taste Loaded',
    description: 'Authentic recipes delivering rich, unforgettable flavors.',
  },
];

export default function Features() {
  return (
    <section className="bg-primary-900 md:h-24 py-8 md:py-0 flex flex-col md:flex-row items-center justify-around px-4 sm:px-12 gap-6 md:gap-0">
      <div className="flex items-center space-x-4">
        <span className="text-accent-400 text-2xl">♨</span>
        <span className="text-background-page font-medium tracking-widest text-xs uppercase">Hygienic Kitchen</span>
      </div>
      <div className="hidden md:block w-[1px] h-6 bg-accent-400/30"></div>
      <div className="flex items-center space-x-4">
        <span className="text-accent-400 text-2xl">❦</span>
        <span className="text-background-page font-medium tracking-widest text-xs uppercase">Pure Veg Delights</span>
      </div>
      <div className="hidden md:block w-[1px] h-6 bg-accent-400/30"></div>
      <div className="flex items-center space-x-4">
        <span className="text-accent-400 text-2xl">✿</span>
        <span className="text-background-page font-medium tracking-widest text-xs uppercase">Family Ambience</span>
      </div>
      <div className="hidden md:block w-[1px] h-6 bg-accent-400/30"></div>
      <div className="flex items-center space-x-4">
        <span className="text-accent-400 text-2xl">✣</span>
        <span className="text-background-page font-medium tracking-widest text-xs uppercase">Affordable Luxury</span>
      </div>
    </section>
  );
}
