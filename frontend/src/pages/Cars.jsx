import { motion } from 'framer-motion';
// import { cars } from '../data/cars';
import CarCard from '../components/CarCard';
import crysta from '../assets/tyuuhab_1655937.avif';
import ertiga from '../assets/suzuki-ertiga-hybrid-color-799385.avif';
import dzire from '../assets/maruti-suzuki-swift-dzire-magma-grey.png';
import baleno from '../assets/baleno.png';
import xl6 from '../assets/XL6-Front-3_4th..webp';
import aura from '../assets/vs6fq0b_1639129.avif';
import urbania from '../assets/Force_Urbania_front_2022_11_23_T08_07_52_722_Z_62a15f1e7f.jpg';
import traveller from '../assets/traveller-11.png';

export const cars = [
  {
    id: 1,
    name: "Innova Crysta",
    capacity: 7,
    image: crysta,
    phone: "+919106661466",
  },
  {
    id: 2,
    name: "Ertiga",
    capacity: 6,
    image: ertiga,
    phone: "+919106661466",
  },
  {
    id: 3,
    name: "Swift Dzire",
    capacity: 4,
    image: dzire,
    phone: "+919106661466",
  },
  {
    id: 4,
    name: "Baleno",
    capacity: 5,
    image: baleno,
    phone: "+919106661466",
  },
  {
    id: 5,
    name: "Nexa XL6",
    capacity: 7,
    image: xl6,
    phone: "+919106661466",
  },
  {
    id: 6,
    name: "AURA",
    capacity: 5,
    image: aura,
    phone: "+919106661466",
  },
  {
    id: 7,
    name: "Urbania",
    capacity: 13,
    image: urbania,
    phone: "+919106661466",
  },
  {
    id: 8,
    name: "Urbania",
    capacity: 17,
    image: urbania,
    phone: "+919106661466",
  },
  {
    id: 9,
    name: "Tempo Traveller",
    capacity: 14,
    image: traveller,
    phone: "+919106661466",
  },
  {
    id: 10,
    name: "Tempo Traveller",
    capacity: 26,
    image: traveller,
    phone: "+919106661466",
  },
  {
    id: 11,
    name: "Tempo Traveller",
    capacity: 29,
    image: traveller,
    phone: "+919106661466",
  },
];


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
