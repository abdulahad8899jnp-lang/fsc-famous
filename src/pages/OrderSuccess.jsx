
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function OrderSuccess() {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
const [shown, setShown] = useState(false);
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderRef = doc(db, "orders", orderId);
        const orderSnap = await getDoc(orderRef);

        if (orderSnap.exists()) {
          setOrder({
            id: orderSnap.id,
            ...orderSnap.data(),
          });
        }
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    };

    if (orderId) {
      fetchOrder();
    }
  }, [orderId]);
 


useEffect(() => {
  const alertKey = `order-alert-${orderId}`;
  const alreadyShown = localStorage.getItem(alertKey);

  if (!loading && order && !alreadyShown) {
    alert("🎉 Order Placed Successfully!");

    localStorage.setItem(alertKey, "true");
  }
}, [loading, order, orderId]);


  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }

  if (!order) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            No Order Found
          </h2>

          <button
            onClick={() => navigate("/")}
            className="bg-green-500 text-black px-6 py-3 rounded-xl font-bold"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden"
      >

        {/* HEADER */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-center">
          <div className="text-5xl mb-2">🎉</div>

          <h1 className="text-2xl md:text-3xl font-bold text-black">
            Order Placed Successfully
          </h1>

          <p className="text-black/80 mt-1">
            Thank you for your purchase
          </p>
        </div>

        {/* BODY */}
        <div className="p-5 md:p-6 space-y-5">

          {/* ORDER INFO */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
              <p className="text-zinc-400 text-sm">
                Order ID
              </p>

              <p className="font-mono text-sm break-all mt-1">
                {order.id}
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
              <p className="text-zinc-400 text-sm">
                Total Amount
              </p>

              <p className="text-green-400 text-2xl font-bold mt-1">
                ₹{order.totalPrice}
              </p>
            </div>

          </div>

          {/* STATUS */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex justify-between items-center">
            <span>Status</span>

            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold capitalize">
              {order.status}
            </span>
          </div>

          {/* CUSTOMER */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
            <h3 className="font-bold mb-3">
              Customer Details
            </h3>

            <p>{order.customer?.name}</p>
            <p className="text-zinc-400">
              {order.customer?.phone}
            </p>
            <p className="text-zinc-400">
              {order.customer?.address}
            </p>
          </div>

          {/* ITEMS */}
          <div>
            <h3 className="font-bold text-lg mb-3">
              Ordered Items
            </h3>

            <div className="space-y-3">

              {order.items?.map((item, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-3 flex gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover"
                  />

                  <div className="flex-1">
                    <h4 className="font-semibold">
                      {item.name}
                    </h4>

                    <p className="text-zinc-400 text-sm">
                      Qty: {item.qty}
                    </p>

                    <p className="text-zinc-400 text-sm">
                      Size: {item.size}
                    </p>

                    <p className="text-zinc-400 text-sm">
                      Color: {item.color}
                    </p>

                    <p className="text-green-400 font-bold mt-1">
                      ₹{item.price}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">

            <button
              onClick={() => navigate("/my-orders")}
              className="flex-1 bg-blue-500 hover:bg-blue-400 text-black py-3 rounded-2xl font-bold"
            >
              View Orders
            </button>

            <button
              onClick={() => navigate("/")}
              className="flex-1 bg-green-500 hover:bg-green-400 text-black py-3 rounded-2xl font-bold"
            >
              Continue Shopping
            </button>

          </div>

        </div>
      </motion.div>

    </div>
  );
}