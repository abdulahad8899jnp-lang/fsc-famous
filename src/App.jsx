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

import AdminOrders from "./pages/AdminOrders";
import OrderSuccess from "./pages/OrderSuccess";
import UserOrders from "./pages/UserOrders";
// 🧠 STORE
import { OrderProvider } from "./store/orderStore";

export default function App() {
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

          {/* ADMIN */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
<Route
  path="/my-orders"
  element={<UserOrders />}
/>
          {/* ORDER SYSTEM */}
          <Route path="/checkout" element={<Checkout />} />
         
        <Route path="/order-success/:orderId" element={<OrderSuccess />} />
        </Routes>
        <Link
  to="/my-orders"
  className="fixed bottom-6 right-6 z-50 bg-yellow-500 text-black px-4 py-3 rounded-full shadow-lg"
>
  My Orders
</Link>
        <Footer />
      </BrowserRouter>
    </OrderProvider>
  );
}