export default function OrderCard({ order, children }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        marginBottom: "10px",
        borderRadius: "8px",
      }}
    >
      <h4>Order ID: {order.id}</h4>

      <p>Total: ₹{order.totalPrice}</p>

      <p>Status: <b>{order.status}</b></p>


      {/* Items */}
      <div>
        {order.items?.map((item, i) => (
          <div key={i} style={{ display: "flex", gap: "10px" }}>
            <img src={item.image} width="50" />
            <p>
              {item.name} × {item.qty}
            </p>
          </div>
        ))}
      </div>

      {/* Extra Buttons (Admin/User use) */}
      <div style={{ marginTop: "10px" }}>
        {children}
      </div>
    </div>
  );
}