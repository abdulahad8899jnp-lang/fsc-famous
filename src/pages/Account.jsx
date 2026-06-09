
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Account() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [image, setImage] = useState(null);

//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("user"));

//     if (!userData) {
//       navigate("/user-login");
//       return;
//     }

//     setUser(userData);
//     setImage(userData.image || null);
//   }, [navigate]);

//   // IMAGE UPLOAD
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();

//     reader.onloadend = () => {
//       const updatedUser = { ...user, image: reader.result };
//       localStorage.setItem("user", JSON.stringify(updatedUser));
//       setUser(updatedUser);
//       setImage(reader.result);
//     };

//     reader.readAsDataURL(file);
//   };

//   const handleLogout = () => {
//     if (!window.confirm("Are you sure you want to logout?")) return;
//     localStorage.removeItem("user");
//     navigate("/");
//     window.location.reload();
//   };

//   if (!user) {
//     return (
//       <div className="min-h-screen bg-black flex items-center justify-center text-white">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10">

//       <div className="w-full max-w-2xl relative mt-10">

//         {/* glow */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-[#B8860B]/10 blur-[120px]" />

//         <div className="relative bg-[#111] border border-[#D4AF37]/20 rounded-[40px] p-8 md:p-10">

//           {/* PROFILE */}
//           <div className="flex flex-col items-center text-center">

//             {/* IMAGE OR LETTER */}
//             <div className="relative">

//               <div className="w-24 h-24 rounded-full overflow-hidden border border-[#D4AF37]/30 shadow-[0_0_25px_rgba(212,175,55,0.25)]">

//                 {image ? (
//                   <img
//                     src={image}
//                     alt="profile"
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#F5E6B3] via-[#D4AF37] to-[#B8860B] text-black text-4xl font-black">
//                     {user.name?.charAt(0)?.toUpperCase()}
//                   </div>
//                 )}

//               </div>

//               {/* UPLOAD BUTTON */}
//               <label className="absolute bottom-0 right-0 bg-black border border-[#D4AF37]/30 text-xs px-2 py-1 rounded-full cursor-pointer hover:bg-[#D4AF37] hover:text-black transition">
//                 ✏️
//                 <input
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={handleImageChange}
//                 />
//               </label>

//             </div>

//             <h1 className="text-3xl font-bold mt-5">
//               {user.name}
//             </h1>

//             <p className="text-zinc-400 text-sm mt-1">
//               Premium Customer Account
//             </p>

//           </div>

//           {/* INFO */}
//           <div className="grid md:grid-cols-2 gap-4 mt-10">

//             {[
//               { label: "Phone", value: user.phone },
//               { label: "Address", value: user.address },
//               { label: "City", value: user.city },
//               { label: "State", value: user.state },
//               { label: "Age", value: user.age || "Not Provided" },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="bg-black/40 border border-[#D4AF37]/10 rounded-2xl p-4"
//               >
//                 <p className="text-xs text-zinc-500">{item.label}</p>
//                 <p className="text-white mt-1">{item.value}</p>
//               </div>
//             ))}

//           </div>

//           {/* BUTTONS */}
//           <div className="grid gap-4 mt-10">

//             <button
//               onClick={() => navigate("/")}
//               className="py-3 rounded-2xl bg-black/60 border border-white/10"
//             >
//               Home
//             </button>

//             <button
//               onClick={() => navigate("/profile-setup")}
//               className="py-3 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black font-bold"
//             >
//               Edit Profile
//             </button>

//             <button
//               onClick={() => navigate("/my-orders")}
//               className="py-3 rounded-2xl bg-black/60 border border-[#D4AF37]/20"
//             >
//               My Orders
//             </button>

//             <button
//               onClick={handleLogout}
//               className="py-3 rounded-2xl bg-red-500/90 text-white font-bold"
//             >
//               Logout
//             </button>

//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));

    if (!userData) {
      navigate("/user-login");
      return;
    }

    setUser(userData);
    
  }, [navigate]);

 
  

  // LOGOUT
  const handleLogout = () => {
    if (!window.confirm("Are you sure you want to logout?")) return;

    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-2xl relative mt-10">

        {/* glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-[#B8860B]/10 blur-[120px]" />

        <div className="relative bg-[#111] border border-[#D4AF37]/20 rounded-[40px] p-8 md:p-10">
<button
  onClick={() => navigate("/")}
  className="
    py-3
    px-4
    rounded-2xl
    bg-gradient-to-r
    from-[#F5E6B3]
    via-[#D4AF37]
    to-[#B8860B]
    text-black
    font-bold
    shadow-[0_0_25px_rgba(212,175,55,0.25)]
    hover:scale-[1.02]
    transition-all
  "
>
  Home
</button>
          {/* PROFILE */}
          <div className="flex flex-col items-center text-center">

            {/* IMAGE */}
            <div className="relative">

              <div className="w-24 h-24 rounded-full overflow-hidden border border-[#D4AF37]/30 shadow-[0_0_25px_rgba(212,175,55,0.25)]">

               {user?.image ? (
  <img
    src={user.image}
    alt="profile"
    className="w-full h-full object-cover"
  />
) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#F5E6B3] via-[#D4AF37] to-[#B8860B] text-black text-4xl font-black">
                    {user.name?.charAt(0)?.toUpperCase()}
                  </div>
                )}

              </div>

              {/* UPLOAD BUTTON */}
            

            </div>

            

            <h1 className="text-3xl font-bold mt-5">
              {user.name}
            </h1>

            <p className="text-zinc-400 text-sm mt-1">
              Premium Customer Account
            </p>

          </div>

          {/* INFO */}
          <div className="grid md:grid-cols-2 gap-4 mt-10">

            {[
              { label: "Phone", value: user.phone },
              { label: "Address", value: user.address },
              { label: "City", value: user.city },
              { label: "State", value: user.state },
              { label: "Age", value: user.age || "Not Provided" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-black/40 border border-[#D4AF37]/10 rounded-2xl p-4"
              >
                <p className="text-xs text-zinc-500">{item.label}</p>
                <p className="text-white mt-1">{item.value}</p>
              </div>
            ))}

          </div>

          {/* BUTTONS */}
          <div className="grid gap-4 mt-10">

            

            <button
              onClick={() => navigate("/profile-setup")}
              className="py-3 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black font-bold"
            >
              Edit Profile
            </button>

            <button
              onClick={() => navigate("/my-orders")}
              className="py-3 rounded-2xl bg-black/60 border border-[#D4AF37]/20"
            >
              My Orders
            </button>

            <button
              onClick={handleLogout}
              className="py-3 rounded-2xl bg-red-500/90 text-white font-bold"
            >
              Logout
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}