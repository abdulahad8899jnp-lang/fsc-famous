
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden pt-24">

//       {/* LIGHT BACKGROUND (SIMPLIFIED) */}
//       <div className="absolute inset-0">
//         <img
//           src="/bgimg.png"
//           alt="hero"
//           className="w-full h-full object-cover opacity-20 scale-105"
//         />

//         <div className="absolute inset-0 bg-black/70" />

//         {/* soft gold glow */}
//         <div className="absolute top-0 left-0 w-80 h-80 bg-[#D4AF37]/10 blur-[120px]" />
//         <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#B8860B]/10 blur-[120px]" />
//       </div>

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">

//         <div className="text-center">

//           {/* TAG */}
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-[#D4AF37] tracking-[6px] uppercase text-xs md:text-sm"
//           >
//             Famous Sherwani Collection
//           </motion.p>

//           {/* HEADING */}
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="mt-6 text-4xl md:text-6xl font-black leading-tight"
//           >
//             Premium Wedding
//             <br />
//             <span className="bg-gradient-to-r from-[#F5E6B3] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
//               Sherwani Collection
//             </span>
//           </motion.h1>

//           {/* DESCRIPTION */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="mt-6 text-gray-400 max-w-2xl mx-auto text-sm md:text-base"
//           >
//             Luxury Sherwani, Indo-Western and wedding outfits crafted with elegance,
//             tradition and modern royal style.
//           </motion.p>

//           {/* ONLY ONE CTA (Contact only) */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="mt-10"
//           >
//             <a href="/contact">
//               <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black font-bold hover:scale-105 transition flex items-center gap-2 mx-auto">
//                 Contact Us
//                 <ArrowRight size={18} />
//               </button>
//             </a>
//           </motion.div>

//         </div>
//       </div>

//       {/* BOTTOM FADE */}
//       <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
//     </section>
//   );
// }






// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden pt-24">

//       {/* BACKGROUND */}
//       <div className="absolute inset-0">

//         <img
//           src="/bghero.jpeg"
//           alt="hero"
//           className="w-full h-full object-cover opacity-20 scale-105"
//         />

//         <div className="absolute inset-0 bg-black/80" />

//         {/* SOFT LUXURY LIGHTS */}
//         <motion.div
//           animate={{ x: [0, 15, 0], y: [0, 10, 0] }}
//           transition={{ duration: 12, repeat: Infinity }}
//           className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/8 blur-[140px]"
//         />

//         <motion.div
//           animate={{ x: [0, -15, 0], y: [0, -10, 0] }}
//           transition={{ duration: 14, repeat: Infinity }}
//           className="absolute bottom-0 right-0 w-96 h-96 bg-[#B8860B]/6 blur-[140px]"
//         />

//       </div>

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">

//         <div className="text-center">

//           {/* TAG */}
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-[#D4AF37] tracking-[6px] uppercase text-xs md:text-sm"
//           >
//             Famous Sherwani Collection
//           </motion.p>

//           {/* HEADING */}
//           <motion.h1
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
//           >
//             Premium Wedding
//             <br />

//             <span className="bg-gradient-to-r from-[#F5E6B3] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
//               Sherwani Collection
//             </span>
//           </motion.h1>

//           {/* DESCRIPTION */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="mt-6 text-zinc-300 max-w-2xl mx-auto text-sm md:text-base leading-8"
//           >
//             Luxury Sherwani, Indo-Western and wedding outfits crafted with elegance,
//             tradition and royal modern style for unforgettable occasions.
//           </motion.p>

//           {/* CTA */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="mt-10"
//           >
//             <a href="/contact">
//               <button className="
//                 group
//                 px-8 py-4
//                 rounded-2xl
//                 bg-gradient-to-r from-[#D4AF37] to-[#B8860B]
//                 text-black font-bold
//                 flex items-center gap-2
//                 mx-auto
//                 border border-yellow-300/20
//                 hover:scale-105
//                 hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]
//                 transition-all duration-300
//               ">
//                 Contact Us
//                 <ArrowRight
//                   size={18}
//                   className="group-hover:translate-x-1 transition"
//                 />
//               </button>
//             </a>
//           </motion.div>

//         </div>
//       </div>

//       {/* BOTTOM FADE */}
//       <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white pt-20 md:pt-24">

      {/* BACKGROUND */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src="/bghero.jpeg"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70" />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-5 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >

        <motion.p
          variants={item}
          className="text-[#D4AF37] tracking-[5px] uppercase text-xs"
        >
          Famous Sherwani Collection
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-5 text-3xl md:text-6xl font-light leading-tight"
        >
          Royal Wedding
          <br />
          <span className="font-bold text-[#D4AF37]">
            Sherwani Collection
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 text-zinc-300 max-w-xl mx-auto text-sm md:text-base"
        >
          Elegant wedding sherwanis and Indo-Western outfits crafted for modern royalty.
        </motion.p>

        {/* CTA */}
        <motion.div
  variants={item}
  className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
>
  <a href="/products" className="w-full sm:w-auto">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full sm:w-auto px-7 py-3 bg-[#D4AF37] text-black rounded-full font-semibold flex items-center justify-center gap-2 whitespace-nowrap"
    >
      Shop Now <ArrowRight size={18} />
    </motion.button>
  </a>

  <a href="/products" className="w-full sm:w-auto">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full sm:w-auto px-7 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-full whitespace-nowrap"
    >
      Explore Collection
    </motion.button>
  </a>
</motion.div>

      </motion.div>
    </section>
  );
}