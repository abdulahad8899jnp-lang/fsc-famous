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
    bottom-6
    right-6
    z-50
    w-14
    h-14
    rounded-full
    bg-yellow-500
    text-black
    font-bold
    text-xl
    flex
    items-center
    justify-center
    shadow-lg
  "
>
  {user
    ? user.name?.charAt(0)?.toUpperCase()
    : "U"}
</Link>
        <Footer />
      </BrowserRouter>
    </OrderProvider>
  );
}