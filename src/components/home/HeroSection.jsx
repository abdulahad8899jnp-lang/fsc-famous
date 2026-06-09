
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// export default function HeroSection() {
//   return (
// <section className="relative min-h-screen flex items-center bg-black text-white pt-24 overflow-hidden">

//   {/* BACKGROUND IMAGE */}
//   <div className="absolute inset-0">
//     <img
//       src="/bgimg.png"
//       className="w-full h-full object-cover scale-105 opacity-20"
//     />
//     <div className="absolute inset-0 bg-black/60" />
//   </div>

//   {/* SOFT GOLD GLOW */}
//   <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#D4AF37]/10 blur-[150px]" />
//   <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#B8860B]/10 blur-[150px]" />

//   {/* CONTENT */}
//   <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">

//     <div className="grid lg:grid-cols-2 gap-14 items-center">

//       {/* LEFT */}
//       <div>

//         {/* TAG */}
//         <div className="inline-flex items-center px-5 py-2 rounded-full bg-[#111]/80 border border-[#D4AF37]/20 text-[#D4AF37] text-sm">
//           👑 Luxury Wedding Collection
//         </div>

//         {/* TITLE */}
//         <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
//           Famous Sherwani
//           <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F5E6B3] via-[#D4AF37] to-[#B8860B]">
//             Collection
//           </span>
//         </h1>

//         {/* DESCRIPTION */}
//         <p className="mt-6 text-zinc-300 text-lg max-w-xl leading-8">
//           Premium Sherwani, Indo-Western and wedding fashion crafted for elegance, royalty and unforgettable occasions.
//         </p>

//         {/* ONLY ONE BUTTON */}
//         <div className="mt-10">
//           <a href="/products">
//             <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black font-bold hover:scale-105 duration-300">
//               Explore Collection
//             </button>
//           </a>
//         </div>

//       </div>

//       {/* RIGHT IMAGE */}
//       <div className="hidden lg:flex justify-center">
//         <div className="relative">

//           <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[120px]" />

//           <div className="relative rounded-[32px] overflow-hidden border border-[#D4AF37]/20">
//             <img
//               src="/bgimg.png"
//               className="w-[420px] h-[600px] object-cover"
//             />
//           </div>

//           {/* SINGLE FLOAT TAG */}
//           <div className="absolute -left-6 top-10 px-4 py-2 bg-[#111]/80 border border-[#D4AF37]/20 rounded-xl text-sm">
//             ✨ Premium Sherwani
//           </div>

//         </div>
//       </div>

//     </div>
//   </div>

// </section>








//     <section
//       className="
//       relative min-h-screen
//       overflow-hidden
//       flex items-center
//       bg-black text-white
//       pt-24
//     "
//     >
//       {/* PREMIUM BACKGROUND */}

//       {/* PREMIUM DESIGN BACKGROUND */}

// <div className="absolute inset-0 overflow-hidden">
//   {/* MAIN IMAGE */}

//  <img
//   src="/bgimg.png"
//   alt="hero"
//   className="
//   absolute inset-0
//   w-full h-full
//   object-cover
//   scale-110
//   opacity-30
//   saturate-[0.7]
// "
// />

//   {/* DARK LAYER */}

//   <div className="absolute inset-0 bg-black/40 md:bg-black/60" />

//   {/* GOLD GRADIENT */}

//  <div
//   className="
//   absolute inset-0
//   bg-gradient-to-br
//   from-[#D4AF37]/10
//   via-transparent
//   to-[#B8860B]/10
// "
// />

//   {/* LUXURY SPOT LIGHT */}

//  <div
//   className="
//   absolute
//   top-[-10%]
//   left-[-10%]
//   w-[600px]
//   h-[600px]
//   rounded-full
//   bg-[#D4AF37]/15
//   blur-[220px]
// "
// />

//   <div
//   className="
//   absolute
//   bottom-[-10%]
//   right-[-10%]
//   w-[500px]
//   h-[500px]
//   rounded-full
//   bg-[#B8860B]/10
//   blur-[220px]
// "
// />

