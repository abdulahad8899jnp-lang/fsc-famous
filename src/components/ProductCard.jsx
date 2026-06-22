// import { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { ShoppingBag, Star } from "lucide-react";

// export default function ProductCard({
//   item,
//   setSelectedProduct,
// }) {

//   // SELECTED VARIANT
//   const [selectedVariant, setSelectedVariant] =
//     useState(item.variants?.[0]);

//   // ✅ FIX: per card unique slider reference
//   const sliderRef = useRef(null);

//   return (
//     <motion.div
//       whileHover={{
//         y: -10,
//         scale: 1.02,
//       }}
//       transition={{
//         duration: 0.3,
//       }}
//       className="group bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl hover:border-yellow-500"
//     >

//       {/* IMAGE */}
//       <div className="overflow-hidden relative">

//         <img
//           src={selectedVariant?.image}
//           alt={item.name}
//           className="w-full h-80 object-cover group-hover:scale-110 duration-500"
//         />

//         {/* BADGE */}
//         <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
//           NEW
//         </div>

//         {/* ARTICLE */}
//         <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-zinc-700">
//           Article: {selectedVariant?.articleNo}
//         </div>

//       </div>

//       {/* CONTENT */}
//       <div className="p-5">

//         {/* CATEGORY */}
//         <p className="text-yellow-400 text-sm mb-2 tracking-wide">
//           {item.category}
//         </p>

//         {/* NAME */}
//         <h2 className="text-2xl font-bold mb-3 line-clamp-1">
//           {item.name}
//         </h2>

//         {/* PRICE + RATING */}
//         <div className="flex items-center justify-between mb-5">

//           <div>
//             <p className="text-green-400 text-2xl font-bold">
//               ₹{selectedVariant?.price}
//             </p>

//             <p className="text-zinc-400 text-sm mt-1">
//               {selectedVariant?.color}
//             </p>
//           </div>

//           <div className="flex items-center gap-1 text-yellow-400">
//             <Star size={16} fill="currentColor" />
//             <span className="text-sm">
//               {item.rating || "4.8"}
//             </span>
//           </div>

//         </div>

//         {/* VARIANT SLIDER */}
//         <div className="relative mb-5">

//           {/* LEFT BUTTON */}
//           <button
//             onClick={() => {
//               sliderRef.current?.scrollBy({
//                 left: -120,
//                 behavior: "smooth",
//               });
//             }}
//             className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-yellow-400 hover:text-black w-7 h-7 rounded-full flex items-center justify-center"
//           >
//             ❮
//           </button>

//           {/* SLIDER */}
//           <div
//             ref={sliderRef}
//             className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 scroll-smooth"
//             style={{
//               WebkitOverflowScrolling: "touch",
//             }}
//           >
//             {item.variants?.map((variant, index) => (
//               <div
//                 key={index}
//                 onClick={() =>
//                   setSelectedVariant(variant)
//                 }
//                 className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 cursor-pointer transition-all
//                 ${
//                   selectedVariant?.articleNo ===
//                   variant.articleNo
//                     ? "border-yellow-400 scale-105"
//                     : "border-zinc-700"
//                 }`}
//               >
//                 <img
//                   src={variant.image}
//                   alt="variant"
//                   draggable="false"
//                   className="w-full h-full object-cover pointer-events-none"
//                 />
//               </div>
//             ))}
//           </div>

//           {/* RIGHT BUTTON */}
//           <button
//             onClick={() => {
//               sliderRef.current?.scrollBy({
//                 left: 120,
//                 behavior: "smooth",
//               });
//             }}
//             className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-yellow-400 hover:text-black w-7 h-7 rounded-full flex items-center justify-center"
//           >
//             ❯
//           </button>

//         </div>

//         {/* VIEW DETAILS BUTTON */}
//         <button
//           onClick={() =>
//             setSelectedProduct({
//               ...item,
//               selectedVariant,
//             })
//           }
//           className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2"
//         >
//           <ShoppingBag size={18} />
//           View Details
//         </button>

