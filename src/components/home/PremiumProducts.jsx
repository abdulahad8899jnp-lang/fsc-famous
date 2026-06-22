
// import { motion } from "framer-motion";

// import {
//   Star,
//   ArrowUpRight,
// } from "lucide-react";

// import { Link } from "react-router-dom";
// import productsData from "../../data/productsData";

// export default function PremiumProducts({
//   setSelectedProduct,
// }) {

//   return (

//     <section
//       className="
//       relative
//       py-28
//       overflow-hidden
//       bg-black
//       text-white
//     "
//     >

//       {/* BG EFFECT */}

//       <div
//         className="
//         absolute top-0 left-0
//         w-[350px] h-[350px]
//         bg-yellow-500/10
//         blur-[120px]
//       "
//       />

//       <div
//         className="
//         absolute bottom-0 right-0
//         w-[300px] h-[300px]
//         bg-orange-500/10
//         blur-[120px]
//       "
//       />



//       <div
//         className="
//         max-w-7xl mx-auto
//         px-6 md:px-12
//         relative z-20
//       "
//       >

//         {/* HEADER */}

//         <div className="flex items-end justify-between mb-16">

//           <div>

//             <p
//               className="
//               text-yellow-400
//               uppercase
//               tracking-[4px]
//               text-sm
//               mb-3
//             "
//             >
//               Featured Collection
//             </p>

//             <h2
//               className="
//               text-5xl md:text-6xl
//               font-black
//               leading-tight
//             "
//             >
//               Premium

//               <span className="block text-yellow-400">

//                 Products

//               </span>

//             </h2>

//           </div>



//           <p
//             className="
//             hidden md:block
//             max-w-sm
//             text-zinc-400
//             leading-7
//           "
//           >

//             Discover luxury sherwani,
//             indo-western and royal
//             wedding fashion crafted
//             for modern elegance.

//           </p>

//         </div>



//         {/* PRODUCTS */}

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

//           {productsData.map(
//             (category, index) => {
            
//               const product =

//                 category.items.find(
//                   (item) => item.featured
//                 )
                
//                 ||

//                 category.items[0];



//               const variant =
//                 product.variants?.[0];

                

//               return (

//                 <motion.div
//                   key={index}

//                   whileHover={{
//                     y: -12,
//                   }}

//                   transition={{
//                     duration: 0.35,
//                   }}

//                   className="
//                   group
//                   relative
//                   rounded-[32px]
//                   overflow-hidden
//                   bg-zinc-900/60
//                   backdrop-blur-xl
//                   border border-white/10
//                 "
//                 >

//                   {/* IMAGE */}

//                   <div className="relative overflow-hidden">

//                     <img
//                       src={variant?.image}

//                       alt={product.name}

//                       className="
//                       h-[420px]
//                       w-full
//                       object-cover
//                       group-hover:scale-110
//                       duration-700
//                     "
//                     />



//                     {/* OVERLAY */}

//                     <div
//                       className="
//                       absolute inset-0
//                       bg-gradient-to-t
//                       from-black via-black/20 to-transparent
//                     "
//                     />



//                     {/* TAG */}

//                     <div
//                       className="
//                       absolute top-4 left-4
//                       px-4 py-2
//                       rounded-full
//                       bg-black/50
//                       backdrop-blur-xl
//                       border border-white/10
//                       text-xs
//                       text-yellow-400
//                     "
//                     >

//                       Luxury Wear

//                     </div>



//                     {/* ICON */}

//                     <Link
//   to={`/products?category=${encodeURIComponent(
//     category.title.replace(
//       " Collection",
//       ""
//     )
//   )}`}
// >

//                       <div
//                         className="
//                         absolute top-4 right-4
//                         h-11 w-11
//                         rounded-full
//                         bg-yellow-400
//                         text-black
//                         flex items-center justify-center
//                         opacity-0
//                         group-hover:opacity-100
//                         duration-300
//                       "
//                       >

