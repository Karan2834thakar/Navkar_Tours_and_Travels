import { motion } from 'framer-motion';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';

function Cars() {
  return (
    <div className="pt-24 px-6 md:px-10 bg-white dark:bg-[#111] min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl md:text-6xl  mb-8 text-center text-blue-600"
      >
        Explore Our Car Collection
      </motion.h1>
      <motion.h4
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-2xl  mb-8 text-center text-blue-600"
      >
        <p className=" max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-10">
  Find the perfect car for your journey. Whether you're planning a family trip, a religious tour, or a business ride — we’ve got the right vehicle for every need. Browse our collection and <span className="font-semibold text-blue-600">book your car now</span> with just one call!
</p>
      </motion.h4>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto pb-10">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default Cars;
