import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "../../firebase/firebase";
// ✅ New
import {
  getAllOrders,
  updateOrderStatus,
  deleteOrder
} from "../../firebase/ordersService";
import { useNavigate } from "react-router-dom";
export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);
const navigate = useNavigate();
useEffect(() => {
  const unsub = onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigate("/admin/login");
      return;
    }

    const email = user.email
      ?.trim()
      .toLowerCase();

    if (
      email !==
      "1983mahboob@gmail.com"
    ) {
      signOut(auth);
      navigate("/admin/login");
    }
  });

  return () => unsub();
}, []);
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
  <div className="min-h-screen bg-black text-white overflow-hidden">

  {/* Background Effects */}
  <div className="fixed inset-0 -z-10">
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[180px] rounded-full" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[180px] rounded-full" />
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

    {/* Header */}
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-8">

      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
          Orders Dashboard
        </h1>

        <p className="text-zinc-400 mt-2">
          Manage customer orders
        </p>
      </div>

      <button
        onClick={() => navigate("/admin")}
        className="
          px-6 py-3
          rounded-2xl
          bg-zinc-900/80
          border border-zinc-800
          hover:border-yellow-500
          transition-all
        "
      >
        ← Back
      </button>

    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

      <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-5">
        <p className="text-zinc-400 text-sm">Total Orders</p>
        <h2 className="text-3xl font-bold text-yellow-400">
          {orders.length}
        </h2>
      </div>

      <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-5">
        <p className="text-zinc-400 text-sm">Pending</p>
        <h2 className="text-3xl font-bold text-orange-400">
          {orders.filter(o => o.status === "pending").length}
        </h2>
      </div>

      <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-5">
        <p className="text-zinc-400 text-sm">Delivered</p>
        <h2 className="text-3xl font-bold text-green-400">
          {orders.filter(o => o.status === "delivered").length}
        </h2>
      </div>

      <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-5">
        <p className="text-zinc-400 text-sm">Cancelled</p>
        <h2 className="text-3xl font-bold text-red-400">
          {orders.filter(o => o.status === "cancelled").length}
        </h2>
      </div>

    </div>

    {orders.length === 0 ? (

      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-zinc-500">
          No Orders Found
        </h2>
      </div>

    ) : (

      <div className="grid gap-6">

        {orders.map((order) => (

          <div
            key={order.id}
            className={`
              group
              relative
              overflow-hidden
              rounded-[32px]
              p-5 sm:p-6
              bg-zinc-900/70
              backdrop-blur-xl
              border
              shadow-[0_0_30px_rgba(234,179,8,0.08)]
              hover:shadow-[0_0_50px_rgba(234,179,8,0.15)]
              transition-all
              duration-500
              ${
                order.status === "cancelled"
                  ? "border-red-500/30"
                  : "border-zinc-800 hover:border-yellow-500/40"
              }
            `}
          >

            {/* Order Header */}
            <div className="flex flex-col md:flex-row justify-between gap-5 mb-6">

              <div>
                <h3 className="text-xl font-bold">
                  Order #{order.id.slice(0, 8)}
                </h3>

                <p className="text-zinc-400 mt-2">
                  Total Amount
                </p>

                <p className="text-yellow-400 text-3xl font-bold">
                  ₹{order.totalPrice}
                </p>
              </div>

              <span
                className={`
                  h-fit
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-semibold
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
                  }
                `}
              >
                {order.status.toUpperCase()}
              </span>

            </div>

            {/* Products */}
            <div className="space-y-4">

              {order.items?.map((item, i) => (

                <div
                  key={i}
                  className="
                    flex flex-col sm:flex-row
                    gap-4
                    bg-black/30
                    border border-zinc-800
                    rounded-3xl
                    p-4
                  "
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      w-full
                      sm:w-28
                      h-52
                      sm:h-28
                      object-cover
                      rounded-2xl
                      border
                      border-zinc-700
                    "
                  />

                  <div className="flex-1">

                    <h4 className="font-bold text-lg">
                      {item.name}
                    </h4>

                    <div className="grid grid-cols-2 gap-2 mt-3 text-sm text-zinc-400">

                      <p>Qty: {item.qty}</p>
                      <p>Size: {item.size}</p>

                      <p>Color: {item.color}</p>
                      <p>Price: ₹{item.price}</p>

                      <p className="col-span-2">
                        Article: {item.articleNo}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

            {/* Customer Details */}
            <div className="
              mt-6
              bg-black/30
              border border-zinc-800
              rounded-3xl
              p-5
            ">

              <h4 className="text-yellow-400 font-semibold mb-4">
                Customer Details
              </h4>

              <div className="space-y-2 text-zinc-300">

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
                onChange={(e) => {
                  const newStatus = e.target.value;

                  if (
                    window.confirm(
                      "Do you want to change order status?"
                    )
                  ) {
                    handleStatusChange(order.id, newStatus);
                  }
                }}
                className="
                  w-full sm:w-auto
                  bg-zinc-900
                  border border-zinc-700
                  rounded-2xl
                  px-5 py-3
                  text-white
                  outline-none
                  focus:border-yellow-500
                "
              >
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>

              <button
                onClick={() => {
                  if (
                    window.confirm(
                      "Do you want to delete this order?"
                    )
                  ) {
                    handleDelete(order.id);
                  }
                }}
                className="
                  w-full sm:w-auto
                  px-5 py-3
                  rounded-2xl
                  bg-red-500/10
                  text-red-400
                  border border-red-500/20
                  hover:bg-red-500
                  hover:text-white
                  transition-all
                "
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
//   <div className="min-h-screen bg-black text-white p-4 sm:p-6">
//     <div className="max-w-7xl mx-auto">

//       {/* Header */}
//       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8 mt-12">
//         <button
//           onClick={() => navigate("/admin")}
//           className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-3 rounded-xl font-semibold transition"
//         >
//           ← Back to Admin
//         </button>

//         <h1 className="text-2xl sm:text-4xl font-bold text-center">
//           Orders Management
//         </h1>

//         <div className="hidden sm:block w-[140px]" />
//       </div>

//       {orders.length === 0 ? (
//         <div className="text-center text-gray-400 py-20">
//           No Orders Found
//         </div>
//       ) : (
//         <div className="grid gap-6">
//           {orders.map((order) => (
//             <div
//               key={order.id}
//               className={`rounded-3xl border p-4 sm:p-6 shadow-xl
//               ${
//                 order.status === "cancelled"
//                   ? "border-red-500/40 bg-red-500/10"
//                   : "border-yellow-500/30 bg-zinc-900"
//               }`}
//             >
//               {/* Header */}
//               <div className="flex flex-col md:flex-row justify-between gap-4 mb-5">
//                 <div>
//                   <h3 className="font-bold text-lg break-all">
//                     Order #{order.id.slice(0, 8)}
//                   </h3>

//                   <p className="text-gray-400 mt-2">
//                     Total Amount
//                   </p>

//                   <p className="text-yellow-400 text-2xl font-bold">
//                     ₹{order.totalPrice}
//                   </p>
//                 </div>

//                 <div>
//                   <span
//                     className={`inline-block px-4 py-2 rounded-full text-sm font-semibold
//                     ${
//                       order.status === "pending"
//                         ? "bg-yellow-500 text-black"
//                         : order.status === "processing"
//                         ? "bg-blue-500 text-white"
//                         : order.status === "shipped"
//                         ? "bg-purple-500 text-white"
//                         : order.status === "delivered"
//                         ? "bg-green-500 text-white"
//                         : "bg-red-500 text-white"
//                     }`}
//                   >
//                     {order.status.toUpperCase()}
//                   </span>
//                 </div>
//               </div>

//               {/* Products */}
//               <div className="space-y-4">
//                 {order.items?.map((item, i) => (
//                   <div
//                     key={i}
//                     className="flex flex-col sm:flex-row gap-4 bg-zinc-800 p-4 rounded-2xl"
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-full sm:w-24 h-48 sm:h-24 object-cover rounded-xl"
//                     />

//                     <div className="flex-1">
//                       <h4 className="font-semibold text-lg">
//                         {item.name}
//                       </h4>

//                       <div className="mt-2 text-sm text-gray-400 space-y-1">
//                         <p>Qty: {item.qty}</p>
//                         <p>Size: {item.size}</p>
//                         <p>Color: {item.color}</p>
//                         <p>Article No: {item.articleNo}</p>
//                         <p>Price: ₹{item.price}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Customer Details */}
//               <div className="mt-5 bg-zinc-800/50 border border-zinc-700 rounded-2xl p-4">
//                 <h4 className="text-yellow-400 font-semibold mb-3">
//                   Customer Details
//                 </h4>

//                 <div className="space-y-1 text-gray-300 break-words">
//                   <p>
//                     <strong>Name:</strong>{" "}
//                     {order.customer?.name}
//                   </p>

//                   <p>
//                     <strong>Phone:</strong>{" "}
//                     {order.customer?.phone}
//                   </p>

//                   <p>
//                     <strong>Address:</strong>{" "}
//                     {order.customer?.address}
//                   </p>
//                 </div>
//               </div>

//               {/* Actions */}
//               <div className="flex flex-col sm:flex-row gap-4 mt-6">
//                 <select
//   value={order.status}
//   onChange={(e) => {
//     const newStatus = e.target.value;

//     const confirmChange = window.confirm(
//       "Do you want to change order status?"
//     );

//     if (!confirmChange) return;

//     handleStatusChange(order.id, newStatus);
//   }}
//   className="w-full sm:w-auto bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white"
// >
//   <option value="pending">Pending</option>
//   <option value="processing">Processing</option>
//   <option value="shipped">Shipped</option>
//   <option value="delivered">Delivered</option>
//   <option value="cancelled">Cancelled</option>
// </select>

//                 <button
//   onClick={() => {
//     const confirmDelete = window.confirm(
//       "Do you want to delete this order?"
//     );

//     if (!confirmDelete) return;

//     handleDelete(order.id);
//   }}
//   className="w-full sm:w-auto bg-red-600 hover:bg-red-700 transition px-5 py-3 rounded-xl font-semibold"
// >
//   Delete Order
// </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   </div>
);
}