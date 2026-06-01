// import { useSearchParams } from "react-router-dom";
// import { useEffect } from "react";
// import { useMemo, useState } from "react";
// import { motion } from "framer-motion";

// import products from "../data/productsData";

// import ProductCard from "../components/ProductCard";
// import ProductPopup from "../components/ProductPopup";

// export default function ProductPage() {

// const [searchParams] = useSearchParams();

// const urlCategory =
//   searchParams.get("category");

//   const [selectedProduct, setSelectedProduct] =
//     useState(null);

//   const [search, setSearch] =
//     useState("");

//  const [category, setCategory] =
//   useState(
//     urlCategory || "All"
//   );



//   // CATEGORY LIST
//   const categories = [
//     "All",

//     ...products.map(
//       (section) =>
//         section.title.replace(
//           " Collection",
//           ""
//         )
//     ),
//   ];



//   // FILTER LOGIC
//   const filteredProducts = useMemo(() => {

//     return products.map((section) => {

//       const filteredItems =
//         section.items.filter((item) => {

//           // SEARCH BY NAME OR ARTICLE NO
//           const matchesSearch =

//             item.name
//               ?.toLowerCase()
//               .includes(
//                 search.toLowerCase()
//               )

//             ||

//             item.variants?.some(
//               (variant) =>

//                 variant.articleNo
//                   ?.toLowerCase()
//                   .includes(
//                     search.toLowerCase()
//                   )
//             );



//           // CATEGORY
//           const matchesCategory =

//             category === "All"

//             ||
// section.title.replace(
//   " Collection",
//   ""
// ).toLowerCase() ===
// category.toLowerCase();

//           return (
//             matchesSearch &&
//             matchesCategory
//           );
//         });

//       return {
//         ...section,
//         items: filteredItems,
//       };
//     });

//   }, [search, category]);



//   return (
//     <section className="bg-gradient-to-b from-black via-zinc-950 to-black text-white py-16 px-4 min-h-screen overflow-hidden">

//       <div className="max-w-7xl mx-auto">

//         {/* HERO */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 40,
//           }}

//           animate={{
//             opacity: 1,
//             y: 0,
//           }}

//           className="text-center mb-16"
//         >

//           <p className="text-yellow-400 tracking-[6px] uppercase text-sm mb-4">

//             Famous Sherwani Collection

//           </p>


//           <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

//             Premium Fashion
//             <br />

//             <span className="text-yellow-400">

//               For Every Occasion

//             </span>

//           </h1>


//           <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">

//             Explore luxurious Sherwani,
//             Blazer, Indo-Western &
//             Coat Pant collection.

//           </p>

//         </motion.div>


// {/* SEARCH + FILTER */}
// <div className="mb-16">

//   {/* FILTER */}
//   <div className="flex flex-wrap gap-3 justify-center mb-6">

//     {categories.map((item) => (

//       <button
//         key={item}

//         onClick={() =>
//           setCategory(item)
//         }

//         className={`px-5 py-2 rounded-full border transition duration-300
        
//         ${
//           category === item

//             ? "bg-yellow-400 text-black border-yellow-400"

//             : "border-zinc-700 hover:border-yellow-400 bg-zinc-900/60"
//         }
        
//         `}
//       >

//         {item}

//       </button>
//     ))}

//   </div>



//   {/* SEARCH */}
//   <div className="flex justify-center">

//     <input
//       type="text"

//       placeholder="Search Product or Article No..."

//       value={search}

//       onChange={(e) =>
//         setSearch(e.target.value)
//       }

//       className="w-full md:w-[420px] bg-zinc-900 border border-zinc-700 px-5 py-3 rounded-2xl outline-none focus:border-yellow-400"
//     />

//   </div>

// </div>

//         {/* PRODUCT SECTIONS */}
//         {filteredProducts.map(
//           (section) => (

//             section.items.length > 0 && (

//               <div
//                 key={section.title}
//                 className="mb-24"
//               >

//                 {/* SECTION TITLE */}
//                 <motion.div
//                   initial={{
//                     opacity: 0,
//                     x: -50,
//                   }}

//                   whileInView={{
//                     opacity: 1,
//                     x: 0,
//                   }}

//                   viewport={{
//                     once: true,
//                   }}

//                   className="flex items-center gap-4 mb-10"
//                 >

//                   <div className="w-14 h-[3px] bg-yellow-400"></div>

//                   <h2 className="text-4xl font-bold text-yellow-400">

//                     {section.title}

//                   </h2>

//                 </motion.div>



//                 {/* PRODUCTS GRID */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

//                   {section.items.map(
//                     (item) => (

//                       <ProductCard
//                         key={item.id}

