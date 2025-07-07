import { motion } from "framer-motion";
import ownerImg from "../assets/owner.jpg";
import owner1 from '../assets/owner-gallery1.jpg';
import owner2 from '../assets/owner-gallery2.jpg';
import owner3 from '../assets/owner-gallery3.jpg';
import { FaInstagramSquare } from "react-icons/fa"; // Replace with real photo

function Owner() {
  return (
    <div className="pt-24 px-6 md:px-10 bg-white dark:bg-[#111] min-h-screen text-gray-800 dark:text-white">
      
      {/* 🔹 Owner Introduction Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
      >
        {/* Owner Image */}
        <div className="flex-shrink-0">
          <img
            src={ownerImg}
            alt="Owner"
            className="w-80 h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Owner Description */}
        <div className="flex-1">
          <h1 className="text-4xl  text-blue-600 mb-4">
            Mr. Ketanbhai Sanghvi
          </h1>
          
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Ketanbhai is the proud founder and owner of <strong>Navkar Tours and Travels</strong>, a business built with dedication, honesty, and service to others.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            He is known not just for his professional work, but also for his kindness and <strong>sevabhav</strong> (selfless service). He regularly contributes to <strong>social causes</strong>, especially in <strong>protecting cows</strong> and standing up for their rights.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Ketanbhai believes deeply in the values of <strong>karma</strong> and <strong>seva</strong>. His leadership reflects humility, care for others, and a passion for building a better society alongside business growth.
          </p>
        </div>
       
      </motion.div>
      {/* <p className="text-center justify-between text-lg mt-5 ml-7 text-blue-500">Explor more about him on social media </p> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-12 mx-auto flex  justify-center  md:flex-row items-center gap-2"
      >
        
          <a className="  text-6xl justify-center  " href="https://www.instagram.com/rajkot_jeev?igsh=MWNram53MW5yODBqaw==">
          <span>

          <FaInstagramSquare />
          </span>
         
          </a>
      </motion.div>
           <h3 className=" mx-auto flex  justify-center  md:flex-row items-center gap-2 text-lg text-pink-700">Instagram Account of Owner</h3>
 {/* 🔹 Contact via Email Section */}
<section className="px-6 py-10 bg-gray-100 dark:bg-[#1a1a1a] text-center">
  <h2 className="text-2xl font-bold text-blue-600 mb-3">Contact the Owner</h2>
  <p className="text-gray-700 dark:text-gray-300 mb-5">
    Have any suggestions, collaborations, or important queries? Feel free to email directly to Ketanbhai.
  </p>
  <a
    href="mailto:sanghvik49@gmail.com?subject=Inquiry%20about%20Navkar%20Tours%20&body=Hello%20Ketanbhai%2C"
    className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition shadow-lg"
  >
    📧 Mail Now
  </a>
</section>


        
      {/* 🔹 Achievements Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-14 max-w-6xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Achievements of Ketanbhai</h2>

        <div className="grid md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
          <div className="bg-gray-100 dark:bg-[#1c1c1e] p-6 rounded-xl shadow">
            🏅 <strong>Community Leader Award (2023)</strong><br />
            Recognized for leading social upliftment programs in Rajkot.
          </div>
          <div className="bg-gray-100 dark:bg-[#1c1c1e] p-6 rounded-xl shadow">
            🐄 <strong>Gauseva Gold Medal</strong><br />
            Honored for contributions to cow protection movements across Gujarat.
          </div>
          <div className="bg-gray-100 dark:bg-[#1c1c1e] p-6 rounded-xl shadow">
            🤝 <strong>Humanity Star Recognition</strong><br />
            For outstanding voluntary service during flood relief efforts.
          </div>
          <div className="bg-gray-100 dark:bg-[#1c1c1e] p-6 rounded-xl shadow">
            🚘 <strong>Travel Business Excellence</strong><br />
            Awarded for excellence in customer service in Gujarat’s transport sector.
          </div>
        </div>
      </motion.section>
      {/* 🔹 Owner Image Gallery Section */}
{/* 🔹 Owner's Personal Photos Section (Simple 3 images) */}
<section className="mt-14 max-w-4xl mx-auto px-4">
  <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Photo Gallery</h2>

  <div className="space-y-6">
    <img
      src={owner1}
      alt="Ketanbhai Photo 1"
      className="w-full h-auto rounded-xl shadow-lg object-cover"
    />
    <img
      src={owner2}
      alt="Ketanbhai Photo 2"
      className="w-full h-auto rounded-xl shadow-lg object-cover"
    />
    <img
      src={owner3}
      alt="Ketanbhai Photo 3"
      className="w-full h-auto rounded-xl shadow-lg object-cover"
    />
  </div>
</section>


    </div>
  );
}

export default Owner;
