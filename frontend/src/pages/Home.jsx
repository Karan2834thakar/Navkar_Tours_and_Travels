import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';


import heroImage from '../assets/hero.jpg';
import car1 from '../assets/tyuuhab_1655937.avif';
import car2 from '../assets/XL6-Front-3_4th..webp';
import car3 from '../assets/baleno.png';

const RevealSection = ({ children, direction = 'left' }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
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
    <div className="pt-20 bg-white dark:bg-[#111] text-gray-800 dark:text-white">
      <Helmet>
        <title>Navkar Tours & Travels | Home</title>
        <meta name="description" content="Clean and affordable car rental in Gujarat. Trusted by thousands. Book now!" />
      </Helmet>

      {/* 🔹 Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center bg-black overflow-hidden">
        <img
          src={heroImage}
          alt="Hero"
          className="absolute w-full h-full object-fill sm:object-center opacity-25"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center z-10 px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-pulse">
            Travel with Trust & Comfort
          </h1>
          <p className="text-gray-200 text-xl mb-8">
            Premium car rentals and personalized service from Navkar Tours.
          </p>
          <Link
            to="/cars"
            className="bg-blue-600 active:scale-90 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-full transition"
          >
            Book your ride now
          </Link>
        </motion.div>
      </div>

      {/* 🔹 Popular Cars Section */}
      <RevealSection direction="left">
        <section className="max-w-7xl mx-auto px-6 py-14">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Popular Cars</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[car1, car2, car3].map((img, i) => (
              <motion.img
                whileHover={{ scale: 1.05 }}
                key={i}
                src={img}
                alt={`Car ${i + 1}`}
                className="rounded-xl shadow-xl object-cover w-full h-56 transition-transform duration-300"
              />
            ))}
          </div>
        </section>
      </RevealSection>

      {/* 🔹 Testimonials */}
      <RevealSection direction="right">
        <section className="px-6 py-14 bg-gray-50 dark:bg-[#1a1a1a]">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">What Customers Say</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-sm text-gray-700 dark:text-gray-300">
            {[
              ["Very professional drivers and clean vehicles. Our trip to Dwarka was safe and comfortable!", "– Neha Joshi"],
              ["Great service! I booked an Innova for my family. Timely pickup and friendly behavior.", "– Hiren Patel"],
              ["Affordable pricing and excellent car condition. Will definitely choose again.", "– Amisha Shah"]
            ].map(([quote, name], index) => (
              <div key={index} className="bg-white dark:bg-[#2a2a2a] p-4 rounded-xl shadow">
                <p>{quote}</p>
                <span className="block mt-2 font-semibold text-blue-600">{name}</span>
              </div>
            ))}
          </div>
        </section>
      </RevealSection>

      {/* 🔹 Service Areas */}
      <RevealSection direction="left">
        <section className="px-6 py-14 bg-white dark:bg-[#111]">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">We Operate In</h2>
          <ul className="max-w-4xl mx-auto text-center text-gray-700 dark:text-gray-300 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {["Rajkot", "Jamnagar", "Dwarka", "Junagadh", "Somnath", "Ahmedabad", "Porbandar", "Bhavnagar", "Surat", "Vadodara", "Gandhinagar", "Also outside of Gujarat"].map((city, i) => (
              <li key={i}>{city}</li>
            ))}
          </ul>
        </section>
      </RevealSection>

      {/* 🔹 How It Works */}
      <RevealSection direction="right">
        <section className="px-6 py-14 bg-gray-100 dark:bg-[#1c1c1e]">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">How to Book</h2>
          <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-6 text-center text-gray-700 dark:text-gray-300">
            {[
              ["1. Browse Cars", "Check available cars by seating capacity and features."],
              ["2. Call to Book", "Click the “Call Now” button to directly contact for booking."],
              ["3. Ride On Time", "Your selected car will arrive at your doorstep on time!"]
            ].map(([title, desc], i) => (
              <div key={i} className="bg-white dark:bg-[#2a2a2a] p-6 rounded-xl shadow">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </RevealSection>

      {/* 🔹 Business Hours */}
      <RevealSection direction="left">
        <section className="px-6 py-14 bg-white dark:bg-[#111]">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Business Hours</h2>
          <div className="max-w-md mx-auto text-center text-gray-700 dark:text-gray-300">
            <p>📅 <strong>Monday – Sunday</strong></p>
            <p className="mb-2">🕒 <strong>6:00 AM to 11:00 PM</strong></p>
            <p>For emergency travel services, call directly 24/7.</p>
          </div>
        </section>
      </RevealSection>

      {/* 🔹 CTA */}
      <RevealSection direction="right">
        <section className="px-6 py-14 bg-gray-100 dark:bg-[#1c1c1e] text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Next Ride?</h2>
          <p className="mb-6 text-lg">Safe, Affordable, and Trusted Travel. Choose Navkar Today!</p>
          <Link
            to="/cars"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            View Our Cars
          </Link>
        </section>
      </RevealSection>

      {/* 🔹 Policies */}
      <RevealSection direction="left">
        <section className="bg-gray-100 dark:bg-[#000000] px-6 py-14">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Our Policies</h2>
            <ul className="space-y-5 text-gray-700 dark:text-gray-300">
              <li>→ <strong>Transparent Pricing:</strong> No hidden charges. What you see is what you pay.</li>
              <li>→ <strong>Driver Safety:</strong> All our drivers are background-verified and trained.</li>
              <li>→ <strong>Clean Vehicles:</strong> Regularly sanitized cars before every trip.</li>
              <li>→ <strong>Booking Flexibility:</strong> Modify or cancel your trip 24 hours in advance.</li>
              <li>→ <strong>24x7 Support:</strong> Emergency support available for all customers.</li>
            </ul>
          </div>
        </section>
      </RevealSection>
    </div>
  );
}

export default Home;