//                         item={item}

//                         setSelectedProduct={
//                           setSelectedProduct
//                         }
//                       />

//                     )
//                   )}

//                 </div>

//               </div>
//             )
//           )
//         )}



//         {/* EMPTY STATE */}
//         {filteredProducts.every(
//           (section) =>
//             section.items.length === 0
//         ) && (

//           <div className="text-center py-32">

//             <h2 className="text-4xl font-bold text-yellow-400 mb-4">

//               No Product Found

//             </h2>

//             <p className="text-zinc-400">

//               Try another search or category.

//             </p>

//           </div>
//         )}



//         {/* POPUP */}
//         <ProductPopup
//           selectedProduct={
//             selectedProduct
//           }

//           setSelectedProduct={
//             setSelectedProduct
//           }
//         />

//       </div>
//     </section>
//   );
// }






// import { useSearchParams } from "react-router-dom";
// import { useEffect, useState, useMemo } from "react";
// import { motion } from "framer-motion";

// import { db } from "../firebase/firebase";
// import { collection, getDocs } from "firebase/firestore";

// import ProductCard from "../components/ProductCard";
// import ProductPopup from "../components/ProductPopup";

// export default function ProductPage() {

//   const [searchParams] = useSearchParams();
//   const urlCategory = searchParams.get("category");

//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState(urlCategory || "All");

//   // 🔥 FIREBASE PRODUCTS
//   const [products, setProducts] = useState([]);

//   const fetchProducts = async () => {
//     const snap = await getDocs(collection(db, "products"));

//     const data = snap.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));

//     setProducts(data);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // CATEGORY LIST (same logic)
//   const categories = [
//     "All",
//     ...products.map((item) => item.category).filter(Boolean),
//   ];

//   // FILTER LOGIC (same design, only data source changed)
//   const filteredProducts = useMemo(() => {

//     return products.map((section) => {
//       const filteredItems = products.filter((item) => {

//         const matchesSearch =
//           item.name?.toLowerCase().includes(search.toLowerCase()) ||
//           item.variants?.some((variant) =>
//             variant.articleNo
//               ?.toLowerCase()
//               .includes(search.toLowerCase())
//           );

//         const matchesCategory =
//           category === "All" ||
//           item.category?.toLowerCase() === category.toLowerCase();

//         return matchesSearch && matchesCategory;
//       });

//       return {
//         title: section.category + " Collection",
//         items: filteredItems,
//       };
//     });

//   }, [products, search, category]);

//   return (
//     <section className="bg-gradient-to-b from-black via-zinc-950 to-black text-white py-16 px-4 min-h-screen overflow-hidden">

//       <div className="max-w-7xl mx-auto">

//         {/* HERO (SAME) */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-16"
//         >
//           <p className="text-yellow-400 tracking-[6px] uppercase text-sm mb-4">
//             Famous Sherwani Collection
//           </p>

//           <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
//             Premium Fashion <br />
//             <span className="text-yellow-400">
//               For Every Occasion
//             </span>
//           </h1>

//           <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
//             Explore luxurious Sherwani, Blazer, Indo-Western & Coat Pant collection.
//           </p>
//         </motion.div>

//         {/* SEARCH + FILTER (SAME UI) */}
//         <div className="mb-16">

//           {/* FILTER */}
//           <div className="flex flex-wrap gap-3 justify-center mb-6">

//             {categories.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => setCategory(item)}
//                 className={`px-5 py-2 rounded-full border transition duration-300
//                 ${
//                   category === item
//                     ? "bg-yellow-400 text-black border-yellow-400"
//                     : "border-zinc-700 hover:border-yellow-400 bg-zinc-900/60"
//                 }`}
//               >
//                 {item}
//               </button>
//             ))}

//           </div>

//           {/* SEARCH */}
//           <div className="flex justify-center">

//             <input
//               type="text"
//               placeholder="Search Product or Article No..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full md:w-[420px] bg-zinc-900 border border-zinc-700 px-5 py-3 rounded-2xl outline-none focus:border-yellow-400"
//             />

//           </div>

//         </div>

//         {/* PRODUCT SECTIONS (SAME DESIGN) */}
//         {products.length > 0 &&
//           [...new Set(products.map(p => p.category))].map((cat) => {

//             const items = products.filter((p) => p.category === cat);

//             const filteredItems = items.filter((item) => {
//               const matchesSearch =
//                 item.name?.toLowerCase().includes(search.toLowerCase()) ||
//                 item.variants?.some((v) =>
//                   v.articleNo?.toLowerCase().includes(search.toLowerCase())
//                 );

