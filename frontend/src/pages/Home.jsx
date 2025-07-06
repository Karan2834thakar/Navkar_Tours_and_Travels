import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.jpg'; // Update with a high-quality image
import car1 from '../assets/tyuuhab_1655937.avif';
import car2 from '../assets/XL6-Front-3_4th..webp';
import car3 from '../assets/baleno.png';
import { Helmet } from "react-helmet";

<Helmet>
  <title>Navkar Tours & Travels | Home</title>
  <meta name="description" content="Clean and affordable car rental in Gujarat. Trusted by thousands. Book now!" />
</Helmet>

// import gallery1 from '../assets/gallery1.jpg';
// import gallery2 from '../assets/gallery2.jpg';
// import gallery3 from '../assets/gallery3.jpg';

function Home() {
  return (
    <div className="pt-20 bg-white dark:bg-[#111] text-gray-800 dark:text-white">

      {/* 🔹 Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center bg-black">
        <img
          src={heroImage}
          alt="Hero"
          className="absolute w-full h-full object-fit opacity-25 bg-black"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center z-10 px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Travel with Trust & Comfort
          </h1>
          <p className="text-gray-200 text-lg mb-6">
            Premium car rentals and personalized service from Navkar Tours.
          </p>
          <Link
            to="/cars"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition"
          >
            View Our Fleet
          </Link>
        </motion.div>
      </div>

      {/* 🔹 Our Cars Section */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Popular Cars</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[car1, car2, car3].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Car ${i + 1}`}
              className="rounded-xl shadow-lg object-cover w-full h-56"
            />
          ))}
        </div>
      </section>
      {/* 🔹 Customer Testimonials */}
<section className="px-6 py-14 bg-gray-50 dark:bg-[#1a1a1a]">
  <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">What Customers Say</h2>
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-sm text-gray-700 dark:text-gray-300">
    <div className="bg-white dark:bg-[#2a2a2a] p-4 rounded-xl shadow">
      <p>"Very professional drivers and clean vehicles. Our trip to Dwarka was safe and comfortable!"</p>
      <span className="block mt-2 font-semibold text-blue-600">– Neha Joshi</span>
    </div>
    <div className="bg-white dark:bg-[#2a2a2a] p-4 rounded-xl shadow">
      <p>"Great service! I booked an Innova for my family. Timely pickup and friendly behavior."</p>
      <span className="block mt-2 font-semibold text-blue-600">– Hiren Patel</span>
    </div>
    <div className="bg-white dark:bg-[#2a2a2a] p-4 rounded-xl shadow">
      <p>"Affordable pricing and excellent car condition. Will definitely choose again."</p>
      <span className="block mt-2 font-semibold text-blue-600">– Amisha Shah</span>
    </div>
  </div>
</section>

{/* 🔹 Service Areas */}
<section className="px-6 py-14 bg-white dark:bg-[#111]">
  <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">We Operate In</h2>
  <ul className="max-w-4xl mx-auto text-center text-gray-700 dark:text-gray-300 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
    <li>Rajkot</li>
    <li>Jamnagar</li>
    <li>Dwarka</li>
    <li>Junagadh</li>
    <li>Somnath</li>
    <li>Ahmedabad</li>
    <li>Porbandar</li>
    <li>Bhavnagar</li>
    <li>Surat</li>
    <li>Vadodara</li>
    <li>Gandhinagar</li>
    <li>Also outside of Gujarat</li>
    
  </ul>
</section>

{/* 🔹 How It Works */}
<section className="px-6 py-14 bg-gray-100 dark:bg-[#1c1c1e]">
  <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">How to Book</h2>
  <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-6 text-center text-gray-700 dark:text-gray-300">
    <div className="bg-white dark:bg-[#2a2a2a] p-6 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-2">1. Browse Cars</h3>
      <p>Check available cars by seating capacity and features.</p>
    </div>
    <div className="bg-white dark:bg-[#2a2a2a] p-6 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-2">2. Call to Book</h3>
      <p>Click the “Call Now” button to directly contact for booking.</p>
    </div>
    <div className="bg-white dark:bg-[#2a2a2a] p-6 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-2">3. Ride On Time</h3>
      <p>Your selected car will arrive at your doorstep on time!</p>
    </div>
  </div>
</section>

{/* 🔹 Business Hours */}
<section className="px-6 py-14 bg-white dark:bg-[#111]">
  <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Business Hours</h2>
  <div className="max-w-md mx-auto text-center text-gray-700 dark:text-gray-300">
    <p>📅 <strong>Monday – Sunday</strong></p>
    <p className="mb-2">🕒 <strong>6:00 AM to 11:00 PM</strong></p>
    <p>For emergency travel services, call directly 24/7.</p>
  </div>
</section>

{/* 🔹 Final CTA */}
<section className="px-6 py-14  bg-gray-100 dark:bg-[#1c1c1e] text-white text-center">
  <h2 className="text-3xl font-bold mb-4">Ready to Book Your Next Ride?</h2>
  <p className="mb-6 text-lg">Safe, Affordable, and Trusted Travel. Choose Navkar Today!</p>
  <Link
    to="/cars"
    className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
  >
    View Our Cars
  </Link>
</section>


      {/* 🔹 Policies Section */}
      <section className="bg-gray-100 dark:bg-[#000000] px-6 py-14">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Our Policies</h2>
          <ul className="space-y-5 text-gray-700 dark:text-gray-300">
            <li>✅ <strong>Transparent Pricing:</strong> No hidden charges. What you see is what you pay.</li>
            <li>✅ <strong>Driver Safety:</strong> All our drivers are background-verified and trained.</li>
            <li>✅ <strong>Clean Vehicles:</strong> Regularly sanitized cars before every trip.</li>
            <li>✅ <strong>Booking Flexibility:</strong> Modify or cancel your trip 24 hours in advance.</li>
            <li>✅ <strong>24x7 Support:</strong> Emergency support available for all customers.</li>
          </ul>
        </div>
      </section>

      {/* 🔹 Gallery Section */}
      {/* <section className="px-6 py-14 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Moments from the Road</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[gallery1, gallery2, gallery3].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i + 1}`}
              className="rounded-xl object-cover w-full h-60 shadow"
            />
          ))}
        </div>
      </section> */}
    </div>
  );
}

export default Home;
