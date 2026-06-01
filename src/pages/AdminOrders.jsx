import { useEffect, useState } from "react";
import {
  getAllOrders,
  updateOrderStatus,
  deleteOrder,
} from "../firebase/ordersService";
import { useNavigate } from "react-router-dom";
export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);
const navigate = useNavigate();
  const fetchOrders = async () => {
    const data = await getAllOrders();
    setOrders(data);
    setLoading(false);
  };

  const handleStatusChange = async (id, status) => {
    await updateOrderStatus(id, status);

    setOrders((prev) =>
      prev.map((o) =>
        o.id === id ? { ...o, status } : o
      )
    );
  };

  const handleDelete = async (id) => {
    await deleteOrder(id);

    setOrders((prev) => prev.filter((o) => o.id !== id));
  };

  if (loading) return <h3>Loading orders...</h3>;

return (
  <div className="min-h-screen bg-black text-white p-4 sm:p-6">
    <div className="max-w-7xl mx-auto">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8 mt-12">
        <button
          onClick={() => navigate("/admin")}
          className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-3 rounded-xl font-semibold transition"
        >
          ← Back to Admin
        </button>

        <h1 className="text-2xl sm:text-4xl font-bold text-center">
          Orders Management
        </h1>

        <div className="hidden sm:block w-[140px]" />
      </div>

      {orders.length === 0 ? (
        <div className="text-center text-gray-400 py-20">
          No Orders Found
        </div>
      ) : (
        <div className="grid gap-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className={`rounded-3xl border p-4 sm:p-6 shadow-xl
              ${
                order.status === "cancelled"
                  ? "border-red-500/40 bg-red-500/10"
                  : "border-yellow-500/30 bg-zinc-900"
              }`}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-5">
                <div>
                  <h3 className="font-bold text-lg break-all">
                    Order #{order.id.slice(0, 8)}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    Total Amount
                  </p>

                  <p className="text-yellow-400 text-2xl font-bold">
                    ₹{order.totalPrice}
                  </p>
                </div>

                <div>
                  <span
                    className={`inline-block px-4 py-2 rounded-full text-sm font-semibold
                    ${
                      order.status === "pending"
                        ? "bg-yellow-500 text-black"
                        : order.status === "processing"
                        ? "bg-blue-500 text-white"
                        : order.status === "shipped"
                        ? "bg-purple-500 text-white"
                        : order.status === "delivered"
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {order.status.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Products */}
              <div className="space-y-4">
                {order.items?.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row gap-4 bg-zinc-800 p-4 rounded-2xl"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full sm:w-24 h-48 sm:h-24 object-cover rounded-xl"
                    />

                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">
                        {item.name}
                      </h4>

                      <div className="mt-2 text-sm text-gray-400 space-y-1">
                        <p>Qty: {item.qty}</p>
                        <p>Size: {item.size}</p>
                        <p>Color: {item.color}</p>
                        <p>Article No: {item.articleNo}</p>
                        <p>Price: ₹{item.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Customer Details */}
              <div className="mt-5 bg-zinc-800/50 border border-zinc-700 rounded-2xl p-4">
                <h4 className="text-yellow-400 font-semibold mb-3">
                  Customer Details
                </h4>

                <div className="space-y-1 text-gray-300 break-words">
                  <p>
                    <strong>Name:</strong>{" "}
                    {order.customer?.name}
                  </p>

                  <p>
                    <strong>Phone:</strong>{" "}
                    {order.customer?.phone}
                  </p>

                  <p>
                    <strong>Address:</strong>{" "}
                    {order.customer?.address}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <select
                  value={order.status}
                  onChange={(e) =>
                    handleStatusChange(
                      order.id,
                      e.target.value
                    )
                  }
                  className="w-full sm:w-auto bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white"
                >
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>

                <button
                  onClick={() => handleDelete(order.id)}
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 transition px-5 py-3 rounded-xl font-semibold"
                >
                  Delete Order
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);
}