//                         <ArrowUpRight size={18} />

//                       </div>

//                     </Link>

//                   </div>



//                   {/* CONTENT */}

//                   <div className="p-6">

//                     {/* CATEGORY */}

//                     <p
//                       className="
//                       text-zinc-400
//                       text-sm
//                       uppercase
//                       tracking-[3px]
//                     "
//                     >

//                       {category.category}

//                     </p>



//                     {/* TITLE */}

//                     <h3
//                       className="
//                       text-2xl
//                       font-bold
//                       mt-3
//                       group-hover:text-yellow-400
//                       duration-300
//                     "
//                     >

//                       {product.name}

//                     </h3>



//                     {/* RATING */}

//                     <div className="flex items-center gap-1 mt-4">

//                       {[...Array(5)].map((_, i) => (

//                         <Star
//                           key={i}

//                           size={16}

//                           className="
//                           fill-yellow-400
//                           text-yellow-400
//                         "
//                         />

//                       ))}

//                       <span className="text-zinc-400 text-sm ml-2">

//                         (4.9)

//                       </span>

//                     </div>



//                     {/* PRICE */}

//                     <div
//                       className="
//                       flex items-center
//                       justify-between
//                       mt-6
//                     "
//                     >

//                       <p
//                         className="
//                         text-3xl
//                         font-black
//                         text-yellow-400
//                       "
//                       >

//                         ₹{variant?.price}

//                       </p>

//                        <Link to={`/products?category=${encodeURIComponent(category.title.replace(  " Collection",      ""    )  )}`}
// >
//                         <button
//                           className="
//                           px-5 py-2
//                           rounded-xl
//                           bg-white/5
//                           border border-white/10
//                           hover:bg-yellow-400
//                           hover:text-black
//                           duration-300
                          
//                         "
//                         >

//                           View

//                         </button>

//                       </Link>

//                     </div>

//                   </div>



//                   {/* GLOW */}

//                   <div
//                     className="
//                     absolute inset-0
//                     border border-yellow-400/0
//                     group-hover:border-yellow-400/20
//                     rounded-[32px]
//                     duration-300
//                     pointer-events-none
// z-0
//                   "
//                   />

//                 </motion.div>

//               );
//             }
//           )}

//         </div>

//       </div>

//     </section>
    
//   );
// }








