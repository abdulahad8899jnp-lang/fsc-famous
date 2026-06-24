import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";

export default function AdminDashboard() {
  const navigate = useNavigate();
const handleLogout = async () => {
  await signOut(auth);
  navigate("/admin/login");
};

  useEffect(() => {
    const unsub = onAuthStateChanged(
      auth,
      (user) => {
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
      }
    );

    return () => unsub();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="fixed inset-0 -z-10">
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[180px] rounded-full" />
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[180px] rounded-full" />
</div>
     <div className="mb-10">
 <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">

  <button
    onClick={() => navigate("/")}
    className="
      w-full md:w-auto
      px-5 py-3
      rounded-2xl
      bg-zinc-900
      border border-zinc-800
      hover:border-yellow-500
      transition-all
    "
  >
    ← Back
  </button>

  <div className="text-center">
    <h1 className="
      text-3xl
      sm:text-4xl
      md:text-5xl
      font-bold
      bg-gradient-to-r
      from-yellow-300
      via-yellow-500
      to-yellow-700
      bg-clip-text
      text-transparent
    ">
      FSC Admin Dashboard
    </h1>

    <p className="text-zinc-400 mt-2 text-sm sm:text-base">
      Manage Products, Orders & Users
    </p>
  </div>

  <button
    onClick={handleLogout}
    className="
      w-full md:w-auto
      px-5 py-3
      rounded-2xl
      bg-red-500
      hover:bg-red-600
      text-white
      font-bold
      transition-all
    "
  >
    Logout
  </button>

</div>

  <p className="text-zinc-400 mt-2">
    Manage Products, Orders & Users
  </p>
</div>
<div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-6 mb-8 backdrop-blur-xl">
  <h2 className="text-2xl font-bold text-yellow-400">
    Welcome Admin
  </h2>

  <p className="text-zinc-400 mt-2">
    Famous Sherwani Collection Control Panel
  </p>
</div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <button
          onClick={() => {
    navigate("/admin/products", {
      state: { showPreview: true }
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
          className="
bg-zinc-900/70
border
border-zinc-800
rounded-3xl
p-8
hover:border-yellow-500
hover:-translate-y-2
transition-all
duration-300
backdrop-blur-xl
"
        >
         <>
  <div className="text-5xl mb-4">📦</div>
  <h2 className="text-xl font-bold">Products</h2>
  <p className="text-zinc-400 mt-2">
    Manage Products
  </p>
</>
        </button>

        <button
          onClick={() =>
            navigate("/admin/orders")
          }
          className="
bg-zinc-900/70
border
border-zinc-800
rounded-3xl
p-8
hover:border-yellow-500
hover:-translate-y-2
transition-all
duration-300
backdrop-blur-xl
"
        >
          <>
  <div className="text-5xl mb-4">🛒</div>
  <h2 className="text-xl font-bold">Orders</h2>
  <p className="text-zinc-400 mt-2">
    Manage Orders
  </p>
</>
        </button>

        <button
          onClick={() =>
            navigate("/admin/users")
          }
          className="
bg-zinc-900/70
border
border-zinc-800
rounded-3xl
p-8
hover:border-yellow-500
hover:-translate-y-2
transition-all
duration-300
backdrop-blur-xl
"
        >
        <>
  <div className="text-5xl mb-4">👥</div>
  <h2 className="text-xl font-bold">Users</h2>
  <p className="text-zinc-400 mt-2">
    Manage Users
  </p>
</>
        </button>

        <button
          onClick={() =>
            navigate("/admin/products")
          }
          className="
bg-gradient-to-r
from-yellow-400
to-yellow-600
text-black
rounded-3xl
p-8
hover:scale-105
transition-all
duration-300
"
        >
          <>
  <div className="text-5xl mb-4">➕</div>
  <h2 className="text-xl font-bold">Add Product</h2>
  <p>Create New Product</p>
</>
        </button>
      </div>
    </div>
  );
}