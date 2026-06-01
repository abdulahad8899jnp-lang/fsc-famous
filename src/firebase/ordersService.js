import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";

/* =========================
   🛒 CREATE ORDER
========================= */
export const createOrder = async (orderData) => {
  return await addDoc(collection(db, "orders"), {
    ...orderData,
    status: "pending",
    createdAt: serverTimestamp(),
  });
};

/* =========================
   📦 GET ALL ORDERS (ADMIN)
========================= */
export const getAllOrders = async () => {
  const snap = await getDocs(collection(db, "orders"));
  return snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

/* =========================
   👤 GET USER ORDERS
========================= */
export const getUserOrders = async (userId) => {
  const q = query(
    collection(db, "orders"),
    where("userId", "==", userId)
  );

  const snap = await getDocs(q);

  return snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

/* =========================
   ❌ CANCEL ORDER
========================= */
export const cancelOrder = async (orderId) => {
  const ref = doc(db, "orders", orderId);

  return await updateDoc(ref, {
    status: "cancelled",
  });
};

/* =========================
   🚚 UPDATE ORDER STATUS (ADMIN)
========================= */
export const updateOrderStatus = async (orderId, status) => {
  const ref = doc(db, "orders", orderId);

  return await updateDoc(ref, {
    status,
  });
};

/* =========================
   🗑 DELETE ORDER (ADMIN)
========================= */
export const deleteOrder = async (orderId) => {
  const ref = doc(db, "orders", orderId);

  return await deleteDoc(ref);
};