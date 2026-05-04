import { motion } from "framer-motion";
import { Users, Phone, MessageSquare } from "lucide-react";

function CarCard({ car }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden border border-[#EBE3D5] transition-all duration-300 hover:border-[#C5A059]/50 h-full flex flex-col"
    >
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#2D2A26] px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-black flex items-center gap-1.5 border border-[#EBE3D5] shadow-sm">
          <Users className="w-3 h-3 text-[#C5A059]" />
          {car.capacity} Seats
        </div>
      </div>

      <div className="p-5 sm:p-6 bg-[#FDFBF7] flex-1 flex flex-col">
        <h2 className="text-xl sm:text-2xl font-black mb-1 text-[#2D2A26] group-hover:text-[#C5A059] transition-colors">{car.name}</h2>
        <p className="text-[10px] font-black tracking-[0.2em] text-[#7D756D] uppercase mb-6">
          Premium Selection
        </p>

        <div className="mt-auto grid grid-cols-2 gap-3">
          <a
            href={`tel:${car.phone}`}
            className="flex items-center justify-center gap-2 py-3 bg-[#C5A059] text-white rounded-xl font-black text-xs sm:text-sm hover:bg-[#B48F48] transition-all active:scale-95 shadow-lg shadow-[#C5A059]/10"
          >
            <Phone className="w-4 h-4" />
            Call
          </a>
          <a
            href={`https://wa.me/${car.phone.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 bg-[#2D2A26] text-white rounded-xl font-black text-xs sm:text-sm hover:opacity-90 transition-all active:scale-95 shadow-xl"
          >
            <MessageSquare className="w-4 h-4 text-[#C5A059]" />
            WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}



export default CarCard;

