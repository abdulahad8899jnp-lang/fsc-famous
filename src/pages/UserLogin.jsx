import emailjs from "emailjs-com";
import { useState } from "react";
import { db } from "../firebase/firebase";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {
  const [phone, setPhone] = useState("");
 
  const navigate = useNavigate();
const sendLoginEmail = async (phone, name) => {
  try {
    return await emailjs.send(
      "abdul_123",
      "template_6c95c0w",
      {
        type: "Existing User Login",
        name: name,
        phone: phone,
        time: new Date().toLocaleString(),
      },
      "ycHsafXcBA10pgpRz"
    );
  } catch (err) {
    console.error("Email Failed:", err);
  }
};
 const handleLogin = async () => {
  if (!/^[0-9]{10}$/.test(phone)) {
    alert("Phone must be 10 digits");
    return;
  }

  try {
    const userRef = doc(db, "users", phone);
    const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
  const userData = userSnap.data();

  localStorage.setItem("user", JSON.stringify(userData));
window.dispatchEvent(
  new Event("userUpdated")
);

  await setDoc(doc(db, "users", phone), {
    ...userData,
    loginAt: serverTimestamp(),
  });

  // Name + Phone email me bhejo
  await sendLoginEmail(phone, userData.name);

  alert("Login Successful");

  navigate("/account");
}else {
      navigate("/profile-setup", {
        state: { phone },
      });
    }
  } catch (err) {
    console.log(err);
    alert("Login Failed");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-zinc-950 border border-yellow-500/20 rounded-3xl p-6">

        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">
          User Login
        </h2>

        

        <input
          placeholder="Enter Phone Number"
          onChange={(e) => setPhone(e.target.value)}
          className="w-full mb-4 p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-xl"
        >
          Login
        </button>

      </div>
    </div>
  );
}