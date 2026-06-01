import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("Login Success:", userCredential.user);

      alert("Login Successful!");

      navigate("/admin");
    } catch (err) {
      console.error("Firebase Error:", err);

      alert(
        `Error Code: ${err.code}\nError Message: ${err.message}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md bg-zinc-900 p-6 sm:p-8 rounded-2xl shadow-lg border border-zinc-800">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
          ADMIN LOGIN
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-xl bg-black border border-zinc-700 focus:border-yellow-400 outline-none"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 rounded-xl bg-black border border-zinc-700 focus:border-yellow-400 outline-none"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-300 transition"
        >
          {loading ? "Logging in..." : "LOGIN"}
        </button>

        <p className="text-center text-xs text-zinc-500 mt-4">
          Only Admin Access Allowed
        </p>
      </div>
    </div>
  );
}