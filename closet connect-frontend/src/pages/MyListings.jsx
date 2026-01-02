import Navbar from "../components/Navbar";
import MyListingCard from "../components/MyListingCard";
import EmptyState from "../components/EmptyState";
import "../styles/MyListings.css";

function MyListings() {
  // TEMP dummy data
  const listings = [];

  return (
    <>
      <Navbar />
      <div className="my-listings-container">
        {/* Header */}
        <div className="my-listings-header">
          <h1>My Listings</h1>
          <button className="add-btn">+ Add New Item</button>
        </div>

        {/* Stats */}
        <div className="stats-row">
          <div className="stat-card">
            <span className="stat-number">{listings.length}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">0</span>
            <span className="stat-label">Active</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">0</span>
            <span className="stat-label">Rented</span>
          </div>
        </div>

        {/* Listings */}
        {listings.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="listings-grid">
            {listings.map((item) => (
              <MyListingCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default MyListings;
