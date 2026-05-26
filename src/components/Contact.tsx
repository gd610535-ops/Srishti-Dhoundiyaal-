import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary-900 border-t-8 border-accent-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center bg-background-page p-6 sm:p-12 border-[12px] border-accent-400/20">
          
          {/* Map Area */}
          <div className="w-full aspect-square md:aspect-video lg:aspect-square overflow-hidden bg-primary-900 relative group border-[4px] border-primary-900">
            {/* Fallback map graphic using an iframe if real google maps was used */}
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112000!2d77.1000!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1611234567890!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy"
                title="Google Maps Location"
                className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
             ></iframe>
             <div className="absolute inset-0 bg-primary-900/20 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
          </div>

          {/* Contact Info */}
          <div className="lg:pl-12 lg:pr-4 py-8">
            <div className="mb-4 inline-flex items-center space-x-3">
              <span className="h-[1px] w-8 bg-accent-400"></span>
              <span className="uppercase tracking-[0.3em] text-accent-400 font-bold text-xs italic">Visit Us Today</span>
            </div>
            <h2 className="text-4xl md:text-[52px] font-serif font-bold text-primary-900 mb-12 leading-tight">
              Reserve Your <span className="italic font-light">Table</span>
            </h2>
            
            <div className="flex flex-col gap-8 mb-12">
               <div className="flex gap-6 items-start">
                 <div className="text-accent-400 mt-1">
                    <MapPin className="w-8 h-8" strokeWidth={1.5} />
                 </div>
                 <div>
                    <h4 className="font-bold text-primary-900 mb-2 uppercase tracking-widest text-sm">Address</h4>
                    <p className="text-primary-900/80 text-sm leading-relaxed">
                      123 Swagat Lane, Foodie Market, <br />
                      New Delhi, 110001
                    </p>
                 </div>
               </div>

               <div className="flex gap-6 items-start">
                 <div className="text-accent-400 mt-1">
                    <Phone className="w-8 h-8" strokeWidth={1.5} />
                 </div>
                 <div>
                    <h4 className="font-bold text-primary-900 mb-2 uppercase tracking-widest text-sm">Contact</h4>
                    <p className="text-primary-900/80 text-sm leading-relaxed flex flex-col gap-1">
                      <a href="tel:+919876543210" className="hover:text-accent-400 transition-colors inline-block">+91 98765 43210</a>
                      <a href="mailto:hello@swagat.com" className="hover:text-accent-400 transition-colors inline-block text-accent-400 underline">hello@swagat.com</a>
                    </p>
                 </div>
               </div>

               <div className="flex gap-6 items-start">
                 <div className="text-accent-400 mt-1">
                    <Clock className="w-8 h-8" strokeWidth={1.5} />
                 </div>
                 <div>
                    <h4 className="font-bold text-primary-900 mb-2 uppercase tracking-widest text-sm">Open Daily</h4>
                    <p className="text-primary-900/80 text-sm leading-relaxed">
                      Monday &ndash; Sunday<br />
                      <span className="text-accent-400 font-bold">11:00 AM &ndash; 11:30 PM</span>
                    </p>
                 </div>
               </div>
            </div>

            <button className="w-full sm:w-auto bg-accent-400 text-primary-900 px-10 py-5 font-bold text-sm uppercase tracking-widest shadow-[6px_6px_0_var(--color-primary-900)] hover:shadow-[3px_3px_0_var(--color-primary-900)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all text-center">
               Reserve Table Online
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
