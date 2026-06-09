
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Award,
  Crown,
  Star,
} from "lucide-react";
import teamMembers from "../data/teamData";
import TeamCard from "../components/TeamCard";
import TeamPopup from "../components/TeamPopup";

export default function About() {

  const [selectedMember, setSelectedMember] =
    useState(null);
    const fadeUp = {
  initial: {
    opacity: 0,
    y: 80,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.2,
  },
  transition: {
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  },
};

  return (
   <div className="relative overflow-hidden bg-gradient-to-b from-black via-[#090909] to-black text-white min-h-screen pt-24 px-6">

  <div className="absolute inset-0 pointer-events-none">

    <div className="absolute top-20 left-20 w-80 h-80 bg-yellow-500/10 blur-[180px] rounded-full animate-pulse" />

    <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-500/10 blur-[180px] rounded-full animate-pulse" />

  </div>

      {/* Heading */}
  <motion.h1
  {...fadeUp}
  className="
  text-5xl
  md:text-7xl
  font-black
  text-center
  mb-14
  tracking-wide
  bg-gradient-to-r
  from-[#F5E6B3]
  via-[#D4AF37]
  to-[#B8860B]
  bg-clip-text
  text-transparent
  "
>
  About Us
</motion.h1>

      {/* Owner + Shop Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Owner */}
        

<motion.div
className="
group
relative
overflow-hidden
rounded-[32px]
bg-gradient-to-br
from-yellow-500/10
via-black
to-gray-950
border
border-yellow-500/20
backdrop-blur-xl
shadow-[0_0_60px_rgba(212,175,55,0.08)]
p-8
"whileHover={{
  scale: 1.03,
  y: -10,
}}

transition={{
  duration: 0.6,
}}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  whileHover={{ scale: 1.02 }}
>

  {/* Glow */}
  <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500/20 blur-3xl rounded-full"></div>

  {/* Image */}
  <div className="flex justify-center">
    <img
  src="/ownerimg.jpeg"
  alt="Owner"
  className="
  w-40
  h-40
  rounded-full
  object-cover
  border-4
  border-yellow-400
  shadow-[0_0_40px_rgba(212,175,55,0.5)]
  transition-all
  duration-1000
  group-hover:scale-110
  "
/>
  </div>

  {/* Name */}
  <div className="text-center mt-6">
    <h2 className="text-3xl font-bold text-white">
      Mahboob Alam
    </h2>

    <p className="text-yellow-400 mt-2 text-lg">
      Founder & Owner
    </p>
  </div>

  {/* Description */}
  <p className="text-gray-300 text-center mt-5 leading-7 text-sm md:text-base">
    25+ years of experience in premium sherwani,
    coat pant and wedding fashion collection.
  </p>

  {/* Stats */}
  <div className="grid grid-cols-2 gap-4 mt-8">

    <div className="bg-black/40 border border-gray-800 rounded-2xl p-4 text-center">
      <h3 className="text-yellow-400 text-2xl font-bold">
        25+
      </h3>

      <p className="text-gray-400 text-sm mt-1">
        Years Experience
      </p>
    </div>

    <div className="bg-black/40 border border-gray-800 rounded-2xl p-4 text-center">
      <h3 className="text-yellow-400 text-2xl font-bold">
        500+
      </h3>

      <p className="text-gray-400 text-sm mt-1">
        Happy Customers
      </p>
    </div>

  </div>

  {/* Skills */}
  <div className="flex flex-wrap justify-center gap-3 mt-8">

    <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm">
      Sherwani
    </span>

    <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm">
      Kurta-Pajama
    </span>

    <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm">
      Blazer
    </span>

  </div>

  {/* Button */}
  <div className="flex justify-center mt-8">

    <button
      onClick={() =>
        setSelectedMember({
          name: "Mahboob Alam",
          role: "Founder & Owner",
          image: "/ownerimg.jpeg",

          about:
            "Expert in Premium Sherwani & Wedding Fashion Collection.",

          age: "45 Years",
          experience: "25+ Years Experience",
          address: "Jaunpur, Uttar Pradesh",
          speciality: "Wedding Collection Specialist",
        })
      }
      className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition duration-300"
    >
      View Details
    </button>

  </div>

</motion.div>
        

        {/* Shop Details */}
        {/* Premium Shop Details Card */}

<motion.div
 className="
group
relative
overflow-hidden
rounded-[32px]
bg-gradient-to-br
from-gray-900
via-black
to-gray-950
border
border-yellow-500/20
shadow-[0_0_60px_rgba(212,175,55,0.08)]
p-8
"whileHover={{
  scale: 1.03,
  y: -10,
}}

transition={{
  duration: 0.6,
}}
   initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  whileHover={{ scale: 1.02 }}
>

  {/* Glow Effect */}
  <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-500/10 blur-3xl rounded-full"></div>

  {/* Heading */}
  <div className="mb-8 text-center">

    <h2 className="text-3xl font-bold text-yellow-400 tracking-wide">
      Shop Details
    </h2>

    <p className="text-gray-400 mt-2 text-sm">
      Premium Wedding & Fashion Collection
    </p>

  </div>

  {/* Details */}
  <div className="space-y-5">

    {/* Shop Name */}
    <div className="bg-black/40 border border-gray-800 rounded-2xl p-4">

      <p className="text-sm text-gray-400">
        Shop Name
      </p>

      <h3 className="text-white text-lg font-semibold mt-1">
        Famous Sherwani Collection
      </h3>

    </div>

    {/* Location */}
    <div className="bg-black/40 border border-gray-800 rounded-2xl p-4">

      <p className="text-sm text-gray-400">
        Location
      </p>

      <h3 className="text-white text-lg font-semibold mt-1">
        Atala Masjid, Shop No. 2, Jaunpur
      </h3>

    </div>

    {/* Contact */}
    <div className="bg-black/40 border border-gray-800 rounded-2xl p-4">

      <p className="text-sm text-gray-400">
        Contact
      </p>

      <h3 className="text-white text-lg font-semibold mt-1">
        8299559581
      </h3>

    </div>

    {/* Services */}
    <div className="bg-black/40 border border-gray-800 rounded-2xl p-4">

      <p className="text-sm text-gray-400 mb-3">
        Services
      </p>

      <div className="flex flex-wrap gap-3">

        <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm">
          Sherwani
        </span>

        <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm">
          Coat Pant
        </span>

        <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm">
          Blazer
        </span>

        <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm">
          Indo-Western
        </span>

      </div>

    </div>

  </div>

</motion.div>

      </div>
      <motion.section
  className="max-w-6xl mx-auto mt-24"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>
  <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
    Our Journey
  </h2>

  <div className="grid md:grid-cols-4 gap-6">

    {[
      { year: "2000", title: "Shop Started" },
      { year: "2008", title: "Wedding Collection" },
      { year: "2015", title: "Premium Sherwani" },
      { year: "2026", title: "Online Expansion" },
    ].map((item) => (
      <div
        key={item.year}
        className="bg-gray-900 border border-gray-800 rounded-3xl p-6 text-center"
      >
        <h3 className="text-3xl font-bold text-yellow-400">
          {item.year}
        </h3>

        <p className="text-gray-300 mt-3">
          {item.title}
        </p>
      </div>
    ))}
  </div>
</motion.section>
      {/* ========================= */}
{/* UPCOMING OWNER (SON) */}
{/* ========================= */}

<motion.div
  className="mt-20 max-w-3xl mx-auto text-center relative"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
  duration: 1.4,
}}
>

  {/* glow */}
  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-60 h-60 bg-yellow-500/10 blur-3xl rounded-full"></div>

  {/* TITLE */}
  <h2 className="text-4xl md:text-5xl font-bold text-white">
    Upcoming Owner
  </h2>

  <p className="text-yellow-400 mt-2 tracking-widest uppercase text-sm">
    Family Successor
  </p>

  <p className="text-gray-400 mt-5 leading-7">
    The only son of the founder who will continue the legacy of premium sherwani,
    indo-western and wedding fashion brand in future.
  </p>

  {/* INFO BOX */}
  <div className="mt-10 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-6 shadow-2xl">

    <h3 className="text-white text-xl font-bold">
      Son of Owner
    </h3>

    <p className="text-gray-400 mt-2 text-sm">
      Future Business Owner
    </p>