//   {/* CENTER LIGHT */}

//   <div
//     className="
//     absolute
//     top-1/2 left-1/2
//     -translate-x-1/2
//     -translate-y-1/2
//     w-[700px] h-[700px]
//     rounded-full
//     bg-white/5
//     blur-[140px]
//   "
//   />

//   {/* GRID DESIGN */}

//   <div
//     className="
//     absolute inset-0
//     opacity-[0.05]
//     bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
//     bg-[size:80px_80px]
//   "
//   />

//   {/* NOISE EFFECT */}

//   <div
//     className="
//     absolute inset-0
//     opacity-[0.03]
//     bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]
//   "
//   />

//   {/* VIGNETTE */}

//   <div
//     className="
//     absolute inset-0
//     bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.85)_100%)]
//   "
//   />
// </div>

//       {/* CONTENT */}

//       <div
//         className="
//         relative z-20
//         max-w-7xl mx-auto
//         px-6 md:px-10
//         w-full
//       "
//       >
//         <div className="grid lg:grid-cols-2 gap-14 items-center">
//           {/* LEFT */}

//           <div>
//             {/* TOP TAG */}

//            <motion.div
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   className="
//   inline-flex items-center
//   px-5 py-2
//   rounded-full
//   bg-[#111111]/80
//   backdrop-blur-xl
//   border border-[#D4AF37]/20
//   text-[#E6C86E]
//   text-sm
//   tracking-wide
// "
// >
//   👑 Luxury Wedding Collection
// </motion.div>

//             {/* HEADING */}

//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               className="
//               mt-8
//               text-5xl md:text-7xl
//               font-black
//               leading-[1.05]
//             "
//             >
//               Famous Sherwani
// <span
//   className="
//   block mt-2
//   text-transparent
//   bg-clip-text
//   bg-gradient-to-r
//   from-[#F5E6B3]
//   via-[#D4AF37]
//   to-[#B8860B]
// "
// >
//   Collection
// </span>
//             </motion.h1>

//             {/* DESC */}

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2 }}
//               className="
//               mt-8
//               text-zinc-300
//               text-lg
//               leading-8
//               max-w-xl
//             "
//             >
//               Premium Sherwani, Indo-Western
//               and exclusive wedding fashion
//               crafted for elegance, royalty,
//               and unforgettable occasions.
//             </motion.p>

//             {/* BUTTONS */}

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="flex flex-wrap gap-5 mt-10"
//             >
//               {/* BTN 1 */}

//               <a href="/products">
//                 <button
//   className="
//   group
//   px-8 py-4
//   rounded-2xl
//   bg-gradient-to-r
//   from-[#D4AF37]
//   to-[#B8860B]
//   text-black
//   font-bold
//   flex items-center gap-3
//   hover:scale-105
//   hover:shadow-[0_0_40px_rgba(212,175,55,0.45)]
//   duration-300
// "
// >
//   Explore Collection

//   <ArrowRight
//     size={18}
//     className="
//     group-hover:translate-x-1
//     duration-300
//   "
//   />
// </button>
//               </a>

//               {/* BTN 2 */}

//               <a href="/contact">
//                 <button
//   className="
//   px-8 py-4
//   rounded-2xl
//   border border-[#D4AF37]/20
//   bg-[#111111]/80
//   backdrop-blur-xl
//   hover:bg-[#171717]
//   duration-300
// "
// >
//   Contact Us
// </button>
//               </a>
//             </motion.div>

//             {/* STATS */}

//             <div className="flex gap-10 mt-14">
//               <div>
//              <h2 className="text-3xl font-black text-[#D4AF37]">
//                   500+
//                 </h2>

//                 <p className="text-zinc-400 text-sm mt-1">
//                   Premium Designs
//                 </p>
//               </div>

