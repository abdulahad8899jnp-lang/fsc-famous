// import { motion } from "framer-motion";

// export default function StatsSection() {
//   return (
//     <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 pt-12">
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {[
//           {
//             value: "500+",
//             label: "Premium Designs",
//           },
//           {
//             value: "1K+",
//             label: "Happy Customers",
//           },
//           {
//             value: "4.9★",
//             label: "Customer Rating",
//           },
//           {
//             value: "10+",
//             label: "Years Experience",
//           },
//         ].map((item, index) => (
//           <motion.div
//             key={index}
//             whileHover={{
//               y: -8,
//               scale: 1.02,
//             }}
//             transition={{ duration: 0.3 }}
//             className="
//               group
//               relative
//               overflow-hidden
//               rounded-3xl
//               border border-[#D4AF37]/15
//               bg-[#111111]/80
//               backdrop-blur-xl
//               p-8
//               text-center
//               duration-300
//               hover:border-[#D4AF37]/40
//               hover:shadow-[0_0_40px_rgba(212,175,55,0.12)]
//             "
//           >
//             {/* Glow Effect */}

//             <div
//               className="
//                 absolute
//                 inset-0
//                 opacity-0
//                 group-hover:opacity-100
//                 duration-500
//                 bg-gradient-to-br
//                 from-[#D4AF37]/10
//                 via-transparent
//                 to-[#B8860B]/10
//               "
//             />

//             <div className="relative z-10">
//               <h2
//                 className="
//                   text-4xl
//                   font-black
//                   text-[#D4AF37]
//                 "
//               >
//                 {item.value}
//               </h2>

//               <div
//                 className="
//                   mx-auto
//                   mt-3
//                   h-[1px]
//                   w-12
//                   bg-gradient-to-r
//                   from-transparent
//                   via-[#D4AF37]
//                   to-transparent
//                 "
//               />

//               <p
//                 className="
//                   mt-4
//                   text-sm
//                   tracking-wide
//                   text-zinc-400
//                 "
//               >
//                 {item.label}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    {
      value: "5000+",
      label: "Happy Customers",
    },
    {
      value: "25+",
      label: "Years Experience",
    },
    {
      value: "1000+",
      label: "Wedding Collections",
    },
    {
      value: "98%",
      label: "Customer Satisfaction",
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 md:px-12 py-28 overflow-hidden">

      {/* Background Glow */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
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
        w-72
        h-72
        rounded-full
        bg-[#D4AF37]/10
        blur-[150px]
        "
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
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
        w-72
        h-72
        rounded-full
        bg-[#B8860B]/10
        blur-[150px]
        "
      />

      <div className="relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF37] tracking-[6px] uppercase text-sm mb-4">
            OUR ACHIEVEMENTS
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
            Trusted By Thousands
          </h2>

          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
            For years we have delivered premium wedding fashion,
            quality craftsmanship and customer satisfaction.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => (
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
              text-center
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

                <h2
                  className="
                  text-5xl
                  font-black
                  bg-gradient-to-r
                  from-[#F5E6B3]
                  via-[#D4AF37]
                  to-[#B8860B]
                  bg-clip-text
                  text-transparent
                  "
                >
                  {item.value}
                </h2>

                <div
                  className="
                  mx-auto
                  mt-4
                  h-[2px]
                  w-14
                  bg-gradient-to-r
                  from-transparent
                  via-[#D4AF37]
                  to-transparent
                  "
                />

                <p
                  className="
                  mt-5
                  text-sm
                  tracking-wide
                  text-zinc-400
                  "
                >
                  {item.label}
                </p>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}