//               const matchesCategory =
//                 category === "All" || category === cat;

//               return matchesSearch && matchesCategory;
//             });

//             if (filteredItems.length === 0) return null;

//             return (
//               <div key={cat} className="mb-24">

//                 {/* SECTION TITLE (SAME) */}
//                 <motion.div
//                   initial={{ opacity: 0, x: -50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   className="flex items-center gap-4 mb-10"
//                 >
//                   <div className="w-14 h-[3px] bg-yellow-400"></div>
//                   <h2 className="text-4xl font-bold text-yellow-400">
//                     {cat} Collection
//                   </h2>
//                 </motion.div>

//                 {/* PRODUCTS GRID */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

//                   {filteredItems.map((item) => (
//                     <ProductCard
//                       key={item.id}
//                       item={item}
//                       setSelectedProduct={setSelectedProduct}
//                     />
//                   ))}

//                 </div>

//               </div>
//             );
//           })}

//         {/* EMPTY STATE */}
//         {products.length === 0 && (
//           <div className="text-center py-32">
//             <h2 className="text-4xl font-bold text-yellow-400 mb-4">
//               No Product Found
//             </h2>
//             <p className="text-zinc-400">
//               Try another search or category.
//             </p>
//           </div>
//         )}

//         {/* POPUP */}
//         <ProductPopup
//           selectedProduct={selectedProduct}
//           setSelectedProduct={setSelectedProduct}
//         />

//       </div>
//     </section>
//   );
// }






// import { useSearchParams } from "react-router-dom";
// import { useEffect, useState, useMemo } from "react";
// import { motion } from "framer-motion";

// import { db } from "../firebase/firebase";
// import { collection, getDocs } from "firebase/firestore";

// import ProductCard from "../components/ProductCard";
// import ProductPopup from "../components/ProductPopup";

// export default function ProductPage() {

//   const [searchParams] = useSearchParams();
//   const urlCategory = searchParams.get("category");

//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState(urlCategory || "All");

//   const [products, setProducts] = useState([]);

//   // =========================
//   // FETCH FIREBASE DATA
//   // =========================
//   const fetchProducts = async () => {
//     const snap = await getDocs(collection(db, "products"));

//     const data = snap.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));

//     setProducts(data);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // =========================
//   // UNIQUE CATEGORIES (FIXED)
//   // =========================
//   const categories = [
//     "All",
//     ...Array.from(
//       new Set(
//         products
//           .map((item) => item.category)
//           .filter(Boolean)
//       )
//     ),
//   ];

//   // =========================
//   // FILTER LOGIC
//   // =========================
//   const filteredProducts = useMemo(() => {

//     return products.filter((item) => {

//       const matchesSearch =
//         item.name?.toLowerCase().includes(search.toLowerCase()) ||
//         item.variants?.some((variant) =>
//           variant.articleNo
//             ?.toLowerCase()
//             .includes(search.toLowerCase())
//         );

//       const matchesCategory =
//         category === "All" ||
//         item.category?.toLowerCase() === category.toLowerCase();

//       return matchesSearch && matchesCategory;
//     });

//   }, [products, search, category]);

//   return (
//     <section className="bg-gradient-to-b from-black via-zinc-950 to-black text-white py-16 px-4 min-h-screen overflow-hidden">

//       <div className="max-w-7xl mx-auto">

//         {/* HERO (SAME DESIGN) */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-16"
//         >
//           <p className="text-yellow-400 tracking-[6px] uppercase text-sm mb-4">
//             Famous Sherwani Collection
//           </p>

//           <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
//             Premium Fashion <br />
//             <span className="text-yellow-400">
//               For Every Occasion
//             </span>
//           </h1>

//           <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
//             Explore luxurious Sherwani, Blazer, Indo-Western & Coat Pant collection.
//           </p>
//         </motion.div>

//         {/* FILTER + SEARCH (SAME DESIGN) */}
//         <div className="mb-16">

//           {/* FILTER */}
//           <div className="flex flex-wrap gap-3 justify-center mb-6">

//             {categories.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => setCategory(item)}
//                 className={`px-5 py-2 rounded-full border transition duration-300
//                 ${
//                   category === item
//                     ? "bg-yellow-400 text-black border-yellow-400"
//                     : "border-zinc-700 hover:border-yellow-400 bg-zinc-900/60"
//                 }`}
//               >
//                 {item}
//               </button>
//             ))}

//           </div>

//           {/* SEARCH */}
//           <div className="flex justify-center">

//             <input
//               type="text"
//               placeholder="Search Product or Article No..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full md:w-[420px] bg-zinc-900 border border-zinc-700 px-5 py-3 rounded-2xl outline-none focus:border-yellow-400"
//             />

