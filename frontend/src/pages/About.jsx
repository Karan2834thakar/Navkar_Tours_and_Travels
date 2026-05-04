import { motion } from 'framer-motion';
import poster1 from '../assets/poster1.jpg';
import poster2 from '../assets/poster2.jpg';
import poster3 from '../assets/poster3.jpg';
import poster4 from '../assets/poster4.jpg';
import banner1 from '../assets/banner1.jpg';
import { Instagram, MessageSquare, Heart, Award, ShieldCheck } from "lucide-react";

function About() {
  return (
    <div className="pt-24 sm:pt-32 pb-20 bg-white min-h-screen">
      <div className="section-padding container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#2D2A26] mb-4">
              About <span className="text-[#C5A059]">Navkar Tours</span>
            </h1>
            <div className="h-1.5 w-24 bg-[#C5A059] mx-auto rounded-full" />
          </motion.div>
        </div>


        {/* 🔹 Stats/Trust Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-24">
          {[
            { icon: Heart, label: "10,000+", sub: "Happy Travelers" },
            { icon: Award, label: "15+ Years", sub: "Of Excellence" },
            { icon: ShieldCheck, label: "100% Safe", sub: "Verified Drivers" }
          ].map((item, i) => (
            <div key={i} className="glass-card p-8 md:p-10 rounded-3xl text-center border border-[#EBE3D5] bg-[#FDFBF7]/50">
              <item.icon className="w-8 h-8 md:w-10 md:h-10 text-[#C5A059] mx-auto mb-4" />
              <div className="text-2xl md:text-3xl font-black mb-1 text-[#2D2A26]">{item.label}</div>
              <div className="text-[#7D756D] font-bold uppercase tracking-widest text-[10px] md:text-xs">{item.sub}</div>
            </div>
          ))}
        </div>

        {/* 🔹 Social Link */}
        <div className="text-center mb-20 md:mb-24">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="https://www.instagram.com/navkar_tours_travels1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="inline-flex flex-col items-center group"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-[#C5A059] to-[#EBE3D5] rounded-3xl flex items-center justify-center text-white shadow-2xl mb-4 group-hover:rotate-6 transition-transform">
              <Instagram size={32} className="sm:hidden" />
              <Instagram size={40} className="hidden sm:block" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2A26] group-hover:text-[#C5A059] transition-colors italic">@navkar_tours_travels1</h3>
            <p className="text-[#7D756D] text-xs sm:text-sm">Official Instagram Account</p>
          </motion.a>
        </div>

        {/* 🔹 Feedback Section */}
        <section className="bg-[#2D2A26] rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-20 text-center text-white mb-20 md:mb-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[#C5A059]/5" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-white leading-tight">We’d Love Your <br className="sm:hidden" /><span className="text-[#C5A059] underline decoration-wavy">Feedback</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-10 text-base sm:text-lg">
              Your experience matters to us! If you have any feedback, suggestions, or complaints, feel free to reach out directly.
            </p>
            <a
              href="https://wa.me/919106661466?text=Hello%20Navkar%20Tours%2C%20I%20would%20like%20to%20share%20some%20feedback..."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#C5A059] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-black text-base sm:text-lg hover:scale-105 transition-all shadow-2xl shadow-[#C5A059]/20"
            >
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
              Message on WhatsApp
            </a>
          </div>
        </section>

        {/* 🔹 Gallery Section */}
        <section>
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 text-[#2D2A26]">Our <span className="text-[#C5A059]">Legacy</span></h2>
            <p className="text-[#7D756D] text-sm sm:text-base">Posters and banners through the years.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
            {[poster1, poster2, poster3, poster4, banner1].map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4] border border-[#EBE3D5]"
              >
                <img
                  src={img}
                  alt={`Legacy ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}




export default About;

