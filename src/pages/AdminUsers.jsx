import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
const [loading, setLoading] = useState(true);
const [selectedUser, setSelectedUser] = useState(null);

const navigate = useNavigate();
  useEffect(() => {
  const fetchUsers = async () => {
  try {
    const snap = await getDocs(collection(db, "users"));

    const data = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setUsers(data);
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
  (u) =>
    u.name?.toLowerCase().includes(search.toLowerCase()) ||
    u.phone?.includes(search)
);
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this user?");
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "users", id));
      setUsers((prev) => prev.filter((u) => u.id !== id));
      alert("User deleted");
    } catch (err) {
      console.log(err);
      alert("Delete failed");
    }
  };
if (loading) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
  return (
    
<div className="min-h-screen bg-black text-white overflow-hidden">

  {/* BACKGROUND EFFECTS */}
  <div className="fixed inset-0 -z-10">
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[180px] rounded-full" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[180px] rounded-full" />
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

    {/* HEADER */}
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-8">

      <div>
        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
          Users Dashboard
        </h1>

        <p className="text-zinc-400 mt-2">
          Manage all registered users
        </p>
        <span className="inline-flex mt-3 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm">
  {users.length} Users
</span>
      </div>

      <button
        onClick={() => navigate("/admin")}
        className="
          h-12
          px-6
          rounded-2xl
          bg-zinc-900/80
          border
          border-zinc-800
          hover:border-yellow-500
          transition-all
        "
      >
        ← Go Back
      </button>

    </div>

    {/* STATS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

      <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-5">
        <p className="text-zinc-400 text-sm">Total Users</p>
        <h2 className="text-3xl font-bold text-yellow-400 mt-2">
          {users.length}
        </h2>
      </div>

      <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-5">
        <p className="text-zinc-400 text-sm">Active Users</p>
        <h2 className="text-3xl font-bold text-green-400 mt-2">
          {users.length}
        </h2>
      </div>

      <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-5">
        <p className="text-zinc-400 text-sm">Storage</p>
        <h2 className="text-3xl font-bold text-blue-400 mt-2">
          Firebase
        </h2>
      </div>

      <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-5">
        <p className="text-zinc-400 text-sm">Status</p>
        <h2 className="text-3xl font-bold text-purple-400 mt-2">
          Online
        </h2>
      </div>

    </div>

    {/* SEARCH */}
    <div className="relative mb-8">

    <input
  type="text"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  placeholder="Search by name or phone..."
  className="
    w-full
    bg-zinc-900/80
    border
    border-zinc-800
    rounded-3xl
    py-4
    pl-14
    pr-5
    outline-none
    focus:border-yellow-500
    transition-all
  "
/>

      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400">
        🔍
      </div>

    </div>

    {/* USERS GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

     {filteredUsers.map((u) => (
        <div
          key={u.id}
          className="
            group
            relative
            overflow-hidden
            rounded-[30px]
            border
            border-zinc-800
            bg-zinc-900/70
            shadow-[0_0_30px_rgba(234,179,8,0.08)]
            backdrop-blur-xl
            p-6
            hover:border-yellow-500/40
            hover:-translate-y-2
            transition-all
            duration-500
          "
        >

          {/* Hover Glow */}
        <div className="
  absolute
  inset-0
  opacity-0
  group-hover:opacity-100
  transition-all
  duration-500
  bg-gradient-to-r
  from-yellow-500/5
  via-transparent
  to-yellow-500/5
  pointer-events-none
" />

          {/* Status */}
          <div className="absolute top-5 right-5">
            <span className="
              px-3
              py-1
              rounded-full
              text-xs
              bg-green-500/20
              text-green-400
            ">
              Active
            </span>
          </div>

          {/* Avatar */}
          <div className="relative mb-5">

            <div className="
              absolute
              inset-0
              w-20
              h-20
              rounded-full
              bg-yellow-500
              blur-xl
              opacity-30
            " />

            <div
  className="
    relative
    w-20
    h-20
    rounded-full
    border-2
    border-yellow-500
    overflow-hidden
    bg-zinc-950
  "
>
  {u?.image ? (
    <img
      src={u.image}
      alt={u.name}
      className="w-full h-full object-cover"
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center text-3xl font-bold">
      {u?.name?.charAt(0)?.toUpperCase() || "U"}
    </div>
  )}
</div>

          </div>

          {/* INFO */}
          <div className="space-y-3">

            <h2 className="text-xl font-bold">
              {u.name || "No Name"}
            </h2>

            <div className="text-zinc-400">
              📱 {u.phone}
            </div>

            <div className="text-xs text-zinc-500 break-all">
              {u.id}
            </div>

            {u.loginAt && (
              <div className="text-xs text-green-400">
                Last Login:
                {" "}
                {new Date(
                  u.loginAt.seconds * 1000
                ).toLocaleString()}
              </div>
            )}

          </div>

          {/* ACTIONS */}
          <div className="flex gap-3 mt-6">

            <button
  onClick={() => setSelectedUser(u)}
  className="
    flex-1
    py-3
    rounded-xl
    bg-zinc-800
    hover:bg-zinc-700
    transition
  "
>
  View
</button>

            <button
              onClick={() => handleDelete(u.id)}
              className="
                flex-1
                py-3
                rounded-xl
                bg-gradient-to-r
                from-red-500
                to-red-600
                hover:scale-105
                transition
              "
            >
              Delete
            </button>

          </div>

        </div>
      ))}
      {filteredUsers.length === 0 && (
  <div className="col-span-full text-center py-20">
    <h2 className="text-2xl font-bold text-zinc-500">
      No Users Found
    </h2>
  </div>
)}

    </div>

  </div>
{selectedUser && (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">

    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 w-full max-w-md">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-yellow-400">
          User Details
        </h2>

        <button
          onClick={() => setSelectedUser(null)}
          className="text-zinc-400 hover:text-white text-xl"
        >
          ✕
        </button>
      </div>

      <div className="flex flex-col items-center">

        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center text-4xl font-bold text-black mb-4">
          {selectedUser.name?.charAt(0)?.toUpperCase() || "U"}
        </div>

        <h3 className="text-xl font-bold">
          {selectedUser.name || "No Name"}
        </h3>

        <p className="text-zinc-400 mt-2">
          📱 {selectedUser.phone || "No Phone"}
        </p>

        <p className="text-zinc-500 text-xs mt-3 break-all text-center">
          ID: {selectedUser.id}
        </p>

        {selectedUser.loginAt && (
          <p className="text-green-400 text-sm mt-3">
            Last Login:{" "}
            {new Date(
              selectedUser.loginAt.seconds * 1000
            ).toLocaleString()}
          </p>
        )}

      </div>

    </div>

  </div>
)}
</div>   
  );
} 
//<div className="min-h-screen bg-black text-white p-5">

