import { motion } from 'framer-motion';
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
    capacity: 12,
    image: traveller,
    phone: "+919106661466",
  },
   {
    id: 10,
    name: "Tempo Traveller",
    capacity: 17,
    image: traveller,
    phone: "+919106661466",
  },
  {
    id: 11,
    name: "Tempo Traveller",
    capacity: 26,
    image: traveller,
    phone: "+919106661466",
  },
  {
    id: 12,
    name: "Tempo Traveller",
    capacity: 29,
    image: traveller,
    phone: "+919106661466",
  },
];


function Cars() {
  return (
    <div className="pt-24 sm:pt-32 pb-20 bg-[#FDFBF7] min-h-screen">
      <div className="section-padding container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-[#2D2A26] mb-4"
          >
            Explore Our <span className="text-[#C5A059]">Collection</span>
          </motion.h1>
          <div className="h-1.5 w-24 bg-[#C5A059] mx-auto rounded-full" />
        </div>


        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}





export default Cars;