//           </div>

//         </div>

//         {/* PRODUCTS */}
//         {filteredProducts.length > 0 ? (

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

//             {filteredProducts.map((item) => (
//               <ProductCard
//                 key={item.id}
//                 item={item}
//                 setSelectedProduct={setSelectedProduct}
//               />
//             ))}

//           </div>

//         ) : (
//           <div className="text-center py-32">
//             <h2 className="text-4xl font-bold text-yellow-400 mb-4">
//               No Product Found
//             </h2>
//             <p className="text-zinc-400">
//               Try another search or category.
//             </p>
//           </div>
//         )}

//         {/* POPUP */}
//         <ProductPopup
//           selectedProduct={selectedProduct}
//           setSelectedProduct={setSelectedProduct}
//         />

//       </div>
//     </section>
//   );
// }







import { useSearchParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

import ProductCard from "../components/ProductCard";
import ProductPopup from "../components/ProductPopup";

export default function ProductPage() {

  const [searchParams] = useSearchParams();

  const urlCategory = searchParams.get("category");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(urlCategory || "All");

  const [products, setProducts] = useState([]);

  // =========================
  // FETCH FIREBASE DATA
  // =========================
  useEffect(() => {
    const fetchData = async () => {
      const snap = await getDocs(collection(db, "products"));

      const data = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(data);
    };

    fetchData();
  }, []);

  // =========================
  // UNIQUE CATEGORIES
  // =========================
  const categories = [
    "All",
    ...Array.from(
      new Set(products.map((item) => item.category).filter(Boolean))
    ),
  ];

  // =========================
  // GROUP PRODUCTS BY CATEGORY (IMPORTANT FIX)
  // =========================
  const groupedProducts = useMemo(() => {
    const groups = {};

    products.forEach((item) => {

      const cat = item.category || "Uncategorized";

      if (!groups[cat]) {
        groups[cat] = [];
      }

      // search filter
      const matchesSearch =
        item.name?.toLowerCase().includes(search.toLowerCase()) ||
        item.variants?.some((v) =>
          v.articleNo?.toLowerCase().includes(search.toLowerCase())
        );

      // category filter
      const matchesCategory =
        category === "All" ||
        cat.toLowerCase() === category.toLowerCase();

      if (matchesSearch && matchesCategory) {
        groups[cat].push(item);
      }
    });

    return groups;
  }, [products, search, category]);

  return (
    <section className="bg-gradient-to-b from-black via-zinc-950 to-black text-white py-16 px-4 min-h-screen overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-yellow-400 tracking-[6px] uppercase text-sm mb-4 mt-4">
            Famous Sherwani Collection
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Premium Fashion <br />
            <span className="text-yellow-400">
              For Every Occasion
            </span>
          </h1>

          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Explore luxurious Sherwani, Blazer, Indo-Western & Coat Pant collection.
          </p>
        </motion.div>

        {/* FILTER */}
        <div className="flex flex-wrap gap-3 justify-center mb-6">

          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-5 py-2 rounded-full border transition duration-300
              ${
                category === item
                  ? "bg-yellow-400 text-black border-yellow-400"
                  : "border-zinc-700 hover:border-yellow-400 bg-zinc-900/60"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

        {/* SEARCH */}
        <div className="flex justify-center mb-12">

          <input
            type="text"
            placeholder="Search Product or Article No..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-[420px] bg-zinc-900 border border-zinc-700 px-5 py-3 rounded-2xl outline-none focus:border-yellow-400"
          />

        </div>

        {/* PRODUCT GROUPS (HEADINGS BACK 🔥) */}
        {Object.keys(groupedProducts).map((cat) => (

          groupedProducts[cat].length > 0 && (

            <div key={cat} className="mb-24">

              {/* CATEGORY HEADING */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-10"
              >
                <div className="w-14 h-[3px] bg-yellow-400"></div>

                <h2 className="text-4xl font-bold text-yellow-400">
                  {cat}
                </h2>
              </motion.div>

              {/* PRODUCTS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                {groupedProducts[cat].map((item) => (
                  <ProductCard
                    key={item.id}
                    item={item}
                    setSelectedProduct={setSelectedProduct}
                  />
                ))}

              </div>

            </div>

          )

        ))}

        {/* EMPTY STATE */}
        {Object.values(groupedProducts).every(arr => arr.length === 0) && (
          <div className="text-center py-32">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">
              No Product Found
            </h2>
            <p className="text-zinc-400">
              Try another search or category.
            </p>
          </div>
        )}

        {/* POPUP */}
        <ProductPopup
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />

      </div>
    </section>
  );
}