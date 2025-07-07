import { motion } from "framer-motion";

function CarCard({ car }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="bg-white dark:bg-[#1c1c1e] rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800"
    >
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{car.name}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Seats: {car.capacity} passengers
        </p>

        <a
          href={`tel:${car.phone}`}
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Call Now
        </a>
         <a
          href={`https://wa.me/${car.phone.replace('+', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 ml-2 text-white px-4 py-2 rounded-full text-sm font-medium transition"
        >
          Message Now
        </a>
      </div>
    </motion.div>
  );
}

export default CarCard;
