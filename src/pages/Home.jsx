import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

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

      {/* BACKGROUND LIGHTS */}
      <div className="absolute top-0 left-0 h-72 w-72 bg-yellow-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 bg-orange-500/20 blur-[120px]" />

      {/* HERO */}
      <HeroSection />

      {/* FEATURES */}
      <FeaturesSection />

      {/* PRODUCTS */}
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

      {/* STATS */}
      <StatsSection />
    </div>
  );
}