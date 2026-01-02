import "../styles/ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.title} />
        <button className="wishlist-btn">♡</button>
      </div>

      <div className="product-info">
        <h4>{product.title}</h4>
        <p className="price">₹{product.price} / day</p>
        <p className="location">{product.block}</p>

        <span className="tag">{product.clean}</span>
      </div>
    </div>
  );
}

export default ProductCard;