<button
  onClick={() =>
    setSelectedMember({
      name: "Yusuf Mahboob",
      role: "Future Successor",
      image: "/upcomingowner.JPG",
      about:
        "He is the only son of the founder and future successor of the brand. He will continue the legacy of premium sherwani and wedding fashion collection.",
      age: "14",
      experience: "Future Leader",
      address: "Jaunpur, Uttar Pradesh",
      speciality: "Luxury Fashion & Brand Expansion",
    })
  }
 className="
mt-10
px-8
py-4
rounded-2xl
bg-yellow-400
text-black
font-bold
shadow-[0_0_25px_rgba(212,175,55,0.4)]
hover:scale-105
hover:bg-yellow-300
transition-all
duration-500
"
>
  View Details
</button>
  </div>

  {/* VIEW BUTTON */}
 

</motion.div>

<motion.section
  className="max-w-6xl mx-auto mt-24"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>
  <div className="text-center mb-12">

    <p className="text-yellow-400 tracking-[4px] uppercase text-sm mb-3">
      Why Choose Us
    </p>

    <h2 className="text-4xl md:text-5xl font-bold text-white">
      Trusted By Thousands
    </h2>

    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
      For more than 25 years we have been providing premium
      sherwani, coat pant and wedding fashion collections.
    </p>

  </div>

  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

    {[
      {
        icon: <Users size={34} />,
        number: "5000+",
        title: "Happy Customers",
      },
      {
        icon: <Award size={34} />,
        number: "25+",
        title: "Years Experience",
      },
      {
        icon: <Crown size={34} />,
        number: "1000+",
        title: "Wedding Collections",
      },
      {
        icon: <Star size={34} />,
        number: "98%",
        title: "Satisfaction Rate",
      },
    ].map((item) => (
     <motion.div
  key={item.title}
  initial={{ opacity: 0, y: 40, scale: 0.9 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.5,
    ease: "easeOut",
  }}
  whileHover={{
    y: -12,
    scale: 1.05,
  }}
  className="
    bg-gradient-to-br
    from-gray-900
    via-black
    to-gray-950
    border
    border-yellow-500/20
    rounded-3xl
    p-8
    text-center
    shadow-[0_0_25px_rgba(234,179,8,0.08)]
    hover:shadow-[0_0_50px_rgba(234,179,8,0.18)]
    transition-all
    duration-300
  "
>

        <div className="flex justify-center text-yellow-400 mb-4">
          {item.icon}
        </div>

        <h3
          className="
          text-4xl
          font-bold
          text-yellow-400
          drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]
          "
        >
          {item.number}
        </h3>

        <p className="text-gray-300 mt-3">
          {item.title}
        </p>

      </motion.div>
    ))}
  </div>
