import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { auth } from "../firebase/firebase";
import { getUserOrders } from "../firebase/ordersService";
import { cancelOrder } from "../firebase/ordersService";
export default function UserOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const handleCancel = async (orderId) => {
  try {
    await cancelOrder(orderId);

    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId
          ? { ...order, status: "cancelled" }
          : order
      )
    );
  } catch (err) {
    console.log(err);
    alert("Failed to cancel order");
  }
};

  const loadOrders = async () => {
  console.log("Current User:", auth.currentUser);

  if (!auth.currentUser) {
    console.log("User Not Logged In");
    return;
  }

  const data = await getUserOrders(
    auth.currentUser.uid
  );

  console.log("Orders Found:", data);

  setOrders(data);
};

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500 text-black";
      case "processing":
        return "bg-blue-500 text-white";
      case "shipped":
        return "bg-purple-500 text-white";
      case "delivered":
        return "bg-green-500 text-white";
      case "cancelled":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

return (
  <div className="min-h-screen bg-black text-white px-4 py-10">
    <div className="max-w-6xl mx-auto">

      {/* Heading */}
      <div className="text-center mb-12 mt-5">
        <h1 className="text-5xl font-bold">
          My Orders
        </h1>

        <p className="text-zinc-500 mt-2">
          Track and manage your orders
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-12 text-center">
          <h2 className="text-2xl font-semibold mb-3">
            No Orders Found
          </h2>

          <p className="text-zinc-500">
            Your placed orders will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {orders.map((order) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="
                bg-gradient-to-br
                from-zinc-900
                to-black
                border
                border-yellow-500/20
                rounded-3xl
                overflow-hidden
                shadow-[0_0_25px_rgba(234,179,8,0.12)]
                hover:border-yellow-500/40
                transition-all
                duration-300
              "
            >
              {/* Header */}
              <div className="p-6 border-b border-zinc-800 flex flex-col md:flex-row justify-between gap-5">
                <div>
                  <p className="text-zinc-500 text-xs uppercase tracking-[3px]">
                    Order ID
                  </p>

                  <h3 className="font-medium break-all text-zinc-200 mt-1">
                    {order.id}
                  </h3>
                </div>

                <div className="text-left md:text-right">
                  <p className="text-zinc-500 text-xs uppercase tracking-[3px]">
                    Total Amount
                  </p>

                  <h3 className="text-3xl font-bold text-yellow-400 mt-1">
                    ₹{order.totalPrice}
                  </h3>
                </div>
              </div>

              {/* Status */}
              <div className="px-6 pt-5">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                    order.status
                  )}`}
                >
                  {order.status?.toUpperCase()}
                </span>
              </div>

              {/* Products */}
              <div className="p-6 space-y-4">
                {order.items?.map((item, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      flex-col
                      sm:flex-row
                      gap-4
                      bg-zinc-800/40
                      border
                      border-zinc-700
                      rounded-2xl
                      p-4
                      hover:border-yellow-500/30
                      transition
                    "
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        w-full
                        sm:w-24
                        h-48
                        sm:h-24
                        object-cover
                        rounded-xl
                        border
                        border-zinc-700
                      "
                    />

                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-white">
                        {item.name}
                      </h4>

                      <div className="grid grid-cols-2 gap-2 mt-3 text-sm text-zinc-400">
                        <p>
                          <span className="text-zinc-300">
                            Article:
                          </span>{" "}
                          {item.articleNo}
                        </p>

                        <p>
                          <span className="text-zinc-300">
                            Color:
                          </span>{" "}
                          {item.color}
                        </p>

                        <p>
                          <span className="text-zinc-300">
                            Size:
                          </span>{" "}
                          {item.size}
                        </p>

                        <p>
                          <span className="text-zinc-300">
                            Qty:
                          </span>{" "}
                          {item.qty}
                        </p>

                        <p>
                          <span className="text-zinc-300">
                            Price:
                          </span>{" "}
                          ₹{item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Customer Info */}
              <div className="border-t border-zinc-800 p-6">
                <h4 className="text-yellow-400 font-semibold text-lg mb-4">
                  Customer Details
                </h4>

                <div className="space-y-2 text-zinc-400">
                  <p>
                    <span className="text-zinc-300">
                      Name:
                    </span>{" "}
                    {order.customer?.name}
                  </p>

                  <p>
                    <span className="text-zinc-300">
                      Phone:
                    </span>{" "}
                    {order.customer?.phone}
                  </p>

                  <p>
                    <span className="text-zinc-300">
                      Address:
                    </span>{" "}
                    {order.customer?.address}
                  </p>
                </div>

                {/* Cancel Button */}
                {order.status === "pending" && (
                  <div className="flex justify-end mt-6">
                    <button
                      onClick={() =>
                        handleCancel(order.id)
                      }
                      className="
                        bg-red-500
                        hover:bg-red-600
                        text-white
                        px-6
                        py-3
                        rounded-xl
                        font-semibold
                        shadow-lg
                        transition-all
                      "
                    >
                      Cancel Order
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  </div>
);
}