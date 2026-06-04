import { motion } from "framer-motion";

export default function StatsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 pt-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          {
            value: "500+",
            label: "Premium Designs",
          },
          {
            value: "1K+",
            label: "Happy Customers",
          },
          {
            value: "4.9★",
            label: "Customer Rating",
          },
          {
            value: "10+",
            label: "Years Experience",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            transition={{ duration: 0.3 }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border border-[#D4AF37]/15
              bg-[#111111]/80
              backdrop-blur-xl
              p-8
              text-center
              duration-300
              hover:border-[#D4AF37]/40
              hover:shadow-[0_0_40px_rgba(212,175,55,0.12)]
            "
          >
            {/* Glow Effect */}

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
                  text-4xl
                  font-black
                  text-[#D4AF37]
                "
              >
                {item.value}
              </h2>

              <div
                className="
                  mx-auto
                  mt-3
                  h-[1px]
                  w-12
                  bg-gradient-to-r
                  from-transparent
                  via-[#D4AF37]
                  to-transparent
                "
              />

              <p
                className="
                  mt-4
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
    </section>
  );
}