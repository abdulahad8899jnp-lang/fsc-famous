// // src/components/TeamPopup.jsx

// import { motion, AnimatePresence } from "framer-motion";

// export default function TeamPopup({
//   selectedMember,
//   setSelectedMember,
// }) {
//   return (
//     <AnimatePresence>
//       {selectedMember && (
//         <motion.div
//           className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >

//           <motion.div
//             className="bg-[#111] rounded-2xl p-6 w-full max-w-md relative border border-gray-700"
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.8, opacity: 0 }}
//           >

//             {/* Close */}
//             <button
//               onClick={() => setSelectedMember(null)}
//               className="absolute top-3 right-4 text-2xl text-white"
//             >
//               ×
//             </button>

//             {/* Image */}
//             <img
//               src={selectedMember.image}
//               alt={selectedMember.name}
//               className="w-28 h-28 rounded-full object-cover mx-auto border-2 border-yellow-400"
//             />

//             {/* Name */}
//             <h2 className="text-2xl text-center mt-4 font-semibold text-yellow-400">
//               {selectedMember.name}
//             </h2>

//             {/* Role */}
//             <p className="text-center text-gray-400 mt-1">
//               {selectedMember.role}
//             </p>

//             {/* About */}
//             <p className="text-gray-300 text-center mt-4 leading-relaxed">
//               {selectedMember.about}
//             </p>

//             {/* Extra Details */}
//             <div className="mt-5 space-y-2 text-sm text-gray-300">

//               <p>
//                 <span className="text-white font-semibold">
//                   Age:
//                 </span>{" "}
//                 {selectedMember.age}
//               </p>

//               <p>
//                 <span className="text-white font-semibold">
//                   Experience:
//                 </span>{" "}
//                 {selectedMember.experience}
//               </p>

//               <p>
//                 <span className="text-white font-semibold">
//                   Address:
//                 </span>{" "}
//                 {selectedMember.address}
//               </p>

//               <p>
//                 <span className="text-white font-semibold">
//                   Speciality:
//                 </span>{" "}
//                 {selectedMember.speciality}
//               </p>

//             </div>

//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }








// src/components/TeamPopup.jsx

import { motion, AnimatePresence } from "framer-motion";

export default function TeamPopup({
  selectedMember,
  setSelectedMember,
}) {
  return (
    <AnimatePresence>
      {selectedMember && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-md rounded-3xl overflow-hidden border border-yellow-500/20 bg-gradient-to-b from-[#141414] to-black shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >

            {/* GOLD GLOW */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-500/10 blur-3xl rounded-full"></div>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-5 text-white text-3xl hover:text-yellow-400 transition"
            >
              ×
            </button>

            {/* CONTENT WRAPPER */}
            <div className="p-6">

              {/* IMAGE */}
              <div className="flex justify-center">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-yellow-400 shadow-lg"
                />
              </div>

              {/* NAME */}
              <h2 className="text-2xl md:text-3xl text-center mt-5 font-bold text-white">
                {selectedMember.name}
              </h2>

              {/* ROLE */}
              <p className="text-center text-yellow-400 mt-1 tracking-wide uppercase text-xs">
                {selectedMember.role}
              </p>

              {/* ABOUT */}
              <p className="text-gray-300 text-center mt-5 leading-7 text-sm">
                {selectedMember.about}
              </p>

              {/* DETAILS BOX */}
              <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3">

                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Age</span>
                  <span className="text-white font-medium">{selectedMember.age}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Experience</span>
                  <span className="text-white font-medium">{selectedMember.experience}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Address</span>
                  <span className="text-white font-medium text-right">
                    {selectedMember.address}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Speciality</span>
                  <span className="text-white font-medium text-right">
                    {selectedMember.speciality}
                  </span>
                </div>

              </div>

              {/* BOTTOM BUTTON */}
              <button
                onClick={() => setSelectedMember(null)}
                className="mt-6 w-full py-3 rounded-2xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition"
              >
                Close
              </button>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}