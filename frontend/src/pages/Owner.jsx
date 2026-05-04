import { motion } from "framer-motion";
import ownerImg from "../assets/owner.jpg";
import owner1 from '../assets/owner-gallery1.jpg';
import owner2 from '../assets/owner-gallery2.jpg';
import owner3 from '../assets/owner-gallery3.jpg';
import { Instagram, Mail, Award, Heart, ShieldCheck, Star, Camera } from "lucide-react";

function Owner() {
  return (
    <div className="pt-24 sm:pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* 🔹 Owner Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20 md:mb-32"
        >
          {/* Owner Image */}
          <div className="relative group w-full max-w-[320px] md:max-w-[450px]">
            <div className="absolute -inset-4 bg-[#C5A059] rounded-[2.5rem] opacity-10 blur-xl group-hover:opacity-20 transition-opacity" />
            <img
              src={ownerImg}
              alt="Mr. Ketanbhai Sanghvi"
              className="relative w-full aspect-[4/5] object-cover rounded-[2rem] shadow-2xl transition-all duration-700"
            />
            <div className="absolute bottom-6 -right-4 sm:-right-8 bg-[#C5A059] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-black shadow-2xl rotate-3 text-sm sm:text-base">
              Founder & CEO
            </div>
          </div>

          {/* Owner Description */}
          <div className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left pt-10 lg:pt-0">
            <div>
              <span className="inline-block px-4 py-1.5 mb-4 text-[10px] sm:text-xs font-black tracking-[0.2em] text-[#C5A059] uppercase border border-[#C5A059]/30 rounded-full">
                The Visionary
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight text-[#2D2A26]">
                Mr. Ketanbhai <br className="hidden sm:block lg:hidden" /><span className="text-[#C5A059]">Sanghvi</span>
              </h1>
            </div>
            
            <div className="space-y-6 text-lg sm:text-xl text-[#7D756D] font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>
                Ketanbhai is the proud founder and owner of <strong className="text-[#2D2A26] font-bold">Navkar Tours and Travels</strong>, a business built with dedication, honesty, and service to others.
              </p>
              <p>
                He is known for his kindness and <strong className="text-[#C5A059] italic">sevabhav</strong>. He regularly contributes to social causes, especially in protecting cows and standing up for their rights.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="https://www.instagram.com/navkar_tours_travels1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="flex items-center justify-center gap-3 px-8 py-4 bg-[#2D2A26] text-white rounded-full font-black hover:scale-105 transition-all shadow-xl"
              >
                <Instagram className="text-[#C5A059]" />
                Follow Journey
              </a>
              <a 
                href="mailto:sanghvik49@gmail.com"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-[#C5A059] text-white rounded-full font-black hover:scale-105 transition-all shadow-xl"
              >
                <Mail />
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>

        {/* 🔹 Achievements Section */}
        <section className="mb-20 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">Legacy of <span className="text-[#C5A059]">Service</span></h2>
            <p className="text-[#7D756D] uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold -mt-8 md:-mt-10">Honors & Achievements</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, t: "Community Leader", d: "Recognized for leading social upliftment programs in Rajkot (2023)." },
              { icon: Heart, t: "Gauseva Medal", d: "Honored for contributions to cow protection movements across Gujarat." },
              { icon: Star, t: "Humanity Star", d: "For outstanding voluntary service during flood relief efforts." },
              { icon: ShieldCheck, t: "Business Excellence", d: "Awarded for excellence in customer service in Gujarat’s transport sector." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-8 rounded-3xl group hover:bg-[#C5A059] transition-all duration-500 border border-[#EBE3D5]"
              >
                <div className="w-12 h-12 bg-[#C5A059]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                  <item.icon className="text-[#C5A059]" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#2D2A26] transition-colors">{item.t}</h3>
                <p className="text-sm text-[#7D756D] group-hover:text-[#2D2A26]/80 leading-relaxed transition-colors">{item.d}</p>

              </motion.div>
            ))}
          </div>
        </section>

        {/* 🔹 Photo Gallery Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-center lg:items-end gap-6 mb-12 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 className="section-title !text-left flex items-center justify-center md:justify-start gap-4">
                <Camera className="text-[#C5A059] hidden sm:block" />
                In the <span className="text-[#C5A059]">Field</span>
              </h2>
              <p className="text-[#7D756D] text-base sm:text-lg -mt-8 md:-mt-10 mb-6 md:mb-10 px-4 md:px-0">Capturing moments of service, leadership, and connection with the community.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[owner1, owner2, owner3].map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="rounded-[2rem] overflow-hidden shadow-2xl relative aspect-[4/5] group border border-[#EBE3D5]"
              >
                <img
                  src={img}
                  alt={`Ketanbhai Gallery ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A26]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <span className="text-white font-bold tracking-widest uppercase text-[10px]">Jeevkala Seva Foundation</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}



export default Owner;