//       </div>
//     </motion.div>
//   );
// }







// import { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { ShoppingBag, Star } from "lucide-react";

// export default function ProductCard({
//   item,
//   setSelectedProduct,
// }) {
//   // SAFE VARIANT INIT
//   const [selectedVariant, setSelectedVariant] = useState(
//     item?.variants?.length ? item.variants[0] : null
//   );

//   const sliderRef = useRef(null);

//   // ❗ SAFE GUARD (no variants case)
//   if (!item?.variants?.length) {
//     return (
//       <div className="bg-zinc-900 p-6 rounded-3xl text-white border border-zinc-800">
//         <h2 className="font-bold text-lg">{item.name}</h2>
//         <p className="text-zinc-400 mt-2">No Variants Available</p>
//       </div>
//     );
//   }

//   return (
//     <motion.div
//       whileHover={{ y: -10, scale: 1.02 }}
//       transition={{ duration: 0.3 }}
//       className="group bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl hover:border-yellow-500"
//     >
//       {/* IMAGE */}
//       <div className="overflow-hidden relative">
//         <img
//           src={selectedVariant?.image || "/placeholder.png"}
//           alt={item.name}
//           className="w-full h-80 object-cover group-hover:scale-110 duration-500"
//         />

//         {/* BADGE */}
//         <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
//           NEW
//         </div>

//         {/* ARTICLE */}
//         <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-zinc-700">
//           Article: {selectedVariant?.articleNo || "N/A"}
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div className="p-5">
//         {/* CATEGORY */}
//         <p className="text-yellow-400 text-sm mb-2 tracking-wide">
//           {item.category}
//         </p>

//         {/* NAME */}
//         <h2 className="text-2xl font-bold mb-3 line-clamp-1">
//           {item.name}
//         </h2>

//         {/* PRICE + RATING */}
//         <div className="flex items-center justify-between mb-5">
//           <div>
//             <p className="text-green-400 text-2xl font-bold">
//               ₹{selectedVariant?.price || 0}
//             </p>
//             <p className="text-zinc-400 text-sm mt-1">
//               {selectedVariant?.color || ""}
//             </p>
//           </div>

//           <div className="flex items-center gap-1 text-yellow-400">
//             <Star size={16} fill="currentColor" />
//             <span className="text-sm">{item.rating || "4.8"}</span>
//           </div>
//         </div>

//         {/* VARIANT SLIDER */}
//         <div className="relative mb-5">
//           {/* LEFT */}
//           <button
//             onClick={() =>
//               sliderRef.current?.scrollBy({
//                 left: -120,
//                 behavior: "smooth",
//               })
//             }
//             className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-yellow-400 hover:text-black w-7 h-7 rounded-full flex items-center justify-center"
//           >
//             ❮
//           </button>

//           {/* SLIDER */}
//           <div
//             ref={sliderRef}
//             className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 scroll-smooth"
//           >
//             {item.variants.map((variant, index) => (
//               <div
//                 key={index}
//                 onClick={() => setSelectedVariant(variant)}
//                 className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 cursor-pointer transition-all ${
//                   selectedVariant?.articleNo === variant.articleNo
//                     ? "border-yellow-400 scale-105"
//                     : "border-zinc-700"
//                 }`}
//               >
//                 <img
//                   src={variant.image}
//                   alt="variant"
//                   draggable="false"
//                   className="w-full h-full object-cover pointer-events-none"
//                 />
//               </div>
//             ))}
//           </div>

//           {/* RIGHT */}
//           <button
//             onClick={() =>
//               sliderRef.current?.scrollBy({
//                 left: 120,
//                 behavior: "smooth",
//               })
//             }
//             className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-yellow-400 hover:text-black w-7 h-7 rounded-full flex items-center justify-center"
//           >
//             ❯
//           </button>
//         </div>

