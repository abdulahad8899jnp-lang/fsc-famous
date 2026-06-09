
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProductPopup({
  selectedProduct,
  setSelectedProduct,
}) {
  const navigate = useNavigate();

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    if (selectedProduct?.variants?.length) {
      setSelectedVariant(selectedProduct.variants[0]);
    } else {
      setSelectedVariant(null);
    }

    setSelectedSize("");
  }, [selectedProduct]);

  if (!selectedProduct) return null;

  const handleOrder = () => {
    if (!selectedSize) {
      alert("Please Select Size");
      return;
    }

    const phoneNumber = "918299559581";

    const message = `🛍️ New Order

Product:
${selectedProduct?.name || "N/A"}

Article No:
${selectedVariant?.articleNo || "N/A"}

Color:
${selectedVariant?.color || "N/A"}

Price:
₹${selectedVariant?.price || 0}

Size:
${selectedSize}

Customer wants to order this product.`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  // =========================
  // BUY NOW (CHECKOUT)
  // =========================
  const handleBuyNow = () => {
  if (!selectedSize) {
    alert("Please select size");
    return;
  }

  if (!selectedVariant) {
    alert("Please select variant");
    return;
  }

  const confirmOrder = window.confirm("Do you want to continue to checkout?");

  if (!confirmOrder) return;

  navigate("/checkout", {
    state: {
      product: selectedProduct,
      variant: selectedVariant,
      size: selectedSize,
      price: selectedVariant?.price || 0,
    },
  });
};

  return (
 
    <AnimatePresence>
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 md:p-6"
  >
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="
        bg-[#111111]/95
        backdrop-blur-xl
        border border-[#D4AF37]/20
        rounded-[35px]
        overflow-hidden
        max-w-7xl
        w-full
        h-[95vh]
        shadow-[0_20px_80px_rgba(0,0,0,0.8)]
        flex flex-col
        lg:grid
        lg:grid-cols-[1.1fr_0.9fr]
      "
    >
      {/* LEFT IMAGE */}
      <div className="p-4 md:p-5 bg-black/20">
        <div className="relative overflow-hidden rounded-[28px] border border-[#D4AF37]/10 h-[45vh] lg:h-[85vh]">

          <motion.img
            key={selectedVariant?.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            src={selectedVariant?.image || "/placeholder.png"}
            alt={selectedProduct.name}
            className="
              w-full h-full
              object-cover
              hover:scale-110
              duration-700
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div
            className="
            absolute top-4 left-4
            px-4 py-2
            rounded-full
            bg-[#111111]/80
            border border-[#D4AF37]/20
            text-[#D4AF37]
            text-xs
            tracking-[2px]
            backdrop-blur-xl
          "
          >
            PREMIUM COLLECTION
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="relative h-[95vh] overflow-y-auto scrollbar-hide">
        <div className="p-6 md:p-10">

          {/* CLOSE */}
          <button
            onClick={() => setSelectedProduct(null)}
            className="
              absolute top-4 right-4
              w-11 h-11
              rounded-full
              bg-[#111111]
              border border-[#D4AF37]/20
              text-white
              hover:bg-red-500
              duration-300
              flex items-center justify-center
            "
          >
            <X size={18} />
          </button>

          {/* CATEGORY */}
          <p
            className="
            text-[#D4AF37]
            uppercase
            tracking-[3px]
            text-xs
            mb-3
          "
          >
            {selectedProduct.category}
          </p>

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            {selectedProduct.name}
          </h2>

          {/* PRICE + RATING */}
          <div className="flex items-center gap-5 flex-wrap mb-8">

            <p className="text-[#D4AF37] text-5xl font-black">
              ₹{selectedVariant?.price || 0}
            </p>

            <div
              className="
              flex items-center gap-2
              px-4 py-2
              rounded-full
              bg-[#111111]
              border border-[#D4AF37]/20
            "
            >
              <Star
                size={18}
                fill="currentColor"
                className="text-[#D4AF37]"
              />

              <span className="text-zinc-300">
                {selectedProduct.rating || "4.8"}
              </span>
            </div>

          </div>

          {/* ARTICLE + COLOR */}
          <div className="flex flex-wrap gap-3 mb-8">

            <div
              className="
              bg-[#111111]
              border border-[#D4AF37]/10
              rounded-2xl
              px-4 py-3
            "
            >
              Article:
              <span className="ml-2 text-[#D4AF37]">
                {selectedVariant?.articleNo || "N/A"}
              </span>
            </div>

            <div
              className="
              bg-[#111111]
              border border-[#D4AF37]/10
              rounded-2xl
              px-4 py-3
            "
            >
              Color:
              <span className="ml-2 text-[#D4AF37]">
                {selectedVariant?.color || "N/A"}
              </span>
            </div>

          </div>

          {/* FABRIC */}
          <div className="space-y-3 mb-8">
            <p className="text-zinc-300">
              <span className="font-bold text-white">
                Fabric:
              </span>{" "}
              {selectedProduct.fabric || "N/A"}
            </p>

            <p className="text-[#D4AF37]">
              {selectedProduct.stock || ""}
            </p>
          </div>

          {/* DESCRIPTION */}
          <p className="text-zinc-400 leading-relaxed mb-10">
            {selectedProduct.description || ""}
          </p>

          {/* SIZE */}
          <h3 className="text-2xl font-bold mb-5">
            Select Size
          </h3>

          <div className="flex flex-wrap gap-4 mb-10">
            {selectedProduct.sizes?.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`
                  w-20 h-16
                  rounded-2xl
                  font-bold
                  border
                  transition-all
                  ${
                    selectedSize === size
                      ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                      : "bg-[#111111] border-zinc-700 text-white hover:border-[#D4AF37]"
                  }
                `}
              >
                {size}
              </button>
            ))}
          </div>

          {/* VARIANTS */}
          <div className="mb-10">

            <h3 className="text-lg mb-4 text-white">
              Available Variants
            </h3>

            <div className="flex gap-3 overflow-x-auto scrollbar-hide">

              {selectedProduct.variants?.map((v, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedVariant(v)}
                  className={`
                    w-20 h-24
                    rounded-2xl
                    overflow-hidden
                    border
                    transition-all duration-300
                    ${
                      selectedVariant?.articleNo === v.articleNo
                        ? "border-[#D4AF37] scale-105"
                        : "border-zinc-700"
                    }
                  `}
                >
                 <img
  src={
    v?.image?.trim()
      ? v.image
      : "/placeholder.png"
  }
  alt=""
  className="w-full h-full object-cover"
/>
                </button>
              ))}

            </div>
          </div>

          {/* BUTTONS */}
          <div className="space-y-4">

            <button
              onClick={handleOrder}
              className="
                w-full py-5 rounded-2xl
                font-bold
                bg-green-500
                hover:bg-green-400
                text-black
                transition
              "
            >
              Order on WhatsApp
            </button>

            <button
              onClick={handleBuyNow}
              className="
                w-full py-5 rounded-2xl
                font-bold
                bg-gradient-to-r
                from-[#F5E6B3]
                via-[#D4AF37]
                to-[#B8860B]
                text-black
                hover:scale-[1.02]
                transition
              "
            >
              Buy Now
            </button>

          </div>

        </div>
      </div>
    </motion.div>
  </motion.div>
</AnimatePresence>
  );
}   // <AnimatePresence>
    //   <motion.div
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     exit={{ opacity: 0 }}
    //     className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-3 md:p-6"
    //   >
    //     <motion.div
    //       initial={{ scale: 0.9, opacity: 0 }}
    //       animate={{ scale: 1, opacity: 1 }}
    //       exit={{ scale: 0.9, opacity: 0 }}
    //       transition={{ duration: 0.25 }}
    //       className="bg-zinc-950 border border-zinc-800 rounded-[35px] overflow-hidden max-w-7xl w-full h-[95vh] flex flex-col lg:grid lg:grid-cols-[1.1fr_0.9fr]"
    //     >
    //       {/* LEFT */}
    //       <div className="p-4 md:p-5 flex flex-col bg-black/20">
    //         <div className="relative overflow-hidden rounded-[28px] border border-zinc-800 h-[45vh] lg:h-[85vh]">
    //           <img
    //             src={selectedVariant?.image || "/placeholder.png"}
    //             alt={selectedProduct.name || "Product"}
    //             className="w-full h-full object-cover hover:scale-105 duration-500"
    //           />
    //         </div>
    //       </div>

    //       {/* RIGHT */}
    //       <div className="relative h-[95vh] overflow-y-auto scrollbar-hide">
    //         <div className="p-6 md:p-10">

    //           {/* CLOSE */}
    //           <button
    //             onClick={() => setSelectedProduct(null)}
    //             className="absolute top-3 right-3 bg-zinc-800 hover:bg-red-500 w-10 h-10 rounded-full flex items-center justify-center"
    //           >
    //             <X size={18} />
    //           </button>

    //           {/* CATEGORY */}
    //           <p className="text-yellow-400 uppercase text-sm mb-3">
    //             {selectedProduct.category}
    //           </p>

    //           {/* TITLE */}
    //           <h2 className="text-4xl font-extrabold mb-5">
    //             {selectedProduct.name}
    //           </h2>

    //           {/* PRICE */}
    //           <div className="flex items-center gap-5 mb-6 flex-wrap">
    //             <p className="text-4xl text-green-400 font-bold">
    //               ₹{selectedVariant?.price || 0}
    //             </p>

    //             <div className="flex items-center gap-1 text-yellow-400">
    //               <Star size={20} fill="currentColor" />
    //               <span className="text-lg">
    //                 {selectedProduct.rating || "4.8"}
    //               </span>
    //             </div>
    //           </div>

    //           {/* ARTICLE + COLOR */}
    //           <div className="flex flex-wrap gap-3 mb-6">
    //             <div className="bg-zinc-800 px-4 py-3 rounded-2xl text-sm">
    //               Article:{" "}
    //               <span className="text-yellow-400">
    //                 {selectedVariant?.articleNo || "N/A"}
    //               </span>
    //             </div>

    //             <div className="bg-zinc-800 px-4 py-3 rounded-2xl text-sm">
    //               Color:{" "}
    //               <span className="text-yellow-400">
    //                 {selectedVariant?.color || "N/A"}
    //               </span>
    //             </div>
    //           </div>

    //           {/* FABRIC + STOCK */}
    //           <div className="space-y-3 mb-6">
    //             <p className="text-gray-300">
    //               <span className="text-white font-semibold">
    //                 Fabric:
    //               </span>{" "}
    //               {selectedProduct.fabric || "N/A"}
    //             </p>

    //             <p className="text-yellow-300 font-medium">
    //               {selectedProduct.stock || ""}
    //             </p>
    //           </div>

    //           {/* DESCRIPTION */}
    //           <p className="text-zinc-400 mb-8">
    //             {selectedProduct.description || ""}
    //           </p>

    //           {/* SIZE */}
    //           <h3 className="text-2xl font-bold mb-5">
    //             Select Size
    //           </h3>

    //           <div className="flex flex-wrap gap-4 mb-10">
    //             {selectedProduct.sizes?.map((size) => (
    //               <button
    //                 key={size}
    //                 onClick={() => setSelectedSize(size)}
    //                 className={`w-20 h-16 rounded-2xl border font-bold ${
    //                   selectedSize === size
    //                     ? "bg-yellow-500 text-black"
    //                     : "border-zinc-700"
    //                 }`}
    //               >
    //                 {size}
    //               </button>
    //             ))}
    //           </div>

    //           {/* THUMBNAILS */}
    //           <div className="mb-8">
    //             <h3 className="text-lg mb-3">More Images</h3>

    //             <div className="flex gap-3 overflow-x-auto scrollbar-hide">
    //               {selectedProduct.variants?.map((v, i) => (
    //                 <button
    //                   key={i}
    //                   onClick={() => setSelectedVariant(v)}
    //                   className={`w-20 h-24 border-2 rounded-2xl overflow-hidden ${
    //                     selectedVariant?.articleNo === v.articleNo
    //                       ? "border-yellow-400"
    //                       : "border-zinc-700"
    //                   }`}
    //                 >
    //                   <img
    //                     src={v.image}
    //                     className="w-full h-full object-cover"
    //                   />
    //                 </button>
    //               ))}
    //             </div>
    //           </div>

    //           {/* ORDER BUTTON */}
    //           <button
    //             onClick={handleOrder}
    //             className="bg-green-500 hover:bg-green-400 text-black w-full py-5 rounded-2xl font-bold mb-4"
    //           >
    //             Order on WhatsApp
    //           </button>

    //           {/* 🆕 BUY NOW BUTTON (ADDED ONLY) */}
    //           <button
    //             onClick={handleBuyNow}
    //             className="bg-blue-500 hover:bg-blue-400 text-black w-full py-5 rounded-2xl font-bold"
    //           >
    //             Buy Now
    //           </button>

    //         </div>
    //       </div>
    //     </motion.div>
    //   </motion.div>
    // </AnimatePresence>