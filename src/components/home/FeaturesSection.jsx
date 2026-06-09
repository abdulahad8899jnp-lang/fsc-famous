// import { motion } from "framer-motion";

// import {
//   ShoppingBag,
//   Truck,
//   ShieldCheck,
// } from "lucide-react";

// export default function FeaturesSection() {

//   return (
//     <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">

//       <div className="grid md:grid-cols-3 gap-6">

//         {[
//           {
//             icon: <ShoppingBag />,
//             title: "Huge Collection",
//             desc: "All premium categories in one place",
//           },

//           {
//             icon: <Truck />,
//             title: "Fast Service",
//             desc: "Quick response and smooth shopping",
//           },

//           {
//             icon: <ShieldCheck />,
//             title: "Trusted Quality",
//             desc: "Premium fabric and elegant finishing",
//           },
//         ].map((item, index) => (

//           <motion.div
//             whileHover={{ y: -8 }}
//             key={index}
//             className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
//           >

//             <div className="bg-yellow-400 text-black h-14 w-14 rounded-2xl flex items-center justify-center">

//               {item.icon}

//             </div>

//             <h3 className="text-2xl font-bold mt-6">
//               {item.title}
//             </h3>

//             <p className="text-zinc-400 mt-3 leading-7">
//               {item.desc}
//             </p>

//           </motion.div>

//         ))}

//       </div>

//     </section>
//   );
// }






// import { motion } from "framer-motion";

// import {
//   ShoppingBag,
//   Truck,
//   ShieldCheck,
// } from "lucide-react";

// export default function FeaturesSection() {
//   const features = [
//     {
//       icon: <ShoppingBag size={26} />,
//       title: "Huge Collection",
//       desc: "Explore premium Sherwani, Indo-Western, Blazer and Coat Pant collections.",
//     },

//     {
//       icon: <Truck size={26} />,
//       title: "Fast Service",
//       desc: "Quick support and smooth shopping experience for every customer.",
//     },

//     {
//       icon: <ShieldCheck size={26} />,
//       title: "Trusted Quality",
//       desc: "Crafted with premium fabrics and elegant finishing for every occasion.",
//     },
//   ];

//   return (
//     <section className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 overflow-hidden">
      
//       {/* Background Glow */}

//       <div className="absolute inset-0 pointer-events-none">
//         <div
//           className="
//           absolute
//           left-0
//           top-10
//           w-72
//           h-72
//           rounded-full
//           bg-[#D4AF37]/10
//           blur-[140px]
//         "
//         />

//         <div
//           className="
//           absolute
//           right-0
//           bottom-10
//           w-72
//           h-72
//           rounded-full
//           bg-[#B8860B]/10
//           blur-[140px]
//         "
//         />
//       </div>

//       <div className="relative z-10">
        
//         {/* Heading */}

//         <div className="text-center mb-16">
//           <p
//             className="
//             uppercase
//             tracking-[6px]
//             text-[#D4AF37]
//             text-sm
//             mb-4
//           "
//           >
//             WHY CHOOSE US
//           </p>

//           <h2
//             className="
//             text-4xl
//             md:text-5xl
//             font-black
//             text-white
//           "
//           >
//             Premium Experience
//           </h2>

//           <div
//             className="
//             mx-auto
//             mt-6
//             h-[2px]
//             w-24
//             bg-gradient-to-r
//             from-transparent
//             via-[#D4AF37]
//             to-transparent
//           "
//           />
//         </div>

//         {/* Cards */}

//         <div className="grid md:grid-cols-3 gap-8">
//           {features.map((item, index) => (
//             <motion.div
//               key={index}
//               whileHover={{
//                 y: -8,
//                 scale: 1.02,
//               }}
//               transition={{ duration: 0.3 }}
//               className="
//                 group
//                 relative
//                 overflow-hidden
//                 rounded-[32px]
//                 border border-[#D4AF37]/15
//                 bg-[#111111]/80
//                 backdrop-blur-xl
//                 p-8
//                 duration-300
//                 hover:border-[#D4AF37]/40
//                 hover:shadow-[0_0_40px_rgba(212,175,55,0.12)]
//               "
//             >
//               {/* Hover Glow */}