//         {/* VIEW DETAILS */}
//         <button
//           onClick={() =>
//             setSelectedProduct({
//               ...item,
//               selectedVariant,
//             })
//           }
//           className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2"
//         >
//           <ShoppingBag size={18} />
//           View Details
//         </button>
//       </div>
//     </motion.div>
//   );
// }






// import { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { ShoppingBag, Star } from "lucide-react";

// export default function ProductCard({
//   item,
//   setSelectedProduct,
// }) {

//   // SAFE VARIANT INIT
//   const [selectedVariant, setSelectedVariant] = useState(
//     item?.variants?.length ? item.variants[0] : null
//   );

//   const sliderRef = useRef(null);

//   // =========================
//   // NO VARIANTS CARD (FIXED + PREMIUM)
//   // =========================
//   if (!item?.variants?.length) {
//     return (
//       <motion.div
//         whileHover={{ y: -6, scale: 1.02 }}
//         transition={{ duration: 0.3 }}
//         className="group bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl hover:border-yellow-500 h-full flex flex-col"
//       >

//         {/* IMAGE PLACEHOLDER */}
//         <div className="h-80 bg-zinc-800/40 flex items-center justify-center">
//           <span className="text-zinc-500 text-sm">
//             No Image Available
//           </span>
//         </div>

//         {/* CONTENT */}
//         <div className="p-5 flex flex-col flex-1">

//           <p className="text-yellow-400 text-sm mb-2">
//             {item.category}
//           </p>

//           <h2 className="text-2xl font-bold mb-2 line-clamp-1">
//             {item.name}
//           </h2>

//           <p className="text-zinc-400 text-sm mb-6">
//             No variants available for this product.
//           </p>

//           <button
//             disabled
//             className="mt-auto w-full bg-zinc-800 text-zinc-500 font-bold py-3 rounded-2xl flex items-center justify-center gap-2 cursor-not-allowed"
//           >
//             <ShoppingBag size={18} />
//             Not Available
//           </button>

//         </div>
//       </motion.div>
//     );
//   }

//   return (
//     <motion.div
//       whileHover={{ y: -10, scale: 1.02 }}
//       transition={{ duration: 0.3 }}
//       className="group bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl hover:border-yellow-500 h-full flex flex-col"
//     >

//       {/* IMAGE */}
//       <div className="overflow-hidden relative">

//         <img
//           src={selectedVariant?.image || "/placeholder.png"}
//           alt={item.name}
//           className="w-full h-80 object-cover group-hover:scale-110 duration-500"
//         />

//         {/* BADGE */}
//         <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
//           NEW
//         </div>

//         {/* ARTICLE */}
//         <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-zinc-700">
//           Article: {selectedVariant?.articleNo || "N/A"}
//         </div>

//       </div>

//       {/* CONTENT */}
//       <div className="p-5 flex flex-col flex-1">

//         {/* CATEGORY */}
//         <p className="text-yellow-400 text-sm mb-2 tracking-wide">
//           {item.category}
//         </p>

//         {/* NAME */}
//         <h2 className="text-2xl font-bold mb-3 line-clamp-1">
//           {item.name}
//         </h2>

//         {/* PRICE + RATING */}
//         <div className="flex items-center justify-between mb-5">

//           <div>
//             <p className="text-green-400 text-2xl font-bold">
//               ₹{selectedVariant?.price || 0}
//             </p>
//             <p className="text-zinc-400 text-sm mt-1">
//               {selectedVariant?.color || ""}
//             </p>
//           </div>

//           <div className="flex items-center gap-1 text-yellow-400">
//             <Star size={16} fill="currentColor" />
//             <span className="text-sm">{item.rating || "4.8"}</span>
//           </div>

//         </div>

//         {/* VARIANT SLIDER */}
//         <div className="relative mb-5">