//       {/* HEADER */}
//      <div className="flex items-center justify-between mb-6 mt-10 md:mt-0">

//   <h1 className="text-3xl font-bold text-yellow-400 ">
//     All Users
//   </h1>

//   <button
//     onClick={() => navigate("/admin")}
//     className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-xl border border-zinc-700"
//   >
//     ← Go Back
//   </button>

// </div>

//       {/* USERS LIST */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

//         {users.map((u) => (
//           <div
//             key={u.id}
//             className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-lg hover:border-yellow-500/40 transition"
//           >

//             {/* USER INFO */}
//             <div className="space-y-2">
//               <p className="text-lg font-semibold text-white">
//                 {u.name || "No Name"}
//               </p>

//               <p className="text-zinc-400">
//                 📱 {u.phone}
//               </p>

//               <p className="text-xs text-zinc-500 break-all">
//                 ID: {u.id}
//               </p>

//               {u.loginAt && (
//                 <p className="text-xs text-green-400">
//                   Last Login: {new Date(u.loginAt.seconds * 1000).toLocaleString()}
//                 </p>
//               )}
//             </div>

//             {/* DELETE BUTTON */}
//             <button
//               onClick={() => handleDelete(u.id)}
//               className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl font-semibold"
//             >
//               Delete User
//             </button>

//           </div>
//         ))}

//       </div>
//     </div>