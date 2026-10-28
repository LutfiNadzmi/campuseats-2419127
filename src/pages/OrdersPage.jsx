import { useCart } from "../hooks/useCart.js";

function OrdersPage() {
  const { orders } = useCart();

  if (orders.length === 0) {
    return <p className="muted">You have not placed any orders yet.</p>;
  }

  return (
    <section>
      <h2 className="section-title">My orders</h2>
      {orders.map((order) => (
        <article
          key={order.id}
          className="card"
          style={{ marginBottom: "1rem" }}
        >
          <h3>Order for {order.name}</h3>
          <p className="muted">
            {order.mahallah} · pickup {order.pickupTime} ·{" "}
            {new Date(order.placedAt).toLocaleString()}
          </p>
          <ul>
            {order.lines.map((line) => (
              <li key={line.item.id}>
                {line.qty} × {line.item.name}
                {line.note && (
                  <span className="muted"> · Note: {line.note}</span>
                )}
              </li>
            ))}
          </ul>
          <p>
            <strong>Total: RM {order.total.toFixed(2)}</strong>
          </p>
        </article>
      ))}
    </section>
  );
}

export default OrdersPage;
