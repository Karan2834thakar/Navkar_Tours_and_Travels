import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Car, Shield, Clock, Star, MapPin, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

import heroImage from '../assets/hero.jpg';
import car1 from '../assets/tyuuhab_1655937.avif';
import car2 from '../assets/XL6-Front-3_4th..webp';
import car3 from '../assets/baleno.png';

const RevealSection = ({ children, direction = 'up' }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
      {children}
    </motion.div>
  );
};


function Home() {
  return (
    <div className="w-full overflow-hidden bg-white text-[#2D2A26]">
      <Helmet>
        <title>Navkar Tours & Travels | Premium Car Rental in Gujarat</title>
        <meta name="description" content="Clean and affordable car rental in Gujarat. Trusted by thousands. Book now!" />
      </Helmet>

      {/* 🔹 Premium Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Premium Travel"
            className="w-full h-full object-cover opacity-50 scale-105 animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2D2A26]/80 via-[#2D2A26]/40 to-[#FDFBF7]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-white uppercase bg-[#C5A059] rounded-full shadow-[0_0_20px_rgba(197,160,89,0.5)]">
              #1 Trusted Travel Partner
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 text-white drop-shadow-2xl leading-[1.1] tracking-tighter">
              Travel with <br />
              <span className="text-[#C5A059]">Trust & Comfort</span>
            </h1>
            <p className="text-white/90 text-lg sm:text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-medium drop-shadow-lg leading-relaxed px-4">
              Premium car rentals and personalized service from Navkar Tours. Your journey, our priority.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 sm:px-0">
              <Link
                to="/cars"
                className="w-full sm:w-auto group relative px-8 sm:px-10 py-4 sm:py-5 bg-[#C5A059] hover:bg-[#B48F48] text-white font-black text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(197,160,89,0.6)] flex items-center justify-center gap-2"
              >
                Book Your Ride
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+919898711155"
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/40 font-black text-base sm:text-lg rounded-full transition-all text-center"
              >
                Call for Inquiry
              </a>
            </div>
          </motion.div>
        </div>


        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full" />
          </div>
        </motion.div>
      </section>


      {/* 🔹 Trust Badges */}
      <div className="relative z-20 -mt-12 container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Shield, label: "Secure Travel" },
            { icon: Clock, label: "24/7 Support" },
            { icon: Star, label: "Top Rated" },
            { icon: Car, label: "Clean Fleet" }
          ].map((badge, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl text-center flex flex-col items-center gap-3">
              <badge.icon className="w-8 h-8 text-[#C5A059]" />
              <span className="font-bold text-sm uppercase tracking-wider">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>


      {/* 🔹 Popular Cars Section */}
      <section className="section-padding container mx-auto px-6 bg-[#FDFBF7]">

        <RevealSection>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">Our Popular <span className="text-[#C5A059]">Fleet</span></h2>
            <div className="h-1.5 w-24 bg-[#C5A059] mx-auto rounded-full -mt-8 md:-mt-12" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[car1, car2, car3].map((img, i) => (
              <motion.div
                whileHover={{ y: -10 }}
                key={i}
                className="group relative rounded-[2rem] overflow-hidden shadow-xl bg-white border border-[#EBE3D5]"
              >
                <img
                  src={img}
                  alt={`Car ${i + 1}`}
                  className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A26]/90 via-[#2D2A26]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 sm:p-8">
                  <Link to="/cars" className="w-full py-3 sm:py-4 bg-[#C5A059] text-white font-black rounded-2xl text-center shadow-xl">
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* 🔹 Testimonials */}
      <section className="py-20 md:py-32 bg-[#F5F1E9]">
        <div className="container mx-auto px-6 text-center">
          <RevealSection direction="up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 md:mb-20">What Our <span className="text-[#C5A059]">Customers Say</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                ["Very professional drivers and clean vehicles. Our trip to Dwarka was safe and comfortable!", "– Neha Joshi"],
                ["Great service! I booked an Innova for my family. Timely pickup and friendly behavior.", "– Hiren Patel"],
                ["Affordable pricing and excellent car condition. Will definitely choose again.", "– Amisha Shah"]
              ].map(([quote, name], index) => (
                <div key={index} className="glass-card p-8 md:p-10 rounded-[2.5rem] relative text-left group hover:bg-[#C5A059] transition-colors duration-500 border border-white/40">
                  <Star className="w-8 h-8 text-[#C5A059] group-hover:text-[#2D2A26] mb-6 transition-colors" fill="currentColor" />
                  <p className="text-base md:text-lg italic mb-6 group-hover:text-[#2D2A26] transition-colors leading-relaxed">"{quote}"</p>
                  <span className="block font-black text-[#C5A059] group-hover:text-[#2D2A26] uppercase tracking-[0.2em] text-xs transition-colors">{name}</span>
                  <div className="absolute top-6 right-10 text-6xl font-serif text-[#C5A059]/10 group-hover:text-[#2D2A26]/5 transition-colors">"</div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

          {/* 🔹 Service Areas */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          <RevealSection>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-[#2D2A26]">We Operate <span className="text-[#C5A059]">Across Gujarat</span></h2>
              <p className="text-[#7D756D] max-w-xl mx-auto text-sm sm:text-base">Providing reliable transportation services in all major cities and beyond.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
              {["Rajkot", "Jamnagar", "Dwarka", "Junagadh", "Somnath", "Ahmedabad", "Porbandar", "Bhavnagar", "Surat", "Vadodara", "Gandhinagar", "And More"].map((city, i) => (
                <div key={i} className="p-4 border border-[#EBE3D5] rounded-2xl hover:border-[#C5A059] hover:bg-[#F5F1E9] transition-all text-center group">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A059] mx-auto mb-2 group-hover:scale-125 transition-transform" />
                  <span className="font-bold text-xs sm:text-sm">{city}</span>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* 🔹 How It Works */}
      <section className="py-20 md:py-32 bg-[#2D2A26] text-white relative">
        <div className="container mx-auto px-6">
          <RevealSection direction="up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12 md:mb-20 italic text-white">How to <span className="text-[#C5A059] underline decoration-wavy">Book</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-[#C5A059]/10 -translate-y-1/2" />
              {[
                { title: "Browse Cars", desc: "Check available cars by seating capacity and features.", step: "01" },
                { title: "Call to Book", desc: "Click the “Call Now” button to directly contact for booking.", step: "02" },
                { title: "Ride On Time", desc: "Your selected car will arrive at your doorstep on time!", step: "03" }
              ].map((item, i) => (
                <div key={i} className="relative z-10 bg-[#3D3A36] border border-white/5 p-8 rounded-[2.5rem] text-center group hover:border-[#C5A059] transition-all">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#C5A059] text-white font-black text-xl sm:text-2xl flex items-center justify-center rounded-2xl mx-auto mb-6 group-hover:rotate-12 transition-transform">
                    {item.step}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-zinc-400 text-sm sm:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* 🔹 Visit Us & CTA */}
      <section className="py-20 md:py-32 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <RevealSection direction="left">
              <div className="glass-card p-8 sm:p-12 rounded-[3rem] relative overflow-hidden bg-white/80 border border-[#EBE3D5]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059] rounded-bl-full opacity-10" />
                <h2 className="text-2xl sm:text-3xl font-black mb-8 flex items-center gap-3">
                  <MapPin className="text-[#C5A059]" />
                  Visit Our Office
                </h2>
                <div className="space-y-6 text-base sm:text-lg">
                  <p className="text-[#7D756D] font-medium tracking-wide italic">
                    "All types of Cars Available on Rental Basis"
                  </p>
                  <address className="not-italic leading-relaxed text-[#2D2A26]">
                    <strong className="text-[#C5A059] block mb-2 uppercase text-xs sm:text-sm tracking-[0.2em] font-black">Headquarters</strong>
                    Plot No. 148, Rudanagar-1, Vrundavan Society, <br className="hidden sm:block" />
                    St. No-7, Nr. Shakti Provision Store, <br className="hidden sm:block" />
                    Kalawad Road, Rajkot – 360005, Gujarat
                  </address>
                  <div className="pt-6">
                    <p className="uppercase text-[10px] sm:text-xs tracking-[0.2em] text-[#7D756D] mb-4 font-black">Business Hours</p>
                    <div className="flex justify-between items-center py-2 border-b border-[#EBE3D5]">
                      <span className="text-sm">Mon - Sun</span>
                      <span className="font-bold text-[#C5A059] text-sm sm:text-base">6:00 AM - 11:00 PM</span>
                    </div>
                    <p className="mt-4 text-xs sm:text-sm text-[#7D756D] italic">For emergency travel services, call directly 24/7.</p>
                  </div>
                </div>
              </div>
            </RevealSection>

            <RevealSection direction="right">
              <div className="space-y-8 text-center lg:text-left px-4">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-[#2D2A26]">Ready to Book <br className="hidden sm:block" />Your <span className="text-[#C5A059]">Next Ride?</span></h2>
                <p className="text-lg sm:text-xl text-[#7D756D] leading-relaxed max-w-xl mx-auto lg:mx-0">Safe, Affordable, and Trusted Travel. Experience the difference with Navkar Today!</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <Link
                    to="/cars"
                    className="w-full sm:w-auto px-10 py-4 sm:py-5 bg-[#2D2A26] text-white font-black rounded-full hover:scale-105 transition-all shadow-xl text-center"
                  >
                    View Our Fleet
                  </Link>
                  <a
                    href="tel:+919898711155"
                    className="w-full sm:w-auto px-10 py-4 sm:py-5 bg-[#C5A059] text-white font-black rounded-full hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>



      {/* 🔹 Policies */}
      <section className="py-24 bg-[#2D2A26] text-white">
        <div className="container mx-auto px-6">
          <RevealSection direction="up">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-black mb-10 italic text-white">Our <span className="text-[#C5A059]">Commitment</span></h2>

                <div className="space-y-6">
                  {[
                    { t: "Transparent Pricing", d: "No hidden charges. What you see is what you pay." },
                    { t: "Driver Safety", d: "All our drivers are background-verified and trained." },
                    { t: "Clean Vehicles", d: "Regularly sanitized cars before every trip." },
                    { t: "Booking Flexibility", d: "Modify or cancel your trip 24 hours in advance." },
                    { t: "24x7 Support", d: "Emergency support available for all customers." }
                  ].map((policy, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#C5A059]/10 rounded-lg flex items-center justify-center group-hover:bg-[#C5A059] transition-colors">
                        <CheckCircle2 className="w-6 h-6 text-[#C5A059] group-hover:text-[#2D2A26]" />
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-[#C5A059] mb-1">{policy.t}</h4>
                        <p className="text-zinc-300">{policy.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-[2rem] overflow-hidden group border border-white/10">
                <img src={car1} className="w-full h-[500px] object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-[#C5A059]/10 mix-blend-overlay" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                    <p className="text-3xl font-black text-white mb-2">Trusted by 10k+</p>
                    <p className="text-[#C5A059] font-bold tracking-widest uppercase text-sm">Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}



export default Home;