</motion.section>
      {/* Team Section */}
      {/* Premium Team Section */}

<motion.div
  className="relative overflow-hidden mt-20 max-w-7xl mx-auto"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
>

  {/* Background Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-500/10 blur-3xl rounded-full"></div>

  {/* Heading */}
  <div className="text-center mb-14 relative z-10">

    <p className="text-yellow-400 tracking-[6px] uppercase text-sm mb-3">
      Professional Team
    </p>

    <h2 className="text-4xl md:text-5xl font-bold text-white">
      Meet Our Experts
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
      Our experienced fashion team provides premium sherwani,
      indo-western and wedding collections with modern royal styling.
    </p>

  </div>

  {/* Team Cards */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">

    {teamMembers.map((member, index) => (

      <motion.div
         key={member.id}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{
    once: true,
    amount: 0.2,
  }}
  transition={{
    delay: index * 0.15,
    duration: 0.6,
  }}
  whileHover={{ y: -10 }}
       className="
group
relative
overflow-hidden
rounded-[30px]
bg-gradient-to-b
from-[#141414]
to-black
border
border-gray-800
hover:border-yellow-500/40
transition-all
duration-700
shadow-2xl
"initial={{
  opacity: 0,
  y: 100,
}}

whileInView={{
  opacity: 1,
  y: 0,
}}

transition={{
  delay: index * 0.15,
  duration: 1,
  ease: [0.22, 1, 0.36, 1],
}}

whileHover={{
  y: -12,
}}
      >

        {/* Top Glow */}
        <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition origin-left duration-500"></div>

        {/* Image */}
        <div className="relative overflow-hidden">

          <img
            src={member.image}
            alt={member.name}
           className="
w-full
h-[340px]
object-cover
transition-all
duration-[1500ms]
ease-out
group-hover:scale-110
"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

          {/* Role */}
          <div className="absolute bottom-5 left-5">
            <p className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
              {member.role}
            </p>
          </div>

        </div>

        {/* Content */}
        <div className="p-6">

          <h3 className="text-2xl font-bold text-white">
            {member.name}
          </h3>

          <p className="text-gray-400 mt-4 leading-7 text-sm">
            {member.about}
          </p>

          {/* Bottom */}
          <div className="flex items-center justify-between mt-8">

            <div>
              <p className="text-gray-500 text-sm">
                Experience
              </p>

              <h4 className="text-yellow-400 font-semibold">
                {member.experience}
              </h4>
            </div>

            <button
              onClick={() => setSelectedMember(member)}
             className="
border
border-yellow-400
text-yellow-400
px-5
py-2.5
rounded-xl
hover:bg-yellow-400
hover:text-black
hover:scale-105
transition-all
duration-500
"
            >
              View Details
            </button>

          </div>

        </div>

      </motion.div>

    ))}

  </div>

