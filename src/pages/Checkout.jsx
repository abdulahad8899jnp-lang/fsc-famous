import { auth } from "../firebase/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { motion } from "framer-motion";

export default function Checkout() {
  
  const { state } = useLocation();
  const navigate = useNavigate();

  const product = state?.product;
  const variant = state?.variant;
  const size = state?.size;

  const price = state?.price || variant?.price || product?.price || 0;

  const [qty, setQty] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        No product selected
      </div>
    );
  }

  const totalPrice = price * qty;

  const placeOrder = async () => {
    if (!name || !phone || !address) return;

    setLoading(true);

    try {
      const orderData = {
  customer: { name, phone, address },

  userId: auth.currentUser?.uid || null,

  items: [
    {
      productId: product.id,
      name: product.name,
      price,
      qty,
      image: variant?.image,
      articleNo: variant?.articleNo,
      color: variant?.color,
      size,
    },
  ],

  totalPrice,
  status: "pending",
  createdAt: serverTimestamp(),
};

      const docRef = await addDoc(collection(db, "orders"), orderData);

      navigate(`/order-success/${docRef.id}`);
    } catch (err) {
      console.log(err);
      alert("Order failed");
    }

    setLoading(false);
  };

 return (
  <div className="min-h-screen bg-black text-white p-3 sm:p-5 md:p-10 flex justify-center">
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-5">

      {/* ✅ ORDER SUMMARY */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-zinc-950 border border-zinc-800 rounded-3xl p-5 sm:p-6 md:p-8 space-y-5"
      >
        <h2 className="text-xl sm:text-2xl font-bold">Order Summary</h2>

        <img
          src={variant?.image || product.image}
          className="w-full h-52 sm:h-64 object-cover rounded-2xl border border-zinc-800"
        />

        <div className="space-y-1">
          <h3 className="text-lg sm:text-xl font-semibold break-words">
            {product.name}
          </h3>

          <p className="text-yellow-400 text-sm sm:text-base">
            Size: {size}
          </p>

          <p className="text-zinc-400 text-sm sm:text-base break-words">
            {variant?.color} • {variant?.articleNo}
          </p>
        </div>

        <div className="flex justify-between text-sm sm:text-base">
          <span>Price</span>
          <span>₹{price}</span>
        </div>

        <div className="flex justify-between text-sm sm:text-base">
          <span>Qty</span>
          <span>{qty}</span>
        </div>

        <div className="border-t border-zinc-800 pt-4 flex justify-between text-lg sm:text-xl font-bold">
          <span>Total</span>
          <span className="text-green-400">₹{totalPrice}</span>
        </div>
      </motion.div>

      {/* ✅ FORM */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-zinc-950 border border-zinc-800 rounded-3xl p-5 sm:p-6 md:p-8 space-y-5"
      >
        <h2 className="text-2xl sm:text-3xl font-bold">Checkout</h2>

        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm sm:text-base"
        />

        <input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm sm:text-base"
        />

        <textarea
          placeholder="Full Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full h-24 sm:h-28 p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm sm:text-base"
        />

        {/* QUANTITY */}
        <div className="flex items-center justify-between bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
          <span className="text-sm sm:text-base">Quantity</span>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-zinc-800"
            >
              -
            </button>

            <span className="font-bold text-sm sm:text-base">{qty}</span>

            <button
              onClick={() => setQty(qty + 1)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-zinc-800"
            >
              +
            </button>
          </div>
        </div>

        <button
          onClick={placeOrder}
          disabled={loading}
          className="w-full bg-green-500 hover:bg-green-400 text-black py-4 rounded-2xl font-bold text-sm sm:text-base"
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </motion.div>

    </div>
  </div>
);
}