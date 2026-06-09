
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// const links = [
//   { name: "Home", path: "/" },
//   { name: "About", path: "/about" },
//   { name: "Contact", path: "/contact" },
// ];

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white border-t border-white/10">

//       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 py-14 px-6">
        
//         {/* 🔥 Brand */}
//         <div>
//           <h1 className="text-2xl font-bold tracking-wide 
//           bg-gradient-to-r from-yellow-400 to-yellow-200 
//           bg-clip-text text-transparent">
//             Famous Sherwani Collection
//           </h1>

//           <p className="text-gray-400 mt-4 text-sm leading-relaxed">
//             Discover premium sherwani crafted with elegance,
//             tradition, and modern luxury style.
//           </p>

// <Link
//   to="/admin"
//   className="
//     text-xs
//     text-zinc-500
//     hover:text-yellow-400
//     transition-colors
//     duration-300
//   "
// >
//   Admin
// </Link>
//         </div>

//         {/* 🔥 Links */}
//         <div>
//           <h2 className="text-lg font-semibold mb-4 text-white">
//             Quick Links
//           </h2>

//           <ul className="space-y-2">
//             {links.map((item, index) => (
//               <li key={index}>
//                 <Link
//                   to={item.path}
//                   className="text-gray-400 hover:text-yellow-400 
//                   transition duration-300 hover:pl-1"
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* 🔥 Contact */}
//         <div>
//           <h2 className="text-lg font-semibold mb-4 text-white">
//             Contact
//           </h2>

//           <p className="text-gray-400 text-sm">Mahboob Alam</p>
//           <p className="text-gray-400 text-sm">
//             Atala Masjid, Shop No. 2, Jaunpur
//           </p>

//           <p className="text-gray-400 text-sm mt-2 
//           hover:text-yellow-400 transition">
//             📞 8299559581
//           </p>
//         </div>
//       </div>

//       {/* 🔥 Bottom */}
//       <div className="border-t border-white/10 py-4 text-center text-gray-500 text-sm">
//         © 2026 Famous Sherwani Collection. All rights reserved.
//       </div>
//     </footer>
//   );
// }

import { Link } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-black via-[#080808] to-black text-white border-t border-yellow-500/10">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 py-16 px-6 relative z-10">

        {/* Brand */}
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            Famous Sherwani Collection
          </h1>

          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            Premium Sherwani, Coat Pant, Blazer, Indo-Western &
            Wedding Fashion Collection with modern luxury style.
          </p>

          <Link
            to="/admin"
            className="inline-block mt-5 text-xs text-zinc-500 hover:text-yellow-400 transition"
          >
            Admin Panel
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-5 text-yellow-400">
            Quick Links
          </h2>

          <ul className="space-y-3">
            {links.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-gray-400 hover:text-yellow-400 transition duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold mb-5 text-yellow-400">
            Our Services
          </h2>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Premium Sherwani</li>
            <li>Coat Pant</li>
            <li>Blazer Collection</li>
            <li>Indo-Western</li>
            <li>Kurta Pajama</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-5 text-yellow-400">
            Contact Us
          </h2>

          <div className="space-y-3 text-gray-400 text-sm">
            <p>Mahboob Alam</p>

            <p>
              📍 Atala Masjid,
              <br />
              Shop No. 2,
              <br />
              Jaunpur, Uttar Pradesh
            </p>

            <a
              href="tel:8299559581"
              className="block hover:text-yellow-400 transition"
            >
              📞 8299559581
            </a>

            <a
              href="https://wa.me/918299559581"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-yellow-500/10 py-5 relative z-10">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm text-center">
            © 2026 Famous Sherwani Collection. All Rights Reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="w-10 h-10 rounded-full border fixed bottom-6 right-6 z-40  border-yellow-500/30 hover:bg-yellow-400 hover:text-black transition"
          >
            ↑
          </button>

        </div>

      </div>

    </footer>
  );
}