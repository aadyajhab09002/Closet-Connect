import "../styles/EmptyState.css";

function EmptyState() {
  return (
    <div className="empty-state">
      <img
        src="https://illustrations.popsy.co/pink/shopping.svg"
        alt="empty"
      />
      <h2>No listings yet</h2>
      <p>
        List your first item to unlock renting and build trust in the community.
      </p>
      <button className="primary-btn">List an Item</button>
    </div>
  );
}

export default EmptyState;