//           {/* LEFT */}
//           <button
//             onClick={() =>
//               sliderRef.current?.scrollBy({
//                 left: -120,
//                 behavior: "smooth",
//               })
//             }
//             className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-yellow-400 hover:text-black w-7 h-7 rounded-full flex items-center justify-center"
//           >
//             ❮
//           </button>

//           {/* SLIDER */}
//           <div
//             ref={sliderRef}
//             className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 scroll-smooth"
//           >

//             {item.variants.map((variant, index) => (
//               <div
//                 key={index}
//                 onClick={() => setSelectedVariant(variant)}
//                 className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 cursor-pointer transition-all ${
//                   selectedVariant?.articleNo === variant.articleNo
//                     ? "border-yellow-400 scale-105"
//                     : "border-zinc-700"
//                 }`}
//               >
//                 <img
//                   src={variant.image}
//                   alt="variant"
//                   draggable="false"
//                   className="w-full h-full object-cover pointer-events-none"
//                 />
//               </div>
//             ))}

//           </div>

//           {/* RIGHT */}
//           <button
//             onClick={() =>
//               sliderRef.current?.scrollBy({
//                 left: 120,
//                 behavior: "smooth",
//               })
//             }
//             className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-yellow-400 hover:text-black w-7 h-7 rounded-full flex items-center justify-center"
//           >
//             ❯
//           </button>

//         </div>

//         {/* VIEW DETAILS */}
//         <button
//           onClick={() =>
//             setSelectedProduct({
//               ...item,
//               selectedVariant,
//             })
//           }
//           className="mt-auto w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2"
//         >
//           <ShoppingBag size={18} />
//           View Details
//         </button>

//       </div>
//     </motion.div>
//   );
// }







import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";