//               <div
//                 className="
//                 absolute inset-0
//                 opacity-0
//                 group-hover:opacity-100
//                 duration-500
//                 bg-gradient-to-br
//                 from-[#D4AF37]/10
//                 via-transparent
//                 to-[#B8860B]/10
//               "
//               />

//               <div className="relative z-10">
                
//                 {/* Icon */}

//                 <div
//                   className="
//                   h-16
//                   w-16
//                   rounded-2xl
//                   bg-gradient-to-br
//                   from-[#F5E6B3]
//                   via-[#D4AF37]
//                   to-[#B8860B]
//                   text-black
//                   flex
//                   items-center
//                   justify-center
//                   shadow-[0_0_30px_rgba(212,175,55,0.25)]
//                 "
//                 >
//                   {item.icon}
//                 </div>

//                 {/* Title */}

//                 <h3
//                   className="
//                   text-2xl
//                   font-bold
//                   text-white
//                   mt-6
//                   tracking-wide
//                 "
//                 >
//                   {item.title}
//                 </h3>

//                 {/* Description */}

//                 <p
//                   className="
//                   text-zinc-400
//                   mt-4
//                   leading-7
//                 "
//                 >
//                   {item.desc}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }






import { motion } from "framer-motion";
import {
  ShoppingBag,
  Truck,
  ShieldCheck,
  Crown,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <ShoppingBag size={28} />,
      title: "Huge Collection",
      desc: "Explore premium Sherwani, Indo-Western, Blazer and Coat Pant collections.",
    },

    {
      icon: <Truck size={28} />,
      title: "Fast Service",
      desc: "Quick support and smooth shopping experience for every customer.",
    },

    {
      icon: <ShieldCheck size={28} />,
      title: "Trusted Quality",
      desc: "Crafted with premium fabrics and elegant finishing for every occasion.",
    },

    {
      icon: <Crown size={28} />,
      title: "Royal Experience",
      desc: "Luxury wedding fashion with premium styling and perfect fitting.",
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 md:px-12 py-28 overflow-hidden">

      {/* Animated Glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        left-0
        top-10
        w-80
        h-80
        rounded-full
        bg-[#D4AF37]/10
        blur-[160px]
        "
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        right-0
        bottom-10
        w-80
        h-80
        rounded-full
        bg-[#B8860B]/10
        blur-[160px]
        "
      />

      <div className="relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
          }}
          className="text-center mb-20"
        >
          <p
            className="
            uppercase
            tracking-[8px]
            text-[#D4AF37]
            text-sm
            mb-4
            "
          >
            WHY CHOOSE US
          </p>

          <h2
            className="
            text-4xl
            md:text-6xl
            font-black
            bg-gradient-to-r
            from-[#F5E6B3]
            via-[#D4AF37]
            to-[#B8860B]
            bg-clip-text
            text-transparent
            "
          >
            Premium Experience
          </h2>

          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
            Discover luxury wedding fashion crafted with premium fabrics,
            modern styling and timeless elegance.
          </p>

          <div
            className="
            mx-auto
            mt-6
            h-[2px]
            w-24
            bg-gradient-to-r
            from-transparent
            via-[#D4AF37]
            to-transparent
            "
          />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-[#D4AF37]/15
              bg-[#111111]/80
              backdrop-blur-xl
              p-8
              hover:border-[#D4AF37]/40
              hover:shadow-[0_0_50px_rgba(212,175,55,0.18)]
              "
            >
              {/* Hover Glow */}
              <div
                className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                duration-500
                bg-gradient-to-br
                from-[#D4AF37]/10
                via-transparent
                to-[#B8860B]/10
                "
              />

              <div className="relative z-10">

                {/* Icon */}
                <div
                  className="
                  h-16
                  w-16
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#F5E6B3]
                  via-[#D4AF37]
                  to-[#B8860B]
                  text-black
                  flex
                  items-center
                  justify-center
                  shadow-[0_0_30px_rgba(212,175,55,0.25)]
                  "
                >
                  {item.icon}
                </div>

                <h3
                  className="
                  text-2xl
                  font-bold
                  text-white
                  mt-6
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                  text-zinc-400
                  mt-4
                  leading-7
                  "
                >
                  {item.desc}
                </p>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}