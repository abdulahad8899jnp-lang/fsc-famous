import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

const navigate = useNavigate();
  useEffect(() => {
    const fetchUsers = async () => {
      const snap = await getDocs(collection(db, "users"));

      const data = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setUsers(data);
    };

    fetchUsers();
  }, []);

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

  return (
    <div className="min-h-screen bg-black text-white p-5">

      {/* HEADER */}
     <div className="flex items-center justify-between mb-6 mt-10 md:mt-0">

  <h1 className="text-3xl font-bold text-yellow-400 ">
    All Users
  </h1>

  <button
    onClick={() => navigate("/admin")}
    className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-xl border border-zinc-700"
  >
    ← Go Back
  </button>

</div>

      {/* USERS LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        {users.map((u) => (
          <div
            key={u.id}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-lg hover:border-yellow-500/40 transition"
          >

            {/* USER INFO */}
            <div className="space-y-2">
              <p className="text-lg font-semibold text-white">
                {u.name || "No Name"}
              </p>

              <p className="text-zinc-400">
                📱 {u.phone}
              </p>

              <p className="text-xs text-zinc-500 break-all">
                ID: {u.id}
              </p>

              {u.loginAt && (
                <p className="text-xs text-green-400">
                  Last Login: {new Date(u.loginAt.seconds * 1000).toLocaleString()}
                </p>
              )}
            </div>

            {/* DELETE BUTTON */}
            <button
              onClick={() => handleDelete(u.id)}
              className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl font-semibold"
            >
              Delete User
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}