</motion.div>
<motion.section
  className="max-w-6xl mx-auto mt-24"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Heading */}
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl font-bold text-center text-yellow-400 mb-12"
  >
    Customer Reviews
  </motion.h2>

  {/* Grid */}
  <div className="grid md:grid-cols-3 gap-8">

    {[
      "Best Sherwani Collection in Jaunpur.",
      "Excellent fitting and quality.",
      "Very good customer service.",
    ].map((review, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: index * 0.15,
          ease: "easeOut",
        }}
        whileHover={{
          y: -10,
          scale: 1.03,
        }}
        className="
          bg-gray-900
          border
          border-gray-800
          rounded-3xl
          p-6
          shadow-[0_0_20px_rgba(0,0,0,0.3)]
          hover:shadow-[0_0_40px_rgba(234,179,8,0.12)]
          transition-all
          duration-300
        "
      >
        {/* Stars */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-yellow-400 text-xl"
        >
          ⭐⭐⭐⭐⭐
        </motion.div>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 mt-4"
        >
          {review}
        </motion.p>
      </motion.div>
    ))}

  </div>
</motion.section>
<motion.section
  className="max-w-6xl mx-auto mt-24"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
>

  {/* Heading */}
  <motion.h2
    initial={{ opacity: 0, y: -30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.7 }}
    className="text-4xl font-bold text-center text-white mb-12"
  >
    Visit Our Store
  </motion.h2>

  <div className="grid md:grid-cols-2 gap-10 items-center">

    {/* Info Card */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      whileHover={{ scale: 1.02 }}
      className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-lg"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-yellow-400 text-2xl font-bold"
      >
        Famous Sherwani Collection
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-gray-400 mt-4"
      >
        Atala Masjid, Shop No. 2, Jaunpur, Uttar Pradesh
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-white mt-4"
      >
        📞 8299559581
      </motion.p>
    </motion.div>

    {/* Map */}
    <motion.div
      initial={{ opacity: 0, x: 80, scale: 0.9 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.7 }}
      whileHover={{ scale: 1.02 }}
      className="rounded-3xl overflow-hidden border border-gray-800 shadow-xl"
    >
      <iframe
        title="shop-location"
        className="w-full h-[350px]"
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d854.8455179001285!2d82.69057404203056!3d25.752652422518807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39903bd2b86da695%3A0x4c2f28445db2c886!2sFamous%20Sharwani%20collection!5e0!3m2!1sen!2sin!4v1780917643512!5m2!1sen!2sin"
      />
    </motion.div>

  </div>

</motion.section>
      {/* Popup */}
      <TeamPopup
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
      />

      {/* Bottom Description */}
      <motion.div
  initial={{
    opacity: 0,
    y: 50,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{ once: true }}
  transition={{
    duration: 1.5,
  }}
  className="
  max-w-4xl
  mx-auto
  text-center
  mt-24
  text-gray-400
  leading-9
  text-lg
  "
>

        <p className="pb-5">
          We provide premium quality sherwani with
          modern design and traditional elegance.
          Our mission is to make every customer
          look royal on their special occasions.
        </p>

      </motion.div>

    </div>
  );
}