//               <div>
//              <h2 className="text-3xl font-black text-[#D4AF37]">
//                   5★
//                 </h2>

//                 <p className="text-zinc-400 text-sm mt-1">
//                   Customer Rating
//                 </p>
//               </div>

//               <div>
//              <h2 className="text-3xl font-black text-[#D4AF37]">
//                   10+
//                 </h2>

//                 <p className="text-zinc-400 text-sm mt-1">
//                   Years Experience
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT */}

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="
//             relative hidden lg:flex
//             justify-center
//           "
//           >
//             <div className="relative">
//               {/* GLOW */}

//              <div
//   className="
//   absolute inset-0
//   bg-[#D4AF37]/15
//   blur-[150px]
//   rounded-full
// "
// />

//               {/* IMAGE CARD */}

//               <div
//                 className="
//                 relative
//                 overflow-hidden
//                rounded-[32px]
//        border border-[#D4AF37]/15
//                 bg-white/5
//                 backdrop-blur-xl
//                 shadow-[0_20px_80px_rgba(0,0,0,0.7)]
//               "
//               >
//                 <img
//                   src="/bgimg.png"
//                   alt=""
//                   className="
//                   w-[430px]
//                   h-[620px]
//                   object-cover
//                   hover:scale-105
//                   duration-700
//                 "
//                 />
//               </div>
            
//               {/* FLOAT TAG */}

//               <motion.div
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                 }}
//                 className="
//                 absolute
//                 -left-10 top-10
//               "
//               >
//               <div
//   className="
//   px-5 py-3
//   rounded-2xl
//   bg-[#111111]/80
//   backdrop-blur-xl
//   border border-[#D4AF37]/20
//   text-sm
// "
// >
//   ✨ Premium Sherwani
// </div>
//               </motion.div>

//               {/* FLOAT TAG */}

//               <motion.div
//                 animate={{ y: [0, 12, 0] }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                 }}
//                 className="
//                 absolute
//                 -right-10 bottom-16
//               "
//               >
//                 <div
//   className="
//   px-5 py-3
//   rounded-2xl
//   bg-[#111111]/80
//   backdrop-blur-xl
//   border border-[#D4AF37]/20
//   text-sm
// "
// >
//   👑 Royal Collection
// </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* BOTTOM FADE */}

//       <div
//         className="
//         absolute bottom-0 left-0
//         w-full h-40
//         bg-gradient-to-t
//         from-black to-transparent
//       "
//       />
//     </section>
//   );
// }







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






import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden pt-24">

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        <img
          src="/bgimg.png"
          alt="hero"
          className="w-full h-full object-cover opacity-20 scale-105"
        />

        <div className="absolute inset-0 bg-black/80" />

        {/* SOFT LUXURY LIGHTS */}
        <motion.div
          animate={{ x: [0, 15, 0], y: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/8 blur-[140px]"
        />

        <motion.div
          animate={{ x: [0, -15, 0], y: [0, -10, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#B8860B]/6 blur-[140px]"
        />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">

        <div className="text-center">

          {/* TAG */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#D4AF37] tracking-[6px] uppercase text-xs md:text-sm"
          >
            Famous Sherwani Collection
          </motion.p>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
          >
            Premium Wedding
            <br />

            <span className="bg-gradient-to-r from-[#F5E6B3] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
              Sherwani Collection
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-zinc-300 max-w-2xl mx-auto text-sm md:text-base leading-8"
          >
            Luxury Sherwani, Indo-Western and wedding outfits crafted with elegance,
            tradition and royal modern style for unforgettable occasions.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10"
          >
            <a href="/contact">
              <button className="
                group
                px-8 py-4
                rounded-2xl
                bg-gradient-to-r from-[#D4AF37] to-[#B8860B]
                text-black font-bold
                flex items-center gap-2
                mx-auto
                border border-yellow-300/20
                hover:scale-105
                hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]
                transition-all duration-300
              ">
                Contact Us
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </button>
            </a>
          </motion.div>

        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}