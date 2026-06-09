import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { } from "react-router-dom";
import { motion } from "framer-motion";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import PremiumProducts from "../components/home/PremiumProducts";
import StatsSection from "../components/home/StatsSection";

export default function Home({ setSelectedProduct }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(data);
      } catch (error) {
        console.log("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen bg-black text-white">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 h-72 w-72 bg-[#D4AF37]/20 blur-[120px]" />
  <div className="absolute bottom-0 right-0 h-72 w-72 bg-[#B8860B]/20 blur-[120px]" />

  {/* Hero */}
  <HeroSection />

  {/* Stats */}
  <StatsSection />

  {/* Features */}
  <FeaturesSection />

  {/* Premium Collection Banner */}
  <section className="max-w-7xl mx-auto px-6 py-24 overflow-hidden">

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="
      relative
      overflow-hidden
      rounded-[40px]
      border
      border-[#D4AF37]/20
      bg-gradient-to-r
      from-[#111]
      via-black
      to-[#111]
      p-10 md:p-16
      text-center
    "
  >

    {/* Glow Background */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute -top-20 -left-20 w-60 h-60 bg-[#D4AF37]/10 blur-[120px]"
    />

    {/* Tag */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-[#D4AF37] tracking-[6px] uppercase text-sm"
    >
      Exclusive Collection
    </motion.p>

    {/* Title */}
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="
        mt-4
        text-4xl
        md:text-6xl
        font-black
        bg-gradient-to-r
        from-[#F5E6B3]
        via-[#D4AF37]
        to-[#B8860B]
        bg-clip-text
        text-transparent
      "
    >
      Royal Wedding Fashion
    </motion.h2>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-gray-400 max-w-2xl mx-auto mt-5"
    >
      Discover luxurious Sherwani, Indo-Western, Coat Pant and Blazer Collection crafted
      for elegance and tradition.
    </motion.p>

    {/* Button */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mt-8"
    >
      <a href="/products">
        <button className="
          px-8 py-4 rounded-2xl
          bg-gradient-to-r
          from-[#F5E6B3]
          via-[#D4AF37]
          to-[#B8860B]
          text-black font-bold
        ">
          Explore Collection
        </button>
      </a>
    </motion.div>

  </motion.div>

</section>

  {/* Products */}
  {loading ? (
    <div className="text-center py-10 text-gray-400">
      Loading products...
    </div>
  ) : (
    <PremiumProducts
      setSelectedProduct={setSelectedProduct}
      products={products}
    />
  )}

  {/* Owner Message */}
  <section className="max-w-6xl mx-auto px-6 py-24 overflow-hidden">

  <div className="grid md:grid-cols-2 gap-10 items-center">

    {/* Image */}
    <motion.img
      src="/ownerimg.jpeg"
      alt="Mahboob Alam"
      initial={{ opacity: 0, x: -80, scale: 0.9 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={{
        scale: 1.03,
        rotate: 1,
      }}
      className="
        w-full
        max-w-sm
        mx-auto
        rounded-[32px]
        border
        border-[#D4AF37]/20
        shadow-[0_0_30px_rgba(212,175,55,0.15)]
        transition-all
      "
    />

    {/* Content */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-[#D4AF37] tracking-[6px] uppercase text-sm"
      >
        Founder Message
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-bold mt-4"
      >
        Mahboob Alam
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-gray-400 mt-6 leading-8"
      >
        With more than 25 years of experience...
      </motion.p>
    </motion.div>

  </div>

</section>

  {/* Final CTA */}
  <section className="max-w-5xl mx-auto px-6 pb-24 overflow-hidden">

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="
      text-center
      border
      border-[#D4AF37]/20
      rounded-[40px]
      p-12
      bg-gradient-to-r
      from-[#111]
      to-black
      relative
    "
  >

    {/* Glow effect */}
    <div className="absolute inset-0 bg-[#D4AF37]/5 blur-3xl rounded-[40px] pointer-events-none" />

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="
        text-4xl
        md:text-5xl
        font-black
        bg-gradient-to-r
        from-[#F5E6B3]
        via-[#D4AF37]
        to-[#B8860B]
        bg-clip-text
        text-transparent
      "
    >
      Ready For Your Perfect Look?
    </motion.h2>

    {/* Text */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="text-gray-400 mt-5"
    >
      Visit our store and discover premium wedding fashion.
    </motion.p>

    {/* Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex flex-wrap justify-center gap-4 mt-8"
    >

      <motion.a
        href="tel:8299559581"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#F5E6B3] via-[#D4AF37] to-[#B8860B] text-black font-bold">
          Call Now
        </button>
      </motion.a>

      <motion.a
        href="https://wa.me/918299559581"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button className="px-8 py-4 rounded-2xl border border-green-500 text-green-400">
          WhatsApp
        </button>
      </motion.a>

    </motion.div>

  </motion.div>

</section>

</div>
    // <div className="relative overflow-hidden min-h-screen bg-black text-white">

    //   {/* BACKGROUND LIGHTS */}
    //   <div className="absolute top-0 left-0 h-72 w-72 bg-yellow-500/20 blur-[120px]" />
    //   <div className="absolute bottom-0 right-0 h-72 w-72 bg-orange-500/20 blur-[120px]" />

    //   {/* HERO */}
    //   <HeroSection />

    //   {/* FEATURES */}
    //   <FeaturesSection />

    //   {/* PRODUCTS */}
    //   {loading ? (
    //     <div className="text-center py-10 text-gray-400">
    //       Loading products...
    //     </div>
    //   ) : (
    //     <PremiumProducts
    //       setSelectedProduct={setSelectedProduct}
    //       products={products}
    //     />
    //   )}

    //   {/* STATS */}
    //   <StatsSection />
    // </div>
  );
}