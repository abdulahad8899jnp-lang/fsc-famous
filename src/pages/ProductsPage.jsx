
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
  const [loading, setLoading] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
  if (selectedProduct) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [selectedProduct]);

useEffect(() => {
  const handleScroll = () => {
    setShowTopBtn(window.scrollY > 500);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
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
      setLoading(false);
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
 
if (loading) {
  return (
    <section className="min-h-screen bg-black p-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="
              h-[420px]
              rounded-3xl
              bg-zinc-900
              animate-pulse
            "
          />
        ))}
      </div>
    </section>
  );
}

  return (
   

<section
  className="
  relative
  min-h-screen
overflow-hidden
  bg-gradient-to-b
  from-black
  via-zinc-950
  to-black
  text-white
  py-16
  px-4
"
>
  {/* GOLD BLUR EFFECTS */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/10 blur-[150px] rounded-full" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 blur-[150px] rounded-full" />

<div className="relative max-w-7xl mx-auto overflow-x-hidden">

    {/* HERO */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center mb-20"
    >
      <p className="text-[#D4AF37] tracking-[6px] uppercase text-sm mb-4 mt-4">
        Famous Sherwani Collection
      </p>

      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
        Premium Fashion
        <br />

        <span className="bg-gradient-to-r from-[#F5E6B3] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
          For Every Occasion
        </span>
      </h1>

      <p className="text-zinc-400 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
        Explore luxurious Sherwani, Blazer, Indo-Western &
        Coat Pant Collection crafted for elegance.
      </p>
    </motion.div>

    {/* FILTER */}
  {/* FILTER */}
  <div
  className="
  
  z-50
  py-4
  mb-8
  bg-black/90
  backdrop-blur-xl
  "
  >
  <div className="flex flex-wrap gap-3 justify-center">

      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`
          px-4 md:px-6 py-2 md:py-3 text-sm md:text-base
            rounded-full
            border
            transition-all
            duration-300
            font-medium
            ${
              category === item
                ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                : "bg-[#111111]/80 border-zinc-700 text-white hover:border-[#D4AF37]"
            }
          `}
        >
          {item}
        </button>
      ))}

    </div>
  </div>  </div>
    {/* SEARCH */}
    <div className="flex justify-center mb-16">

      <input
        type="text"
        placeholder="Search Product or Article No..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full max-w-[450px]
          bg-[#111111]/80
          backdrop-blur-xl
          border border-zinc-700
          px-5 py-4
          rounded-2xl
          outline-none
          focus:border-[#D4AF37]
          transition
        "
      />

    </div>
  <p className="text-center text-zinc-400 mb-12">
  Showing{" "}
  <span className="text-[#D4AF37] font-bold">
    {Object.values(groupedProducts)
      .flat()
      .length}
  </span>{" "}
  Products
  </p>
    {/* PRODUCT GROUPS */}
    {Object.keys(groupedProducts).map(
      (cat) =>
        groupedProducts[cat].length > 0 && (
          <div key={cat} className="mb-24">

            {/* CATEGORY HEADING */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="w-16 h-[3px] bg-[#D4AF37]" />

              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#D4AF37]">
                {cat}
              </h2>
              <p className="text-zinc-400 text-sm mt-2">
  {groupedProducts[cat].length} Products
  </p>
            </motion.div>

            {/* PRODUCTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
         {groupedProducts[cat].map((item, index) => (
  <motion.div
    key={item.id}
    initial={{
      opacity: 0,
      y: 120,
      scale: 0.9,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
      scale: 1,
    }}
    viewport={{
      once: true,
      amount: 0.3,
    }}
    transition={{
      duration: 1.2,
      delay: index * 0.15,
      ease: "easeOut",
    }}
  >
    <ProductCard
      item={item}
      setSelectedProduct={setSelectedProduct}
    />
  </motion.div>
  ))}
            </div>

          </div>
        )
    )}

    {/* EMPTY */}
    {Object.values(groupedProducts).every(
      (arr) => arr.length === 0
    ) && (
      <div className="text-center py-32">
  <div className="text-7xl mb-5">
  🔍
  </div>
        <h2 className="text-4xl font-black text-[#D4AF37] mb-4">
          No Product Found
        </h2>

        <p className="text-zinc-400">
          Try another search or category.
        </p>

      </div>
    )}

  <motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="
  mt-24
  rounded-[40px]
  border border-[#D4AF37]/10
  bg-[#111111]/70
  backdrop-blur-xl
 p-6 md:p-12
  text-center
  "
  >
  <h2 className="text-2xl md:text-4xl font-black mb-4">
    Looking For Something Special?
  </h2>

  <p className="text-zinc-400 mb-8">
    Contact us directly on WhatsApp for custom orders.
  </p>

  <button
    onClick={() =>
      window.open("https://wa.me/8299559581", "_blank")
    }
    className="
      px-10 py-4 rounded-2xl
      bg-gradient-to-r
      from-[#F5E6B3]
      via-[#D4AF37]
      to-[#B8860B]
      text-black font-bold
    "
  >
    Contact Now
  </button>
  </motion.div>

 


  {/* POPUP */}
  <ProductPopup
    selectedProduct={selectedProduct}
    setSelectedProduct={setSelectedProduct}
  />

  </section>



  );
}

// <section className="bg-gradient-to-b from-black via-zinc-950 to-black text-white py-16 px-4 min-h-screen overflow-hidden">

    //   <div className="max-w-7xl mx-auto">

    //     {/* HERO */}
    //     <motion.div
    //       initial={{ opacity: 0, y: 40 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       className="text-center mb-16"
    //     >
    //       <p className="text-yellow-400 tracking-[6px] uppercase text-sm mb-4 mt-4">
    //         Famous Sherwani Collection
    //       </p>

    //       <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
    //         Premium Fashion <br />
    //         <span className="text-yellow-400">
    //           For Every Occasion
    //         </span>
    //       </h1>

    //       <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
    //         Explore luxurious Sherwani, Blazer, Indo-Western & Coat Pant collection.
    //       </p>
    //     </motion.div>

    //     {/* FILTER */}
    //     <div className="flex flex-wrap gap-3 justify-center mb-6">

    //       {categories.map((item) => (
    //         <button
    //           key={item}
    //           onClick={() => setCategory(item)}
    //           className={`px-5 py-2 rounded-full border transition duration-300
    //           ${
    //             category === item
    //               ? "bg-yellow-400 text-black border-yellow-400"
    //               : "border-zinc-700 hover:border-yellow-400 bg-zinc-900/60"
    //           }`}
    //         >
    //           {item}
    //         </button>
    //       ))}

    //     </div>

    //     {/* SEARCH */}
    //     <div className="flex justify-center mb-12">

    //       <input
    //         type="text"
    //         placeholder="Search Product or Article No..."
    //         value={search}
    //         onChange={(e) => setSearch(e.target.value)}
    //         className="w-full md:w-[420px] bg-zinc-900 border border-zinc-700 px-5 py-3 rounded-2xl outline-none focus:border-yellow-400"
    //       />

    //     </div>

    //     {/* PRODUCT GROUPS (HEADINGS BACK 🔥) */}
    //     {Object.keys(groupedProducts).map((cat) => (

    //       groupedProducts[cat].length > 0 && (

    //         <div key={cat} className="mb-24">

    //           {/* CATEGORY HEADING */}
    //           <motion.div
    //             initial={{ opacity: 0, x: -50 }}
    //             whileInView={{ opacity: 1, x: 0 }}
    //             viewport={{ once: true }}
    //             className="flex items-center gap-4 mb-10"
    //           >
    //             <div className="w-14 h-[3px] bg-yellow-400"></div>

    //             <h2 className="text-4xl font-bold text-yellow-400">
    //               {cat}
    //             </h2>
    //           </motion.div>

    //           {/* PRODUCTS */}
    //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

    //             {groupedProducts[cat].map((item) => (
    //               <ProductCard
    //                 key={item.id}
    //                 item={item}
    //                 setSelectedProduct={setSelectedProduct}
    //               />
    //             ))}

    //           </div>

    //         </div>

    //       )

    //     ))}

    //     {/* EMPTY STATE */}
    //     {Object.values(groupedProducts).every(arr => arr.length === 0) && (
    //       <div className="text-center py-32">
    //         <h2 className="text-4xl font-bold text-yellow-400 mb-4">
    //           No Product Found
    //         </h2>
    //         <p className="text-zinc-400">
    //           Try another search or category.
    //         </p>
    //       </div>
    //     )}

    //     {/* POPUP */}
    //     <ProductPopup
    //       selectedProduct={selectedProduct}
    //       setSelectedProduct={setSelectedProduct}
    //     />

    //   </div>
    // </section>