export default function ProductCard({ item, setSelectedProduct }) {

  const [selectedVariant, setSelectedVariant] = useState(
    item?.variants?.length ? item.variants[0] : null
  );

  const sliderRef = useRef(null);

  // NO VARIANT CASE
  if (!item?.variants?.length) {
    return (
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        className="
          group
          bg-[#111111]/80
          backdrop-blur-xl
          border border-[#D4AF37]/10
          rounded-3xl
          overflow-hidden
          flex flex-col
          shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        "
      >

        <div className="h-80 flex items-center justify-center bg-black/40">
          <span className="text-zinc-500 text-sm">
            No Image Available
          </span>
        </div>
<div className="p-2 md:p-5 flex flex-col flex-1">

         <p className="text-[#D4AF37] text-[9px] md:text-xs uppercase mb-1 truncate">
  {item.category}
</p>

          <h2 className="text-sm md:text-xl font-bold text-white mb-1 line-clamp-1">
            {item.name}
          </h2>

          <p className="text-zinc-400 text-sm mb-6">
            No variants available for this product.
          </p>

          <button
            disabled
            className="
              mt-auto w-full py-3 rounded-2xl
              bg-[#111111]
              border border-[#D4AF37]/10
              text-zinc-500
              cursor-not-allowed
              flex items-center justify-center gap-2
            "
          >
            <ShoppingBag size={18} />
            Not Available
          </button>

        </div>
      </motion.div>
    );
  }

  // MAIN CARD
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.35 }}
      className="
        group
        bg-[#111111]/80
        backdrop-blur-xl
        border border-[#D4AF37]/10
        hover:border-[#D4AF37]/40
        rounded-3xl
        overflow-hidden
        flex flex-col
        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        duration-300
      "
    >

      {/* IMAGE */}
      <div className="relative overflow-hidden">

        <img
  src={
    selectedVariant?.image?.trim()
      ? selectedVariant.image
      : "/placeholder.png"
  }
  alt={item?.name || "Product"}
  className="
w-full
h-40 md:h-64
object-cover
group-hover:scale-110
duration-700
"
/>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* BADGE */}
     <div className="
  hidden md:block
  absolute top-4 left-4
  px-3 py-1
  rounded-full
  text-xs
  bg-[#111111]/70
  border border-[#D4AF37]/20
  text-[#D4AF37]
">
  NEW
</div>

        {/* ARTICLE */}
        <div className="
  absolute bottom-2 left-2 md:bottom-4 md:left-4
  px-1.5 py-[1px] md:px-3 md:py-1
  rounded-full
  text-[8px] md:text-xs
  bg-[#111111]/70
  border border-white/10
  text-zinc-300
">
  #{selectedVariant?.articleNo || "N/A"}
</div>

      </div>

      {/* CONTENT */}
<div className="p-3 md:p-5 flex flex-col flex-1">

        {/* CATEGORY */}
        <p className="text-[#D4AF37] text-xs tracking-[3px] uppercase mb-2">
          {item.category}
        </p>

        {/* NAME */}
       <h2 className="text-sm md:text-2xl font-bold text-white mb-2 line-clamp-1 group-hover:text-[#D4AF37] duration-300">
          {item.name}
        </h2>

        {/* PRICE + RATING */}
        <div className="flex items-center justify-between mb-5">

          <div>
           <p className="text-[#D4AF37] text-lg md:text-2xl font-black">
              ₹{selectedVariant?.price || 0}
            </p>
            <p className="text-zinc-400 text-sm mt-1">
              {selectedVariant?.color || ""}
            </p>
          </div>

          <div className="flex items-center gap-1 text-[#D4AF37]">
            <Star size={16} fill="currentColor" />
            <span className="text-sm text-zinc-300">
              {item.rating || "4.8"}
            </span>
          </div>

        </div>

        {/* VARIANT SLIDER */}
        <div className="relative mb-5">

          <button
            onClick={() =>
              sliderRef.current?.scrollBy({
                left: -120,
                behavior: "smooth",
              })
            }
            className="
              hidden md:flex
absolute left-0 top-1/2 top-1/2 -translate-y-1/2 z-10
              w-7 h-7
              rounded-full
              bg-[#111111]/80
              border border-[#D4AF37]/20
              text-[#D4AF37]
              hover:bg-[#D4AF37]
              hover:text-black
            "
          >
            ❮
          </button>

          <div
            ref={sliderRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 scroll-smooth px-6"
          >
            {item.variants.map((variant, index) => (
              <div
                key={index}
                onClick={() => setSelectedVariant(variant)}
                className={`
                  flex-shrink-0 w-10 h-10 md:w-16 md:h-16 rounded-xl overflow-hidden cursor-pointer
                  border transition-all duration-300
                  ${
                    selectedVariant?.articleNo === variant.articleNo
                      ? "border-[#D4AF37] scale-105"
                      : "border-zinc-700"
                  }
                `}
              >
                <img
  src={
    variant?.image?.trim()
      ? variant.image
      : "/placeholder.png"
  }
  alt="variant"
  className="w-full h-full object-cover"
/>
              </div>
            ))}
          </div>

          <button
            onClick={() =>
              sliderRef.current?.scrollBy({
                left: 120,
                behavior: "smooth",
              })
            }
            className="
             hidden md:flex
absolute right-0 top-1/2 top-1/2 -translate-y-1/2 z-10
              w-7 h-7
              rounded-full
              bg-[#111111]/80
              border border-[#D4AF37]/20
              text-[#D4AF37]
              hover:bg-[#D4AF37]
              hover:text-black
            "
          >
            ❯
          </button>

        </div>

        {/* BUTTON */}
        <button
          onClick={() =>
            setSelectedProduct({
              ...item,
              selectedVariant,
            })
          }
          className="
            mt-auto w-full py-2 md:py-3 text-sm md:text-base rounded-2xl
            font-bold
            bg-gradient-to-r
            from-[#F5E6B3]
            via-[#D4AF37]
            to-[#B8860B]
            text-black
            hover:scale-[1.02]
            transition
            flex items-center justify-center gap-2
          "
        >
          <ShoppingBag size={18} />
          View Details
        </button>

      </div>
    </motion.div>
  );
}