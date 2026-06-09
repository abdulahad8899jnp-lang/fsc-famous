
import { useState } from "react";
import { motion } from "framer-motion";


export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,

    ...(name === "name" && {
      message: `Hello, my name is ${value}. I want to know more about your sherwani collection.`,
    }),
  }));
  };

  // EMAIL SEND FUNCTION
  const handleSubmit = (e) => {
  e.preventDefault();

  const message = `
*New Contact Form Message*

👤 Name: ${formData.name}
📧 Email: ${formData.email}

📝 Message:
${formData.message}
  `;

  const whatsappUrl =
    `https://wa.me/918299559581?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");

  setFormData({
    name: "",
    email: "",
    message: "",
  });
};

  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-24 px-6 overflow-hidden">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >

       <motion.h2
  className="
  text-5xl
  md:text-7xl
  font-black
  tracking-wide
  bg-gradient-to-r
  from-[#F5E6B3]
  via-[#D4AF37]
  to-[#B8860B]
  bg-clip-text
  text-transparent
  "
>
  Contact Us
</motion.h2>

        <p className="text-gray-400 mt-4">
          Premium Sherwani & Wedding Collection
        </p>

      </motion.div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Left Side */}
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-[#111] border border-yellow-500/20 p-8 shadow-2xl"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >

          {/* Glow */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-500/10 blur-3xl rounded-full"></div>

          <h3 className="text-3xl font-bold text-yellow-400 mb-8">
            Store Information
          </h3>

          <div className="space-y-6">

            {/* Shop Name */}
            <div className="bg-black/40 border border-gray-800 rounded-2xl p-5">
              <p className="text-gray-500 text-sm">
                Shop Name
              </p>

              <h4 className="text-white text-lg font-semibold mt-1">
                Famous Sherwani Collection
              </h4>
            </div>

            {/* Location */}
            <div className="bg-black/40 border border-gray-800 rounded-2xl p-5">
              <p className="text-gray-500 text-sm">
                Location
              </p>

              <h4 className="text-white text-lg font-semibold mt-1">
                Atala Masjid, Shop No. 2, Jaunpur
              </h4>
            </div>

            {/* Phone */}
            <div className="bg-black/40 border border-gray-800 rounded-2xl p-5">
              <p className="text-gray-500 text-sm">
                Contact Number
              </p>

              <h4 className="text-white text-lg font-semibold mt-1">
                8299559581
              </h4>
            </div>

            {/* Timing */}
            <div className="bg-black/40 border border-gray-800 rounded-2xl p-5">
              <p className="text-gray-500 text-sm">
                Opening Hours
              </p>

              <h4 className="text-white text-lg font-semibold mt-1">
                10:00 AM – 9:00 PM
              </h4>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="tel:8299559581"
              className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/918299559581"
              target="_blank"
              rel="noreferrer"
              className="border border-green-500 text-green-400 px-6 py-3 rounded-xl hover:bg-green-500 hover:text-black transition"
            >
              WhatsApp
            </a>

          </div>

        </motion.div>

        {/* Right Side Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="relative overflow-hidden rounded-3xl bg-[#111] border border-yellow-500/20 p-8 shadow-2xl"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >

          {/* Glow */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-500/10 blur-3xl rounded-full"></div>

          <h3 className="text-3xl font-bold text-yellow-400 mb-8">
            Send Message
          </h3>

          {/* Name */}
          <div className="mb-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-black/40 border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-400 transition"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-black/40 border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-400 transition"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <textarea
              name="message"
              rows="6"
              placeholder="Write Your Message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-black/40 border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-400 transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-4 rounded-xl font-bold hover:scale-[1.02] transition"
          >
            Send Message
          </button>

        </motion.form>

      </div>

<motion.div
  className="max-w-6xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ staggerChildren: 0.15 }}
>

  {[
    { number: "5000+", title: "Happy Customers" },
    { number: "25+", title: "Years Experience" },
    { number: "1000+", title: "Wedding Collections" },
    { number: "98%", title: "Satisfaction Rate" },
  ].map((item, index) => (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="
      relative
      bg-[#111]
      border
      border-yellow-500/20
      rounded-3xl
      p-8
      text-center
      shadow-[0_0_20px_rgba(234,179,8,0.05)]
      hover:shadow-[0_0_40px_rgba(234,179,8,0.15)]
      transition-all
      duration-300
      overflow-hidden
      "
    >

      {/* Glow Effect */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-yellow-400/10 blur-[80px]" />

      {/* Number */}
      <motion.h3
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="text-4xl font-bold text-yellow-400"
      >
        {item.number}
      </motion.h3>

      {/* Title */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-400 mt-2"
      >
        {item.title}
      </motion.p>

    </motion.div>
  ))}
</motion.div>
<motion.div
  className="max-w-6xl mx-auto mt-20"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>

  {/* Heading */}
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="text-4xl font-bold text-center mb-10"
  >
    Visit Our Store
  </motion.h2>

  {/* Map Container */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, delay: 0.3 }}
    whileHover={{ scale: 1.01 }}
    className="
      overflow-hidden
      rounded-3xl
      border
      border-yellow-500/20
      shadow-2xl
      relative
    "
  >

    {/* Glow effect */}
    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-yellow-400/10 blur-[120px]" />

    <iframe
      title="shop-location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d854.8455179001285!2d82.69057404203056!3d25.752652422518807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39903bd2b86da695%3A0x4c2f28445db2c886!2sFamous%20Sharwani%20collection!5e0!3m2!1sen!2sin!4v1780917643512!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
    />

  </motion.div>
</motion.div>
<motion.div
  className="
  max-w-5xl
  mx-auto
  mt-20
  bg-gradient-to-r
  from-yellow-500/10
  to-yellow-400/5
  border
  border-yellow-500/20
  rounded-3xl
  p-10
  text-center
  relative
  overflow-hidden
  "
  initial={{ opacity: 0, scale: 0.9, y: 50 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  whileHover={{ scale: 1.02 }}
>

  {/* Glow Effect */}
  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-yellow-400/10 blur-[120px]" />

  {/* Heading */}
  <motion.h3
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="text-3xl font-bold text-white"
  >
    Ready For Your Perfect Wedding Look?
  </motion.h3>

  {/* Text */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="text-gray-400 mt-4"
  >
    Visit our store and explore premium sherwani,
    coat pant and wedding collections.
  </motion.p>

  {/* Button */}
  <motion.a
    href="tel:8299559581"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ delay: 0.4 }}
    className="
    inline-block
    mt-6
    bg-yellow-400
    text-black
    px-8
    py-4
    rounded-xl
    font-bold
    shadow-lg
    hover:shadow-yellow-400/40
    transition
    "
  >
    Call Now
  </motion.a>

</motion.div>
{/* Bottom Text */}
<motion.div
  className="max-w-3xl mx-auto text-center mt-20 text-gray-400 leading-8"
  initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <p>
    We provide premium quality sherwani with
    modern royal designs and traditional elegance.
    Our mission is to make every customer look
    stylish and confident on their special occasions.
  </p>
</motion.div>
    </section>
  );
}