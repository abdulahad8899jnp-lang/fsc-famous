
import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { auth,db, storage  } from "../firebase/firebase";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

export default function Admin() {

  // =========================
  // STATES
  // =========================
  const [editId, setEditId] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Sherwani");
  const [categoryOrder, setCategoryOrder] = useState(999);
  const [newCategory, setNewCategory] = useState("");
  const [rating, setRating] = useState("4.5");
  const [description, setDescription] = useState("");
  const [fabric, setFabric] = useState("");
  const [stock, setStock] = useState("");
  const [sizes, setSizes] = useState([]);
  const [customSize, setCustomSize] = useState("");
  const [products, setProducts] = useState([]);
  const [openCategory, setOpenCategory] = useState(null);
  const [customSizes, setCustomSizes] = useState([""]);
const [searchTerm, setSearchTerm] = useState("");
  const [variants, setVariants] = useState([
    {
      image: "",
      price: "",
      color: "",
      articleNo: "",
      size: "",
    },
  ]);


  const addCustomSizeField = () => {
  setCustomSizes([...customSizes, ""]);
};

const updateCustomSize = (index, value) => {
  const updated = [...customSizes];
  updated[index] = value;
  setCustomSizes(updated);
};

const removeCustomSize = (index) => {
  const updated = customSizes.filter(
    (_, i) => i !== index
  );
  setCustomSizes(updated);
};

  // =========================
  // CATEGORY OPTIONS
  // =========================
  const [categoryOptions, setCategoryOptions] = useState([
    { value: "Sherwani", label: "Sherwani" },
    { value: "Coat Pant", label: "Coat Pant" },
    { value: "Kurta", label: "Kurta" },
    { value: "Kurta-set", label: "Kurta Set" },
    { value: "Indo Western", label: "Indo Western" },
    { value: "Jodhpuri", label: "Jodhpuri" },
    { value: "Nagra", label: "Nagra" },
    { value: "Shawl-Set", label: "Shawl Set" },
    { value: "Mala", label: "Mala" },
  ]);


  const navigate = useNavigate();
  // =========================
  // FETCH PRODUCTS
  // =========================
  const fetchProducts = async () => {
    const snap = await getDocs(collection(db, "products"));
    setProducts(
      snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
  };

  const uploadImage = async (file, index) => {

  if (!file) return;

  try {

    const data = new FormData();

    data.append("file", file);

    data.append(
      "upload_preset",
      "products"
    );

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dralkl52u/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const uploadedImage =
      await res.json();

    const updated = [...variants];

    updated[index].image =
      uploadedImage.secure_url;

    setVariants(updated);

  } catch (error) {

    console.log(error);

  }
};

useEffect(() => {
  const unsub = onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigate("/admin/login");
    } else {
      const email = user.email?.trim().toLowerCase();

      if (email !== "abdul@gmail.com") {
        signOut(auth);
        navigate("/admin/login");
        return;
      }

      fetchProducts();
    }
  });

  return () => unsub();
}, []);

  // =========================
  // CAPITAL FUNCTION
  // =========================
  const capitalizeWords = (text) => {
    return text
      .toLowerCase()
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  // =========================
  // ADD CATEGORY
  // =========================
  const addCategory = () => {
    if (!newCategory) return;

    const formatted = capitalizeWords(newCategory);

    const exists = categoryOptions.some(
      (c) => c.value === formatted
    );

    if (!exists) {
      setCategoryOptions([
        ...categoryOptions,
        { value: formatted, label: formatted },
      ]);

      setCategory(formatted);
      setNewCategory("");
    }
  };

  // =========================
  // VARIANTS
  // =========================
  const addVariant = () => {
    setVariants([
      ...variants,
      {
        image: "",
        price: "",
        color: "",
        articleNo: "",
      },
    ]);
  };

  const removeVariant = (index) => {
    setVariants(variants.filter((_, i) => i !== index));
  };

  const updateVariant = (index, field, value) => {
    const updated = [...variants];
    updated[index][field] = value;
    setVariants(updated);
  };

  // =========================
  // EDIT
  // =========================
  const editProduct = (item) => {
    setEditId(item.id);
    setName(item.name || "");
    setCategory(item.category || "");
    setCategoryOrder(item.categoryOrder || 999);
    setRating(item.rating || "4.5");
    setDescription(item.description || "");
    setFabric(item.fabric || "");
    setStock(item.stock || "");
    setSizes(item.sizes || []);
    setVariants(item.variants || []);
    
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // =========================
  // SAVE PRODUCT
  // =========================
 const addProduct = async () => {

  if (
    !name ||
    !category ||
    !stock ||
    !fabric ||
    !description
  ) {
    alert("Please fill all product details");
    return;
  }

  if (sizes.length === 0) {
    alert("Please select at least one size");
    return;
  }

  for (let v of variants) {
    if (
      !v.image ||
      !v.price ||
      !v.color ||
      !v.articleNo
    ) {
      alert("Please fill all variant fields");
      return;
    }
  }

  const productData = {
    name,
    category,
    rating: Number(rating),
    description,
    fabric,
    stock,
categoryOrder,
   sizes: sizes.includes("Custom")
  ? [
      ...sizes.filter(
        (s) => s !== "Custom"
      ),
      ...customSizes.filter(
        (s) => s.trim() !== ""
      ),
    ]
  : sizes,

    variants: variants.map((v) => ({
      image: v.image,
      price: Number(v.price),
      color: v.color,
      articleNo: v.articleNo,
      size: v.size || "",
    })),

    createdAt: Date.now(),
  };

  if (editId) {
    await updateDoc(
      doc(db, "products", editId),
      productData
    );
  } else {
    await addDoc(
      collection(db, "products"),
      productData
    );
  }


  alert(
    editId
      ? "Product Updated Successfully"
      : "Product Added Successfully"
  );



  // RESET
  setEditId(null);
  setName("");
  setCategory("Sherwani");
  setRating("4.5");
  setDescription("");
  setFabric("");
  setStock("");
  setSizes([]);
  setCustomSize("");

  setVariants([
    {
      image: "",
      price: "",
      color: "",
      articleNo: "",
      size: "",
    },
  ]);

  fetchProducts();
  // Product save/update successful

setTimeout(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, 200);

};

const filteredProducts = products.filter((product) => {
  const search = searchTerm.toLowerCase();

  return (
    product.name?.toLowerCase().includes(search) ||
    product.category?.toLowerCase().includes(search) ||
    product.variants?.some(
      (v) =>
        v.articleNo?.toLowerCase().includes(search) ||
        v.color?.toLowerCase().includes(search)
    )
  );
});
  // =========================
  // DELETE
 const deleteProduct = async (id, productName) => {
  const confirmDelete = window.confirm(
    `Are you sure?\n\n"${productName}" product delete karna hai?`
  );

  if (!confirmDelete) return;

  await deleteDoc(doc(db, "products", id));

  alert("Product Deleted Successfully");

  fetchProducts();
};
 const deleteCategory = (value) => {
  if (!value) return;

  

  const isConfirmed = window.confirm(
    `"${value}" category delete karni hai?`
  );

  if (!isConfirmed) return;

  const updated = categoryOptions.filter(
    (cat) => cat.value !== value
  );

  setCategoryOptions(updated);

  setCategory(
    updated.length ? updated[0].value : ""
  );
};
const handleLogout = async () => {
  await signOut(auth);
  navigate("/admin/login");
};
  // =========================
  // UI
  // =========================
  return (
    
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-10 overflow-x-hidden">

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 mt-10 md:mt-8">

  <h1 className="text-3xl md:text-4xl font-bold text-yellow-400">
    ADMIN PANEL
  </h1>

  <div className="flex gap-3 flex-wrap">
      <button
  onClick={() => navigate("/admin/users")}
  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl"
>
  All Users
</button>
<button
  onClick={() => navigate("/admin/login")}
  className="
    fixed
    top-5
    left-5
    z-50
    px-4
    py-2
    rounded-xl
    bg-zinc-900/80
    border
    border-zinc-700
    text-white
    hover:border-yellow-500
    hover:text-yellow-400
    transition-all
  "
>
  ← Back
</button>
    <button
      onClick={() => navigate("/admin/orders")}
      className="
        bg-yellow-400
        hover:bg-yellow-300
        text-black
        px-5
        py-3
        rounded-2xl
        font-bold
        transition
      "
    >
      📦 Orders
    </button>

    <button
      onClick={handleLogout}
      className="
        bg-red-500
        hover:bg-red-600
        text-white
        px-5
        py-3
        rounded-2xl
        font-bold
        transition
      "
    >
      Logout
    </button>

  </div>

</div>
      

      {/* NAME */}
      <input
        placeholder="Product Name"
         required
        value={name}
        onChange={(e) =>
          setName(capitalizeWords(e.target.value))
        }
        className="w-full p-3 sm:p-4 mb-4 bg-zinc-900 rounded-2xl"
      />

      {/* CATEGORY */}
      {/* CATEGORY SELECT */}
<select
  value={category}
  onChange={(e) =>
    setCategory(capitalizeWords(e.target.value))
  }
  className="w-full p-3 sm:p-4 mb-4 bg-zinc-900 rounded-2xl text-white"
>
  {categoryOptions.map((c) => (
    <option key={c.value} value={c.value}>
      {c.label}
    </option>
  ))}
</select>

{/* ADD CATEGORY */}
<div className="flex flex-col sm:flex-row gap-3 mb-6">
  <input
    placeholder="Add Category"
    value={newCategory}
    onChange={(e) => setNewCategory(e.target.value)}
    className="w-full p-3 bg-zinc-900 rounded-2xl"
  />

  <button
    onClick={addCategory}
    className="bg-yellow-400 text-black px-5 py-3 rounded-2xl font-bold"
  >
    Add
  </button>
</div>

{/* CATEGORY LIST WITH DELETE */}
<div className="flex gap-3 mb-4 items-center">
  <div className="relative flex-1">
    <select
      value={category}
      onChange={(e) =>
        setCategory(capitalizeWords(e.target.value))
      }
      className="
        w-full
        appearance-none
        bg-gradient-to-r
        from-zinc-900
        to-zinc-800
        text-white
        px-5
        py-4
        pr-12
        rounded-2xl
        border
        border-red-500/50
        shadow-[0_0_20px_rgba(239,68,68,0.15)]
        focus:outline-none
        focus:border-red-400
        focus:shadow-[0_0_25px_rgba(239,68,68,0.3)]
        transition-all
        duration-300
        cursor-pointer
      "
    >
      {categoryOptions.map((c) => (
        <option
          key={c.value}
          value={c.value}
          className="bg-zinc-900"
        >
          {c.label}
        </option>
      ))}
    </select>

    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
      <svg
        className="w-5 h-5 text-red-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  </div>

  <button
    onClick={() => deleteCategory(category)}
    className="
      h-[56px]
      w-[56px]
      rounded-2xl
      bg-gradient-to-r
      from-red-500
      to-red-600
      hover:from-red-600
      hover:to-red-700
      shadow-[0_0_20px_rgba(239,68,68,0.35)]
      flex
      items-center
      justify-center
      transition-all
      duration-300
    "
  >
    <Trash2 size={20} className="text-white" />
  </button>
</div>

      {/* STOCK */}
      <select
        value={stock}
         required
        onChange={(e) => setStock(e.target.value)}
        className="w-full p-3 sm:p-4 mb-4 bg-zinc-900 rounded-2xl"
      >
        <option value="">Select Stock</option>
        <option>In Stock</option>
        <option>Out Of Stock</option>
        <option>Limited Stock</option>
        <option>Coming Soon</option>
      </select>

{/* FABRIC */}
<input
  placeholder="Fabric (e.g. Silk, Cotton)"
   required
  value={fabric}
  onChange={(e) =>
    setFabric(capitalizeWords(e.target.value))
  }
  className="w-full p-3 sm:p-4 mb-4 bg-zinc-900 rounded-2xl"
/>
      {/* SIZES */}
      <div className="mb-6">
        <p className="mb-3 font-bold">Select Sizes</p>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          {["34","36","38","40","42","44","Free Size","Custom"].map((size) => (
            <label
              key={size}
              className="flex items-center gap-2 bg-zinc-900 px-3 py-2 sm:px-4 sm:py-3 rounded-2xl"
            >
              <input
                type="checkbox"
                checked={sizes.includes(size)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSizes([...sizes, size]);
                  } else {
                    setSizes(sizes.filter((s) => s !== size));
                  }
                }}
              />
              {size}
            </label>
          ))}
        </div>

        {sizes.includes("Custom") && (
  <div className="mt-4 space-y-3">

    {customSizes.map((size, index) => (
      <div
        key={index}
        className="flex gap-2"
      >
        <input
          type="text"
          placeholder={`Custom Size ${index + 1}`}
          value={size}
          onChange={(e) =>
            updateCustomSize(
              index,
              e.target.value
            )
          }
          className="flex-1 p-3 bg-zinc-900 rounded-2xl"
        />

        {customSizes.length > 1 && (
          <button
            type="button"
            onClick={() =>
              removeCustomSize(index)
            }
            className="bg-red-500 px-4 rounded-xl"
          >
            ✕
          </button>
        )}
      </div>
    ))}

    <button
      type="button"
      onClick={addCustomSizeField}
      className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-bold"
    >
      + Add Size
    </button>

  </div>
)}
      </div>
      {/* RATING */}
<input
  type="number"
  min="1"
  max="5"
  step="0.1"
  placeholder="Rating (1 - 5)"
  value={rating}
  onChange={(e) => setRating(e.target.value)}
  className="w-full p-3 sm:p-4 mb-4 bg-zinc-900 rounded-2xl"
/>

      {/* DESCRIPTION */}
      <textarea
        placeholder="Description"
         required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-3 sm:p-4 mb-6 bg-zinc-900 rounded-2xl min-h-[120px]"
      />

      {/* VARIANTS */}
      <div className="mb-8">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">Variants</h2>

          <button
            onClick={addVariant}
            className="bg-yellow-400 text-black px-4 py-2 rounded-xl"
          >
            + Add
          </button>
        </div>

        {variants.map((v, i) => (
          <div key={i} className="bg-zinc-900 p-4 rounded-2xl mb-4">

            <div className="mb-2">
  <input
    type="file"
    accept="image/*"
     required
    onChange={(e) =>
      uploadImage(e.target.files[0], i)
    }
    className="w-full p-2 bg-zinc-800 rounded-xl"
  />

  {v.image && (
    <img
      src={v.image}
      className="w-24 h-24 object-cover mt-2 rounded-xl border border-zinc-700"
    />
  )}
</div>

           <input
  type="number"
   required
  placeholder="Price"
  value={v.price}
  onChange={(e) =>
    updateVariant(i, "price", e.target.value)
  }
  className="w-full p-2 bg-zinc-800 mb-2 rounded-xl"
/>

            <input
              placeholder="Color"
              value={v.color}
               required
              onChange={(e) =>
                updateVariant(i, "color", capitalizeWords(e.target.value))
              }
              className="w-full p-2 bg-zinc-800 mb-2 rounded-xl"
            />

            <input
              placeholder="Article No"
              value={v.articleNo}
               required
              onChange={(e) =>
                updateVariant(i, "articleNo", e.target.value)
              }
              className="w-full p-2 bg-zinc-800 mb-2 rounded-xl"
            />

            

            {variants.length > 1 && (
              <button
                onClick={() => removeVariant(i)}
                className="mt-3 bg-red-500 px-3 py-1 rounded-xl"
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>

      {/* SAVE */}
      <button
        onClick={addProduct}
          disabled={!name || !fabric || !description}
        className="w-full bg-yellow-400 text-black py-4 rounded-2xl font-bold mb-10"
      >
        {editId ? "UPDATE PRODUCT" : "SAVE PRODUCT"}
      </button>
<div className="mb-6">
  <input
    type="text"
    placeholder="Search by Product Name or Article No..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="
      w-full
      p-4
      bg-zinc-900
      border
      border-zinc-700
      rounded-2xl
      text-white
      placeholder:text-zinc-400
      focus:outline-none
      focus:border-yellow-400
    "
  />
</div>
      {/* PRODUCTS */}
      {/* PRODUCTS BY CATEGORY */}

<div className="space-y-4">

  {[
  ...new Set(
    filteredProducts.map((p) => p.category)
  ),
]
    .filter(Boolean)
    .map((cat) => (

      <div
        key={cat}
        className="bg-zinc-900 rounded-2xl overflow-hidden"
      >

        <button
          onClick={() =>
            setOpenCategory(
              openCategory === cat
                ? null
                : cat
            )
          }
          className="
            w-full
            px-5
            py-4
            flex
            justify-between
            items-center
            text-left
            font-bold
            text-yellow-400
          "
        >
          <span>{cat}</span>

          <span>
            {openCategory === cat
              ? "▲"
              : "▼"}
          </span>
        </button>

        {openCategory === cat && (

          <div className="p-4 border-t border-zinc-800 space-y-3">

           {filteredProducts
  .filter(
    (item) =>
      item.category === cat
  )
              .map((item) => (

                <div
                  key={item.id}
                  className="
                    bg-zinc-800
                    p-4
                    rounded-2xl
                    flex
                    flex-col
                    sm:flex-row
                    justify-between
                    gap-4
                  "
                >

                  <div className="flex gap-4">

                    <img
                      src={
                        item?.variants?.[0]
                          ?.image
                      }
                      className="
                        w-16
                        h-16
                        rounded-xl
                        object-cover
                      "
                    />

                    <div>
                      <h3 className="font-bold">
                        {item.name}
                      </h3>

                      <p className="text-green-400">
                        ₹
                        {
                          item?.variants?.[0]
                            ?.price
                        }
                      </p>
                    </div>

                  </div>

                  <div className="flex gap-2">

                    <button
                      onClick={() =>
                        editProduct(item)
                      }
                      className="
                        bg-blue-500
                        px-4
                        py-2
                        rounded-xl
                      "
                    >
                      Edit
                    </button>

                    <button
  onClick={() =>
    deleteProduct(item.id, item.name)
  }
  className="
    bg-red-500
    px-4
    py-2
    rounded-xl
  "
>
  Delete
</button>

                  </div>

                </div>

              ))}

          </div>

        )}

      </div>

    ))}

</div>
      
    </div>
    
  );
}

