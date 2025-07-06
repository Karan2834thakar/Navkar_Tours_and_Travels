import { motion } from 'framer-motion';
import poster1 from '../assets/poster1.jpg';
import poster2 from '../assets/poster2.jpg';
import poster3 from '../assets/poster3.jpg';
import poster4 from '../assets/poster4.jpg';
import banner1 from '../assets/banner1.jpg';

function About() {
  return (
    <div className="pt-24 px-6 md:px-10 bg-white dark:bg-[#111] min-h-screen text-gray-800 dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-blue-600 mb-4">About Navkar Tours & Travels</h1>

        <p className=" text-2xl mb-4 text-gray-700 dark:text-gray-300">
          Navkar Tours and Travels is a trusted travel service based in Gujarat, offering safe, clean, and affordable car rental options. Our mission is to provide comfortable journeys with reliable drivers and well-maintained cars.
        </p>

        <p className="text-2xl mb-4 text-gray-700 dark:text-gray-300">
          Whether it’s a short family trip, a religious tour, or a long-distance business ride, we’ve got the perfect vehicle and the right driver for every journey.
        </p>

        <p className="text-2xl text-gray-700 dark:text-gray-300">
          Over the years, we’ve proudly served thousands of happy customers across Gujarat and surrounding states.
        </p>
      </motion.div>

      {/* 🔹 Posters & Banners Section */}
      <section className="max-w-6xl mx-auto mt-14">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Company Posters & Banners</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">
          <img
            src={poster1}
            alt="Poster 1"
            className="rounded-xl shadow-lg object-fit w-full h-96"
          />
          <img
            src={poster2}
            alt="Poster 2"
            className="rounded-xl shadow-lg object-fit w-full h-96"
          />
           <img
            src={poster3}
            alt="Poster 3"
            className="rounded-xl shadow-lg object-fit w-full h-96"
          />
           <img
            src={poster4}
            alt="Poster 4"
            className="rounded-xl shadow-lg object-fit w-full h-96"
          />
          <img
            src={banner1}
            alt="Banner"
            className="rounded-xl shadow-lg object-fit w-full h-96"
          />
        </div>
      </section>
    </div>
  );
}

export default About;
