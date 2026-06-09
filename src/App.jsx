// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import ProductsPage from "./pages/ProductsPage";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Admin from "./pages/Admin";
// import Login from "./pages/Login";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<ProductsPage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/admin/login" element={<Login />} />
//         <Route path="/admin" element={<Admin />} />
//       </Routes>

//       <Footer />
//     </BrowserRouter>
//   );
// }







import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

// 🛒 ORDER SYSTEM PAGES
import Checkout from "./pages/Checkout";
import AdminUsers from "./pages/AdminUsers";
import AdminOrders from "./pages/AdminOrders";
import OrderSuccess from "./pages/OrderSuccess";
import UserOrders from "./pages/UserOrders";
import UserLogin from "./pages/UserLogin";
// 🧠 STORE
import { OrderProvider } from "./store/orderStore";
import Account from "./pages/Account";
import ProfileSetup from "./pages/ProfileSetup";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {

  const [user, setUser] = useState(null);

useEffect(() => {
  const storedUser = JSON.parse(
    localStorage.getItem("user")
  );

  setUser(storedUser);
}, []);

  return (
    <OrderProvider>
      <BrowserRouter>
       <ScrollToTop />
        <Navbar />

        <Routes>
          {/* MAIN PAGES */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          {/* ADMIN */}
          <Route path="/profile-setup" element={<ProfileSetup />}/>
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/user-login" element={<UserLogin />} />
<Route
  path="/my-orders"
  element={<UserOrders />}
/>

          {/* ORDER SYSTEM */}
          <Route path="/checkout" element={<Checkout />} />
         <Route path="/account" element={<Account />} />
        <Route path="/order-success/:orderId" element={<OrderSuccess />} />
        </Routes>
         <Link
  to={user ? "/account" : "/user-login"}
  className="
    fixed
    bottom-20
    right-6
    z-40
    w-14 h-14
    rounded-full
    flex items-center justify-center
    bg-gradient-to-br from-[#F5E6B3] via-[#D4AF37] to-[#B8860B]
    text-black font-bold text-lg
    shadow-[0_0_25px_rgba(212,175,55,0.25)]
    hover:scale-110
    transition-all duration-300
    overflow-hidden
  "
>
  {user?.image ? (
    <img
      src={user.image}
      alt="user"
      className="w-full h-full object-cover rounded-full"
    />
  ) : (
    <span>
      {user ? user.name?.charAt(0)?.toUpperCase() : "U"}
    </span>
  )}
</Link>
        <Footer />
      </BrowserRouter>
    </OrderProvider>
  );
}