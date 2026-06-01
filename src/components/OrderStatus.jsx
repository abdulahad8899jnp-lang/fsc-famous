export default function OrderStatus({ status }) {
  const getColor = () => {
    switch (status) {
      case "pending":
        return "orange";
      case "processing":
        return "blue";
      case "shipped":
        return "purple";
      case "delivered":
        return "green";
      case "cancelled":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <span
      style={{
        padding: "5px 10px",
        background: getColor(),
        color: "white",
        borderRadius: "5px",
      }}
    >
      {status}
    </span>
  );
}