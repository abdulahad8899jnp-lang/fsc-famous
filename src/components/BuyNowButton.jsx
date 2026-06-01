import { useNavigate } from "react-router-dom";

export default function BuyNowButton({ product }) {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/checkout", {
      state: { product },
    });
  };

  return (
    <button
      onClick={handleBuyNow}
      style={{
        padding: "10px 15px",
        background: "green",
        color: "white",
        border: "none",
        cursor: "pointer",
      }}
    >
      Buy Now
    </button>
  );
}