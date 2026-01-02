import "../styles/MyListingCard.css";

function MyListingCard({ item }) {
  return (
    <div className="my-listing-card">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>₹{item.price} / day</p>

      <div className="card-actions">
        <button>Edit</button>
        <button className="danger">Delete</button>
      </div>
    </div>
  );
}

export default MyListingCard;
