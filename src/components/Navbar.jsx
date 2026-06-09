// import { NavLink } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50
//       px-6 py-2 
//       bg-white/10 backdrop-blur-md 
//       border border-white/20
//       rounded-full 
//       text-white 
//       flex gap-6 items-center
//       shadow-lg">

//       <NavLink
//         to="/"
//         className={({ isActive }) =>
//           isActive ? "text-yellow-400" : "hover:text-yellow-400 transition"
//         }
//       >
//         Home
//       </NavLink>

//       <NavLink
//         to="/products"
//         className={({ isActive }) =>
//           isActive ? "text-yellow-400" : "hover:text-yellow-400 transition"
//         }
//       >
//         Products
//       </NavLink>

//       <NavLink
//         to="/about"
//         className={({ isActive }) =>
//           isActive ? "text-yellow-400" : "hover:text-yellow-400 transition"
//         }
//       >
//         About
//       </NavLink>

//       <NavLink
//         to="/contact"
//         className={({ isActive }) =>
//           isActive ? "text-yellow-400" : "hover:text-yellow-400 transition"
//         }
//       >
//         Contact
//       </NavLink>
   
      
    
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Navbar() {
   const location = useLocation();

  const hideNavbarRoutes = [
    "/admin",
    "/admin/users",
    "/admin/orders",
    ,"/account",
    ,"/profile-setup"
    ,"/my-orders"
  ];

  if (hideNavbarRoutes.includes(location.pathname)) {
    return null;
  }
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`
      fixed top-0 left-0 w-full z-50
      transition-all duration-300
      ${
        scrolled
          ? "bg-black/85 backdrop-blur-xl border-b border-[#D4AF37]/10 py-3"
          : "bg-transparent py-5"
      }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

        {/* Logo */}
       <Link to="/" className="flex items-center gap-3">
  <img
    src="/logo.jpeg"
    alt="Famous Sherwani Collection"
    className="w-12 h-12 object-contain"
  />

  <h1
    className="
      text-xl md:text-3xl
      font-black
      bg-gradient-to-r
      from-[#F5E6B3]
      via-[#D4AF37]
      to-[#B8860B]
      bg-clip-text
      text-transparent
    "
  >
    Famous Sherwani
  </h1>
</Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative font-medium duration-300
                ${
                  isActive
                    ? "text-[#D4AF37]"
                    : "text-white hover:text-[#D4AF37]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button
            onClick={() =>
              window.open("https://wa.me/918299559581", "_blank")
            }
            className="
            px-6 py-3
            rounded-full
            font-bold
            bg-gradient-to-r
            from-[#F5E6B3]
            via-[#D4AF37]
            to-[#B8860B]
            text-black
            hover:scale-105
            duration-300
          "
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className="
            lg:hidden
            bg-black/95
            backdrop-blur-xl
            border-t border-[#D4AF37]/10
          "
          >
            <div className="flex flex-col items-center py-8 gap-6">

              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium
                    ${
                      isActive
                        ? "text-[#D4AF37]"
                        : "text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/918299559581",
                    "_blank"
                  )
                }
                className="
                mt-2
                px-8 py-3
                rounded-full
                font-bold
                bg-gradient-to-r
                from-[#F5E6B3]
                via-[#D4AF37]
                to-[#B8860B]
                text-black
              "
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}