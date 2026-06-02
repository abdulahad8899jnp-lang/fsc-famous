import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Account() {
const navigate = useNavigate();
const [user, setUser] = useState(null);

useEffect(() => {
const userData = JSON.parse(
localStorage.getItem("user")
);


if (!userData) {
  navigate("/user-login");
  return;
}

setUser(userData);


}, [navigate]);

const handleLogout = () => {
  const confirmLogout = window.confirm(
    "Are you sure you want to logout?"
  );

  if (!confirmLogout) return;

  localStorage.removeItem("user");

  navigate("/");

  window.location.reload();
};

if (!user) {
return ( <div className="min-h-screen bg-black flex items-center justify-center text-white">
Loading... </div>
);
}

return ( <div className="min-h-screen bg-black text-white px-4 py-10 flex items-center justify-center ">
  
  <div className="w-full max-w-2xl bg-zinc-950 border border-yellow-500/20 rounded-3xl p-6 relative mt-5">

    {/* HOME BUTTON (TOP RIGHT) */}
   

    {/* PROFILE HEADER */}
    <div className="flex flex-col items-center mb-8 mt-6">

      <div className="w-24 h-24 rounded-full bg-yellow-400 text-black text-4xl font-bold flex items-center justify-center">
        {user.name?.charAt(0)?.toUpperCase()}
      </div>

      <h1 className="text-3xl font-bold mt-4">
        {user.name}
      </h1>

    </div>

    {/* USER INFO */}
    <div className="space-y-4">

      <div className="bg-zinc-900 p-4 rounded-xl">
        <p className="text-zinc-400">Phone</p>
        <p>{user.phone}</p>
      </div>

      <div className="bg-zinc-900 p-4 rounded-xl">
        <p className="text-zinc-400">Address</p>
        <p>{user.address}</p>
      </div>

      <div className="bg-zinc-900 p-4 rounded-xl">
        <p className="text-zinc-400">City</p>
        <p>{user.city}</p>
      </div>

      <div className="bg-zinc-900 p-4 rounded-xl">
        <p className="text-zinc-400">State</p>
        <p>{user.state}</p>
      </div>

      <div className="bg-zinc-900 p-4 rounded-xl">
        <p className="text-zinc-400">Age</p>
        <p>{user.age || "Not Provided"}</p>
      </div>

    </div>

    {/* ACTION BUTTONS */}
    <div className="grid gap-4 mt-8">
        <button
        onClick={() => navigate("/")}
        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 rounded-xl"
      >
        Home
      </button>
      <button
        onClick={() => navigate("/profile-setup")}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl"
      >
        Edit Profile
      </button>

      <button
        onClick={() => navigate("/my-orders")}
        className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-xl"
      >
        My Orders
      </button>

      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-xl"
      >
        Logout
      </button>

    </div>

  </div>
</div>);
}
