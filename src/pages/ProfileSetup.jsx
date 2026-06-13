import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import emailjs from "emailjs-com";
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
const [image, setImage] = useState(null);

useEffect(() => {
  if (savedUser) {
    setName(savedUser.name || "");
    setAddress(savedUser.address || "");
    setAge(savedUser.age || "");
    setCity(savedUser.city || "");
    setStateName(savedUser.state || "");
    setImage(savedUser?.image || null);
  }
}, []);
const handleImageChange = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onloadend = () => {
    setImage(reader.result);
  };

  reader.readAsDataURL(file);
};
const handleDeleteImage = () => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete your profile image?"
  );

  if (!confirmDelete) return;

  setImage(null);
};
const handleSave = async () => {
  if (!name || !address || !city || !stateName) {
    alert("Please fill all required fields");
    return;
  }

  try {
  const userData = {
  ...savedUser,

  uid: phone,
  phone,
  name,
  address,
  age,
  city,
  state: stateName,
  role: "user",
  image,
     
};

    await setDoc(
      doc(db, "users", phone),
      userData
    );
   await emailjs.send(
  "abdul_123",
  "template_6c95c0w",
  {
    type: "New User Registration",
    name,
    phone,
    time: new Date().toLocaleString(),
  },
  "ycHsafXcBA10pgpRz"
);

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );
    window.dispatchEvent(new Event("userUpdated"));

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

return ( <div className="min-h-screen bg-black flex items-center justify-center px-4 py-10 overflow-hidden">

  {/* Background Glow */}
  <div className="fixed inset-0 -z-10">
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[180px] rounded-full" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#B8860B]/10 blur-[180px] rounded-full" />
  </div>

  <div className="w-full max-w-2xl relative">

    {/* Glow Behind Card */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-[#B8860B]/10 blur-[120px]" />

    <div
      className="
      relative
      bg-[#111]
      border
      border-[#D4AF37]/20
      rounded-[40px]
      p-8
      md:p-10
      shadow-[0_0_40px_rgba(212,175,55,0.08)]
    "
    >

      {/* Header */}
      <div className="text-center mb-8">
<div className="relative w-fit mx-auto">

  {/* Profile Image */}
  <div className="w-24 h-24 rounded-full overflow-hidden border border-[#D4AF37]/30 shadow-[0_0_25px_rgba(212,175,55,0.25)]">
    {image ? (
      <img
        src={image}
        alt="profile"
        className="w-full h-full object-cover"
      />
    ) : (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#F5E6B3] via-[#D4AF37] to-[#B8860B] text-black text-4xl font-black">
        {name?.charAt(0)?.toUpperCase() || "U"}
      </div>
    )}
  </div>

  {/* Add / Edit Image */}
  <label className="absolute bottom-0 right-0 bg-black border border-[#D4AF37]/30 text-xs px-2 py-1 rounded-full cursor-pointer hover:bg-[#D4AF37] hover:text-black transition">
    ✏️
    <input
      type="file"
      accept="image/*"
      className="hidden"
      onChange={handleImageChange}
    />
  </label>

</div>

{/* Delete Button Below Image */}
{image && (
  <button
    type="button"
    onClick={handleDeleteImage}
   className="
  mt-3
  block
  mx-auto
  text-xs
  text-red-400
  hover:text-red-300
  transition
"
  >
    Delete Profile Image
  </button>
)}

        <h2 className="text-4xl font-bold text-white mt-5">
          Complete Profile
        </h2>

        <p className="text-zinc-400 mt-2">
          Update your personal information
        </p>

        <div className="mt-4 inline-flex px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-sm">
          {phone}
        </div>

      </div>

      {/* Form */}
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="
            bg-black/40
            border
            border-[#D4AF37]/10
            rounded-2xl
            p-4
            text-white
            outline-none
            focus:border-[#D4AF37]
            transition-all
          "
        />

        <input
          placeholder="Age (Optional)"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="
            bg-black/40
            border
            border-[#D4AF37]/10
            rounded-2xl
            p-4
            text-white
            outline-none
            focus:border-[#D4AF37]
            transition-all
          "
        />

        <input
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="
            bg-black/40
            border
            border-[#D4AF37]/10
            rounded-2xl
            p-4
            text-white
            outline-none
            focus:border-[#D4AF37]
            transition-all
          "
        />

        <select
  value={stateName}
  onChange={(e) => setStateName(e.target.value)}
  className="
    bg-black/40
    border
    border-[#D4AF37]/10
    rounded-2xl
    p-4
    text-white
    outline-none
    focus:border-[#D4AF37]
    transition-all
  "
>
  <option value="" className="bg-[#111]">
    Select State / Country
  </option>

  {/* Indian States */}
  <option value="Andhra Pradesh" className="bg-[#111]">Andhra Pradesh</option>
  <option value="Arunachal Pradesh" className="bg-[#111]">Arunachal Pradesh</option>
  <option value="Assam" className="bg-[#111]">Assam</option>
  <option value="Bihar" className="bg-[#111]">Bihar</option>
  <option value="Chhattisgarh" className="bg-[#111]">Chhattisgarh</option>
  <option value="Goa" className="bg-[#111]">Goa</option>
  <option value="Gujarat" className="bg-[#111]">Gujarat</option>
  <option value="Haryana" className="bg-[#111]">Haryana</option>
  <option value="Himachal Pradesh" className="bg-[#111]">Himachal Pradesh</option>
  <option value="Jharkhand" className="bg-[#111]">Jharkhand</option>
  <option value="Karnataka" className="bg-[#111]">Karnataka</option>
  <option value="Kerala" className="bg-[#111]">Kerala</option>
  <option value="Madhya Pradesh" className="bg-[#111]">Madhya Pradesh</option>
  <option value="Maharashtra" className="bg-[#111]">Maharashtra</option>
  <option value="Manipur" className="bg-[#111]">Manipur</option>
  <option value="Meghalaya" className="bg-[#111]">Meghalaya</option>
  <option value="Mizoram" className="bg-[#111]">Mizoram</option>
  <option value="Nagaland" className="bg-[#111]">Nagaland</option>
  <option value="Odisha" className="bg-[#111]">Odisha</option>
  <option value="Punjab" className="bg-[#111]">Punjab</option>
  <option value="Rajasthan" className="bg-[#111]">Rajasthan</option>
  <option value="Sikkim" className="bg-[#111]">Sikkim</option>
  <option value="Tamil Nadu" className="bg-[#111]">Tamil Nadu</option>
  <option value="Telangana" className="bg-[#111]">Telangana</option>
  <option value="Tripura" className="bg-[#111]">Tripura</option>
  <option value="Uttar Pradesh" className="bg-[#111]">Uttar Pradesh</option>
  <option value="Uttarakhand" className="bg-[#111]">Uttarakhand</option>
  <option value="West Bengal" className="bg-[#111]">West Bengal</option>

  {/* Union Territories */}
  <option value="Andaman and Nicobar Islands" className="bg-[#111]">
    Andaman and Nicobar Islands
  </option>
  <option value="Chandigarh" className="bg-[#111]">Chandigarh</option>
  <option value="Dadra and Nagar Haveli and Daman and Diu" className="bg-[#111]">
    Dadra and Nagar Haveli and Daman and Diu
  </option>
  <option value="Delhi" className="bg-[#111]">Delhi</option>
  <option value="Jammu and Kashmir" className="bg-[#111]">
    Jammu and Kashmir
  </option>
  <option value="Ladakh" className="bg-[#111]">Ladakh</option>
  <option value="Lakshadweep" className="bg-[#111]">Lakshadweep</option>
  <option value="Puducherry" className="bg-[#111]">Puducherry</option>

  {/* Other Country */}
  <option value="Other Country" className="bg-[#111]">
    🌍 Other Country
  </option>
</select>
{stateName === "Other Country" && (
  <input
    type="text"
    placeholder="Enter Country Name"
    className="
      mt-4
      bg-black/40
      border
      border-[#D4AF37]/10
      rounded-2xl
      p-4
      text-white
      outline-none
      focus:border-[#D4AF37]
      transition-all
    "
  />
)}

      </div>

      <textarea
        placeholder="Full Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="
          w-full
          mt-4
          bg-black/40
          border
          border-[#D4AF37]/10
          rounded-2xl
          p-4
          text-white
          outline-none
          focus:border-[#D4AF37]
          transition-all
          min-h-[120px]
        "
      />

      {/* Buttons */}
      <div className="grid md:grid-cols-2 gap-4 mt-8">

        <button
          onClick={() => navigate("/account")}
          className="
            py-4
            rounded-2xl
            bg-black/60
            border
            border-white/10
            hover:border-[#D4AF37]/30
            transition-all
            text-white
          "
        >
          Cancel
        </button>

        <button
          onClick={handleSave}
          className="
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-[#D4AF37]
            to-[#B8860B]
            text-black
            font-bold
            hover:scale-[1.02]
            transition-all
            shadow-[0_0_25px_rgba(212,175,55,0.25)]
          "
        >
          Save Profile
        </button>

      </div>

    </div>

  </div>

</div>
);
}
