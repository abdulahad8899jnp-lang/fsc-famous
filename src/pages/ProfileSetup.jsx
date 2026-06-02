import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function ProfileSetup() {
const { state } = useLocation();
const navigate = useNavigate();

const savedUser = JSON.parse(
  localStorage.getItem("user")
);

const phone =
  state?.phone || savedUser?.phone;

const [name, setName] = useState("");
const [address, setAddress] = useState("");
const [age, setAge] = useState("");
const [city, setCity] = useState("");
const [stateName, setStateName] = useState("");

useEffect(() => {
  if (savedUser) {
    setName(savedUser.name || "");
    setAddress(savedUser.address || "");
    setAge(savedUser.age || "");
    setCity(savedUser.city || "");
    setStateName(savedUser.state || "");
  }
}, []);

const handleSave = async () => {
  if (!name || !address || !city || !stateName) {
    alert("Please fill all required fields");
    return;
  }

  try {
    const userData = {
      uid: phone,
      phone,
      name,
      address,
      age,
      city,
      state: stateName,
      role: "user",
    };

    await setDoc(
      doc(db, "users", phone),
      userData
    );

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    alert(
      savedUser
        ? "Profile Updated Successfully"
        : "Profile Created Successfully"
    );

    navigate("/account");
  } catch (err) {
    console.log(err);
    alert("Failed To Save Profile");
  }
};

if (!phone) {
return ( <div className="min-h-screen bg-black text-white flex items-center justify-center">
Invalid Access </div>
);
}

return ( <div className="min-h-screen flex items-center justify-center bg-black px-4"> <div className="w-full max-w-md bg-zinc-950 border border-yellow-500/20 rounded-3xl p-6 mt-15">

```
    <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">
      Complete Profile
    </h2>

    <div className="mb-4 text-zinc-400 text-center">
      {phone}
    </div>

    <input
      placeholder="Full Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-full mb-4 p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white"
    />

    <textarea
      placeholder="Full Address"
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      className="w-full mb-4 p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white"
    />

    <input
      placeholder="Age (Optional)"
      value={age}
      onChange={(e) => setAge(e.target.value)}
      className="w-full mb-4 p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white"
    />

    <input
      placeholder="City"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      className="w-full mb-4 p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white"
    />

    <input
      placeholder="State"
      value={stateName}
      onChange={(e) => setStateName(e.target.value)}
      className="w-full mb-6 p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white"
    />

    <button
      onClick={handleSave}
      className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-xl"
    >
      Save Profile
    </button>

  </div>
</div>


);
}