import { motion } from "framer-motion";
import { Star, ArrowUpRight, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function PremiumProducts() {

  const [products, setProducts] = useState([]);

  // FETCH FIREBASE DATA
  const fetchProducts = async () => {
    const snap = await getDocs(collection(db, "products"));

    const data = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // =========================
  // ONE PRODUCT PER CATEGORY
  // =========================
 const uniqueCategoryProducts = Object.values(
  products.reduce((acc, product) => {

    if (!product.category) return acc;

    const key = product.category;

    const isSherwani =
      product.name?.toLowerCase().includes("sherwani");

    if (!acc[key]) {
      acc[key] = product;
    }

    if (isSherwani) {
      acc[key] = product; // 🔥 sherwani priority
    }

    return acc;

  }, {})
);
const sortedProducts = uniqueCategoryProducts.sort((a, b) => {
  if (a.category?.toLowerCase() === "sherwani") return -1;
  if (b.category?.toLowerCase() === "sherwani") return 1;
  return 0;
});

  return (
   <section className="relative py-28 overflow-hidden bg-[#080808] text-white">

      {/* BG */}
     <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#D4AF37]/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#B8860B]/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">

        {/* HEADER */}
       <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="text-center mb-20"
>
  <p className="text-[#D4AF37] tracking-[6px] uppercase text-sm mb-4">
    Featured Collection
  </p>

  <h2 className="text-4xl md:text-6xl font-black">
    Premium Fashion
    <br />

    <span
      className="
      bg-gradient-to-r
      from-[#F5E6B3]
      via-[#D4AF37]
      to-[#B8860B]
      bg-clip-text
      text-transparent
      "
    >
      Products
    </span>
  </h2>

  <p className="text-zinc-400 mt-6 max-w-2xl mx-auto leading-8">
    Discover our exclusive collection of Sherwani,
    Indo-Western, Blazer and Wedding Fashion crafted
    with luxury fabrics and royal elegance.
  </p>

  <div
    className="
    mx-auto
    mt-8
    h-[2px]
    w-32
    bg-gradient-to-r
    from-transparent
    via-[#D4AF37]
    to-transparent
    "
  />
</motion.div>

        {/* GRID */}
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8">

      {sortedProducts.slice(0, 8).map((product, index) => {

            const variant = product.variants?.[0];

            return (
              <motion.div
  key={product.id}
  initial={{
    opacity: 0,
    y: 60,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
    amount: 0.2,
  }}
  transition={{
    duration: 0.8,
    delay: index * 0.1,
  }}
  whileHover={{
    y: -12,
    scale: 1.02,
  }}
  className="
  group
  relative
  rounded-[32px]
  overflow-hidden
  bg-[#111111]/80
  backdrop-blur-xl
  border border-[#D4AF37]/15
  hover:border-[#D4AF37]/40
  hover:shadow-[0_0_40px_rgba(212,175,55,0.12)]
  duration-300
  "
>

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <img
                    src={variant?.image}
                    alt={product.name}
                   className="h-40 md:h-[420px] w-full object-cover group-hover:scale-110 duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

             <div className="absolute top-2 left-2 md:top-4 md:left-4">
  <div className="flex items-center gap-1 px-2 py-1 md:px-4 md:py-2 rounded-full bg-[#111111]/80 backdrop-blur-xl border border-[#D4AF37]/20">
    <Crown size={10} className="text-[#D4AF37] md:w-[14px] md:h-[14px]" />
    <span className="text-xs text-[#D4AF37]">
      Premium Collection
    </span>
  </div>
</div>

                  <Link to={`/products?category=${product.category}`}>
                    <div className="absolute top-4 right-4 h-7 w-7 md:h-11 md:w-11 rounded-full bg-gradient-to-br from-[#F5E6B3] via-[#D4AF37] to-[#B8860B] text-black flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                      <ArrowUpRight size={18} />
                    </div>
                  </Link>

                </div>

                {/* CONTENT */}
                <div className="p-3 md:p-6">

                  <p className="text-[9px] md:text-xs uppercase tracking-[1px] md:tracking-[3px] text-[#D4AF37]">
  {product.category}
</p>

                 <h3 className="text-sm md:text-2xl font-bold mt-3 group-hover:text-[#D4AF37] duration-300">
                    {product.name}
                  </h3>

                  {/* STARS */}
                  <div className="flex items-center gap-1 mt-4">
  {[1, 2, 3, 4, 5].map((star) => (
    <Star
      key={star}
      size={12}
      className={
        star <= Math.round(product.rating || 0)
          ? "fill-[#D4AF37] text-[#D4AF37] md:w-4 md:h-4"
          : "text-zinc-600 md:w-4 md:h-4"
      }
    />
  ))}

  <span className="text-zinc-400 text-[10px] md:text-sm ml-2">
    ({product.rating ?? "N/A"})
  </span>
</div>

                  {/* PRICE */}
                  <div className="flex items-center justify-between mt-6">

               <p className="text-lg md:text-3xl font-black text-[#D4AF37]">
                      ₹{variant?.price}
                    </p>

                    <Link to={`/products?category=${product.category}`}>
                   <button
  className="
  px-2 py-1 md:px-5 md:py-2 text-xs md:text-base
  rounded-xl
  bg-gradient-to-r
  from-[#F5E6B3]
  via-[#D4AF37]
  to-[#B8860B]
  text-black
  font-semibold
  hover:scale-105
  duration-300
  "
>
  View
</button>
                    </Link>

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
      
    </section>
  );
}